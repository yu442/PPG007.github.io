import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488" aria-hidden="true">#</a> \u6307\u9488</h1><p>Go \u8BED\u8A00\u4E2D\u7684\u6307\u9488\u53EA\u80FD\u53D6\u503C\u8D4B\u503C\uFF0C\u4E0D\u80FD\u7528\u6765\u8FD0\u7B97\uFF0C\u662F\u5B89\u5168\u6307\u9488\u3002</p><p>\u4EA4\u6362\u51FD\u6570\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  temp <span class="token operator">:=</span> <span class="token operator">*</span>x
  <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y
  <span class="token operator">*</span>y <span class="token operator">=</span> temp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F53\u4E00\u4E2A\u6307\u9488\u5B9A\u4EE5\u540E\u4E0D\u6307\u5411\u4EFB\u4F55\u53D8\u91CF\u65F6\uFF0C\u503C\u4E3A <code>nil</code>\u3002</p><h2 id="new-\u548C-make" tabindex="-1"><a class="header-anchor" href="#new-\u548C-make" aria-hidden="true">#</a> new \u548C make</h2><p>new \u548C make \u7528\u6765\u5206\u914D\u5185\u5B58\u7A7A\u95F4\u3002</p><p>new \u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u8BE5\u7C7B\u578B\u5185\u5B58\u5730\u5740\u7684\u6307\u9488\u3002\u8BE5\u6307\u9488\u5BF9\u5E94\u7684\u503C\u4E3A\u8BE5\u7C7B\u578B\u7684\u96F6\u503C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
b <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token operator">*</span>b<span class="token punctuation">)</span> <span class="token comment">// &quot;&quot; false</span>
<span class="token operator">*</span>a <span class="token operator">=</span> <span class="token string">&quot;100&quot;</span>
<span class="token operator">*</span>b <span class="token operator">=</span> <span class="token boolean">true</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>make \u53EA\u80FD\u7528\u4E8E\u5207\u7247\u3001map\u3001\u4EE5\u53CA\u7BA1\u9053 chan \u7684\u5185\u5B58\u521B\u5EFA\uFF0C\u8FD4\u56DE\u7C7B\u578B\u5C31\u662F\u8FD9\u4E09\u4E2A\u7C7B\u578B\u672C\u8EAB\u800C\u4E0D\u662F\u5B83\u4EEC\u7684\u6307\u9488\uFF0C\u56E0\u4E3A\u8FD9\u4E09\u4E2A\u7C7B\u578B\u5C31\u662F\u5F15\u7528\u7C7B\u578B\u3002</p>`,10);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
