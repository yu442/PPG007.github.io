# gRPC

## 引入 gRPC

`go get google.golang.org/grpc`。

## 一元 RPC

在 proto 文件编译后生成的代码中可以找到 proto 中 service 关键字定义的接口 interface：

```go
type LaptopServiceServer interface {
	CreateLaptop(context.Context, *CreateLaptopRequest) (*CreateLaptopResponse, error)
	mustEmbedUnimplementedLaptopServiceServer()
}
```

在生成的接口中存在一个对包外不可见的方法，同时这个生成的文件提供了一个结构体 `UnimplementedLaptopServiceServer` 实现了这个接口的所有方法，如果我们要在其他包中实现这个接口，就必须在包外的结构体中：

```go
type LaptopServer struct {
  // 自定义的接口，用来保存笔记本，这里直接保存在一个 map 中。
	LaptopStore LaptopStore
  // 自定义的接口，用来保存图片，这里保存在系统中指定的路径中。
	ImageStore  ImageStore
  // 匿名嵌套
	pb.UnimplementedLaptopServiceServer
  // 自定义接口，用来保存笔记本的评分，这里直接存在 map 中。
	RatingStore RatingStore
}
```

在上面的结构体上实现这个接口：

```go
func (server *LaptopServer) CreateLaptop(ctx context.Context, req *pb.CreateLaptopRequest) (*pb.CreateLaptopResponse, error) {
  // 获取请求中的 laptop 对象
	laptop := req.GetLaptop()
	log.Printf("receive a create-laptop request with id: %s", laptop.Id)
  // 如果传来的 laptop 的 id 大于 0 就对其进行验证。
	if len(laptop.Id) > 0 {
    // 使用 uuid 解析 id
		_, err := uuid.Parse(laptop.Id)
    // 如果出错就直接返回
		if err != nil {
			return nil, status.Errorf(codes.InvalidArgument, "laptop ID is not a valid UUID: %v", err)
		}
	} else {
    // 如果发来的 laptop 的 id 长度为 0，就生成一个随机 id 赋值给这个 laptop 对象。
		id, err := uuid.NewRandom()
    // 出错就返回。
		if err != nil {
			return nil, status.Errorf(codes.Internal, "cannot generate a new laptop ID: %v", err)
		}
		laptop.Id = id.String()
	}
  // 如果客户端终止了（Ctrl + C）就直接返回错误。
	if ctx.Err() == context.Canceled {
		log.Println("request canceled")
		return nil, status.Error(codes.Canceled, "request canceled")
	}
  // 如果客户端设置了超时且已经超时也返回错误。
	if ctx.Err() == context.DeadlineExceeded {
		log.Println("deadline exceeded")
		return nil, status.Error(codes.DeadlineExceeded, "deadling exceeded")
	}
  // 将这个 laptop 保存起来并对错误进行处理。
	err := server.LaptopStore.Save(laptop)
	if err != nil {
		s, ok := status.FromError(err)
		if !ok {
			return nil, status.Errorf(codes.Internal, "cannot save laptop to the store: %v", err)
		}
		return nil, status.Errorf(s.Code(), "cannot save laptop to the store: %v", err)
	}
	return &pb.CreateLaptopResponse{
		Id: laptop.Id,
	}, nil
}
```

服务端启动函数：

```go
func main() {
	port := flag.Int("port", 8080, "the server port")
	flag.Parse()
	log.Printf("start server on port %d\n", *port)
	laptopServer := service.NewLaptopServer(service.NewInMemoryLaptopStore())
  // 创建一个 grpc 服务器。
	grpcServer := grpc.NewServer()
  // 向这个 grpc 服务器注册一个服务。
	pb.RegisterLaptopServiceServer(grpcServer, laptopServer)
	address := fmt.Sprintf("0.0.0.0:%d", *port)
  // 定义监听。
	listener, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("cannot start server: %v\n", err)
	}
  // 启动 grpc 服务器。
	err = grpcServer.Serve(listener)
	if err != nil {
		log.Fatalf("cannot start server: %v\n", err)
	}
}
```

客户端启动函数：

