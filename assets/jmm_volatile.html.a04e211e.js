import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="jmm-\u4E0E-volatile" tabindex="-1"><a class="header-anchor" href="#jmm-\u4E0E-volatile" aria-hidden="true">#</a> JMM \u4E0E volatile</h1><h2 id="\u4EC0\u4E48\u662F-jmm" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-jmm" aria-hidden="true">#</a> \u4EC0\u4E48\u662F JMM</h2><p>JMM \u5373\u4E3A JAVA <strong>\u5185\u5B58\u6A21\u578B</strong>\uFF08java memory model\uFF09\u3002\u56E0\u4E3A\u5728\u4E0D\u540C\u7684\u786C\u4EF6\u751F\u4EA7\u5546\u548C\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E0B\uFF0C\u5185\u5B58\u7684\u8BBF\u95EE\u903B\u8F91\u6709\u4E00\u5B9A\u7684\u5DEE\u5F02\uFF0C\u7ED3\u679C\u5C31\u662F\u5F53\u4F60\u7684\u4EE3\u7801\u5728\u67D0\u4E2A\u7CFB\u7EDF\u73AF\u5883\u4E0B\u8FD0\u884C\u826F\u597D\uFF0C\u5E76\u4E14\u7EBF\u7A0B\u5B89\u5168\uFF0C\u4F46\u662F\u6362\u4E86\u4E2A\u7CFB\u7EDF\u5C31\u51FA\u73B0\u5404\u79CD\u95EE\u9898\u3002Java \u5185\u5B58\u6A21\u578B\uFF0C\u5C31\u662F\u4E3A\u4E86\u5C4F\u853D\u7CFB\u7EDF\u548C\u786C\u4EF6\u7684\u5DEE\u5F02\uFF0C\u8BA9\u4E00\u5957\u4EE3\u7801\u5728\u4E0D\u540C\u5E73\u53F0\u4E0B\u80FD\u5230\u8FBE\u76F8\u540C\u7684\u8BBF\u95EE\u7ED3\u679C\u3002</p><h2 id="\u5185\u5B58\u5212\u5206" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u5212\u5206" aria-hidden="true">#</a> \u5185\u5B58\u5212\u5206</h2><p>JMM \u89C4\u5B9A\u4E86\u5185\u5B58\u4E3B\u8981\u5212\u5206\u4E3A<strong>\u4E3B\u5185\u5B58</strong>\u548C<strong>\u5DE5\u4F5C\u5185\u5B58</strong>\u4E24\u79CD\u3002\u6B64\u5904\u7684\u4E3B\u5185\u5B58\u548C\u5DE5\u4F5C\u5185\u5B58\u8DDF JVM \u5185\u5B58\u5212\u5206\uFF08\u5806\u3001\u6808\u3001\u65B9\u6CD5\u533A\uFF09\u662F\u5728\u4E0D\u540C\u7684\u5C42\u6B21\u4E0A\u8FDB\u884C\u7684\uFF0C\u5982\u679C\u975E\u8981\u5BF9\u5E94\u8D77\u6765\uFF0C\u4E3B\u5185\u5B58\u5BF9\u5E94\u7684\u662F Java \u5806\u4E2D\u7684\u5BF9\u8C61\u5B9E\u4F8B\u90E8\u5206\uFF0C\u5DE5\u4F5C\u5185\u5B58\u5BF9\u5E94\u7684\u662F\u6808\u4E2D\u7684\u90E8\u5206\u533A\u57DF\uFF0C\u4ECE\u66F4\u5E95\u5C42\u7684\u6765\u8BF4\uFF0C<em>\u4E3B\u5185\u5B58\u5BF9\u5E94\u7684\u662F\u786C\u4EF6\u7684\u7269\u7406\u5185\u5B58\uFF0C\u5DE5\u4F5C\u5185\u5B58\u5BF9\u5E94\u7684\u662F\u5BC4\u5B58\u5668\u548C\u9AD8\u901F\u7F13\u5B58\u3002</em></p><p>JVM \u5728\u8BBE\u8BA1\u65F6\u5019\u8003\u8651\u5230\uFF0C\u5982\u679C JAVA \u7EBF\u7A0B\u6BCF\u6B21\u8BFB\u53D6\u548C\u5199\u5165\u53D8\u91CF\u90FD\u76F4\u63A5\u64CD\u4F5C\u4E3B\u5185\u5B58\uFF0C\u5BF9\u6027\u80FD\u5F71\u54CD\u6BD4\u8F83\u5927\uFF0C\u6240\u4EE5\u6BCF\u6761\u7EBF\u7A0B\u62E5\u6709\u5404\u81EA\u7684\u5DE5\u4F5C\u5185\u5B58\uFF0C<em>\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u662F\u4E3B\u5185\u5B58\u4E2D\u7684\u4E00\u4EFD\u62F7\u8D1D</em>\uFF0C\u7EBF\u7A0B\u5BF9\u53D8\u91CF\u7684\u8BFB\u53D6\u548C\u5199\u5165\uFF0C\u76F4\u63A5\u5728<strong>\u5DE5\u4F5C\u5185\u5B58</strong>\u4E2D\u64CD\u4F5C\uFF0C\u800C\u4E0D\u80FD\u76F4\u63A5\u53BB\u64CD\u4F5C\u4E3B\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u3002\u4F46\u662F\u8FD9\u6837\u5C31\u4F1A\u51FA\u73B0\u4E00\u4E2A\u95EE\u9898\uFF0C\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u81EA\u5DF1\u5DE5\u4F5C\u5185\u5B58\u4E2D\u53D8\u91CF\uFF0C\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u4F1A\u5BFC\u81F4\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\u95EE\u9898\u3002\u56E0\u4E3AJMM\u5236\u5B9A\u4E86\u4E00\u5957\u6807\u51C6\u6765\u4FDD\u8BC1\u5F00\u53D1\u8005\u5728\u7F16\u5199\u591A\u7EBF\u7A0B\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u80FD\u591F\u63A7\u5236\u4EC0\u4E48\u65F6\u5019\u5185\u5B58\u4F1A\u88AB\u540C\u6B65\u7ED9\u5176\u4ED6\u7EBF\u7A0B\u3002</p><h2 id="\u516B\u79CD\u5185\u5B58\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u516B\u79CD\u5185\u5B58\u64CD\u4F5C" aria-hidden="true">#</a> \u516B\u79CD\u5185\u5B58\u64CD\u4F5C</h2><ol><li>lock\uFF08\u9501\u5B9A\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u4E3B\u5185\u5B58</strong>\u7684\u53D8\u91CF\uFF0C\u628A\u4E00\u4E2A\u53D8\u91CF\u6807\u8BC6\u4E3A\u7EBF\u7A0B\u72EC\u5360\u72B6\u6001\u3002</li><li>unlock\uFF08\u89E3\u9501\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u4E3B\u5185\u5B58</strong>\u7684\u53D8\u91CF\uFF0C\u5B83\u628A\u4E00\u4E2A\u5904\u4E8E\u9501\u5B9A\u72B6\u6001\u7684\u53D8\u91CF\u91CA\u653E\u51FA\u6765\uFF0C\u91CA\u653E\u540E\u7684\u53D8\u91CF\u624D\u53EF\u4EE5\u88AB\u5176\u4ED6\u7EBF\u7A0B\u9501\u5B9A\u3002</li><li>read\uFF08\u8BFB\u53D6\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u4E3B\u5185\u5B58</strong>\u53D8\u91CF\uFF0C\u5B83\u628A\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u4ECE\u4E3B\u5185\u5B58\u4F20\u8F93\u5230\u7EBF\u7A0B\u7684\u5DE5\u4F5C\u5185\u5B58\u4E2D\uFF0C\u4EE5\u4FBF\u968F\u540E\u7684 load \u52A8\u4F5C\u4F7F\u7528\u3002</li><li>load\uFF08\u8F7D\u5165\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u5DE5\u4F5C\u5185\u5B58</strong>\u7684\u53D8\u91CF\uFF0C\u5B83\u628A read \u64CD\u4F5C\u4ECE\u4E3B\u5B58\u4E2D\u53D8\u91CF\u653E\u5165\u5DE5\u4F5C\u5185\u5B58\u4E2D\u3002</li><li>use\uFF08\u4F7F\u7528\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u5DE5\u4F5C\u5185\u5B58</strong>\u4E2D\u7684\u53D8\u91CF\uFF0C\u5B83\u628A\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\u4F20\u8F93\u7ED9\u6267\u884C\u5F15\u64CE\uFF0C\u6BCF\u5F53\u865A\u62DF\u673A\u9047\u5230\u4E00\u4E2A\u9700\u8981\u4F7F\u7528\u5230\u53D8\u91CF\u7684\u503C\uFF0C\u5C31\u4F1A\u4F7F\u7528\u5230\u8FD9\u4E2A\u6307\u4EE4\u3002</li><li>assign\uFF08\u8D4B\u503C\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u5DE5\u4F5C\u5185\u5B58</strong>\u4E2D\u7684\u53D8\u91CF\uFF0C\u5B83\u628A\u4E00\u4E2A\u4ECE\u6267\u884C\u5F15\u64CE\u4E2D\u63A5\u53D7\u5230\u7684\u503C\u653E\u5165\u5DE5\u4F5C\u5185\u5B58\u7684\u53D8\u91CF\u526F\u672C\u4E2D\u3002</li><li>store\uFF08\u5B58\u50A8\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u4E3B\u5185\u5B58</strong>\u4E2D\u7684\u53D8\u91CF\uFF0C\u5B83\u628A\u4E00\u4E2A\u4ECE\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\u4F20\u9001\u5230\u4E3B\u5185\u5B58\u4E2D\uFF0C\u4EE5\u4FBF\u540E\u7EED\u7684 write \u4F7F\u7528\u3002</li><li>write\uFF08\u5199\u5165\uFF09\uFF1A\u4F5C\u7528\u4E8E<strong>\u4E3B\u5185\u5B58</strong>\u4E2D\u7684\u53D8\u91CF\uFF0C\u5B83\u628A store \u64CD\u4F5C\u4ECE\u5DE5\u4F5C\u5185\u5B58\u4E2D\u5F97\u5230\u7684\u53D8\u91CF\u7684\u503C\u653E\u5165\u4E3B\u5185\u5B58\u7684\u53D8\u91CF\u4E2D\u3002</li></ol><h2 id="jmm-\u5BF9\u516B\u5927\u5185\u5B58\u64CD\u4F5C\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#jmm-\u5BF9\u516B\u5927\u5185\u5B58\u64CD\u4F5C\u7684\u89C4\u5219" aria-hidden="true">#</a> JMM \u5BF9\u516B\u5927\u5185\u5B58\u64CD\u4F5C\u7684\u89C4\u5219</h2><ul><li>\u4E0D\u5141\u8BB8 read \u548C load\u3001store \u548C write \u64CD\u4F5C\u4E4B\u4E00\u5355\u72EC\u51FA\u73B0\u3002\u5373\u4F7F\u7528\u4E86 read \u5FC5\u987B load\uFF0C\u4F7F\u7528\u4E86 store \u5FC5\u987B write\u3002</li><li>\u4E0D\u5141\u8BB8\u7EBF\u7A0B\u4E22\u5F03\u4ED6\u6700\u8FD1\u7684 assign \u64CD\u4F5C\uFF0C\u5373\u5DE5\u4F5C\u53D8\u91CF\u7684\u6570\u636E\u6539\u53D8\u4E86\u4E4B\u540E\uFF0C\u5FC5\u987B\u544A\u77E5\u4E3B\u5B58\u3002</li><li>\u4E0D\u5141\u8BB8\u4E00\u4E2A\u7EBF\u7A0B\u5C06\u6CA1\u6709 assign\u7684 \u6570\u636E\u4ECE\u5DE5\u4F5C\u5185\u5B58\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\u3002</li><li>\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u5FC5\u987B\u5728\u4E3B\u5185\u5B58\u4E2D\u8BDE\u751F\uFF0C\u4E0D\u5141\u8BB8\u5DE5\u4F5C\u5185\u5B58\u76F4\u63A5\u4F7F\u7528\u4E00\u4E2A\u672A\u88AB\u521D\u59CB\u5316\u7684\u53D8\u91CF\u3002\u5C31\u662F\u603C\u53D8\u91CF\u5B9E\u65BD use\u3001store \u64CD\u4F5C\u4E4B\u524D\uFF0C\u5FC5\u987B\u7ECF\u8FC7 assign \u548C load \u64CD\u4F5C\u3002</li><li>\u4E00\u4E2A\u53D8\u91CF\u540C\u4E00\u65F6\u95F4\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u80FD\u5BF9\u5176\u8FDB\u884C lock\u3002\u591A\u6B21 lock \u540E\uFF0C\u5FC5\u987B\u6267\u884C\u76F8\u540C\u6B21\u6570\u7684 unlock \u624D\u80FD\u89E3\u9501\u3002</li><li>\u5982\u679C\u5BF9\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C lock \u64CD\u4F5C\uFF0C\u4F1A\u6E05\u7A7A\u6240\u6709\u5DE5\u4F5C\u5185\u5B58\u4E2D\u6B64\u53D8\u91CF\u7684\u503C\uFF0C\u5728\u6267\u884C\u5F15\u64CE\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\u524D\uFF0C\u5FC5\u987B\u91CD\u65B0 load \u6216 assign \u64CD\u4F5C\u521D\u59CB\u5316\u53D8\u91CF\u7684\u503C\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u6CA1\u6709\u88AB lock\uFF0C\u5C31\u4E0D\u80FD\u5BF9\u5176\u8FDB\u884C unlock \u64CD\u4F5C\u3002\u4E5F\u4E0D\u80FD unlock \u4E00\u4E2A\u88AB\u5176\u4ED6\u7EBF\u7A0B\u9501\u4F4F\u7684\u53D8\u91CF\u3002</li><li>\u5BF9\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C unlock \u64CD\u4F5C\u4E4B\u524D\uFF0C\u5FC5\u987B\u628A\u6B64\u53D8\u91CF\u540C\u6B65\u56DE\u4E3B\u5185\u5B58\u3002</li></ul><h2 id="jmm-\u6A21\u578B\u7279\u5F81" tabindex="-1"><a class="header-anchor" href="#jmm-\u6A21\u578B\u7279\u5F81" aria-hidden="true">#</a> JMM \u6A21\u578B\u7279\u5F81</h2><h3 id="\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#\u539F\u5B50\u6027" aria-hidden="true">#</a> \u539F\u5B50\u6027</h3><p>\u4F8B\u5982\u4E0A\u9762\u516B\u9879\u64CD\u4F5C\uFF0C\u5728\u64CD\u4F5C\u7CFB\u7EDF\u91CC\u9762\u662F\u4E0D\u53EF\u5206\u5272\u7684\u5355\u5143\u3002\u88AB synchronized \u5173\u952E\u5B57\u6216\u5176\u4ED6\u9501\u5305\u88F9\u8D77\u6765\u7684\u64CD\u4F5C\u4E5F\u53EF\u4EE5\u8BA4\u4E3A\u662F\u539F\u5B50\u7684\u3002\u4ECE\u4E00\u4E2A\u7EBF\u7A0B\u89C2\u5BDF\u53E6\u5916\u4E00\u4E2A\u7EBF\u7A0B\u7684\u65F6\u5019\uFF0C\u770B\u5230\u7684\u90FD\u662F\u4E00\u4E2A\u4E2A\u539F\u5B50\u6027\u7684\u64CD\u4F5C\u3002</p><h3 id="\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C1\u6027" aria-hidden="true">#</a> \u53EF\u89C1\u6027</h3><p>\u6BCF\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\uFF0C\u6240\u4EE5\u5F53\u67D0\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u5B8C\u67D0\u4E2A\u53D8\u91CF\u4E4B\u540E\uFF0C\u5728\u5176\u4ED6\u7684\u7EBF\u7A0B\u4E2D\uFF0C\u672A\u5FC5\u80FD\u89C2\u5BDF\u5230\u8BE5\u53D8\u91CF\u5DF2\u7ECF\u88AB\u4FEE\u6539\u3002volatile \u5173\u952E\u5B57\u8981\u6C42\u88AB\u4FEE\u6539\u4E4B\u540E\u7684\u53D8\u91CF\u8981\u6C42\u7ACB\u5373\u66F4\u65B0\u5230\u4E3B\u5185\u5B58\uFF0C\u6BCF\u6B21\u4F7F\u7528\u524D\u4ECE\u4E3B\u5185\u5B58\u5904\u8FDB\u884C\u8BFB\u53D6\u3002\u56E0\u6B64 volatile \u53EF\u4EE5\u4FDD\u8BC1\u53EF\u89C1\u6027\u3002\u9664\u4E86 volatile \u4EE5\u5916\uFF0Csynchronized \u548C final \u4E5F\u80FD\u5B9E\u73B0\u53EF\u89C1\u6027\u3002synchronized \u4FDD\u8BC1 unlock \u4E4B\u524D\u5FC5\u987B\u5148\u628A\u53D8\u91CF\u5237\u65B0\u56DE\u4E3B\u5185\u5B58\u3002final \u4FEE\u9970\u7684\u5B57\u6BB5\u5728\u6784\u9020\u5668\u4E2D\u4E00\u65E6\u5B8C\u6210\u521D\u59CB\u5316\uFF0C\u5E76\u4E14\u6784\u9020\u5668\u6CA1\u6709 this \u9038\u51FA\uFF0C\u90A3\u4E48\u5176\u4ED6\u7EBF\u7A0B\u5C31\u80FD\u770B\u5230 final \u5B57\u6BB5\u7684\u503C\u3002</p><h3 id="\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#\u6709\u5E8F\u6027" aria-hidden="true">#</a> \u6709\u5E8F\u6027</h3><p>java \u7684\u6709\u5E8F\u6027\u8DDF\u7EBF\u7A0B\u76F8\u5173\u3002\u5982\u679C\u5728\u7EBF\u7A0B\u5185\u90E8\u89C2\u5BDF\uFF0C\u4F1A\u53D1\u73B0\u5F53\u524D\u7EBF\u7A0B\u7684\u4E00\u5207\u64CD\u4F5C\u90FD\u662F\u6709\u5E8F\u7684\u3002\u5982\u679C\u5728\u7EBF\u7A0B\u7684\u5916\u90E8\u6765\u89C2\u5BDF\u7684\u8BDD\uFF0C\u4F1A\u53D1\u73B0\u7EBF\u7A0B\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u65E0\u5E8F\u7684\u3002\u56E0\u4E3A JMM \u7684\u5DE5\u4F5C\u5185\u5B58\u548C\u4E3B\u5185\u5B58\u4E4B\u95F4\u5B58\u5728\u5EF6\u8FDF\uFF0C\u800C\u4E14 java \u4F1A\u5BF9\u4E00\u4E9B\u6307\u4EE4\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F\u3002volatile \u548C synchronized \u53EF\u4EE5\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u6709\u5E8F\u6027\uFF0C\u5F88\u591A\u7A0B\u5E8F\u5458\u53EA\u7406\u89E3\u8FD9\u4E24\u4E2A\u5173\u952E\u5B57\u7684\u6267\u884C\u4E92\u65A5\uFF0C\u800C\u6CA1\u6709\u5F88\u597D\u7684\u7406\u89E3\u5230 volatile \u548C synchronized \u4E5F\u80FD\u4FDD\u8BC1\u6307\u4EE4\u4E0D\u8FDB\u884C\u91CD\u6392\u5E8F\u3002</p><h2 id="happen-before-\u5148\u884C\u53D1\u751F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#happen-before-\u5148\u884C\u53D1\u751F\u89C4\u5219" aria-hidden="true">#</a> Happen-Before\uFF08\u5148\u884C\u53D1\u751F\u89C4\u5219\uFF09</h2><p>\u5728\u5E38\u89C4\u7684\u5F00\u53D1\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u901A\u8FC7\u4E0A\u8FF0\u89C4\u5219\u6765\u5206\u6790\u4E00\u4E2A\u5E76\u53D1\u7A0B\u5E8F\u662F\u5426\u5B89\u5168\uFF0C\u4F30\u8BA1\u8111\u58F3\u4F1A\u5F88\u75BC\u3002\u56E0\u4E3A\u66F4\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u662F\u5206\u6790\u4E00\u4E2A\u5E76\u53D1\u7A0B\u5E8F\u662F\u5426\u5B89\u5168\uFF0C\u5176\u5B9E\u90FD\u4F9D\u8D56 Happen-Before \u539F\u5219\u8FDB\u884C\u5206\u6790\u3002Happen-Before \u88AB\u7FFB\u8BD1\u6210\u5148\u884C\u53D1\u751F\u539F\u5219\uFF0C\u610F\u601D\u5C31\u662F\u5F53 A \u64CD\u4F5C\u5148\u884C\u53D1\u751F\u4E8E B \u64CD\u4F5C\uFF0C\u5219\u5728\u53D1\u751F B \u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u64CD\u4F5C A \u4EA7\u751F\u7684\u5F71\u54CD\u80FD\u88AB B \u89C2\u5BDF\u5230\uFF0C\u201C\u5F71\u54CD\u201D\u5305\u62EC\u4FEE\u6539\u4E86\u5185\u5B58\u4E2D\u7684\u5171\u4EAB\u53D8\u91CF\u7684\u503C\u3001\u53D1\u9001\u4E86\u6D88\u606F\u3001\u8C03\u7528\u4E86\u65B9\u6CD5\u7B49\u3002</p><ol><li>\u7A0B\u5E8F\u6B21\u5E8F\u89C4\u5219\uFF08Program Order Rule\uFF09\uFF1A\u5728\u4E00\u4E2A\u7EBF\u7A0B\u5185\uFF0C\u7A0B\u5E8F\u7684\u6267\u884C\u89C4\u5219\u8DDF\u7A0B\u5E8F\u7684\u4E66\u5199\u89C4\u5219\u662F\u4E00\u81F4\u7684\uFF0C\u4ECE\u4E0A\u5F80\u4E0B\u6267\u884C\u3002</li><li>\u7BA1\u7A0B\u9501\u5B9A\u89C4\u5219\uFF08Monitor Lock Rule\uFF09\uFF1A\u4E00\u4E2A Unlock \u7684\u64CD\u4F5C\u80AF\u5B9A\u5148\u4E8E\u4E0B\u4E00\u6B21 Lock \u7684\u64CD\u4F5C\u3002\u8FD9\u91CC\u5FC5\u987B\u662F\u540C\u4E00\u4E2A\u9501\u3002\u540C\u7406\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u5728 synchronized \u540C\u6B65\u540C\u4E00\u4E2A\u9501\u7684\u65F6\u5019\uFF0C\u9501\u5185\u5148\u884C\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u5BF9\u540E\u7EED\u540C\u6B65\u8BE5\u9501\u7684\u7EBF\u7A0B\u6765\u8BF4\u662F\u5B8C\u5168\u53EF\u89C1\u7684\u3002</li><li>volatile \u53D8\u91CF\u89C4\u5219\uFF08volatile Variable Rule\uFF09\uFF1A\u5BF9\u540C\u4E00\u4E2A volatile \u7684\u53D8\u91CF\uFF0C\u5148\u884C\u53D1\u751F\u7684\u5199\u64CD\u4F5C\uFF0C\u80AF\u5B9A\u65E9\u4E8E\u540E\u7EED\u53D1\u751F\u7684\u8BFB\u64CD\u4F5C\u3002</li><li>\u7EBF\u7A0B\u542F\u52A8\u89C4\u5219\uFF08Thread Start Rule\uFF09\uFF1AThread \u5BF9\u8C61\u7684 <code>start()</code> \u65B9\u6CD5\u5148\u884C\u53D1\u751F\u4E8E\u6B64\u7EBF\u7A0B\u7684\u6CA1\u4E00\u4E2A\u52A8\u4F5C\u3002</li><li>\u7EBF\u7A0B\u4E2D\u6B62\u89C4\u5219\uFF08Thread Termination Rule\uFF09\uFF1AThread\u5BF9\u8C61\u7684\u4E2D\u6B62\u68C0\u6D4B\uFF08\u5982\uFF1A<code>Thread.join()</code>\uFF0C<code>Thread.isAlive()</code> \u7B49\uFF09\u64CD\u4F5C\uFF0C\u5FC5\u884C\u665A\u4E8E\u7EBF\u7A0B\u4E2D\u6240\u6709\u64CD\u4F5C\u3002</li><li>\u7EBF\u7A0B\u4E2D\u65AD\u89C4\u5219\uFF08Thread Interruption Rule\uFF09\uFF1A\u5BF9\u7EBF\u7A0B\u7684 <code>interruption()</code> \u8C03\u7528\uFF0C\u5148\u4E8E\u88AB\u8C03\u7528\u7684\u7EBF\u7A0B\u68C0\u6D4B\u4E2D\u65AD\u4E8B\u4EF6(<code>Thread.interrupted()</code>)\u7684\u53D1\u751F\u3002</li><li>\u5BF9\u8C61\u4E2D\u6B62\u89C4\u5219\uFF08Finalizer Rule\uFF09\uFF1A\u4E00\u4E2A\u5BF9\u8C61\u7684\u521D\u59CB\u5316\u65B9\u6CD5\u5148\u4E8E\u4E00\u4E2A\u65B9\u6CD5\u6267\u884C <code>Finalizer()</code> \u65B9\u6CD5\u3002</li><li>\u4F20\u9012\u6027\uFF08Transitivity\uFF09\uFF1A\u5982\u679C\u64CD\u4F5C A \u5148\u4E8E\u64CD\u4F5C B\u3001\u64CD\u4F5CB\u5148\u4E8E\u64CD\u4F5C C,\u5219\u64CD\u4F5C A \u5148\u4E8E\u64CD\u4F5C C\u3002</li></ol><h2 id="volatile" tabindex="-1"><a class="header-anchor" href="#volatile" aria-hidden="true">#</a> volatile</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>volatile \u662F Java \u865A\u62DF\u673A\u63D0\u4F9B\u7684\u8F7B\u91CF\u7EA7\u540C\u6B65\u673A\u5236\u3002</p></div><p>volatile \u7279\u6027\uFF1A</p><ul><li>\u4FDD\u8BC1\u53EF\u89C1\u6027\u3002</li><li>\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027\u3002</li><li>\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u3002</li></ul><h3 id="\u4FDD\u8BC1\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u8BC1\u53EF\u89C1\u6027" aria-hidden="true">#</a> \u4FDD\u8BC1\u53EF\u89C1\u6027</h3><p>\u4EE5\u4E0B\u4EE3\u7801\u5982\u679C\u4E0D\u4F7F\u7528 volatile \u5173\u952E\u5B57\uFF0C\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\u5C06\u4F1A\u4E0D\u505C\u5FAA\u73AF\uFF0C\u7A0B\u5E8F\u65E0\u6CD5\u7EC8\u6B62\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VolatileDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> flag<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token comment">// \u8FD9\u4E2A\u7EBF\u7A0B\u5BF9\u4E3B\u5B58\u4E2Dflag\u7684\u503C\u7684\u53D8\u5316\u4E0D\u77E5\u9053</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            flag<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027" aria-hidden="true">#</a> \u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027</h3><p>\u4EE5\u4E0B\u4EE3\u7801\u4E0D\u8BBA\u662F\u5426\u5728\u53D8\u91CF\u524D\u4F7F\u7528 volatile\uFF0C\u6700\u540E\u7ED3\u679C\u90FD\u4E0D\u4F1A\u59CB\u7EC8\u662F 5000\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VolatileDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token keyword">int</span> num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">++</span>num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">incr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">activeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u7406\u8BBA\u7ED3\u679C\u5E94\u8BE5\u662F5000</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4F7F\u7528\u539F\u5B50\u7C7B\u89E3\u51B3\u539F\u5B50\u6027\u95EE\u9898(java.util.concurrent.atomic)\uFF1A</p><p>\u4EE5\u4E0B\u4EE3\u7801\u7ED3\u679C\u59CB\u7EC8\u662F 5000\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VolatileDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicInteger</span> integer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        integer<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">incr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">activeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>integer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,33);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};