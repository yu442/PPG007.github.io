import{_ as n,e as s}from"./app.269ed0ef.js";const a={},e=s(`<h1 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h1><p>\u5355\u72EC\u58F0\u660E\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> PI <span class="token operator">=</span> <span class="token number">3.141592653</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6279\u91CF\u58F0\u660E\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  OK <span class="token operator">=</span> <span class="token number">200</span>
  NOT_FOUND <span class="token operator">=</span> <span class="token number">404</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6279\u91CF\u58F0\u660E\u65F6\uFF0C\u5982\u679C\u67D0\u4E00\u884C\u58F0\u660E\u540E\u6CA1\u6709\u8D4B\u503C\uFF0C\u5219\u53D6\u4E0A\u4E00\u884C\u7684\u503C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  OK <span class="token operator">=</span> <span class="token number">200</span>
  NOT_FOUND <span class="token operator">=</span> <span class="token number">404</span>
  ALIAS <span class="token comment">// 404</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> iota</h2><p>iota \u53EA\u80FD\u5728\u5E38\u91CF\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\uFF0C\u5728 const \u5173\u952E\u5B57\u51FA\u73B0\u65F6\u5C06\u88AB\u91CD\u7F6E\u4E3A0\uFF0C\u6BCF\u65B0\u589E\u4E00\u884C\u5E38\u91CF\u58F0\u660E\uFF0Ciota \u5C31\u5411\u4E0A\u8BA1\u6570\u4E00\u6B21\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
  b <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 1</span>
  c <span class="token comment">// 2</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
  d <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528 <code>_</code>\u53EF\u4EE5\u8DF3\u8FC7\u67D0\u4E2A\u503C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  d <span class="token operator">=</span> <span class="token boolean">iota</span>
  <span class="token boolean">_</span>
  e <span class="token comment">// 2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u591A\u4E2A\u5E38\u91CF\u58F0\u660E\u5728\u4E00\u884C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
  a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">//1, 2</span>
  c<span class="token punctuation">,</span> d <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// 2, 3</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,14);function p(o,c){return e}var t=n(a,[["render",p]]);export{t as default};
