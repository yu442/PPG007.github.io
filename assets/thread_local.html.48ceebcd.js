import{_ as e,e as a}from"./app.269ed0ef.js";const r={},h=a('<h1 id="threadlocal-\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#threadlocal-\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898" aria-hidden="true">#</a> ThreadLocal \u5185\u5B58\u6CC4\u6F0F\u95EE\u9898</h1><h2 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u5F15\u7528\u7C7B\u578B</h2><h3 id="\u5F3A\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5F15\u7528" aria-hidden="true">#</a> \u5F3A\u5F15\u7528</h3><p>Strong Reference\uFF0C\u4F8B\u5982 <code>Object o=new Object();</code>\u3002</p><p>\u53EA\u8981\u5BF9\u8C61\u6709\u5F3A\u5F15\u7528\u6307\u5411\u4E14 GC Roots \u53EF\u8FBE\uFF0C\u5373\u4F7F\u5185\u5B58\u5373\u5C06\u6EA2\u51FA\u4E5F\u4E0D\u4F1A\u56DE\u6536\u8FD9\u4E2A\u5BF9\u8C61\u3002</p><h3 id="\u8F6F\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u5F15\u7528" aria-hidden="true">#</a> \u8F6F\u5F15\u7528</h3><p>Soft Reference\uFF0C\u5F3A\u5EA6\u5F31\u4E8E\u5F3A\u5F15\u7528\u3002</p><p>\u5728\u5373\u5C06 OOM \u4E4B\u524D\u8F6F\u5F15\u7528\u6307\u5411\u7684\u5BF9\u8C61\u5C06\u88AB\u56DE\u6536\uFF0C\u4E00\u822C\u7528\u6765\u7F13\u5B58\u670D\u52A1\u5668\u4E2D\u95F4\u8BA1\u7B97\u7ED3\u679C\u4EE5\u53CA\u4E0D\u9700\u8981\u5B9E\u65F6\u4FDD\u5B58\u7684\u7528\u6237\u884C\u4E3A\u7B49\u3002</p><h3 id="\u5F31\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F31\u5F15\u7528" aria-hidden="true">#</a> \u5F31\u5F15\u7528</h3><p>Weak Reference\uFF0C\u5F3A\u5EA6\u66F4\u5F31\uFF0C\u7528\u6765\u63CF\u8FF0\u975E\u5FC5\u9700\u5BF9\u8C61\u3002</p><p>\u5982\u679C\u6307\u5411\u7684\u5BF9\u8C61\u53EA\u6709\u5F31\u5F15\u7528\uFF0C\u5219\u4E0B\u6B21 YGC\uFF08\u65B0\u751F\u4EE3 GC\uFF0C\u9891\u7387\u6BD4\u8F83\u9AD8\uFF09\u5C06\u4F1A\u56DE\u6536\uFF0C\u4F46\u662F YGC \u65F6\u95F4\u4E0A\u5177\u6709\u4E0D\u786E\u5B9A\u6027\uFF0C\u5F31\u5F15\u7528\u4F55\u65F6\u88AB\u56DE\u6536\u4E5F\u5177\u6709\u4E0D\u786E\u5B9A\u6027\u3002\u5F31\u5F15\u7528\u4E3B\u8981\u7528\u4E8E\u6307\u5411\u67D0\u4E2A\u6613\u6D88\u5931\u7684\u5BF9\u8C61\uFF0C\u5728\u5F3A\u5F15\u7528\u65AD\u5F00\u540E\uFF0C\u6B64\u5F15\u7528\u4E0D\u4F1A\u52AB\u6301\u5BF9\u8C61\uFF0C\u8C03\u7528 get \u53EF\u80FD\u8FD4\u56DE null\u3002</p><h3 id="\u865A\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u865A\u5F15\u7528" aria-hidden="true">#</a> \u865A\u5F15\u7528</h3><p>Phantom Reference\uFF0C\u5F3A\u5EA6\u6700\u5F31\uFF0C\u5B9A\u4E49\u5B8C\u6210\u540E\u5C31\u65E0\u6CD5\u901A\u8FC7\u8BE5\u5F15\u7528\u83B7\u53D6\u6307\u5411\u7684\u5BF9\u8C61\u3002</p><p>\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u8BBE\u7F6E\u865A\u5F15\u7528\u7684\u552F\u4E00\u76EE\u7684\u5C31\u662F\u5E0C\u671B\u80FD\u5728\u8FD9\u4E2A\u5BF9\u8C61\u88AB\u56DE\u6536\u65F6\u6536\u5230\u4E00\u4E2A\u7CFB\u7EDF\u901A\u77E5\u3002\u865A\u5F15\u7528\u5FC5\u987B\u4E0E\u5F15\u7528\u961F\u5217\u8054\u5408\u4F7F\u7528\uFF0C\u5728 GC \u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u5B58\u5728\u865A\u5F15\u7528\uFF0C\u5C31\u4F1A\u5728\u56DE\u6536\u524D\u5C06\u8FD9\u4E2A\u865A\u5F15\u7528\u52A0\u5165\u5230\u5F15\u7528\u961F\u5217\u4E2D</p><h2 id="\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898" aria-hidden="true">#</a> \u5185\u5B58\u6CC4\u6F0F\u95EE\u9898</h2><p>\u6BCF\u4E2A Thread \u7EBF\u7A0B\u5185\u90E8\u90FD\u6709\u4E00\u4E2A Map\u3002</p><p>Map \u91CC\u5B58\u50A8\u7EBF\u7A0B\u672C\u5730\u5BF9\u8C61\u505A key\uFF0C\u7EBF\u7A0B\u53D8\u91CF\u526F\u672C\u505A value\u3002</p><p>Map \u7531 ThreadLocal \u7EF4\u62A4\uFF0CThreadLocal \u8D1F\u8D23\u5411 map \u83B7\u53D6\u548C\u8BBE\u7F6E\u7EBF\u7A0B\u7684\u53D8\u91CF\u503C\u3002</p><p>ThreadLocal \u7684\u5185\u90E8\u7C7B ThreadLocalMap \u7684\u5185\u90E8\u7C7B Entry \u7684 key \u662F\u5F31\u5F15\u7528\uFF0Cvalue \u4E3A\u5F3A\u5F15\u7528\uFF0CThreadLocal \u5728\u6CA1\u6709\u5916\u90E8\u5BF9\u8C61\u7684\u5F3A\u5F15\u7528\u65F6\uFF0C\u53D1\u751F GC \u4F1A\u56DE\u6536 key\uFF0C\u5F53\u7EBF\u7A0B\u6CA1\u6709\u7ED3\u675F\uFF0C\u4F46 ThreadLocal \u7684 key \u88AB\u56DE\u6536\u65F6\uFF0C\u5B58\u5728 key \u4E3A null \u7684\u952E\u503C\u5BF9\uFF0C\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><p>\u6BCF\u6B21\u4F7F\u7528\u5B8C ThreadLocal \u90FD\u8C03\u7528 remove\u3002</p>',21);function d(c,n){return h}var i=e(r,[["render",d]]);export{i as default};
