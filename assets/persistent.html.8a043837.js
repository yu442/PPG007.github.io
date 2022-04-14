import{_ as s,e as a}from"./app.269ed0ef.js";const n={},e=a(`<h1 id="redis\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#redis\u6301\u4E45\u5316" aria-hidden="true">#</a> Redis\u6301\u4E45\u5316</h1><h2 id="rdb-\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#rdb-\u6301\u4E45\u5316" aria-hidden="true">#</a> RDB \u6301\u4E45\u5316</h2><h3 id="\u8FDB\u884C\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u884C\u6301\u4E45\u5316" aria-hidden="true">#</a> \u8FDB\u884C\u6301\u4E45\u5316</h3><p>\u6587\u4EF6\uFF1A<code>dump.rdb</code>\u3002</p><p>RDB \u89E6\u53D1\u6761\u4EF6\uFF1A</p><ul><li>\u6EE1\u8DB3 save\u89C4\u5219\u3002</li><li>\u6267\u884C flushall\u3002</li><li>\u9000\u51FA redis\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6BCF\u7ECF\u8FC7\u516D\u79D2\u6216\u516D\u6761\u66F4\u6539\u5C31\u4F1A\u89E6\u53D1RDB</span>
save <span class="token number">6</span> <span class="token number">6</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u624B\u52A8\u4FDD\u5B58</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BE5\u547D\u4EE4\u4F1A\u963B\u585E\u5F53\u524DRedis\u670D\u52A1\u5668\uFF0C\u6267\u884Csave\u547D\u4EE4\u671F\u95F4\uFF0CRedis\u4E0D\u80FD\u5904\u7406\u5176\u4ED6\u547D\u4EE4\uFF0C\u76F4\u5230RDB\u8FC7\u7A0B\u5B8C\u6210\u4E3A\u6B62\u3002</span>
save
<span class="token comment"># \u6267\u884C\u8BE5\u547D\u4EE4\u65F6\uFF0CRedis\u4F1A\u5728\u540E\u53F0\u5F02\u6B65\u8FDB\u884C\u5FEB\u7167\u64CD\u4F5C\uFF0C\u5FEB\u7167\u540C\u65F6\u8FD8\u53EF\u4EE5\u54CD\u5E94\u5BA2\u6237\u7AEF\u8BF7\u6C42\u3002</span>
<span class="token comment"># \u5177\u4F53\u64CD\u4F5C\u662FRedis\u8FDB\u7A0B\u6267\u884Cfork\u64CD\u4F5C\u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF0CRDB\u6301\u4E45\u5316\u8FC7\u7A0B\u7531\u5B50\u8FDB\u7A0B\u8D1F\u8D23\uFF0C\u5B8C\u6210\u540E\u81EA\u52A8\u7ED3\u675F\u3002</span>
<span class="token comment"># \u963B\u585E\u53EA\u53D1\u751F\u5728fork\u9636\u6BB5\uFF0C\u4E00\u822C\u65F6\u95F4\u5F88\u77ED\u3002</span>
bgsave
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4ECE\u6587\u4EF6\u4E2D\u6062\u590D\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u6587\u4EF6\u4E2D\u6062\u590D\u6570\u636E" aria-hidden="true">#</a> \u4ECE\u6587\u4EF6\u4E2D\u6062\u590D\u6570\u636E</h3><p>\u5C06\u6570\u636E\u6587\u4EF6\u653E\u5728 redis \u542F\u52A8\u76EE\u5F55\u5373\u53EF\u3002</p><p>\u83B7\u53D6\u542F\u52A8\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">150.158</span>.153.216:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get <span class="token function">dir</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;dir&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;/etc/cron.d&quot;</span> <span class="token comment">#\u542F\u52A8\u76EE\u5F55</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="aof-\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#aof-\u6301\u4E45\u5316" aria-hidden="true">#</a> AOF \u6301\u4E45\u5316</h2><p>\u4EE5\u65E5\u5FD7\u5F62\u5F0F\u8BB0\u5F55\u6240\u6709\u5199\u7684\u64CD\u4F5C\uFF0C\u53EA\u8BB8\u8FFD\u52A0\u6587\u4EF6\u4E0D\u53EF\u6539\u5199\u6587\u4EF6\uFF0Credis \u91CD\u542F\u65F6\u4F1A\u8BFB\u53D6 AOF \u5E76\u4F9D\u6B21\u6267\u884C\u6240\u6709\u64CD\u4F5C\u3002</p><h3 id="\u5F00\u542F-aof" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-aof" aria-hidden="true">#</a> \u5F00\u542F AOF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>appendonly <span class="token function">yes</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,17);function r(p,i){return e}var c=s(n,[["render",r]]);export{c as default};
