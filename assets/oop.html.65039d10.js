import{_ as n,e as a}from"./app.269ed0ef.js";const s={},e=a(`<h1 id="\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</h1><h2 id="\u5B9E\u4F8B\u5BF9\u8C61\u4E0E-new-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5BF9\u8C61\u4E0E-new-\u547D\u4EE4" aria-hidden="true">#</a> \u5B9E\u4F8B\u5BF9\u8C61\u4E0E new \u547D\u4EE4</h2><p>new \u547D\u4EE4\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF1A</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u4F5C\u4E3A\u8981\u8FD4\u56DE\u7684\u5BF9\u8C61\u5B9E\u4F8B\u3002</li><li>\u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u3002</li><li>\u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u8D4B\u503C\u7ED9\u51FD\u6570\u5185\u90E8\u7684 this \u5173\u952E\u5B57\u3002</li><li>\u5F00\u59CB\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\u3002</li></ul><p>\u5982\u679C\u6784\u9020\u51FD\u6570\u5185\u90E8\u5B58\u5728 return \u8BED\u53E5\uFF0C\u800C\u4E14\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Cnew \u547D\u4EE4\u4F1A\u8FD4\u56DE return \u6307\u5B9A\u7684\u5BF9\u8C61\uFF0C\u5426\u5219\u5C31\u4F1A\u4E0D\u7BA1 return \u8BED\u53E5\u800C\u8FD4\u56DE this\u3002</p><p>\u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u4F7F\u7528 <code>new.target</code> \u5C5E\u6027\uFF0C\u5982\u679C\u5F53\u524D\u51FD\u6570\u662F new \u547D\u4EE4\u8C03\u7528\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u6307\u5411\u5F53\u524D\u51FD\u6570\uFF0C\u5426\u5219\u8FD4\u56DE undefined\u3002</p><p>\u5982\u679C\u5E0C\u671B\u4ECE\u73B0\u6709\u5BF9\u8C61\u4F5C\u4E3A\u6A21\u677F\u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528 <code>Object.create()</code> \u65B9\u6CD5\u3002</p><h2 id="this-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#this-\u5173\u952E\u5B57" aria-hidden="true">#</a> this \u5173\u952E\u5B57</h2><p>this \u5C31\u662F\u5C5E\u6027\u6216\u65B9\u6CD5\u201C\u5F53\u524D\u201D\u6240\u5728\u7684\u5BF9\u8C61\u3002</p><p>\u5185\u5C42\u7684 this \u4E0D\u6307\u5411\u5916\u90E8\uFF0C\u800C\u662F\u6307\u5411\u9876\u5C42\u5BF9\u8C61\u3002</p><p>this \u7684\u51E0\u4E2A\u4F7F\u7528\u573A\u5408\uFF1A</p><ul><li>\u5168\u5C40\u73AF\u5883\uFF0C\u6307\u5411\u9876\u5C42\u5BF9\u8C61 window\u3002</li><li>\u6784\u9020\u51FD\u6570\uFF0C\u6307\u7684\u662F\u5B9E\u4F8B\u5BF9\u8C61\u3002</li><li>\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u6307\u7684\u662F\u65B9\u6CD5\u8FD0\u884C\u65F6\u6240\u5728\u7684\u5BF9\u8C61</li></ul><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u907F\u514D\u591A\u5C42 this\uFF0C\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u56FA\u5B9A this \u7684\u503C\u7136\u540E\u5185\u5C42\u51FD\u6570\u8C03\u7528\u8FD9\u4E2A\u53D8\u91CF\u3002</li><li>\u907F\u514D\u6570\u7EC4\u5904\u7406\u65B9\u6CD5\u4E2D\u7684 this\u3002</li><li>\u907F\u514D\u56DE\u8C03\u51FD\u6570\u4E2D\u7684 this\u3002</li></ul><p>\u7ED1\u5B9A this \u7684\u65B9\u6CD5\uFF1A</p><ul><li>\u51FD\u6570\u5B9E\u4F8B call \u65B9\u6CD5\uFF0C\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u505A\u53C2\u6570\uFF0C\u5982\u679C\u53C2\u6570\u4E3A\u7A7A\u3001null \u6216 undefined\uFF0C\u5219\u9ED8\u8BA4\u4F20\u5165\u5168\u5C40\u5BF9\u8C61\uFF1B\u5982\u679C\u53C2\u6570\u662F\u4E00\u4E2A\u539F\u59CB\u503C\u5219\u4F1A\u8F6C\u6210\u5305\u88C5\u5BF9\u8C61\uFF0C\u7136\u540E\u518D\u4F20\u5165 call \u65B9\u6CD5\u3002call \u65B9\u6CD5\u53EF\u4EE5\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u505A this\uFF0C\u540E\u9762\u7684\u53C2\u6570\u662F\u51FD\u6570\u8C03\u7528\u65F6\u7684\u53C2\u6570\u3002</li><li>\u51FD\u6570\u5B9E\u4F8B apply \u65B9\u6CD5\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F this \u7684\u6307\u5411\uFF0C\u5982\u679C\u8BBE\u4E3A null \u6216 undefined \u7B49\u540C\u4E8E\u5168\u5C40\u5BF9\u8C61\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u7684\u6210\u5458\u4F9D\u6B21\u4F20\u5165\u539F\u51FD\u6570\u3002</li><li>\u51FD\u6570\u5B9E\u4F8B\u7684 bind \u65B9\u6CD5\uFF0C\u5C06\u51FD\u6570\u4F53\u5185\u7684 this \u7ED1\u5B9A\u5230\u67D0\u4E2A\u5BF9\u8C61\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\uFF0C\u53C2\u6570\u5C31\u662F\u6240\u8981\u7ED1\u5B9A this \u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u63A5\u53D7\u66F4\u591A\u53C2\u6570\u7ED1\u5B9A\u539F\u51FD\u6570\u7684\u53C2\u6570\u3002</li></ul><h2 id="\u5BF9\u8C61\u7684\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u7EE7\u627F" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u7EE7\u627F</h2><p>\u539F\u578B\u5BF9\u8C61 prototype\uFF1A</p><p>\u6BCF\u4E2A\u539F\u578B\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A prototype \u5C5E\u6027\uFF0C\u6307\u5411\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\uFF0C\u751F\u6210\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u8BE5\u5C5E\u6027\u4F1A\u81EA\u52A8\u6210\u4E3A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u3002</p><p>\u539F\u578B\u5BF9\u8C61\u7684\u4F5C\u7528\u5C31\u662F\u5B9A\u4E49\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61\u5171\u4EAB\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u53EF\u4EE5\u770B\u4F5C\u4ECE\u539F\u578B\u5BF9\u8C61\u884D\u751F\u51FA\u6765\u7684\u5B50\u5BF9\u8C61\u3002</p><p>\u4FEE\u6539\u539F\u578B\u5BF9\u8C61\u65F6\u4E00\u822C\u8981\u540C\u65F6\u4FEE\u6539 constructor \u5C5E\u6027\u7684\u6307\u5411\uFF0C\u6307\u5411\u539F\u6765\u7684\u6784\u9020\u51FD\u6570\u3002</p><p>\u7EE7\u627F\u7684\u6B65\u9AA4\uFF1A</p><ul><li><p>\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u8BA9\u5B50\u7C7B\u7684\u539F\u578B\u6307\u5411\u7236\u7C7B\u7684\u539F\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Dog</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Dog
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><p>\u6216\u8005\u76F4\u63A5\u5C06\u5B50\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u6307\u5411\u4E00\u4E2A\u7236\u7C7B\u5B9E\u4F8B\u3002</p><h2 id="object-\u5BF9\u8C61\u7684\u76F8\u5173\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#object-\u5BF9\u8C61\u7684\u76F8\u5173\u65B9\u6CD5" aria-hidden="true">#</a> Object \u5BF9\u8C61\u7684\u76F8\u5173\u65B9\u6CD5</h2><ul><li>Object.getPrototypeOf()\uFF1A\u8FD4\u56DE\u53C2\u6570\u5BF9\u8C61\u7684\u539F\u578B\u3002</li><li>Object.setPrototypeOf()\uFF1A\u4E3A\u53C2\u6570\u5BF9\u8C61\u8BBE\u7F6E\u539F\u578B\uFF0C\u8FD4\u56DE\u8BE5\u53C2\u6570\u5BF9\u8C61\uFF0C\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u73B0\u6709\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u539F\u578B\u5BF9\u8C61\u3002</li><li>Object.create()\uFF1A\u901A\u8FC7\u4E00\u4E2A\u73B0\u6709\u7684\u5B9E\u4F8B\u5BF9\u8C61\u751F\u6210\u53E6\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u3002</li><li>isPrototypeOf()\uFF1A\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u53C2\u6570\u5BF9\u8C61\u7684\u539F\u578B\u3002</li><li><code>__proto__</code>\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u53EF\u8BFB\u53EF\u5199\u3002</li><li>getOwnPropertyNames()\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u53C2\u6570\u5BF9\u8C61\u672C\u8EAB\u7684\u6240\u6709\u5C5E\u6027\u7684\u952E\u540D\uFF0C\u4E0D\u5305\u542B\u7EE7\u627F\u7684\u952E\u540D\u3002</li><li>hasOwnProperty()\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u7528\u4E8E\u5224\u65AD\u67D0\u4E2A\u5C5E\u6027\u5B9A\u4E49\u5728\u5BF9\u8C61\u81EA\u8EAB\u8FD8\u662F\u5B9A\u4E49\u5728\u539F\u578B\u94FE\u4E0A\u3002</li></ul>`,26);function t(p,i){return e}var c=n(s,[["render",t]]);export{c as default};
