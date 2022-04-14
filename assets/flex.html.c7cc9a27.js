import{_ as l,e}from"./app.269ed0ef.js";const i={},a=e('<h1 id="flex-\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#flex-\u5E03\u5C40" aria-hidden="true">#</a> Flex \u5E03\u5C40</h1><p>\u6307\u5B9A\u67D0\u4E2A\u5BB9\u5668\u4E3A Flex \u5E03\u5C40\uFF0C<code>display: flex;</code>\uFF0C\u884C\u5185\u5143\u7D20\u4E5F\u53EF\u4EE5\u4F7F\u7528 Flex \u5E03\u5C40\uFF1A<code>display: inline-flex</code>\uFF0CWebkit \u5185\u6838\u7684\u6D4F\u89C8\u5668\u9700\u8981\u5728 flex \u524D\u9762\u6DFB\u52A0 <code>-webkit</code> \u524D\u7F00\u3002</p><p>\u8BBE\u7F6E\u4E3A Flex \u5E03\u5C40\u4EE5\u540E\uFF0C\u5B50\u5143\u7D20\u7684\u6D6E\u52A8\u3001\u6E05\u9664\u6D6E\u52A8\u3001\u5782\u76F4\u5C45\u4E2D\u5C5E\u6027\u4F1A\u5931\u6548\u3002</p><h2 id="\u5BB9\u5668\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u5BB9\u5668\u7684\u5C5E\u6027</h2><ul><li>flex-direction \u5C5E\u6027\uFF1A\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411\uFF0C\u5373\u9879\u76EE\u6392\u5217\u7684\u65B9\u5411\u3002 <ul><li>row\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF\u3002</li><li>row-reverse\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u53F3\u7AEF\u3002</li><li>column\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u9762\u3002</li><li>column-reverse\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0B\u9762\u3002</li></ul></li><li>flex-wrap \u5C5E\u6027\uFF1A\u5982\u679C\u4E00\u6761\u8F74\u7EBF\u6392\u4E0D\u4E0B\uFF0C\u5982\u4F55\u6362\u884C\u3002 <ul><li>nowrap\uFF1A\u9ED8\u8BA4\u4E0D\u6362\u884C\u3002</li><li>wrap\uFF1A\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9\u3002</li><li>wrap-reverse\uFF1A\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9\u3002</li></ul></li><li>justify-content \u5C5E\u6027\uFF1A\u5B9A\u4E49\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002 <ul><li>center\uFF1A\u6574\u4F53\u5C45\u4E2D\u3002</li><li>flex-start\uFF1A\u6574\u4F53\u9760\u4E3B\u8F74\u8D77\u70B9\u3002</li><li>flex-end\uFF1A\u6574\u4F53\u9760\u4E3B\u8F74\u7EC8\u70B9\u3002</li><li>space-between\uFF1A\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002</li><li>space-around\uFF1A\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u9879\u76EE\u548C\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D\u3002</li></ul></li><li>align-items \u5C5E\u6027\uFF1A\u5B9A\u4E49\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u5982\u4F55\u5BF9\u9F50\u3002 <ul><li>flex-start\uFF1A\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50\u3002</li><li>flex-end\uFF1A\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002</li><li>center\uFF1A\u5C45\u4E2D\u3002</li><li>baseline\uFF1A\u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50\u3002</li><li>stretch\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3A auto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</li></ul></li><li>align-content \u5C5E\u6027\uFF1A\u5B9A\u4E49\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528\uFF1A <ul><li>flex-start\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u8D77\u70B9\u5BF9\u9F50\u3002</li><li>flex-end\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50\u3002</li><li>center\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50\u3002</li><li>space-between\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03\u3002</li><li>space-around\uFF1A\u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u8F74\u7EBF\u4E0E\u8FB9\u6846\u95F4\u9694\u5927\u4E00\u500D\u3002</li><li>stretch\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74\u3002</li></ul></li></ul><h2 id="\u9879\u76EE\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u9879\u76EE\u7684\u5C5E\u6027</h2><ul><li>order \u5C5E\u6027\uFF1A\u5B9A\u4E49\u9879\u76EE\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u6570\u503C\u8D8A\u5C0F\u6392\u5217\u8D8A\u9760\u524D\u3002</li><li>flex-grow \u5C5E\u6027\uFF1A\u5B9A\u4E49\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\u4E5F\u4E0D\u653E\u5927\u3002</li><li>flex-shrink \u5C5E\u6027\uFF1A\u5B9A\u4E49\u4E86\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002</li><li>flex-basis \u5C5E\u6027\uFF1A\u5B9A\u4E49\u4E86\u5206\u914D\u591A\u4F59\u7A7A\u95F4\u4E4B\u524D\uFF0C\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\uFF0C\u9ED8\u8BA4\u4E3A auto\uFF0C\u4E5F\u5C31\u662F\u9879\u76EE\u672C\u6765\u7684\u5927\u5C0F\u3002</li><li>align-self \u5C5E\u6027\uFF1A\u5141\u8BB8\u5355\u4E2A\u9879\u76EE\u4E0E\u5176\u4ED6\u9879\u76EE\u5BF9\u9F50\u65B9\u5F0F\u4E0D\u540C\uFF0C\u8986\u76D6 align-items \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u503C auto\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684 align-items \u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u7236\u5143\u7D20\uFF0C\u7B49\u540C\u4E8E stretch\u3002</li></ul>',7);function r(t,n){return a}var c=l(i,[["render",r]]);export{c as default};