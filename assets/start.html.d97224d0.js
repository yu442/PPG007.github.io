import{_ as t,o as p,c as e,a as n,t as l,F as c,e as s,b as o}from"./app.269ed0ef.js";const u={},i=s(`<h1 id="\u7B2C\u4E00\u4E2A-vue-\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u4E2A-vue-\u7A0B\u5E8F" aria-hidden="true">#</a> \u7B2C\u4E00\u4E2A Vue \u7A0B\u5E8F</h1><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Hello World
        {{name}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>url<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u524D\u5F80\u4E3B\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{url.toUpperCase()}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">//\u5173\u95ED\u751F\u4EA7\u6A21\u5F0F\u63D0\u9192(Vue\u5168\u5C40\u914D\u7F6E)</span>
        Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">//\u4E00\u5BF9\u4E00</span>
        <span class="token keyword">const</span> vm<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            el<span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span><span class="token comment">//el\u6307\u5B9A\u5F53\u524DVue\u5B9E\u4F8B\u4E3A\u90A3\u4E2A\u5BB9\u5668\u670D\u52A1</span>
            data<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u5B58\u50A8\u6570\u636E\u4F9Bel\u7ED1\u5B9A\u7684\u5BB9\u5668\u4F7F\u7528</span>
                name<span class="token operator">:</span><span class="token string">&#39;ppg&#39;</span><span class="token punctuation">,</span>
                age<span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span><span class="token string">&#39;http://www.fenchingking.top&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u521D\u8BC6 Vue\uFF1A</p><ul><li><p>\u60F3\u8BA9 Vue \u5DE5\u4F5C\uFF0C\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2A Vue \u5B9E\u4F8B\uFF0C\u4E14\u8981\u4F20\u5165\u4E00\u4E2A\u914D\u7F6E\u5BF9\u8C61\u3002</p></li><li><p>\u5BB9\u5668(\u88AB\u7ED1\u5B9A\u7684 HTML \u4EE3\u7801\u5757)\u4ECD\u7136\u7B26\u5408 HTML \u89C4\u8303\uFF0C\u6DF7\u5165\u4E86 Vue \u8BED\u6CD5\u3002</p></li><li><p>Vue \u5B9E\u4F8B\u548C\u5BB9\u5668\u53EA\u80FD\u662F\u4E00\u5BF9\u4E00\u7684\u3002</p></li><li><p>\u5B9E\u9645\u5F00\u53D1\u4E2D\u53EA\u4F1A\u6709\u4E00\u4E2A Vue \u5B9E\u4F8B\uFF0C\u5E76\u4E14\u4F1A\u914D\u5408\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528\u3002</p></li><li><p>\u53CC\u5927\u62EC\u53F7\u4E2D\u8981\u5199 JavaScript \u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u663E\u793A 2\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    {{1+1}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u4E00\u65E6 data \u4E2D\u5185\u5BB9\u53D1\u751F\u6539\u53D8\uFF0C\u5BB9\u5668\u4E2D\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4E5F\u4F1A\u6539\u53D8\u3002</p></li></ul></div><h2 id="\u6A21\u677F\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u6307\u4EE4" aria-hidden="true">#</a> \u6A21\u677F\u6307\u4EE4</h2><p>Vue \u6A21\u677F\u6709\u4E24\u5927\u7C7B\u8BED\u6CD5\uFF1A</p>`,5),r=o("\u63D2\u503C\u8BED\u6CD5\uFF1A "),k=n("li",null,"\u529F\u80FD\uFF1A\u7528\u4E8E\u89E3\u6790\u6807\u7B7E\u4F53\u5185\u5BB9\u3002",-1),g=s("<li>\u6307\u4EE4\u8BED\u6CD5\uFF1A <ul><li>\u529F\u80FD\uFF1A\u7528\u4E8E\u89E3\u6790\u6807\u7B7E(\u6807\u7B7E\u5C5E\u6027\u3001\u6807\u7B7E\u4F53\u5185\u5BB9\u3001\u7ED1\u5B9A\u4E8B\u4EF6)\u3002</li><li>\u4E3E\u4F8B\uFF1A<code>v-bind:href=&#39;xxx&#39;</code> \u6216\u7B80\u5199(\u4EC5\u6709 <code>v-bind</code> \u6307\u4EE4\u53EF\u4EE5)\u4E3A <code>:href=&#39;xxx&#39;</code>\uFF0Cxxx \u540C\u6837\u662F JavaScript \u8868\u8FBE\u5F0F\u3002</li><li>Vue \u4E2D\u6709\u5F88\u591A\u6307\u4EE4\uFF0C\u5F62\u5F0F\u90FD\u662F <code>v-xxx</code>\u3002</li></ul></li>",1);function b(a,m){return p(),e(c,null,[i,n("ul",null,[n("li",null,[r,n("ul",null,[k,n("li",null,"\u5199\u6CD5\uFF1A"+l(a.xxx)+"\uFF0Cxxx \u662F JavaScript \u8868\u8FBE\u5F0F\uFF0C\u4E14\u53EF\u4EE5\u83B7\u53D6 data \u4E2D\u7684\u6240\u6709\u5C5E\u6027\u3002",1)])]),g])],64)}var v=t(u,[["render",b]]);export{v as default};