```go
func main() {
	serverAddress := flag.String("address", "", "the server address")
	flag.Parse()
	log.Printf("dial server %s\n", *serverAddress)
  // 不使用 TLS 进行连接。
	conn, err := grpc.Dial(*serverAddress, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("cannot dial server: %v\n", err)
	}
  // 调用生成的方法生成指定服务的客户端。
	laptopClient := pb.NewLaptopServiceClient(conn)
  // 创建一个 laptop 对象。
	laptop := sample.NewLaptop()
  // 构建一个请求对象。
	req := &pb.CreateLaptopRequest{
		Laptop: laptop,
	}
  // 设置超时时间。
	ctx, cancelFunction := context.WithTimeout(context.Background(), time.Second * 5)
	defer cancelFunction()
  // 通过 client 调用方法
	res, err := laptopClient.CreateLaptop(ctx, req)
	if err !=nil {
		log.Fatalf("call createLaptop error: %v\n", err)
	}
	log.Printf("created laptop with id: %s\n", res.Id)
}
```

## 服务端流式 RPC

生成的接口：

```go
type LaptopServiceServer interface {
	CreateLaptop(context.Context, *CreateLaptopRequest) (*CreateLaptopResponse, error)
	SearchLaptop(*SearchLaptopRequest, LaptopService_SearchLaptopServer) error
	mustEmbedUnimplementedLaptopServiceServer()
}
```

实现这个接口：

```go
func (server *LaptopServer) SearchLaptop(request *pb.SearchLaptopRequest, stream pb.LaptopService_SearchLaptopServer) error {
  // 获取发送的 filter 对象。
	filter := request.GetFilter()
	log.Printf("receive a search-laptop request with filter: %v", filter)
  // 向自定义方法传入参数，context 用来进行取消和超时处理，filter 用来筛选，传入函数用来以流形式回复客户端，这个自定义方法循环遍历 map 中的每个元素，每遇到一个符合 filter 要求的就调用这个传入的函数发回客户端
	err := server.LaptopStore.Search(stream.Context(), filter, func(laptop *pb.Laptop) error {
		res := &pb.SearchLaptopResponse{Laptop: laptop}
    // 流调用 Send 方法发送。
		err := stream.Send(res)
		if err != nil {
			return err
		}
		log.Printf("sent laptop with id: %s", laptop.GetId())
		return nil
	})
	if err != nil {
		return status.Errorf(codes.Internal, "unexpected error: %v", err)
	}
	return nil
}
```

服务端、客户端启动函数不需要变化。

## 客户端流式 RPC

生成的接口：

```go
type LaptopServiceServer interface {
	CreateLaptop(context.Context, *CreateLaptopRequest) (*CreateLaptopResponse, error)
	SearchLaptop(*SearchLaptopRequest, LaptopService_SearchLaptopServer) error
	UploadImage(LaptopService_UploadImageServer) error
	mustEmbedUnimplementedLaptopServiceServer()
}
```

实现这个接口：

