import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5C04" aria-hidden="true">#</a> \u53CD\u5C04</h1><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><ul><li>\u83B7\u53D6\u7C7B\u578B\u4FE1\u606F\uFF1Areflect.TypeOf\uFF0C\u662F\u9759\u6001\u7684\u3002</li><li>\u83B7\u53D6\u503C\u4FE1\u606F\uFF1Areflect.ValueOf\uFF0C\u662F\u52A8\u6001\u7684\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reflect_type</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token comment">// kind()\u53EF\u4EE5\u83B7\u53D6\u5177\u4F53\u7C7B\u578B</span>
   k <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
   <span class="token keyword">switch</span> k <span class="token punctuation">{</span>
   <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Float64<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a is float64\\n&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>String<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u53CD\u5C04\u4FEE\u6539\u503C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Elem() \u83B7\u53D6\u5730\u5740\u6307\u5411\u7684\u503C</span>
reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetFloat</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> x <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">3.4</span>
   <span class="token function">reflect_type</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7ED3\u6784\u4F53\u4E0E\u53CD\u5C04\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539\u7ED3\u6784\u4F53\u4E2D\u5B57\u6BB5\u7684\u503C</span>
reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;Username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;ppg&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u904D\u5386\u6240\u6709\u5B57\u6BB5</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D6\u5F97\u6BCF\u4E2A\u5B57\u6BB5</span>
  sf <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token comment">// \u83B7\u53D6\u5B57\u6BB5\u5BF9\u5E94\u7684\u4FE1\u606F</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sf<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> sf<span class="token punctuation">.</span>Tag<span class="token punctuation">,</span> sf<span class="token punctuation">.</span>Anonymous<span class="token punctuation">,</span> sf<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> sf<span class="token punctuation">.</span>PkgPath<span class="token punctuation">)</span>
  <span class="token comment">// \u53EA\u80FD\u83B7\u53D6\u516C\u5F00\u5B57\u6BB5\uFF0C\u79C1\u6709\u5B57\u6BB5\u4F1A\u62A5\u9519</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u65B9\u6CD5</span>
v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;GetBirthYear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u5B57\u6BB5\u7684 tag</span>
t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,8);function t(c,o){return p}var u=n(a,[["render",t]]);export{u as default};