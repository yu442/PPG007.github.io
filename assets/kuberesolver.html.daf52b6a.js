import{_ as t,r as e,o,c,a as s,d as l,F as u,e as a,b as n}from"./app.269ed0ef.js";const r={},i=a(`<h1 id="kuberesolver" tabindex="-1"><a class="header-anchor" href="#kuberesolver" aria-hidden="true">#</a> kuberesolver</h1><p>Kubernetes \u4E2D\uFF0C\u4EE5 Service \u90E8\u7F72\u7684 gRPC \u670D\u52A1\u4E4B\u95F4\u4E92\u76F8\u8C03\u7528\u65F6\uFF0C\u5982\u679C\u53EA\u662F\u4F7F\u7528\u670D\u52A1\u7684\u57DF\u540D\u5F62\u5F0F\u8FDB\u884C\u4E92\u76F8\u8BBF\u95EE\uFF0C\u5982\u679C clientConnect \u6BCF\u6B21\u4E0D\u91CD\u7F6E\uFF0C\u5219\u6240\u6709\u7684 gRPC \u8BF7\u6C42\u90FD\u4F1A\u8FDB\u5165\u4E00\u4E2A gRPC \u5B9E\u4F8B\u4E2D\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	cc <span class="token operator">*</span>grpc<span class="token punctuation">.</span>ClientConn
	err <span class="token builtin">error</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cc<span class="token punctuation">,</span> err <span class="token operator">=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;grpc-server-service:8000&quot;</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>insecure<span class="token punctuation">.</span><span class="token function">NewCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/getResponse&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> r<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		values<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">getResps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
		w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;0.0.0.0:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getResps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	values <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	s <span class="token operator">:=</span> proto<span class="token punctuation">.</span><span class="token function">NewDemoServiceClient</span><span class="token punctuation">(</span>cc<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Demo</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>Empty<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
		<span class="token punctuation">}</span>
		m<span class="token punctuation">[</span>resp<span class="token punctuation">.</span>Value<span class="token punctuation">]</span> <span class="token operator">=</span> resp<span class="token punctuation">.</span>Value
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
		values <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> values<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0CclientConnect \u53EA\u6709\u5728 init \u4E2D\u624D\u521D\u59CB\u5316\u4E86\u4E00\u6B21\uFF0C\u540E\u7EED\u4E0D\u518D\u6539\u53D8\uFF0C\u8C03\u7528\u8FD9\u4E2A http \u63A5\u53E3\u53D1\u73B0\u8FD4\u56DE\u503C\u552F\u4E00\uFF0C\u8BF4\u660E\u6CA1\u6709\u8D1F\u8F7D\u5747\u8861\u3002</p>`,4),k=n("\u4F7F\u7528 "),b={href:"https://github.com/sercand/kuberesolver",target:"_blank",rel:"noopener noreferrer"},m=n("Kuberesolver"),d=n(" \u53EF\u4EE5\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861\uFF0C\u5E76\u4E14\u53EF\u4EE5\u76D1\u63A7\u670D\u52A1\u8282\u70B9\u7684\u52A8\u6001\u4E0A\u4E0B\u7EBF\u3002"),g=a(`<p>\u56E0\u4E3A kuberesolver \u9700\u8981\u8C03\u7528 Kubernetes \u7684 API\uFF0C\u56E0\u6B64\u9996\u5148\u9700\u8981\u4E3A\u4F7F\u7528\u4E86 kuberesolver \u7684 gRPC \u5BA2\u6237\u7AEF\u6240\u5728\u7684 Pods \u6DFB\u52A0 ServiceAccount \u53CA Role\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kuberesolver
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kuberesolver<span class="token punctuation">-</span>role
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;endpoints&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pods&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kuberesolver<span class="token punctuation">-</span>rolebinding
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kuberesolver
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kuberesolver<span class="token punctuation">-</span>role
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u5C06\u4E0A\u9762\u5BF9\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 namespace \u4FEE\u6539\u4E3A gRPC server \u6240\u5728\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ClusterRole \u66FF\u4EE3 Role\u3002</p><p>\u7136\u540E\u4FEE\u6539\u5BA2\u6237\u7AEF\u542F\u52A8\u51FD\u6570\uFF0C\u9996\u5148\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get github.com/sercand/kuberesolver/v3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u5BA2\u6237\u7AEF\u8FDE\u63A5\u51FD\u6570\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	kuberesolver<span class="token punctuation">.</span><span class="token function">RegisterInCluster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	cc<span class="token punctuation">,</span> err <span class="token operator">=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithBalancerName</span><span class="token punctuation">(</span>roundrobin<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>insecure<span class="token punctuation">.</span><span class="token function">NewCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5176\u4E2D endpoint \u683C\u5F0F\u4E3A\uFF1A<code>kubernetes:///&lt;service.name&gt;.&lt;namespace&gt;:targetPort</code>\uFF0C\u7AEF\u53E3\u53F7\u662F gRPC server \u5728\u5BB9\u5668\u4E2D\u66B4\u9732\u7684\u7AEF\u53E3\u53F7\uFF0C\u4E0D\u662F gRPC server \u7684 Kubernetes Service \u7684\u7AEF\u53E3\u53F7\u3002</p>`,8);function v(y,f){const p=e("ExternalLinkIcon");return o(),c(u,null,[i,s("p",null,[k,s("a",b,[m,l(p)]),d]),g],64)}var w=t(r,[["render",v]]);export{w as default};