```go
func (server *LaptopServer) UploadImage(stream pb.LaptopService_UploadImageServer) error {
  // 调用 Recv() 方法获取客户端发来的请求，此请求包含 oneof
	req, err := stream.Recv()
	if err != nil {
		return logErr(status.Errorf(codes.Unknown, "cannot receive image info"))
	}
  // 接收第一轮请求，这一轮请求包含 laptop 的 ID 和图片的类型，后续请求只有二进制数组。
	laptopID := req.GetInfo().GetLaptopId()
	imageType := req.GetInfo().GetImageType()
	log.Printf("receive an upload-image request for laptop %s with image type %s", laptopID, imageType)
	laptop, err := server.LaptopStore.Find(laptopID)
	if err != nil {
		return logErr(status.Errorf(codes.Internal, "cannot find laptop: %v", err))
	}
	if laptop == nil {
		return logErr(status.Errorf(codes.NotFound, "laptop with ID: %s dosen't exist", laptopID))
	}
  // 创建缓冲区。
	imageData := bytes.Buffer{}
	imageSize := 0
  // 流式请求要循环接收。
	for {
		log.Println("waiting to receive more data")
		req, err := stream.Recv()
    // 如果到达流的末尾。
		if err == io.EOF {
			log.Println("no more data")
			break
		}
		if err != nil {
			return logErr(status.Errorf(codes.Unknown, "cannot receive chunk data: %v\n", err))
		}

		chunk := req.GetChunkData()
		size := len(chunk)
		log.Println("receive data with size:", size)
		imageSize += size
    // 限制大小。
		if imageSize > maxImageSize {
			return logErr(status.Errorf(codes.InvalidArgument, "image is too large: %d > %d\n", imageSize, maxImageSize))
		}
    // 写入缓冲区。
		_, err = imageData.Write(chunk)
		if err != nil {
			return logErr(status.Errorf(codes.Internal, "cannot write chunk data: %v", err))
		}
	}
	imageID, err := server.ImageStore.Save(laptopID, imageType, imageData)
	if err != nil {
		return logErr(status.Errorf(codes.Internal, "cannot save image to the store: %v", err))
	}
	res := &pb.UploadImageResponse{
		Id:   imageID,
		Size: uint32(imageSize),
	}
  // 发送并关闭流，将相应发送回客户端。
	err = stream.SendAndClose(res)
	if err != nil {
		return logErr(status.Errorf(codes.Unknown, "cannot send response: %v", err))
	}
	log.Printf("save image with id: %s, size: %d successfully\n", imageID, imageSize)
	return nil
}
```

服务端、客户端启动函数无变化。

## 双向流式 RPC

生成的接口：

```go
type LaptopServiceServer interface {
	CreateLaptop(context.Context, *CreateLaptopRequest) (*CreateLaptopResponse, error)
	SearchLaptop(*SearchLaptopRequest, LaptopService_SearchLaptopServer) error
	UploadImage(LaptopService_UploadImageServer) error
	RateLaptop(LaptopService_RateLaptopServer) error
	mustEmbedUnimplementedLaptopServiceServer()
}
```

实现这个接口：

```go
func (server *LaptopServer) RateLaptop(stream pb.LaptopService_RateLaptopServer) error {
	for {
    // 获取 context 错误并进行超时和取消判断。
		err := stream.Context().Err()
		if err == context.Canceled {
			return logErr(status.Error(codes.Canceled, "request canceled"))
		}
		if err == context.DeadlineExceeded {
			return logErr(status.Error(codes.DeadlineExceeded, "deadline exceeded"))
		}
		if err != nil {
			return logErr(status.Errorf(codes.Unknown, "unknown error: %v", err))
		}
    // 接收客户端发来的请求。
		req, err := stream.Recv()
    // 如果到达流的末尾就退出循环。
		if err == io.EOF {
			log.Println("no more data")
			break
		}
		if err != nil {
			return logErr(status.Errorf(codes.Unknown, "cannot receive stream request: %v", err))
		}
		laptopID := req.GetLaptopId()
		score := req.GetScore()
		log.Printf("receive a rate-laptop request with laptopID: %s and score: %f\n", laptopID, score)
		laptop, err := server.LaptopStore.Find(laptopID)
		if err != nil {
			return logErr(err)
		}
		if laptop == nil {
			return logErr(status.Errorf(codes.NotFound, "cannot find laptop with ID: %s", laptopID))
		}
		rating, err := server.RatingStore.Add(laptopID, score)
		if err != nil {
			return logErr(status.Errorf(codes.Internal, "cannot add rating: %v", err))
		}
		res := &pb.RateLaptopResponse{
			LaptopId:     laptopID,
			RatedCount:   rating.Count,
			AverageScore: rating.Sum / float64(rating.Count),
		}
    // 每轮请求都有返回值所以直接 Send
		err = stream.Send(res)
		if err != nil {
			return logErr(status.Errorf(codes.Unknown, "cannot send response: %v", err))
		}
	}
	return nil
}
```

客户端、服务端启动函数没有变化。

## metadata、interceptor、JWT

设计思想：设计一个登录接口，登录成功后返回 token，客户端使用拦截器在出站请求的 metadata 中添加 token，服务端通过拦截器判断是否需要拦截或者需要的角色，并对 token 进行合法校验和权限判断。

