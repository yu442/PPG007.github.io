import{_ as a,e as n}from"./app.269ed0ef.js";const s={},e=n(`<h1 id="\u4F7F\u7528\u6CE8\u89E3\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6CE8\u89E3\u5F00\u53D1" aria-hidden="true">#</a> \u4F7F\u7528\u6CE8\u89E3\u5F00\u53D1</h1><ul><li>\u5728 Spring4 \u4EE5\u540E\uFF0C\u8981\u60F3\u4F7F\u7528\u6CE8\u89E3\uFF0C\u5FC5\u987B\u4FDD\u8BC1 aop \u5305\u5BFC\u5165\u3002</li><li>\u4F7F\u7528\u6CE8\u89E3\u9700\u8981\u5BFC\u5165 context \u7EA6\u675F\uFF0C\u5E76\u4E14\u5F00\u542F\u6CE8\u89E3\u7684\u652F\u6301\u3002</li></ul><h2 id="\u5E38\u7528\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u6CE8\u89E3" aria-hidden="true">#</a> \u5E38\u7528\u6CE8\u89E3</h2><ul><li><p>@Autowired\uFF1A</p><p>\u81EA\u52A8\u88C5\u914D\u6CE8\u89E3\uFF0C\u901A\u8FC7ByType\u5B9E\u73B0\u3002</p></li><li><p>@Resource\uFF1A</p><p>\u81EA\u52A8\u88C5\u914D\u6CE8\u89E3\uFF0C\u9ED8\u8BA4ByName\uFF0C\u4E5F\u4F1AByType\u3002</p></li><li><p>@Nullable\uFF1A</p><p>\u53EF\u4E3A\u7A7A\u6CE8\u89E3\u3002</p></li><li><p>@Component\uFF1A</p><p>\u7EC4\u4EF6\u6CE8\u89E3\uFF0C\u9700\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5F00\u542F\u7EC4\u4EF6\u626B\u63CF\uFF0C\u76F8\u5F53\u4E8E\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6CE8\u518Cbean\uFF0C\u9ED8\u8BA4\u540D\u5B57\u662F\u7C7B\u540D\u7684\u5C0F\u5199\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pojo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>@Value\uFF1A</p><p>\u52A0\u5728\u7C7B\u5C5E\u6027\u6216\u65B9\u6CD5\u4E0A\uFF0C\u4E3A\u7B80\u5355\u7C7B\u578B\u7684\u6210\u5458\u8D4B\u503C\uFF0C\u4E0D\u9002\u7528\u4E8E\u590D\u6742\u7C7B\u578B\u5982 List\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>@Scope\uFF1A</p><p>\u8BBE\u7F6E\u4F5C\u7528\u57DF\uFF08\u5355\u4F8B\u3001\u539F\u578B\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;singleton&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h2 id="\u884D\u751F\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u884D\u751F\u6CE8\u89E3" aria-hidden="true">#</a> \u884D\u751F\u6CE8\u89E3</h2><p><code>@Component</code> \u7684\u76F8\u5173\u6CE8\u89E3\uFF1A</p><p>\u5728web\u5F00\u53D1\u4E2D\uFF0C\u4F9D\u7167MVC\u4E09\u5C42\u67B6\u6784\u5206\u5C42\uFF1A</p><ul><li>DAO \u5C42\u4E2D\uFF0C\u4F7F\u7528 <code>@Repository</code> \u6CE8\u89E3\u3002</li><li>Service \u5C42\u4E2D\uFF0C\u4F7F\u7528 <code>@Service</code> \u6CE8\u89E3\u3002</li><li>controller \u5C42\u4E2D\uFF0C\u4F7F\u7528 <code>@Controller</code> \u6CE8\u89E3\u3002</li></ul><p>\u4E0A\u8FF0\u6CE8\u89E3\u529F\u80FD\u4E00\u81F4\uFF0C\u4EE3\u8868\u5C06\u67D0\u4E2A\u7C7B\u6CE8\u518C\u5230 Spring \u4E2D\u3002</p>`,9);function p(t,l){return e}var c=a(s,[["render",p]]);export{c as default};
