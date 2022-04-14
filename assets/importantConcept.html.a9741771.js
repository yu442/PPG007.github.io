import{_ as n,e as a}from"./app.269ed0ef.js";const s={},p=a(`<h1 id="\u91CD\u8981\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u6982\u5FF5" aria-hidden="true">#</a> \u91CD\u8981\u6982\u5FF5</h1><ul><li><p>\u6240\u6709\u53D8\u91CF\u5F15\u7528\u7684\u90FD\u662F\u5BF9\u8C61\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u662F\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u3002\u6570\u5B57\u3001\u51FD\u6570\u4EE5\u53CA null \u90FD\u662F\u5BF9\u8C61\u3002\u9664\u53BB null \u4EE5\u5916\uFF08\u5982\u679C\u4F60\u5F00\u542F\u4E86\u7A7A\u5B89\u5168\uFF09, \u6240\u6709\u7684\u7C7B\u90FD\u7EE7\u627F\u4E8E Object \u7C7B\u3002\u7A7A\u5B89\u5168\u5728 2.12 \u7248\u672C\u88AB\u5F15\u5165\u3002</p></li><li><p>Dart \u662F\u5F3A\u7C7B\u578B\u8BED\u8A00\uFF0C \u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 var \u81EA\u52A8\u63A8\u65AD\u3002</p></li><li><p>\u5982\u679C\u5F00\u542F\u4E86\u7A7A\u5B89\u5168\uFF0C\u5BF9\u4E8E\u4E0D\u80FD\u4E3A null \u7684\u7C7B\u578B\uFF0C\u4E0D\u80FD\u8D4B\u503C\u4E3A null\uFF0C\u4F8B\u5982 int\uFF0C\u4F46\u662F\u53EF\u4EE5\u5728\u7C7B\u578B\u540E\u9762\u52A0\u4E0A\u95EE\u53F7\u5C06\u7C7B\u578B\u58F0\u660E\u4E3A\u53EF\u4EE5\u662F\u539F\u7C7B\u578B\u4E5F\u53EF\u4EE5\u662F null\uFF0C\u4F8B\u5982 <code>int? a = null;</code>\uFF0C\u5982\u679C\u4F60\u660E\u786E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4E0D\u4F1A\u4E3A\u7A7A\uFF0C\u4F46\u662F\u7F16\u8BD1\u5668\u4E0D\u8FD9\u4E48\u8BA4\u4E3A\uFF0C\u53EF\u4EE5\u5728\u8868\u8FBE\u5F0F\u540E\u9762\u6DFB\u52A0\u53F9\u53F7\u8868\u793A\u65AD\u8A00\uFF0C\u4F8B\u5982\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int<span class="token operator">?</span> <span class="token function">nullAbleButNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    int a <span class="token operator">=</span> <span class="token function">nullAbleButNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>\u5982\u679C\u8981\u663E\u5F0F\u5730\u58F0\u660E\u5141\u8BB8\u4EFB\u610F\u7C7B\u578B\uFF0C\u4F7F\u7528 Object?\uFF08\u5982\u679C\u5F00\u542F\u4E86\u7A7A\u5B89\u5168\uFF09\u3001 Object \u6216\u8005\u7279\u6B8A\u7C7B\u578B dynamic \u5C06\u68C0\u67E5\u5EF6\u8FDF\u5230\u8FD0\u884C\u65F6\u8FDB\u884C\u3002</p></li><li><p>Dart \u652F\u6301\u6CDB\u578B\u3002</p></li><li><p>Dart \u652F\u6301\u9876\u7EA7\u51FD\u6570\uFF08main\uFF09\u3001\u9759\u6001\u65B9\u6CD5\u3001\u5B9E\u4F8B\u65B9\u6CD5\u3002</p></li><li><p>Dart \u652F\u6301\u9876\u7EA7\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5B9E\u4F8B\u53D8\u91CF\u3002</p></li><li><p>Dart \u4E2D\u5982\u679C\u4E00\u4E2A\u6807\u8BC6\u7B26\u4EE5\u4E0B\u5212\u7EBF\u5F00\u5934\u5219\u8868\u793A\u662F\u5E93\u5185\u79C1\u6709\u7684</p></li><li><p>Dart \u4E2D\u6807\u8BC6\u7B26\u53EF\u4EE5\u4EE5\u5B57\u6BCD\u6216\u8005\u4E0B\u5212\u7EBF\u5F00\u5934\u3002</p></li></ul>`,2);function t(l,e){return p}var o=n(s,[["render",t]]);export{o as default};