生成的接口：

```go
type AuthServiceServer interface {
	Login(context.Context, *LoginRequest) (*LoginResponse, error)
  // 同样需要嵌套。
	mustEmbedUnimplementedAuthServiceServer()
}
```

实现这个接口：

```go
type AuthServer struct {
	userStore  UserStore
	jwtManager JWTManager
	pb.UnimplementedAuthServiceServer
}
func (authServer *AuthServer) Login(ctx context.Context, req *pb.LoginRequest) (*pb.LoginResponse, error) {
	user, err := authServer.userStore.Find(req.Username)
	if err != nil {
		return nil, err
	}
  // 此处是将传来的密码进行 hash，与正确密码的 hash 比较得出。
	if !user.IsCorrectPassword(req.Password) {
		return nil, status.Errorf(codes.NotFound, "incorrect password", req.Username)
	}
  // 如果信息正确就返回。
	token, err := authServer.jwtManager.GenerateToken(user)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "cannot generate token")
	}
	return &pb.LoginResponse{
		AccessToken: token,
	}, nil
}
```

grpc/server.go 中定义了两个方法如下：

```go
func UnaryInterceptor(i UnaryServerInterceptor) ServerOption
func StreamInterceptor(i StreamServerInterceptor) ServerOption
```

这两个方法的返回值为 ServerOption 类型，将这个类型对象传入 gRPC server 构造方法中可以实现添加拦截器，这两个函数的参数定义在 grpc/interceptor.go 中：

```go
type UnaryServerInterceptor func(ctx context.Context, req interface{}, info *UnaryServerInfo, handler UnaryHandler) (resp interface{}, err error)
type StreamServerInterceptor func(srv interface{}, ss ServerStream, info *StreamServerInfo, handler StreamHandler) error
```

因此，自定义拦截器只要分别定义两个方法，分别返回这两种类型的返回值，再将这个返回值传入 gRPC server 构造函数中即可。

实现：

```go
type AuthInterceptor struct {
	jwtManager      *JWTManager
	accessibleRoles map[string][]string // 键为方法名，值为允许访问的角色列表。
}

func (interceptor *AuthInterceptor) Unary() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {
		log.Println("--> unary interceptor:", info.FullMethod)
		err = interceptor.authorize(ctx, info.FullMethod)
		if err != nil {
			return nil, err
		}
		return handler(ctx, req)
	}
}

func (interceptor *AuthInterceptor) Stream() grpc.StreamServerInterceptor {
	return func(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		log.Println("--> stream interceptor:", info.FullMethod)
		err := interceptor.authorize(ss.Context(), info.FullMethod)
		if err != nil {
			return err
		}
		return handler(srv, ss)
	}
}
func (interceptor *AuthInterceptor) authorize(ctx context.Context, fullMethod string) error {
	accessibleRoles := interceptor.accessibleRoles[fullMethod]
  // 如果没有可以访问的角色列表，那么就是不设限制。
	if accessibleRoles == nil {
		return nil
	}
  // 从 context 中获取 metadata map[string][]string
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return status.Errorf(codes.DataLoss, "need metadata")
	}
  // 用约定好的键取出值。
	values := md["authorization"]
	if len(values) == 0 {
		return status.Errorf(codes.DataLoss, "need authorization token")
	}
  // 约定数组只有一个元素就是 token。
	accessToken := values[0]
  // 验证 token。
	claims, err := interceptor.jwtManager.Verify(accessToken)
	if err != nil {
		return status.Errorf(codes.InvalidArgument, "access token is invalid: %v", err)
	}
	if contains(accessibleRoles, claims.Role) {
		return nil
	}
	return status.Errorf(codes.PermissionDenied, "no permission to call %s", fullMethod)
}
```

服务端启动函数：

```go
grpcServer := grpc.NewServer(
  grpc.UnaryInterceptor(authInterceptor.Unary()),
  grpc.StreamInterceptor(authInterceptor.Stream()),
)
```

定义客户端拦截器：

