import{_ as e,r as p,o as t,c,a as n,d as l,F as r,b as a,e as o}from"./app.269ed0ef.js";const u={},i=n("h1",{id:"eureka",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eureka","aria-hidden":"true"},"#"),a(" Eureka")],-1),k={href:"https://www.cnblogs.com/april-chen/p/10617066.html",target:"_blank",rel:"noopener noreferrer"},d=a("Eureka\u8BE6\u7EC6\u914D\u7F6E"),b=a("\u3002"),m=o(`<h2 id="eureka-server-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#eureka-server-\u914D\u7F6E" aria-hidden="true">#</a> Eureka Server \u914D\u7F6E</h2><h3 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u914D\u7F6E-eureka-server" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eureka-server" aria-hidden="true">#</a> \u914D\u7F6E Eureka Server</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7001</span>

<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> MailServer<span class="token punctuation">-</span>RegisterCenter <span class="token comment">#\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\u5B9E\u4F8B\u7684\u4E3B\u673A\u540D</span>
    <span class="token key atrule">ip-address</span><span class="token punctuation">:</span> 1.15.147.218 <span class="token comment">#\u8BE5\u5B9E\u4F8B\u7684IP\u5730\u5740</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u8BE5\u5B9E\u4F8B\uFF0C\u76F8\u8F83\u4E8Ehostname\u662F\u5426\u4F18\u5148\u4F7F\u7528IP</span>
    <span class="token key atrule">non-secure-port</span><span class="token punctuation">:</span> <span class="token number">7001</span> <span class="token comment">#http\u901A\u4FE1\u7AEF\u53E3\uFF0Chttps\u4E3Asecure-port</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u5B9E\u4F8B\u662F\u5426\u5728eureka\u670D\u52A1\u5668\u4E0A\u6CE8\u518C\u81EA\u5DF1\u7684\u4FE1\u606F\u4EE5\u4F9B\u5176\u4ED6\u670D\u52A1\u53D1\u73B0\uFF0C\u9ED8\u8BA4\u4E3Atrue</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u6B64\u5BA2\u6237\u7AEF\u662F\u5426\u83B7\u53D6eureka\u670D\u52A1\u5668\u6CE8\u518C\u8868\u4E0A\u7684\u6CE8\u518C\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0Cfalse\u8868\u793A\u8FD9\u662FEureka\u670D\u52A1\u5668</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span> <span class="token comment">#\u4E0EEureka\u6CE8\u518C\u670D\u52A1\u4E2D\u5FC3\u7684\u901A\u4FE1zone\u548Curl\u5730\u5740</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//1.15.147.218<span class="token punctuation">:</span>7001/eureka/
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token comment">#\u670D\u52A1\u7AEF\u5F00\u542F\u81EA\u6211\u4FDD\u62A4\u6A21\u5F0F\u3002</span>
    <span class="token comment">#\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\uFF0C\u670D\u52A1\u7AEF\u90FD\u4F1A\u4FDD\u6301\u4E00\u5B9A\u6570\u91CF\u7684\u670D\u52A1\u3002</span>
    <span class="token comment">#\u907F\u514Dclient\u4E0Eserver\u7684\u7F51\u7EDC\u95EE\u9898\uFF0C\u800C\u51FA\u73B0\u5927\u91CF\u7684\u670D\u52A1\u88AB\u6E05\u9664</span>
    <span class="token key atrule">enable-self-preservation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u5F00\u542F-eureka-server" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-eureka-server" aria-hidden="true">#</a> \u5F00\u542F Eureka Server</h3><p>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E0A\u6DFB\u52A0 <code>@EnableEurekaServer</code> \u6CE8\u89E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaStart</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EurekaStart</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="eureka-client-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#eureka-client-\u914D\u7F6E" aria-hidden="true">#</a> Eureka Client \u914D\u7F6E</h2><h3 id="\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> \u76F8\u5173\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u914D\u7F6E-eureka-client" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eureka-client" aria-hidden="true">#</a> \u914D\u7F6E Eureka Client</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//1.15.147.218<span class="token punctuation">:</span>7001/eureka/
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> CRUD<span class="token punctuation">-</span>Provider
    <span class="token key atrule">ip-address</span><span class="token punctuation">:</span> 1.15.147.218
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">non-secure-port</span><span class="token punctuation">:</span> <span class="token number">8001</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">app.name</span><span class="token punctuation">:</span> CRUD\u670D\u52A1\u63D0\u4F9B\u8005
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5F00\u542F-eurekaclient" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-eurekaclient" aria-hidden="true">#</a> \u5F00\u542F EurekaClient</h3><p>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E0A\u6DFB\u52A0 <code>@EnableEurekaClient</code> \u6CE8\u89E3\u3002</p><h2 id="eureka-\u6CE8\u518C\u4E2D\u5FC3\u96C6\u7FA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#eureka-\u6CE8\u518C\u4E2D\u5FC3\u96C6\u7FA4\u914D\u7F6E" aria-hidden="true">#</a> Eureka \u6CE8\u518C\u4E2D\u5FC3\u96C6\u7FA4\u914D\u7F6E</h2><h3 id="\u914D\u7F6E-eureka-server-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eureka-server-\u96C6\u7FA4" aria-hidden="true">#</a> \u914D\u7F6E Eureka Server \u96C6\u7FA4</h3><p>\u5047\u8BBE\u6709\u4E09\u4E2A Eureka \u6CE8\u518C\u4E2D\u5FC3 192.168.1.2\uFF0C192.168.1.3\uFF0C192.168.1.4\uFF0C\u53EA\u8981\u5728\u6BCF\u4E00\u4E2A\u7684\u914D\u7F6E\u6587\u4EF6\u7684 service-url \u5C5E\u6027\u4E2D\u6DFB\u52A0\u53E6\u5916\u4E24\u4E2A\u7684\u6CE8\u518C\u5730\u5740\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF0C\u4E92\u76F8\u6CE8\u518C\u3002</p><h3 id="\u914D\u7F6E-eureka-client-\u6CE8\u518C\u5230-eureka-\u96C6\u7FA4\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eureka-client-\u6CE8\u518C\u5230-eureka-\u96C6\u7FA4\u4E2D" aria-hidden="true">#</a> \u914D\u7F6E Eureka Client \u6CE8\u518C\u5230 Eureka \u96C6\u7FA4\u4E2D</h3><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 service-url \u5C5E\u6027\u4E2D\u6DFB\u52A0\u6240\u6709\u7684\u6CE8\u518C\u4E2D\u5FC3 url \u5373\u53EF\uFF0C\u540C\u6837\u4EE5\u9017\u53F7\u5206\u9694\u3002</p><h3 id="\u914D\u7F6E-client-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-client-\u96C6\u7FA4" aria-hidden="true">#</a> \u914D\u7F6E Client \u96C6\u7FA4</h3><p>\u591A\u4E2A\u5FAE\u670D\u52A1\u4FDD\u8BC1 <code>spring.application.name</code> \u548C <code>eureka.instance.appname</code> \u5206\u522B\u5BF9\u5E94\u76F8\u540C\u5373\u53EF\uFF0C\u5E76\u6CE8\u518C\u5230 Eureka \u4E2D\u3002</p>`,22);function h(g,v){const s=p("ExternalLinkIcon");return t(),c(r,null,[i,n("p",null,[n("a",k,[d,l(s)]),b]),m],64)}var y=e(u,[["render",h]]);export{y as default};