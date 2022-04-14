import{_ as p,e as a}from"./app.269ed0ef.js";const e={},i=a(`<h1 id="java-\u5F00\u53D1\u624B\u518C\u6458\u8981" tabindex="-1"><a class="header-anchor" href="#java-\u5F00\u53D1\u624B\u518C\u6458\u8981" aria-hidden="true">#</a> Java \u5F00\u53D1\u624B\u518C\u6458\u8981</h1><p>\u5DE6\u5C0F\u62EC\u53F7\u548C\u53F3\u8FB9\u76F8\u90BB\u5B57\u7B26\u4E4B\u95F4\u4E0D\u51FA\u73B0\u7A7A\u683C\uFF0C\u53F3\u5C0F\u62EC\u53F7\u548C\u5DE6\u8FB9\u76F8\u90BB\u5B57\u7B26\u4E4B\u95F4\u4E5F\u4E0D\u51FA\u73B0\u7A7A\u683C\uFF0C\u5DE6\u5927\u62EC\u53F7\u524D\u9700\u8981\u7A7A\u683C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>if/for/while/switch/do \u7B49\u4FDD\u7559\u5B57\u4E0E\u62EC\u53F7\u4E4B\u95F4\u5FC5\u987B\u52A0\u7A7A\u683C\u3002</p><p>\u4EFB\u4F55\u4E8C\u76EE\u3001\u4E09\u76EE\u8FD0\u7B97\u7B26\u5DE6\u53F3\u4E24\u8FB9\u90FD\u9700\u8981\u52A0\u4E00\u4E2A\u7A7A\u683C\u3002</p><p>\u5355\u884C\u5B57\u7B26\u8D85\u8FC7 120 \u4E2A\u540E\u9700\u8981\u6362\u884C\uFF0C\u539F\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E8C\u884C\u76F8\u5BF9\u7B2C\u4E00\u884C\u7F29\u8FDB\uFF0C\u4ECE\u7B2C\u4E09\u884C\u5F00\u59CB\u4E0D\u518D\u7F29\u8FDB\u3002</li><li>\u8FD0\u7B97\u7B26\u3001\u65B9\u6CD5\u8C03\u7528\u70B9\u7B26\u53F7\u4E0E\u4E0B\u6587\u4E00\u8D77\u6362\u884C\u3002</li><li>\u65B9\u6CD5\u8C03\u7528\u591A\u4E2A\u53C2\u6570\u9700\u8981\u6362\u884C\u65F6\uFF0C\u5728\u9017\u53F7\u540E\u8FDB\u884C\u3002</li><li>\u5728\u62EC\u53F7\u524D\u4E0D\u8981\u6362\u884C\u3002</li></ul><p>\u4EFB\u4F55\u8D27\u5E01\u91D1\u989D\uFF0C\u4EE5\u6700\u5C0F\u8D27\u5E01\u5355\u4F4D\u4E14\u6574\u6570\u7C7B\u578B\u6765\u8FDB\u884C\u5B58\u50A8\u3002</p><p>\u5173\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5305\u88C5\u6570\u636E\u7C7B\u578B\uFF1A</p><ul><li>\u6240\u6709\u7684 POJO \u7C7B\u5C5E\u6027\u5FC5\u987B\u4F7F\u7528\u5305\u88C5\u7C7B\u3002</li><li>RPC \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u548C\u53C2\u6570\u5FC5\u987B\u4F7F\u7528\u5305\u88C5\u6570\u636E\u7C7B\u578B\u3002</li><li>\u6240\u6709\u7684\u5C40\u90E8\u53D8\u91CF\u4F7F\u7528\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3002</li></ul><p>\u5B9A\u4E49 POJO \u7C7B\u65F6\uFF0C\u4E0D\u8981\u8BBE\u5B9A\u4EFB\u4F55\u5C5E\u6027\u9ED8\u8BA4\u503C\u3002</p><p>\u4E0D\u8981\u968F\u610F\u4FEE\u6539 serialVersionUID \u5B57\u6BB5\u3002</p><p>\u6784\u9020\u65B9\u6CD5\u4E2D\u7981\u6B62\u52A0\u5165\u4EFB\u4F55\u4E1A\u52A1\u903B\u8F91\uFF0C\u521D\u59CB\u5316\u65B9\u6CD5\u5E94\u8BE5\u653E\u5728init\u65B9\u6CD5\u4E2D\u3002</p><p>POJO \u7C7B\u5FC5\u987B\u5199 toString \u65B9\u6CD5\uFF0C\u5982\u679C\u5B58\u5728\u7EE7\u627F\uFF0C\u5219\u8FD8\u8981\u5728\u524D\u9762\u6DFB\u52A0\u7236\u7C7B toString\u3002</p><p>\u4F7F\u7528\u7D22\u5F15\u8BBF\u95EE String \u7684 split \u65B9\u6CD5\u5F97\u5230\u7684\u6570\u7EC4\u65F6\uFF0C\u8981\u5224\u65AD\u6700\u540E\u4E00\u4E2A\u5206\u9694\u7B26\u540E\u9762\u6709\u6CA1\u6709\u5185\u5BB9\u3002</p><p>\u7C7B\u6210\u5458\u4E0E\u65B9\u6CD5\u8BBF\u95EE\u63A7\u5236\u4ECE\u4E25\uFF1A\u5DE5\u5177\u7C7B\u4E0D\u5141\u8BB8\u6709 public \u6216 default \u6784\u9020\u65B9\u6CD5\u3002</p><p>\u65E5\u671F\u683C\u5F0F\u5316\u65F6\uFF0C\u4F20\u5165 pattern \u4E2D\u8868\u793A\u5E74\u4EFD\u7EDF\u4E00\u7528\u5C0F\u5199 y\uFF0CYYYY \u8868\u793A\u7684\u662F week in which year\uFF0C\u610F\u601D\u662F\u5F53\u5929\u6240\u5728\u7684\u5C5E\u4E8E\u7684\u5E74\u4EFD\uFF0C\u53EA\u8981\u8FD9\u5468\u8DE8\u5E74\uFF0CYYYY \u8FD4\u56DE\u7684\u5C31\u662F\u4E0B\u4E00\u5E74\u3002</p><p>\u5173\u4E8E equals \u548C hashCode\uFF0C\u9075\u5FAA\u4E0B\u9762\u7684\u89C4\u5219\uFF1A</p><ul><li>\u53EA\u8981\u8986\u5199 equals\uFF0C\u5C31\u5FC5\u987B\u8986\u5199 hashCode\u3002</li><li>Set \u5B58\u50A8\u7684\u5BF9\u8C61\u5FC5\u987B\u8986\u5199\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u3002</li><li>\u540C\u7406 Map \u7684\u952E\u5FC5\u987B\u91CD\u5199\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u3002</li></ul><p>\u5728\u4F7F\u7528 Collectors \u7C7B\u7684 toMap \u65B9\u6CD5\u8F6C\u4E3A Map \u96C6\u5408\u65F6\uFF0C\u8981\u4F7F\u7528\u542B\u6709\u53C2\u6570\u7C7B\u578B BinaryOperator \u7684\u65B9\u6CD5\uFF0C\u8FD9\u662F\u4E00\u4E2A\u51FD\u6570\u5F0F\u63A5\u53E3\uFF0C\u7EE7\u627F\u4E86 BiFunction \u63A5\u53E3\uFF0C\u5176\u4E2D\u7684 apply \u65B9\u6CD5\u63A5\u6536\u4E24\u4E2A\u7C7B\u578B\uFF0C\u8FD4\u56DE\u53E6\u4E00\u4E2A\u7C7B\u578B\u3002</p><p>\u96C6\u5408\u8F6C\u6570\u7EC4\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528 toArray(T[] array) \u65B9\u6CD5\uFF0C\u4F20\u5165\u7684\u662F\u7C7B\u578B\u4E00\u81F4\u3001\u957F\u5EA6\u4E3A 0 \u7684\u7A7A\u6570\u7EC4\uFF0C\u5982\u679C\u4F7F\u7528\u65E0\u53C2\u91CD\u8F7D\uFF0C\u5F3A\u8F6C\u4F1A\u51FA\u73B0 ClassCastException \u5F02\u5E38\u3002</p><p>\u4F7F\u7528 Arrays.asList() \u65B9\u6CD5\u5C06\u6570\u7EC4\u8F6C\u6362\u6210\u96C6\u5408\u65F6\uFF0C\u4E0D\u80FD\u4FEE\u6539\u8F6C\u6362\u540E\u7684\u6570\u7EC4\uFF0C\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p><p>SimpleDateFormat \u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF0C\u4E00\u822C\u4E0D\u8981\u5B9A\u4E49\u4E3A static\uFF0C\u6216\u8005\u52A0\u9501\uFF0C\u6216\u8005\u4F7F\u7528 DateUtils \u5DE5\u5177\u7C7B\u3002</p><p>JDK8 \u540E\uFF0C\u4F7F\u7528 Instant \u4EE3\u66FF Date\uFF0CLocalDateTime \u4EE3\u66FF Calendar\uFF0CDateTimeFormatter \u4EE3\u66FF SimpleDateFormat\u3002</p><p>\u9700\u8981\u5BF9\u591A\u4E2A\u8D44\u6E90\u8FDB\u884C\u52A0\u9501\u65F6\uFF0C\u9700\u8981\u4FDD\u6301\u4E00\u81F4\u7684\u52A0\u9501\u987A\u5E8F\uFF0C\u907F\u514D\u6B7B\u9501\u3002</p><p>\u6BCF\u6B21\u8BBF\u95EE\u51B2\u7A81\u6982\u7387\u5C0F\u4E8E 20%\uFF0C\u4F7F\u7528\u4E50\u89C2\u9501\uFF0C\u4E50\u89C2\u9501\u7684\u91CD\u8BD5\u6B21\u6570\u4E0D\u5C0F\u4E8E 3 \u6B21\u3002</p><p>\u60B2\u89C2\u9501\uFF1A\u4E00\u9501\u3001\u4E8C\u5224\u3001\u4E09\u66F4\u65B0\u3001\u56DB\u91CA\u653E\u3002</p><p>Random \u5B9E\u4F8B\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u4F1A\u7531\u4E8E\u591A\u7EBF\u7A0B\u7ADE\u4E89\u540C\u4E00 seed \u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u3002JDK7 \u4E4B\u540E\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ThreadLocalRandom\u3002</p><p>DCL \u5355\u4F8B\u6A21\u5F0F\u4E2D\uFF0C\u5355\u4F8B\u5BF9\u8C61\u5E94\u8BE5\u662F volatile\u3002</p><p>switch \u62EC\u53F7\u4E2D\u53D8\u91CF\u7C7B\u578B\u662F String \u65F6\uFF0C\u5FC5\u987B\u5148\u5224\u65AD null\u3002</p><p>\u5E76\u53D1\u73AF\u5883\u4E2D\uFF0C\u907F\u514D\u4F7F\u7528\u201C\u7B49\u4E8E\u201D\u5224\u65AD\u4F5C\u4E3A\u4E2D\u65AD\u6216\u9000\u51FA\u6761\u4EF6\u3002</p><p>\u5C06\u590D\u6742\u7684\u903B\u8F91\u5224\u65AD\u7ED3\u679C\u8D4B\u503C\u7ED9\u4E00\u4E2A\u6709\u610F\u4E49\u7684\u5E03\u5C14\u53D8\u91CF\u540D\u3002</p><p>\u4E0D\u8981\u5728\u5176\u4ED6\u8868\u8FBE\u5F0F\u4E2D\u63D2\u5165\u8D4B\u503C\u8BED\u53E5\u3002</p><p>\u907F\u514D\u53D6\u53CD\u903B\u8F91\u3002</p><p>\u65B9\u6CD5\u5185\u90E8\u5355\u884C\u6CE8\u91CA\uFF0C\u5728\u88AB\u6CE8\u91CA\u8BED\u53E5\u4E0A\u65B9\u53E6\u8D77\u4E00\u884C\u3002</p><p>\u5F85\u529E\u4E8B\u9879 TODO\uFF1A\u6807\u8BB0\u4EBA\uFF0C\u6807\u8BB0\u65F6\u95F4\u3002\u8868\u793A\u9700\u8981\u5B9E\u73B0\u4F46\u8FD8\u6CA1\u6709\u5B9E\u73B0\u7684\u529F\u80FD\u3002</p><p>\u9519\u8BEF FIXME\uFF1A\u6807\u8BB0\u4EBA\uFF0C\u6807\u8BB0\u65F6\u95F4\u3002\u8868\u793A\u67D0\u6BB5\u4EE3\u7801\u662F\u9519\u8BEF\u7684\uFF0C\u800C\u4E14\u4E0D\u80FD\u5DE5\u4F5C\u3002</p><p>\u524D\u540E\u7AEF\u4EA4\u4E92 API \u9700\u8981\u660E\u786E\u534F\u8BAE\u3001\u57DF\u540D\u3001\u8DEF\u5F84\u3001\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42\u5185\u5BB9\u3001\u72B6\u6001\u7801\u3001\u54CD\u5E94\u4F53\u3002</p><p>body \u91CC\u5E26\u53C2\u6570\u65F6\u5FC5\u987B\u8BBE\u7F6E Content-Type\u3002</p><p>\u5982\u679C\u8FD4\u56DE\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE\u7A7A\u6570\u7EC4\u6216\u7A7A\u96C6\u5408\u3002</p><p>\u670D\u52A1\u7AEF\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u8FD4\u56DE\u7684\u76F8\u5E94\u4FE1\u606F\u5FC5\u987B\u5305\u542B HTTP \u72B6\u6001\u7801\uFF0CerrorCode\u3001errorMessage\u3001\u7528\u6237\u63D0\u793A\u4FE1\u606F\u56DB\u4E2A\u90E8\u5206\u3002</p><p>\u524D\u540E\u7AEF\u4EA4\u4E92\u7684 JSON \u4E2D\uFF0C\u6240\u6709\u7684 key \u5FC5\u987B\u4E3A\u5C0F\u9A7C\u5CF0\u3002</p><p>\u8D85\u5927\u6574\u6570\u573A\u666F\uFF0C\u4E00\u5F8B\u4F7F\u7528 String \u7C7B\u578B\u8FD4\u56DE\u3002</p><p>\u4F7F\u7528 query \u53C2\u6570\u65F6\uFF0CURL \u4E0D\u80FD\u8D85\u8FC7 2048 \u5B57\u8282\u3002</p><p>\u901A\u8FC7 body \u4F20\u9012\u5185\u5BB9\u65F6\u4E5F\u8981\u63A7\u5236\u957F\u5EA6\u3002</p><p>\u670D\u52A1\u5668\u5185\u90E8\u91CD\u5B9A\u5411\u5FC5\u987B\u4F7F\u7528 forward\uFF0C\u5916\u90E8\u91CD\u5B9A\u5411\u5730\u5740\u5FC5\u987B\u4F7F\u7528 URL \u7EDF\u4E00\u4EE3\u7406\u6A21\u5757\u751F\u6210\u3002</p><p>\u5BF9\u4E8E trace/debug/info \u7EA7\u522B\u7684\u65E5\u5FD7\u8F93\u51FA\uFF0C\u5FC5\u987B\u8FDB\u884C\u65E5\u5FD7\u7EA7\u522B\u5F00\u5173\u7684\u5224\u65AD\u3002</p><p>\u65E5\u5FD7\u6253\u5370\u65F6\u7981\u6B62\u4F7F\u7528 JSON \u5DE5\u5177\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A String\uFF0C\u76F4\u63A5\u8C03\u7528 toString \u5373\u53EF\u3002</p><p>\u5355\u5143\u6D4B\u8BD5 AIR \u539F\u5219\uFF1A</p><ul><li>A\uFF1AAutomatic \u81EA\u52A8\u5316\u3002</li><li>I\uFF1AIndependent \u72EC\u7ACB\u6027\u3002</li><li>R\uFF1ARepeatable \u53EF\u91CD\u590D\u3002</li></ul><p>\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u4E4B\u95F4\u51B3\u4E0D\u80FD\u4E92\u76F8\u8C03\u7528\uFF0C\u4E5F\u4E0D\u80FD\u4F9D\u8D56\u6267\u884C\u7684\u5148\u540E\u6B21\u5E8F\u3002</p><p>\u5355\u5143\u6D4B\u8BD5 BCDE \u539F\u5219\uFF1A</p><ul><li>B\uFF1ABorder \u8FB9\u754C\u503C\u6D4B\u8BD5\u3002</li><li>C\uFF1ACorrect \u6B63\u786E\u7684\u8F93\u5165\uFF0C\u5E76\u5F97\u5230\u9884\u671F\u7684\u7ED3\u679C\u3002</li><li>D\uFF1ADesign \u4E0E\u8BBE\u8BA1\u6587\u6863\u76F8\u7ED3\u5408\u6765\u7F16\u5199\u5355\u5143\u6D4B\u8BD5\u3002</li><li>E\uFF1AError \u5F3A\u5236\u9519\u8BEF\u4FE1\u606F\u8F93\u5165\uFF0C\u5E76\u5F97\u5230\u9884\u671F\u7ED3\u679C\u3002</li></ul><p>\u5C5E\u4E8E\u7528\u6237\u4E2A\u4EBA\u7684\u9875\u9762\u6216\u8005\u529F\u80FD\u5FC5\u987B\u8FDB\u884C\u6743\u9650\u63A7\u5236\u6821\u9A8C\u3002</p><p>\u7528\u6237\u654F\u611F\u6570\u636E\u7981\u6B62\u76F4\u63A5\u5C55\u793A\uFF0C\u5FC5\u987B\u5BF9\u5C55\u793A\u6570\u636E\u8FDB\u884C\u8131\u654F\u3002</p><p>\u7528\u6237\u4F20\u5165\u7684\u4EFB\u4F55\u53C2\u6570\u5FC5\u987B\u505A\u6709\u6548\u6027\u9A8C\u8BC1\u3002</p><p>URL \u5916\u90E8\u91CD\u5B9A\u5411\u4F20\u5165\u7684\u76EE\u6807\u5730\u5740\u5FC5\u987B\u6267\u884C\u767D\u540D\u5355\u8FC7\u6EE4\u3002</p><p>\u4F7F\u7528\u5E73\u53F0\u8D44\u6E90\u5982\u77ED\u4FE1\u9A8C\u8BC1\u7801\u65F6\uFF0C\u5FC5\u987B\u5B9E\u73B0\u6B63\u786E\u7684\u653E\u91CD\u653E\u673A\u5236\uFF0C\u9632\u6B62\u8FC7\u91CF\u6D6A\u8D39\u8D44\u6E90\u3002</p><p>\u6570\u636E\u5E93\u4E2D\u8868\u8FBE\u662F\u4E0E\u5426\u6982\u5FF5\u7684\u5B57\u6BB5\uFF0C\u5FC5\u987B\u4F7F\u7528 is_xxx \u547D\u540D\u3002</p><p>\u8868\u540D\u3001\u5B57\u6BB5\u540D\u5FC5\u987B\u4F7F\u7528\u5C0F\u5199\u5B57\u6BCD\u6216\u6570\u5B57\uFF0C\u7981\u6B62\u6570\u5B57\u5F00\u5934\uFF0C\u7981\u6B62\u4E24\u4E2A\u4E0B\u5212\u7EBF\u4E4B\u95F4\u53EA\u51FA\u73B0\u6570\u5B57\u3002</p><p>\u8868\u540D\u4E0D\u4F7F\u7528\u590D\u6570\u540D\u8BCD\uFF0C\u7981\u7528\u4FDD\u7559\u5B57\u3002</p><p>\u5C0F\u6570\u7C7B\u578B\u4E3A decimal\u3002</p><p>\u5982\u679C\u5B58\u50A8\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u51E0\u4E4E\u76F8\u7B49\uFF0C\u4F7F\u7528 char\u3002</p><p>varchar \u957F\u5EA6\u4E0D\u8981\u8D85\u8FC7 5000\uFF0C\u5927\u4E8E\u6B64\u503C\u5E94\u5F53\u4F7F\u7528 text\u3002</p><p>\u5206\u5C42\u9886\u57DF\u6A21\u578B\u89C4\u7EA6\uFF1A</p><ul><li>DO\uFF08Data Object\uFF09\uFF1A\u6B64\u5BF9\u8C61\u4E0E\u6570\u636E\u5E93\u8868\u7ED3\u6784\u4E00\u4E00\u5BF9\u5E94\uFF0C\u901A\u8FC7 DAO \u5C42\u5411\u4E0A\u4F20\u8F93\u6570\u636E\u6E90\u5BF9\u8C61\u3002</li><li>DTO\uFF08Data Transfer Object\uFF09\uFF1A\u6570\u636E\u4F20\u8F93\u5BF9\u8C61\uFF0CService \u6216 Manager \u5411\u5916\u4F20\u8F93\u7684\u5BF9\u8C61\u3002</li><li>BO\uFF08Business Object\uFF09\uFF1A\u4E1A\u52A1\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7531 Service \u5C42\u8F93\u51FA\u7684\u5C01\u88C5\u4E1A\u52A1\u903B\u8F91\u7684\u5BF9\u8C61\u3002</li><li>Query\uFF1A\u6570\u636E\u67E5\u8BE2\u5BF9\u8C61\uFF0C\u5404\u5C42\u63A5\u6536\u4E0A\u5C42\u7684\u67E5\u8BE2\u8BF7\u6C42\u3002</li><li>VO\uFF08View Object\uFF09\uFF1A\u663E\u793A\u5C42\u5BF9\u8C61\uFF0C\u901A\u5E38\u662F Web \u5411\u6A21\u677F\u6E32\u67D3\u5F15\u64CE\u5C42\u4F20\u8F93\u7684\u5BF9\u8C61\u3002</li></ul>`,66);function l(t,n){return i}var s=p(e,[["render",l]]);export{s as default};