```go
type AuthInterceptor struct {
	authClient  *AuthClient // 另一个自定义结构体，用来通过用户名密码获取 access token。
	authMethods map[string]bool // 键为方法名，值为布尔，表示是否需要 token。
	accessToken string
}

// 这里两个函数的返回值也是函数，函数签名与服务端拦截器在同一个文件：grpc/interceptor.go 中。
func (authInterceptor *AuthInterceptor) Unary() grpc.UnaryClientInterceptor {
	return func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
		log.Printf("--> unary interceptor: %s", method)
    // 如果需要认证。
		if authInterceptor.authMethods[method] {
      // 为 context 添加 token，然后将请求返回
			return invoker(authInterceptor.attachToken(ctx), method, req, reply, cc, opts...)
		}
		return invoker(ctx, method, req, reply, cc, opts...)
	}
}

func (authInterceptor *AuthInterceptor) Stream() grpc.StreamClientInterceptor {
	return func(ctx context.Context, desc *grpc.StreamDesc, cc *grpc.ClientConn, method string, streamer grpc.Streamer, opts ...grpc.CallOption) (grpc.ClientStream, error) {
		log.Printf("--> stream interceptor: %s", method)
		if authInterceptor.authMethods[method] {
      // 为 context 添加 token，然后将请求返回
			return streamer(authInterceptor.attachToken(ctx), desc, cc, method, opts...)
		}
		return streamer(ctx, desc, cc, method, opts...)
	}
}

func (authInterceptor *AuthInterceptor) attachToken(ctx context.Context) context.Context {
  // 这里的键要和服务端取出的键一致。
	return metadata.AppendToOutgoingContext(ctx, "authorization", authInterceptor.accessToken)
}
```

由于 token 存在有效期，所以在客户端拦截器上定义一个定时刷新 token 的方法：

```go
func (authInterceptor *AuthInterceptor) refreshToken() error {
	accessToken, err := authInterceptor.authClient.Login()
	if err != nil {
		return err
	}
	authInterceptor.accessToken = accessToken
	return nil
}

func (authInterceptor *AuthInterceptor) scheduleRefreshToken(refreshDuration time.Duration) error {
  // 第一次执行先尝试获取 token，如果失败则直接结束。
	err := authInterceptor.refreshToken()
	if err != nil {
		return err
	}
	go func() {
		wait := refreshDuration
		for {
			time.Sleep(wait)
			err := authInterceptor.refreshToken()
			if err != nil {
        // 如果失败了就短时间内重新尝试。
				wait = time.Second
			} else {
				wait = refreshDuration
			}
		}
	}()
	return nil
}
```

客户端启动函数：

```go
// 因为客户端拦截器成员中有一个 access token，所以客户端先使用不带拦截器的 grpc 连接到服务端并进行登录获取 token，获取 token 后创建出拦截器再新建带有拦截器的 grpc 连接。
conn, err := grpc.Dial(*serverAddress, grpc.WithUnaryInterceptor(interceptor.Unary()), grpc.WithStreamInterceptor(interceptor.Stream()))
```

## SSL TLS

流程：服务端具有一个公钥和一个私钥，首先服务端创建证书签名 CSR，其中包含服务端的公钥和一些身份信息，然后服务端使用私钥签署了 CSR 并发送给 CA，CA 使用服务端的公钥验证 CSR 签名，这样就验证了一对对应的私钥和公钥，之后（此时证书应该不是被服务单私钥加密的状态） CA 使用自己的私钥在证书上签名然后返回给服务端，服务端与客户端共享这个证书，客户端可以使用 CA 的公钥对证书进行验证并获取到服务端的公钥。

首先使用 OpenSSL 生成 CA 密钥和证书、服务端密钥和证书、客户端密钥和证书：

