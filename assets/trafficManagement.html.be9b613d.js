import{_ as p,r as t,o as l,c,a as s,d as r,F as u,e as a,b as n}from"./app.269ed0ef.js";const o={},i=a(`<h1 id="\u6D41\u91CF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6D41\u91CF\u7BA1\u7406" aria-hidden="true">#</a> \u6D41\u91CF\u7BA1\u7406</h1><p>\u6D41\u91CF\u7BA1\u7406\u6307\u7684\u662F\uFF1A</p><ul><li>\u63A7\u5236\u670D\u52A1\u4E4B\u95F4\u7684\u8DEF\u7531\uFF1A\u901A\u8FC7\u5728 VirtualService \u4E2D\u7684\u89C4\u5219\u6761\u4EF6\u5339\u914D\u6765\u8BBE\u7F6E\u8DEF\u7531\uFF0C\u53EF\u4EE5\u518D\u670D\u52A1\u95F4\u62C6\u5206\u6D41\u91CF\u3002</li><li>\u63A7\u5236\u8DEF\u7531\u4E0A\u6D41\u91CF\u7684\u884C\u4E3A\uFF1A\u8BBE\u5B9A\u597D\u8DEF\u7531\u4E4B\u540E\u5C31\u53EF\u4EE5\u5728\u8DEF\u7531\u4E0A\u6307\u5B9A\u8D85\u65F6\u548C\u91CD\u8BD5\u673A\u5236\u3002</li><li>\u663E\u5F0F\u5730\u5411\u7F51\u683C\u4E2D\u6CE8\u518C\u670D\u52A1\uFF1A\u663E\u5F0F\u5730\u5F15\u5165 Service Mesh \u5185\u90E8\u6216\u5916\u90E8\u7684\u670D\u52A1\uFF0C\u7EB3\u5165\u670D\u52A1\u7F51\u683C\u7BA1\u7406\uFF0C\u7531 ServiceEntry \u5B9E\u73B0\u3002</li><li>\u63A7\u5236\u7F51\u683C\u8FB9\u7F18\u7684\u5357\u5317\u5411\u6D41\u91CF\uFF1A\u4E3A\u4E86\u7BA1\u7406\u8FDB\u5165 Istio Service Mesh \u7684\u5357\u5317\u5411\u5165\u53E3\u6D41\u91CF\uFF0C\u9700\u8981\u521B\u5EFA Gateway \u5BF9\u8C61\u5E76\u4E0E VirtualService \u7ED1\u5B9A\u3002</li></ul><h2 id="virtualservice" tabindex="-1"><a class="header-anchor" href="#virtualservice" aria-hidden="true">#</a> VirtualService</h2><p>VirtualService \u4E2D\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u9488\u5BF9\u6307\u5B9A\u670D\u52A1\u7684\u6D41\u91CF\u8DEF\u7531\u89C4\u5219\u3002\u6BCF\u4E2A\u8DEF\u7531\u89C4\u5219\u90FD\u662F\u9488\u5BF9\u7279\u5B9A\u534F\u8BAE\u7684\u5339\u914D\u89C4\u5219\u3002\u5982\u679C\u6D41\u91CF\u7B26\u5408\u8FD9\u4E9B\u7279\u5F81\uFF0C\u5C31\u4F1A\u6839\u636E\u89C4\u5219\u53D1\u9001\u5230\u670D\u52A1\u6CE8\u518C\u8868\u4E2D\u7684\u76EE\u6807\u670D\u52A1\uFF08\u6216\u8005\u76EE\u6807\u670D\u52A1\u7684\u5B50\u96C6\u6216\u7248\u672C\uFF09\u3002</p><p>\u865A\u62DF\u670D\u52A1\u5141\u8BB8\u5C06\u8DEF\u7531\u76EE\u6807\u8BBE\u4E3A\u4E0D\u540C\u7684\u670D\u52A1\u6216\u540C\u4E00\u670D\u52A1\u7684\u4E0D\u540C\u7248\u672C\u3002</p><p>\u865A\u62DF\u670D\u52A1\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> reviews
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> reviews
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">headers</span><span class="token punctuation">:</span>
        <span class="token key atrule">end-user</span><span class="token punctuation">:</span>
          <span class="token key atrule">exact</span><span class="token punctuation">:</span> jason
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> reviews
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v2
  <span class="token punctuation">-</span> <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> reviews
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,8),k=n("\u6240\u6709\u914D\u7F6E\u9879\u53C2\u8003"),b={href:"https://istio.io/latest/zh/docs/reference/config/networking/virtual-service/#Destination",target:"_blank",rel:"noopener noreferrer"},m=n("VirtualService"),y=n("\u3002"),d=a(`<h3 id="hosts-\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#hosts-\u5B57\u6BB5" aria-hidden="true">#</a> hosts \u5B57\u6BB5</h3><p>\u6D41\u91CF\u7684\u76EE\u6807\u4E3B\u673A\uFF0C\u53EF\u4EE5\u4F7F\u5E26\u6709\u901A\u914D\u7B26\u524D\u7F00\u7684 DNS \u540D\u79F0\uFF0C\u4E5F\u53EF\u4EE5\u662F IP \u5730\u5740\u6216\u8005\u4F9D\u8D56\u5E73\u53F0\u7684\u7B80\u79F0\uFF08Kubernetes\u670D\u52A1\u7684\u77ED\u540D\u79F0\uFF09\uFF0C\u4E00\u4E2A\u4E3B\u673A\u540D\u53EA\u80FD\u5728\u4E00\u4E2A VirtualService \u4E2D\u5B9A\u4E49\u3002</p><h3 id="\u8DEF\u7531\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u89C4\u5219" aria-hidden="true">#</a> \u8DEF\u7531\u89C4\u5219</h3><p>\u5728 http \u5B57\u6BB5\u4E2D\u5305\u542B\u4E86\u865A\u62DF\u670D\u52A1\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u5B83\u4EEC\u628A HTTP/1.1\u3001HTTP2 \u548C gRPC \u6D41\u91CF\u53D1\u9001\u5230 hosts \u5B57\u6BB5\u6307\u5B9A\u7684\u76EE\u6807\uFF0C\u5982\u679C\u5E0C\u671B\u4E3A TCP \u548C\u672A\u7EC8\u6B62\u7684 TLS \u6D41\u91CF\u8BBE\u7F6E\u8DEF\u7531\u89C4\u5219\uFF0C\u53EF\u4EE5\u4F7F\u7528 tcp \u548C tls \u5B57\u6BB5\u3002</p><p>\u8DEF\u7531\u89C4\u5219\u6309\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\u9009\u62E9\uFF0C\u865A\u62DF\u670D\u52A1\u4E2D\u5B9A\u4E49\u7684\u7B2C\u4E00\u6761\u89C4\u5219\u5177\u6709\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\u5C06\u5148\u901A\u8FC7\u7B2C\u4E00\u6761\u89C4\u5219\u8FDB\u884C\u5224\u65AD\uFF0C\u4E0D\u6EE1\u8DB3\u7684\u5C06\u8FDB\u884C\u7B2C\u4E8C\u6761\u89C4\u5219\u3002</p><h3 id="\u76EE\u6807\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807\u89C4\u5219" aria-hidden="true">#</a> \u76EE\u6807\u89C4\u5219</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>destination<span class="token punctuation">-</span>rule
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>svc
  <span class="token key atrule">trafficPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple</span><span class="token punctuation">:</span> RANDOM
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">trafficPolicy</span><span class="token punctuation">:</span>
      <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span>
        <span class="token key atrule">simple</span><span class="token punctuation">:</span> ROUND_ROBIN
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v3
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6BCF\u4E2A\u5B50\u96C6\u90FD\u662F\u57FA\u4E8E\u4E00\u4E2A\u6216\u591A\u4E2A labels \u5B9A\u4E49\u7684\uFF0C\u5728 Kubernetes \u4E2D\u5B83\u662F\u9644\u52A0\u5230\u50CF Pod \u8FD9\u79CD\u5BF9\u8C61\u4E0A\u7684\u952E/\u503C\u5BF9\u3002\u8FD9\u4E9B\u6807\u7B7E\u5E94\u7528\u4E8E Kubernetes \u670D\u52A1\u7684 Deployment \u5E76\u4F5C\u4E3A metadata \u6765\u8BC6\u522B\u4E0D\u540C\u7684\u7248\u672C\u3002</p><h2 id="gateway-\u7F51\u5173" tabindex="-1"><a class="header-anchor" href="#gateway-\u7F51\u5173" aria-hidden="true">#</a> Gateway \u7F51\u5173</h2><p>Gateway \u4E3A HTTP/TCP \u6D41\u91CF\u914D\u7F6E\u4E86\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\uFF0C\u591A\u6570\u60C5\u51B5\u4E0B\u5728\u7F51\u683C\u8FB9\u7F18\u8FDB\u884C\u64CD\u4F5C\uFF0C\u7528\u4E8E\u542F\u7528\u4E00\u4E2A\u670D\u52A1\u7684\u5165\u53E3\uFF08ingress\uFF09\u6D41\u91CF\uFF0C\u76F8\u5F53\u4E8E\u524D\u7AEF\u4EE3\u7406\u3002\u4E0E Kubernetes \u7684 Ingress \u4E0D\u540C\uFF0CIstio Gateway \u53EA\u914D\u7F6E\u56DB\u5C42\u5230\u516D\u5C42\u7684\u529F\u80FD\uFF08\u4F8B\u5982\u5F00\u653E\u7AEF\u53E3\u6216\u8005 TLS \u914D\u7F6E\uFF09\uFF0C\u800C Kubernetes \u7684 Ingress \u662F\u4E03\u5C42\u7684\u3002\u5C06 VirtualService \u7ED1\u5B9A\u5230 Gateway \u4E0A\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u7684 Istio \u89C4\u5219\u6765\u63A7\u5236\u8FDB\u5165\u7684 HTTP \u548C TCP \u6D41\u91CF\u3002</p><p>Gateway \u8BBE\u7F6E\u4E86\u4E00\u4E2A\u96C6\u7FA4\u5916\u90E8\u6D41\u91CF\u8BBF\u95EE\u96C6\u7FA4\u4E2D\u7684\u67D0\u4E9B\u670D\u52A1\u7684\u5165\u53E3\uFF0C\u800C\u8FD9\u4E9B\u6D41\u91CF\u7A76\u7ADF\u5982\u4F55\u8DEF\u7531\u5230\u90A3\u4E9B\u670D\u52A1\u4E0A\u5219\u9700\u8981\u901A\u8FC7\u914D\u7F6E VirtualServcie \u6765\u7ED1\u5B9A\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A Istio Gateway \u7684\u793A\u4F8B\uFF0C</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Gateway
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> demo<span class="token punctuation">-</span>gateway
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">istio</span><span class="token punctuation">:</span> ingressgateway
  <span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span>
      <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> http
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> HTTP
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> client.com
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span>
      <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">443</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> grpc
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> GRPC
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> server.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="service-entry-\u670D\u52A1\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#service-entry-\u670D\u52A1\u5165\u53E3" aria-hidden="true">#</a> Service Entry \u670D\u52A1\u5165\u53E3</h2><p>TODO:</p>`,15);function h(v,g){const e=t("ExternalLinkIcon");return l(),c(u,null,[i,s("p",null,[k,s("a",b,[m,r(e)]),y]),d],64)}var f=p(o,[["render",h]]);export{f as default};