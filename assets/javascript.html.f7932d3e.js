import{_ as a,e}from"./app.269ed0ef.js";const p={},n=e(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a> \u5F15\u7528</h2><p>\u6240\u6709\u7684\u8D4B\u503C\u90FD\u4F7F\u7528 const\uFF0C\u5982\u679C\u4E00\u5B9A\u8981\u5BF9\u53C2\u6570\u91CD\u65B0\u8D4B\u503C\u8981\u4F7F\u7528 let \u800C\u4E0D\u662F var\u3002</p><h2 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h2><p>\u4F7F\u7528\u5B57\u9762\u503C\u521B\u5EFA\u5BF9\u8C61\u800C\u4E0D\u662F new\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u540D\u521B\u5EFA\u52A8\u6001\u5C5E\u6027\u540D\u7684\u5BF9\u8C61\u800C\u4E0D\u662F\u5728\u5BF9\u8C61\u5B9A\u4E49\u5916\u518D\u521B\u5EFA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5BF9\u8C61\u65B9\u6CD5\u4F7F\u7528\u7B80\u5199\u5F62\u5F0F\u3002</p><p>\u53EF\u4EE5\u7B80\u5199\u7684\u5C5E\u6027\u540D\u8981\u7B80\u5199\uFF0C\u7B80\u5199\u7684\u5C5E\u6027\u8981\u653E\u524D\u9762\u3002</p><p>\u5C5E\u6027\u540D\u4E0D\u5FC5\u8981\u52A0\u5F15\u53F7\u5C31\u4E0D\u52A0\u3002</p><p>\u4E0D\u8981\u76F4\u63A5\u8C03\u7528 <code>Object.prototype</code> \u4E0A\u7684\u65B9\u6CD5\uFF0C\u6709\u7684\u65B9\u6CD5\u53EF\u80FD\u4F1A\u88AB\u5C4F\u853D\uFF0C\u53EF\u4EE5\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5BF9\u8C61\u6D45\u62F7\u8D1D\u5E94\u8BE5\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u3002</p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><p>\u7528\u5B57\u9762\u91CF\u521B\u5EFA\u6570\u7EC4\u3002</p><p>\u7528 push \u65B9\u6CD5\u5411\u6570\u7EC4\u4E2D\u6DFB\u52A0\u503C\u3002</p><p>\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u505A\u6D45\u62F7\u8D1D\u3002</p><p>\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u5C06\u53EF\u8FED\u4EE3\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4\uFF0C\u7528 <code>Array.from</code> \u5C06\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8F6C\u6210\u4E00\u4E2A\u6570\u7EC4\u3002</p><p>\u7528 <code>Array.from</code> \u505A map \u904D\u5386\uFF0C\u5BF9\u6BD4\u6269\u5C55\u8FD0\u7B97\u7B26\u53EF\u4EE5\u907F\u514D\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u6570\u7EC4\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u6570\u7EC4\u6709\u5F88\u591A\u884C\uFF0C\u5728\u6570\u7EC4\u7684\u524D\u540E\u4E2D\u62EC\u53F7\u8FDB\u884C\u6362\u884C\u3002</p><p>\u9664\u4E86 forEach \u65B9\u6CD5\uFF0C\u5176\u4ED6\u65B9\u6CD5\u5982 map\u3001reduce \u7B49\u65B9\u6CD5\u4E2D\u8981\u6709 return\u3002</p><h3 id="\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784" aria-hidden="true">#</a> \u89E3\u6784</h3><p>\u7528\u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C\u6765\u83B7\u53D6\u548C\u4F7F\u7528\u5BF9\u8C61\u67D0\u4E2A\u6216\u591A\u4E2A\u5C5E\u6027\u503C\u3002</p><p>\u591A\u4E2A\u8FD4\u56DE\u503C\u7528\u5BF9\u8C61\u7684\u89E3\u6784\u800C\u4E0D\u662F\u6570\u7EC4\u89E3\u6784\u3002</p><h3 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h3><p>\u5B57\u7B26\u4E32\u5E94\u8BE5\u4F7F\u7528\u5355\u5F15\u53F7\u3002</p><p>\u957F\u5B57\u7B26\u4E32\u4E0D\u5E94\u8BE5\u6362\u884C\u3002</p><p>\u5F53\u9700\u8981\u52A8\u6001\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\u800C\u4E0D\u662F\u62FC\u63A5\u3002</p><p>\u6C38\u8FDC\u4E0D\u8981\u4F7F\u7528 eval()\u3002</p><p>\u4E0D\u8981\u4F7F\u7528\u4E0D\u5FC5\u8981\u7684\u8F6C\u4E49\u5B57\u7B26\u3002</p><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><p>\u4F7F\u7528\u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u800C\u4E0D\u662F\u51FD\u6570\u58F0\u660E\uFF0C\u907F\u514D\u51FD\u6570\u58F0\u660E\u5BFC\u81F4\u7684\u63D0\u5347\u3002</p><p>\u628A\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5305\u88F9\u5728\u5706\u62EC\u53F7\u91CC\u3002</p><p>\u4E0D\u8981\u5728 if\u3001while \u7B49\u975E\u51FD\u6570\u5757\u5185\u58F0\u660E\u51FD\u6570\u3002</p><p>\u4E0D\u8981\u4F7F\u7528 arguments \u547D\u540D\u53C2\u6570\u3002</p><p>\u4E0D\u8981\u4F7F\u7528 arguments \u53D8\u91CF\uFF0C\u7528 rest \u66FF\u4EE3\u3002</p><p>\u5728\u53C2\u6570\u5217\u8868\u4E2D\u6307\u5B9A\u9ED8\u8BA4\u503C\u800C\u4E0D\u662F\u5728\u51FD\u6570\u91CC\u8FDB\u884C\u5224\u65AD\u518D\u8D4B\u503C\u3002</p><p>\u907F\u514D\u9ED8\u8BA4\u53C2\u6570\u503C\u7684\u526F\u4F5C\u7528\uFF0C\u9ED8\u8BA4\u503C\u5E94\u5F53\u7B80\u6D01\u76F4\u63A5\u3002</p><p>\u9ED8\u8BA4\u53C2\u6570\u8D4B\u503C\u653E\u5728\u6700\u540E\u3002</p><p>\u521B\u5EFA\u51FD\u6570\u4E0D\u8981\u4F7F\u7528 Function \u6784\u9020\u5668\u3002</p><p>\u51FD\u6570\u5B9A\u4E49\u90E8\u5206\u8981\u6709\u7A7A\u683C\u3002</p><p>\u4E0D\u8981\u4FEE\u6539\u4F20\u5165\u7684\u53C2\u6570\u3002</p><p>\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u8C03\u7528\u591A\u53C2\u6570\u7684\u51FD\u6570\u3002</p><p>\u8C03\u7528\u6216\u8005\u7F16\u5199\u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u53C2\u6570\u5217\u8868\u5E94\u8BE5\u6362\u884C\uFF0C\u6BCF\u884C\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u548C\u4E00\u4E2A\u7ED3\u5C3E\u7684\u9017\u53F7\u3002</p><p>\u4E0D\u8981\u4F20\u5165\u4E0D\u4F7F\u7528\u7684\u53C2\u6570\u3002</p><h3 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h3><p>\u5F53\u4E00\u5B9A\u8981\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08\u56DE\u8C03\u51FD\u6570\uFF09\u65F6\uFF0C\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u903B\u8F91\u590D\u6742\uFF0C\u5E94\u8BE5\u628A\u5B83\u5355\u72EC\u5199\u5165\u4E00\u4E2A\u547D\u540D\u51FD\u6570\u91CC\u3002</p><p>\u5982\u679C\u51FD\u6570\u4F53\u662F\u4E00\u4E2A\u6CA1\u6709\u526F\u4F5C\u7528\u7684\u8868\u8FBE\u5F0F\u8BED\u53E5\u7EC4\u6210\uFF0C\u5C31\u5220\u9664\u5927\u62EC\u53F7\u548C return\u3002</p><p>\u5982\u679C\u8868\u8FBE\u5F0F\u5305\u542B\u591A\u884C\u5C31\u5305\u88F9\u5728\u5706\u62EC\u53F7\u91CC\u9762\u3002</p><p>\u7BAD\u5934\u51FD\u6570\u7684\u53C2\u6570\u7528\u5706\u62EC\u53F7\u5305\u88F9\u8D77\u6765\u3002</p><p>\u907F\u514D\u7BAD\u5934\u51FD\u6570\u548C\u5927\u4E8E\u7B49\u4E8E\u3001\u5C0F\u4E8E\u7B49\u4E8E\u53F7\u6DF7\u6DC6\u3002</p><h3 id="\u7C7B\u4E0E\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4E0E\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u7C7B\u4E0E\u6784\u9020\u51FD\u6570</h3><p>\u4F7F\u7528 class \u8BED\u6CD5\uFF0C\u907F\u514D\u64CD\u4F5C\u539F\u578B\u5BF9\u8C61\u3002</p><p>\u4F7F\u7528 extends \u5B9E\u73B0\u7EE7\u627F\u3002</p><p>\u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE this \u5B9E\u73B0\u94FE\u5F0F\u8C03\u7528\u3002</p><p>\u7A7A\u6784\u9020\u51FD\u6570\u6216\u53EA\u662F\u4EE3\u8868\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u662F\u4E0D\u9700\u8981\u5199\u7684\u3002</p><p>\u907F\u514D\u91CD\u590D\u5B9A\u4E49\u7C7B\u6210\u5458\u3002</p><p>\u9664\u975E\u5916\u90E8\u5E93\u6216\u6846\u67B6\u9700\u8981\u4F7F\u7528\u7279\u5B9A\u7684\u975E\u9759\u6001\u65B9\u6CD5\uFF0C\u5426\u5219\u7C7B\u65B9\u6CD5\u5E94\u8BE5\u4F7F\u7528 this \u6216\u88AB\u5199\u6210\u9759\u6001\u65B9\u6CD5\u3002</p><p>\u6D3E\u751F\u7C7B\u9700\u8981\u8C03\u7528 super\u3002</p><p>\u6784\u9020\u5668\u7981\u6B62 return\u3002</p><h3 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h3><p>\u4F7F\u7528 export\u3001import \u5BFC\u51FA\u3001\u5BFC\u5165\u6A21\u5757\u3002</p><p>\u4E0D\u8981\u4F7F\u7528 import \u901A\u914D\u7B26\u3002</p><p>\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7684\u591A\u4E2A\u6A21\u5757\u5728\u4E00\u4E2A import \u8BED\u53E5\u4E2D\u5F15\u5165\u3002</p><p>\u4E0D\u8981\u5BFC\u51FA\u53EF\u53D8\u7684\u4E1C\u897F\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u53EA\u5BFC\u51FA\u4E00\u4E2A\u6A21\u5757\uFF0C\u4F7F\u7528 default\u3002</p><p>import \u8BED\u53E5\u8981\u653E\u5728\u6240\u6709\u8BED\u53E5\u4E4B\u524D\u3002</p><p>\u591A\u884C\u7684 import \u5E94\u8BE5\u7F29\u8FDB\u3002</p><h3 id="\u8FED\u4EE3\u5668\u4E0E\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668\u4E0E\u751F\u6210\u5668" aria-hidden="true">#</a> \u8FED\u4EE3\u5668\u4E0E\u751F\u6210\u5668</h3><p>\u4E0D\u8981\u7528\u8FED\u4EE3\u5668\u800C\u662F\u4F7F\u7528 <code>for-in</code>\u3001<code>for-of</code>\u3002</p><p>\u4E0D\u4F7F\u7528\u751F\u6210\u5668\u3002\u56E0\u4E3A\u65E0\u6CD5\u5F88\u597D\u7684\u8F6C\u4E3A ES5\u3002</p><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><p>\u8BBF\u95EE\u5C5E\u6027\u4F7F\u7528\u70B9\u7B26\u53F7\uFF0C\u5982\u679C\u662F\u53D8\u91CF\u83B7\u53D6\u5C5E\u6027\u4F7F\u7528\u65B9\u62EC\u53F7\u3002</p><p>\u5E42\u8FD0\u7B97\u4F7F\u7528 <code>**</code> \u8FD0\u7B97\u7B26\u3002</p><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><p>\u4F7F\u7528 const \u6216 let \u58F0\u660E\u53D8\u91CF\u3002</p><p>\u4E0D\u8981\u4F7F\u7528\u94FE\u5F0F\u58F0\u660E\u5BF9\u8C61\u3002</p><p>\u4E0D\u8981\u4F7F\u7528\u4E00\u5143\u81EA\u589E\u81EA\u51CF\u8FD0\u7B97\u7B26\u3002</p><p>\u8D4B\u503C\u7684\u65F6\u5019\u907F\u514D\u5728\u7B49\u53F7\u524D\u540E\u6362\u884C\uFF0C\u5982\u679C\u7B49\u53F7\u53F3\u8FB9\u592A\u957F\u53EF\u4EE5\u7528\u5706\u62EC\u53F7\u5305\u88F9\u8D77\u6765\u3002</p><p>\u53D8\u91CF\u5982\u679C\u4E0D\u4F7F\u7528\u5C31\u4E0D\u8981\u58F0\u660E\u3002</p><h3 id="\u6BD4\u8F83\u8FD0\u7B97\u7B26\u4E0E\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u8FD0\u7B97\u7B26\u4E0E\u76F8\u7B49" aria-hidden="true">#</a> \u6BD4\u8F83\u8FD0\u7B97\u7B26\u4E0E\u76F8\u7B49</h3><p>\u7528\u4E25\u683C\u76F8\u7B49\u548C\u4E25\u683C\u4E0D\u7B49\u8FDB\u884C\u5224\u65AD\u3002</p><p>if \u8BED\u53E5\u4F7F\u7528 ToBoolean \u62BD\u8C61\u65B9\u6CD5\u6765\u8BA1\u7B97\u8868\u8FBE\u5F0F\uFF0C\u89C4\u5219\uFF1A</p><ul><li>Objects \u8BA1\u7B97\u6210 true\u3002</li><li>undefined \u8BA1\u7B97\u4E3A false\u3002</li><li>null \u8BA1\u7B97\u4E3A false\u3002</li><li>+0\u3001-0\u3001NaN \u8BA1\u7B97\u4E3A false\u3002</li><li>\u7A7A\u5B57\u7B26\u4E32\uFF08\u4E0D\u5305\u542B\u7EAF\u7A7A\u683C\u5B57\u7B26\u4E32\uFF09\u8BA1\u7B97\u4E3A false\u3002</li></ul><h3 id="\u63A7\u5236\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u8BED\u53E5" aria-hidden="true">#</a> \u63A7\u5236\u8BED\u53E5</h3><p>\u5F53\u63A7\u5236\u8BED\u53E5\u4E2D\u7684\u6761\u4EF6\u592A\u957F\u65F6\u8981\u6362\u884C\uFF0C\u6BCF\u4E2A\u6761\u4EF6\u4E00\u884C\uFF0C\u903B\u8F91\u8FD0\u7B97\u7B26\u653E\u5728\u884C\u9996\u3002</p><h3 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h3><p>\u5355\u884C\u6CE8\u91CA\u653E\u5728\u88AB\u6CE8\u91CA\u533A\u57DF\u4E0A\u9762\uFF0C\u5982\u679C\u6CE8\u91CA\u4E0D\u662F\u5728\u7B2C\u4E00\u884C\uFF0C\u90A3\u4E48\u6CE8\u91CA\u524D\u9762\u5C31\u7A7A\u4E00\u884C\u3002</p><h3 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h3><p>\u94FE\u5F0F\u8C03\u7528\u8FC7\u957F\u6362\u884C\u65F6\uFF0C\u70B9\u7B26\u53F7\u5F00\u5934\u3002</p><p>\u4E00\u4E2A\u4EE3\u7801\u5757\u540E\u7684\u4E0B\u4E00\u6761\u8BED\u53E5\u524D\u7A7A\u4E00\u884C\u3002</p><p>\u4E0D\u8981\u7528\u7A7A\u767D\u884C\u586B\u5145\u5757\u3002</p><p>\u5706\u62EC\u53F7\u3001\u65B9\u62EC\u53F7\u524D\u540E\u4E0D\u52A0\u7A7A\u683C\u3002\u8BA1\u7B97\u5C5E\u6027\u8981\u6709\u7A7A\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u82B1\u62EC\u53F7\u5185\u524D\u540E\u52A0\u7A7A\u683C\u3002</p><p>\u8C03\u7528\u51FD\u6570\u65F6\u51FD\u6570\u540D\u548C\u5C0F\u62EC\u53F7\u4E4B\u95F4\u4E0D\u8981\u7A7A\u683C\u3002</p><p>\u5728\u5BF9\u8C61\u7684\u5B57\u9762\u91CF\u5C5E\u6027\u4E2D\uFF0C\u952E\u503C\u4E4B\u95F4\u8981\u7A7A\u683C\u3002</p><h3 id="\u9017\u53F7" tabindex="-1"><a class="header-anchor" href="#\u9017\u53F7" aria-hidden="true">#</a> \u9017\u53F7</h3><p>\u4E0D\u8981\u524D\u7F6E\u9017\u53F7\u3002</p><p>\u4F7F\u7528\u989D\u5916\u7684\u7ED3\u5C3E\u9017\u53F7\u3002</p><h3 id="\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5206\u53F7" aria-hidden="true">#</a> \u5206\u53F7</h3><p>\u8BED\u53E5\u672B\u5C3E\u52A0\u5206\u53F7\u3002</p><h3 id="\u7C7B\u578B\u8F6C\u6362\u4E0E\u5F3A\u5236\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362\u4E0E\u5F3A\u5236\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362\u4E0E\u5F3A\u5236\u8F6C\u6362</h3><p>\u6570\u5B57\u8F6C\u6362\u4F7F\u7528 Number\uFF0CparseInt \u8F6C\u6362\u5E94\u8BE5\u5E26\u7740\u57FA\u6570\u3002</p><p>\u5E03\u5C14\u8F6C\u6362\u4F7F\u7528\u4E24\u4E2A\u53D6\u53CD\u7B26\u53F7\uFF1A<code>!!</code>\u3002</p><h3 id="get-set-\u8BBF\u95EE\u5668" tabindex="-1"><a class="header-anchor" href="#get-set-\u8BBF\u95EE\u5668" aria-hidden="true">#</a> Get-Set \u8BBF\u95EE\u5668</h3><p>\u4E0D\u8981\u4F7F\u7528\u5C5E\u6027\u7684\u8BBF\u95EE\u5668\u51FD\u6570\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002\u3001</p><p>\u5982\u679C\u8981\u4F7F\u7528\u8BBF\u95EE\u5668\u51FD\u6570\u90A3\u4E48 get \u548C set \u8981\u4E00\u8D77\u4F7F\u7528\u3002</p><h3 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h3><p>Promise \u6784\u9020\u5668\u53C2\u6570\u4E0D\u80FD\u662F async\u3002</p><p>if \u8BED\u53E5\u7B49\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E0D\u80FD\u662F\u5E38\u91CF\u3002</p>`,112);function s(r,t){return n}var c=a(p,[["render",s]]);export{c as default};
