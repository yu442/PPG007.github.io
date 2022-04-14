import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u6570\u7EC4\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u6269\u5C55" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u6269\u5C55</h1><h2 id="\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26</h2><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u662F\u4E09\u4E2A\u70B9\uFF0C\u5C06\u4E00\u4E2A\u6570\u7EC4\u53D8\u4E3A\u53C2\u6570\u5E8F\u5217\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> x <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528\uFF1A</p><ul><li>\u590D\u5236\u6570\u7EC4\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a1<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u5408\u5E76\u6570\u7EC4\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>bar<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
a3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a1<span class="token punctuation">,</span> <span class="token operator">...</span>a2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u4E0E\u89E3\u6784\u8D4B\u503C\u7ED3\u5408\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u5B57\u7B26\u4E32\uFF1A\u6269\u5C55\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u8F6C\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u5B9E\u73B0\u4E86 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61\uFF1A\u4EFB\u4F55\u5B9A\u4E49\u4E86\u904D\u5386\u5668\u63A5\u53E3\u7684\u5BF9\u8C61\u90FD\u53EF\u4EE5\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u8F6C\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
<span class="token punctuation">}</span>

<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">++</span>i
    <span class="token keyword">yield</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;PPG&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u6570\u7EC4\u5B9E\u4F8B\u7684-find-\u548C-findindex" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5B9E\u4F8B\u7684-find-\u548C-findindex" aria-hidden="true">#</a> \u6570\u7EC4\u5B9E\u4F8B\u7684 find() \u548C findIndex()</h2><ul><li>find \u65B9\u6CD5\u7528\u4E8E\u627E\u51FA\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\uFF0C\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u6240\u6709\u6570\u7EC4\u6210\u5458\u4F9D\u6B21\u6267\u884C\u8BE5\u56DE\u8C03\u51FD\u6570\uFF0C\u76F4\u5230\u627E\u51FA\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3A true \u7684\u6210\u5458\uFF0C\u7136\u540E\u8FD4\u56DE\u8FD9\u4E2A\u6210\u5458\uFF0C\u5982\u679C\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5C31\u8FD4\u56DE undefined\u3002</li><li>findIndex \u65B9\u6CD5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6240\u6709\u6210\u5458\u90FD\u4E0D\u7B26\u5408\u6761\u4EF6\u5C31\u8FD4\u56DE -1.</li><li>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u7ED1\u5B9A\u56DE\u8C03\u51FD\u6570\u7684 this \u5BF9\u8C61\u3002</li></ul><h2 id="\u6570\u7EC4\u5B9E\u4F8B\u7684-includes" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5B9E\u4F8B\u7684-includes" aria-hidden="true">#</a> \u6570\u7EC4\u5B9E\u4F8B\u7684 includes()</h2><p>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u67D0\u4E2A\u6570\u7EC4\u662F\u5426\u5305\u542B\u7ED9\u5B9A\u7684\u503C\u3002\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u641C\u7D22\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u5982\u679C\u662F\u8D1F\u6570\u5C31\u8868\u793A\u5012\u6570\u7684\u4F4D\u7F6E\u3002</p>`,19);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};