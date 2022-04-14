import{_ as p,r as t,o as e,c as o,a as n,d as c,F as r,b as s,e as u}from"./app.269ed0ef.js";const l={},i={id:"\u62E6\u622A\u5668",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u62E6\u622A\u5668","aria-hidden":"true"},"#",-1),d=s(),m={href:"https://github.com/axios/axios#interceptors",target:"_blank",rel:"noopener noreferrer"},b=s("\u62E6\u622A\u5668"),g=u(`<h2 id="\u8BF7\u6C42\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u62E6\u622A\u5668" aria-hidden="true">#</a> \u8BF7\u6C42\u62E6\u622A\u5668</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>use() \u65B9\u6CD5\u7684\u4E24\u4E2A\u53C2\u6570\u90FD\u662F\u51FD\u6570\uFF0C\u8981\u8FD4\u56DE\u53C2\u6570\u7C7B\u578B\u7684\u53D8\u91CF\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u8BF7\u6C42\u505A\u914D\u7F6E</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span>UserInfoKeys<span class="token punctuation">.</span><span class="token constant">TOKENKEY</span><span class="token punctuation">]</span> <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>UserInfoKeys<span class="token punctuation">.</span><span class="token constant">TOKENKEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9519\u8BEF\u5904\u7406</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u54CD\u5E94\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u62E6\u622A\u5668" aria-hidden="true">#</a> \u54CD\u5E94\u62E6\u622A\u5668</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token comment">// \u6B63\u5E38\u60C5\u51B5\u4E0B\u76F4\u63A5\u8FD4\u56DE\u54CD\u5E94</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">,</span>
  <span class="token comment">// \u51FA\u9519\u540E\u518D\u5904\u7406</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u5148\u767B\u5F55&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u7F51\u7EDC\u9519\u8BEF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u914D\u7F6E\u4E86\u62E6\u622A\u5668\u540E\uFF0C\u8981\u5C06\u914D\u7F6E\u8FC7\u7684 axios \u5BFC\u51FA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div>`,6);function h(f,_){const a=t("ExternalLinkIcon");return e(),o(r,null,[n("h1",i,[k,d,n("a",m,[b,c(a)])]),g],64)}var x=p(l,[["render",h]]);export{x as default};
