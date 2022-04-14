import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="class-\u7684\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#class-\u7684\u7EE7\u627F" aria-hidden="true">#</a> Class \u7684\u7EE7\u627F</h1><p>\u4F7F\u7528 <code>extends</code> \u5173\u952E\u5B57\u5B8C\u6210\u7EE7\u627F\uFF0C\u5B50\u7C7B\u5FC5\u987B\u5728\u6784\u9020\u5668\u4E2D\u8C03\u7528 super \u65B9\u6CD5\uFF0C\u5E76\u4E14\u8C03\u7528 super \u4E4B\u524D\u4E0D\u80FD\u4F7F\u7528 this\uFF0C\u56E0\u4E3A\u5B50\u7C7B\u81EA\u5DF1\u7684 this \u5BF9\u8C61\u5FC5\u987B\u5148\u901A\u8FC7\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u5B8C\u6210\u5851\u9020\u7136\u540E\u518D\u52A0\u5DE5\uFF0Csuper \u4E2D\u7684 this \u6307\u7684\u662F\u5B50\u7C7B\u7684\u5B9E\u4F8B\u3002</p><p>super \u6307\u5411\u7236\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5B9A\u4E49\u5728\u7236\u7C7B\u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5\u6216\u5C5E\u6027\u662F\u65E0\u6CD5\u901A\u8FC7 super \u8C03\u7528\u7684\u3002\u5728\u5B50\u7C7B\u666E\u901A\u65B9\u6CD5\u4E2D\u901A\u8FC7 super \u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\u65F6\uFF0C\u65B9\u6CD5\u5185\u90E8\u7684 this \u6307\u5411\u5F53\u524D\u7684\u5B50\u7C7B\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>sound</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token operator">=</span>sound
  <span class="token punctuation">}</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>sound<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4ECE\u5B50\u7C7B\u83B7\u53D6\u7236\u7C7B\uFF1A<code>Object.getPrototypeOf()</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,6);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};