```sh
# 1. Generate CA's private key and self-signed certificate
openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca-key.pem -out ca-cert.pem -subj "/C=CN/ST=ShanDong/L=QingDao/O=company/OU=demo/CN=koston/emailAddress=koston.zhuang@demo.com"

# 2. Generate web server's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=CN/ST=ShanDong/L=QingDao/O=company/OU=demo/CN=koston/emailAddress=koston.zhuang@demo.com"

# 3. Use CA's private key to sign web server's CSR and get back the signed certificate
openssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile server-ext.cnf

# 4. Generate client's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout client-key.pem -out client-req.pem -subj "/C=CN/ST=ShanDong/L=QingDao/O=company/OU=demo/CN=koston/emailAddress=koston.zhuang@demo.com"

# 5. Use CA's private key to sign client's CSR and get back the signed certificate
openssl x509 -req -in client-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out client-cert.pem -extfile client-ext.cnf
```

### 服务端认证

修改服务端启动函数：

```go
func loadTLSCredentials() (credentials.TransportCredentials, error) {
	serverCert, err := tls.LoadX509KeyPair("ssl/server-cert.pem", "ssl/server-key.pem")
	if err != nil {
		return nil, err
	}
	config := &tls.Config{
		Certificates: []tls.Certificate{serverCert},
		ClientAuth: tls.NoClientCert,
	}
	return credentials.NewTLS(config), nil
}
// main 函数中
tlsCredentials, err := loadTLSCredentials()
if err != nil {
	log.Fatalln("cannot load TLS credentials:", err)
}
grpcServer := grpc.NewServer(
	grpc.Creds(tlsCredentials),
	grpc.UnaryInterceptor(authInterceptor.Unary()),
	grpc.StreamInterceptor(authInterceptor.Stream()),
)
```

修改客户端启动函数：

```go
func loadTLSCredentials() (credentials.TransportCredentials, error) {
	pemServerCA, err := ioutil.ReadFile("ssl/ca-cert.pem")
	if err != nil {
		return nil, err
	}
	certPool := x509.NewCertPool()
	if !certPool.AppendCertsFromPEM(pemServerCA) {
		return nil, fmt.Errorf("failed to add server CA's certificate")
	}
	config := &tls.Config{
		RootCAs: certPool,
	}
	return credentials.NewTLS(config), nil
}
tlsCredentials, err := loadTLSCredentials()
if err != nil {
	log.Fatalln("cannot load TLS credentials:", err)
}
conn, err := grpc.Dial(*serverAddress, grpc.WithTransportCredentials(tlsCredentials))
```

### 双端认证

修改服务端启动函数：

```go
func loadTLSCredentials() (credentials.TransportCredentials, error) {
	serverCert, err := tls.LoadX509KeyPair("ssl/server-cert.pem", "ssl/server-key.pem")
	if err != nil {
		return nil, err
	}
  // 这里添加 CA 相关。
	pemClientCA, err := ioutil.ReadFile("ssl/ca-cert.pem")
	if err != nil {
		return nil, err
	}
	certPool := x509.NewCertPool()
	if !certPool.AppendCertsFromPEM(pemClientCA) {
		return nil, fmt.Errorf("failed to add client CA's certificate")
	}
	config := &tls.Config{
    // 结构体内成员修改。
		Certificates: []tls.Certificate{serverCert},
		ClientAuth: tls.RequireAndVerifyClientCert,
		ClientCAs: certPool,
	}
	return credentials.NewTLS(config), nil
}
```

修改客户端启动函数：

```go
func loadTLSCredentials() (credentials.TransportCredentials, error) {
	pemServerCA, err := ioutil.ReadFile("ssl/ca-cert.pem")
	if err != nil {
		return nil, err
	}
	certPool := x509.NewCertPool()
	if !certPool.AppendCertsFromPEM(pemServerCA) {
		return nil, fmt.Errorf("failed to add server CA's certificate")
	}
  // 修改，添加客户端证书、密钥。
	clientCert, err := tls.LoadX509KeyPair("ssl/client-cert.pem", "ssl/client-key.pem")
	if err != nil {
		return nil, err
	}
	config := &tls.Config{
    // 修改
		Certificates: []tls.Certificate{clientCert},
		RootCAs: certPool,
	}
	return credentials.NewTLS(config), nil
}
```

## Load Balance

TODO

[video](https://www.bilibili.com/video/BV1Xv411t7h5)

## gRPC Gateway