import{_ as n,e as s}from"./app.269ed0ef.js";const a={},t=s(`<h1 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h1><p>\u5B57\u7B26\u4E32\u5E38\u7528\u64CD\u4F5C\uFF1A</p><ul><li><p>len(str)\uFF1A\u6C42\u957F\u5EA6\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF1A&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><code>+</code> \u6216 <code>fmt.Sprintf</code>\uFF1A\u62FC\u63A5\u5B57\u7B26\u4E32\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%s&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><code>strings.Split</code>\uFF1A\u5206\u5272\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><code>strings.Contains</code>\uFF1A\u5224\u65AD\u662F\u5426\u5305\u542B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;\u829C\u6E56&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><code>strings.HasPrefix,strings.HasSuffix</code>\uFF1A\u524D\u7F00\u540E\u7F00\u5224\u65AD\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;\u8FD9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><code>strings.Index(),strings.LastIndex</code>\uFF1A\u5B50\u4E32\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><code>strings.Join</code>\uFF1A\u7B26\u53F7\u8FDE\u63A5\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p>Go \u8BED\u8A00\u4E2D\u5B57\u7B26\u6709\u4E24\u79CD\uFF1Auint8 \u7C7B\u578B\uFF0C\u4EE3\u8868 ASCII \u7684\u4E00\u4E2A\u5B57\u7B26\uFF0Crune \u7C7B\u578B\uFF0C\u4EE3\u8868\u4E00\u4E2A UTF-8 \u5B57\u7B26\u3002</p><p>\u5B57\u7B26\u4E32\u5E95\u5C42\u662F\u4E00\u4E2A byte \u6570\u7EC4\uFF0C\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u5C31\u662F byte \u5B57\u8282\u7684\u957F\u5EA6\u3002</p><p>\u904D\u5386\u5B57\u7B26\u4E32\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u5B57\u7B26\u4E32\u53EA\u6709 ASCII \u5B57\u7B26\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4FEE\u6539\u5B57\u7B26\u4E32\uFF1A\u8981\u4FEE\u6539\u5B57\u7B26\u4E32\u9700\u8981\u5148\u8F6C\u4E3A rune \u6216 byte \u6570\u7EC4\uFF0C\u4FEE\u6539\u5B8C\u6210\u540E\u518D\u8F6C\u6362\u4E3A string\uFF0C\u65E0\u8BBA\u54EA\u79CD\u8F6C\u6362\u90FD\u4F1A\u91CD\u65B0\u5206\u914D\u5185\u5B58\u5E76\u590D\u5236\u5B57\u8282\u6570\u7EC4\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>str <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9,\u662F,\u4E00,\u6BB5,\u5B57,\u7B26,\u4E32,&quot;</span><span class="token punctuation">)</span>
runeArray <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
runeArray<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;\u4E2A&#39;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>runeArray<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11);function p(o,e){return t}var u=n(a,[["render",p]]);export{u as default};
