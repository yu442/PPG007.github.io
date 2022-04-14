import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h1><h2 id="if-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#if-\u8BED\u53E5" aria-hidden="true">#</a> if \u8BED\u53E5</h2><ul><li>\u53EF\u7701\u7565\u6761\u4EF6\u8868\u8FBE\u5F0F\u62EC\u53F7\u3002</li><li>\u521D\u59CB\u5316\u8BED\u53E5\u53EF\u4EE5\u5B9A\u4E49\u4EE3\u7801\u5757\u5C40\u90E8\u53D8\u91CF\u3002</li><li>\u4EE3\u7801\u5DE6\u62EC\u53F7\u5FC5\u987B\u5728\u6761\u4EF6\u8868\u8FBE\u5F0F\u5C3E\u90E8\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> b <span class="token operator">:=</span> a<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">;</span> b <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> b <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token punctuation">{</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;else&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="switch-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#switch-\u8BED\u53E5" aria-hidden="true">#</a> switch \u8BED\u53E5</h2><p>\u5206\u652F\u8868\u8FBE\u5F0F\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\uFF0C\u4E0D\u9650\u4E8E\u5E38\u91CF\uFF0C\u53EF\u4EE5\u7701\u7565 break\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u7EC8\u6B62\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>score <span class="token operator">:=</span> <span class="token number">95</span>
<span class="token keyword">switch</span> score <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">:</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span>
<span class="token keyword">case</span> <span class="token number">60</span><span class="token punctuation">:</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span>
<span class="token keyword">case</span> <span class="token number">40</span><span class="token punctuation">:</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5E26\u6709\u521D\u59CB\u5316\u8BED\u53E5\u7684 for \u5FAA\u73AF\u3002</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// \u53EA\u6709\u6761\u4EF6\u7684 for \u5FAA\u73AF\u3002</span>
n <span class="token operator">:=</span> <span class="token number">10</span>
<span class="token keyword">for</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  n<span class="token operator">--</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6B7B\u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range</h2><p>\u7C7B\u4F3C\u8FED\u4EE3\u5668\u64CD\u4F5C\uFF0C\u8FD4\u56DE<em>\u7D22\u5F15-\u503C</em>\u6216<em>\u952E-\u503C</em>\u3002</p><p>range \u53EF\u4EE5\u5BF9\u5207\u7247\u3001map\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u7B49\u8FDB\u884C\u8FED\u4EE3:</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u503C</th><th>\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>string</td><td>\u4E0B\u6807</td><td>\u4E0B\u6807\u5BF9\u5E94\u7684\u503C</td></tr><tr><td>\u6570\u7EC4\u3001\u5207\u7247</td><td>\u4E0B\u6807</td><td>\u4E0B\u6807\u5BF9\u5E94\u7684\u503C</td></tr><tr><td>map</td><td>\u952E</td><td>\u503C</td></tr><tr><td>channel</td><td>element</td><td></td></tr></tbody></table><p>\u5982\u679C\u60F3\u5FFD\u7565\u67D0\u4E2A\u8FD4\u56DE\u503C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u5212\u7EBF <code>_</code> \u5360\u4F4D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>str <span class="token operator">:=</span> <span class="token string">&quot;\u674E\u5728\u8D63\u795E\u9B54&quot;</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> array <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
userMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
userMap<span class="token punctuation">[</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;koston&quot;</span>
userMap<span class="token punctuation">[</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> userMap <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>range \u4F1A\u590D\u5236\u5BF9\u8C61\uFF0C\u4F7F\u7528 range \u83B7\u53D6\u7684\u8FD4\u56DE\u503C\u662F\u5FAA\u73AF\u524D\u7684\u5BF9\u8C61\u4E2D\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u5FAA\u73AF\u4E2D\u4FEE\u6539\u4E86\u6E90\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u503C\u4E0D\u53D8\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> array <span class="token punctuation">{</span>
  <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u4F1A\u8F93\u51FA 100</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F46\u662F\u5982\u679C\u4F7F\u7528\u5F15\u7528\u4F1A\u53D7\u5230\u5F71\u54CD\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token comment">// \u5207\u7247</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
  <span class="token keyword">if</span> index <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    slice<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token comment">// \u4F1A\u8F93\u51FA 100\u3002</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,19);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};