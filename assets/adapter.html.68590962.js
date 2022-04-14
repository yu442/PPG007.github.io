import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u9002\u914D\u5668\u6A21\u5F0F-\u53D8\u538B\u5668\u6A21\u5F0F\u3001\u5305\u88C5\u6A21\u5F0F-wrapper" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F-\u53D8\u538B\u5668\u6A21\u5F0F\u3001\u5305\u88C5\u6A21\u5F0F-wrapper" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F\uFF08\u53D8\u538B\u5668\u6A21\u5F0F\u3001\u5305\u88C5\u6A21\u5F0F Wrapper\uFF09</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u5C06\u4E00\u4E2A\u7C7B\u7684\u63A5\u53E3\u53D8\u6362\u6210\u5BA2\u6237\u7AEF\u6240\u671F\u5F85\u7684\u53E6\u4E00\u79CD\u63A5\u53E3\uFF0C\u4ECE\u800C\u4F7F\u539F\u672C\u56E0\u63A5\u53E3\u4E0D\u5339\u914D\u800C\u65E0\u6CD5\u5DE5\u4F5C\u5728\u4E00\u8D77\u7684\u4E24\u4E2A\u7C7B\u80FD\u591F\u5728\u4E00\u8D77\u5DE5\u4F5C\u3002</p><h2 id="\u4E09\u4E2A\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u4E09\u4E2A\u89D2\u8272" aria-hidden="true">#</a> \u4E09\u4E2A\u89D2\u8272</h2><ul><li>Target \u76EE\u6807\u89D2\u8272\uFF1A\u8BE5\u89D2\u8272\u5B9A\u4E49\u628A\u5176\u4ED6\u7C7B\u8F6C\u6362\u4E3A\u4F55\u79CD\u63A5\u53E3\uFF0C\u5373\u671F\u671B\u63A5\u53E3\u3002</li><li>Adaptee \u6E90\u89D2\u8272\uFF1A\u88AB\u8F6C\u6362\u7684\u89D2\u8272\uFF0C\u662F\u5DF2\u7ECF\u5B58\u5728\u7684\u3001\u8FD0\u884C\u826F\u597D\u7684\u7C7B\u6216\u5BF9\u8C61\u3002</li><li>Adapter \u9002\u914D\u5668\u89D2\u8272\uFF1A\u5C06\u6E90\u89D2\u8272\u8F6C\u6362\u4E3A\u76EE\u6807\u89D2\u8272\uFF0C\u901A\u8FC7\u7EE7\u627F\u6216\u7C7B\u5173\u8054\u7684\u65B9\u5F0F\u5B9E\u73B0\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u76EE\u6807\u89D2\u8272\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6240\u671F\u5F85\u7684\u65B9\u6CD5
     */</span>
    <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6E90\u89D2\u8272\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E90\u89D2\u8272&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u76EE\u6807\u89D2\u8272\u5B9E\u73B0\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteTarget</span> <span class="token keyword">implements</span> <span class="token class-name">Target</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76EE\u6807\u89D2\u8272\u5B9E\u73B0\u7C7B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9002\u914D\u5668\u89D2\u8272\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">extends</span> <span class="token class-name">Adaptee</span> <span class="token keyword">implements</span> <span class="token class-name">Target</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u542F\u52A8\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//\u539F\u6709\u7684\u4E1A\u52A1\u903B\u8F91</span>
        <span class="token keyword">new</span> <span class="token class-name">ConcreteTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u589E\u52A0\u9002\u914D\u5668\u540E</span>
        <span class="token class-name">Target</span> target<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        target<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F18\u70B9</h2><ul><li>\u9002\u914D\u5668\u6A21\u5F0F\u53EF\u4EE5\u8BA9\u4E24\u4E2A\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u7684\u7C7B\u5728\u4E00\u8D77\u8FD0\u884C\u3002</li><li>\u589E\u52A0\u4E86\u7C7B\u7684\u900F\u660E\u6027\uFF1A\u8BBF\u95EE\u7684\u662F Target \u76EE\u6807\u89D2\u8272\uFF0C\u5B9E\u9645\u6267\u884C\u7684\u662F\u6E90\u89D2\u8272\u3002</li><li>\u63D0\u9AD8\u4E86\u7C7B\u7684\u590D\u7528\u5EA6\u3002</li><li>\u7075\u6D3B\u6027\u597D\u3002</li></ul><h2 id="\u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F</h2><p>\u6709\u52A8\u673A\u4FEE\u6539\u4E00\u4E2A\u5DF2\u7ECF\u6295\u5165\u751F\u4EA7\u7684\u63A5\u53E3\u65F6\u3002</p><h2 id="\u9002\u914D\u5668\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879</h2><p>\u4E0D\u5E94\u5F53\u5728\u8BE6\u7EC6\u8BBE\u8BA1\u9636\u6BB5\u8003\u8651\u9002\u914D\u5668\u6A21\u5F0F\uFF0C\u9002\u914D\u5668\u6A21\u5F0F\u4E0D\u5E94\u8BE5\u89E3\u51B3\u5F00\u53D1\u9636\u6BB5\u4E2D\u7684\u95EE\u9898\u3002</p><h2 id="\u9002\u914D\u5668\u6A21\u5F0F\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F\u7684\u6269\u5C55" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F\u7684\u6269\u5C55</h2><p>\u5982\u679C\u8981\u9002\u914D\u7684\u529F\u80FD\u4E2D\u63A5\u53E3\u4E0D\u6B62\u4E00\u4E2A\u53EF\u4EE5\u4FEE\u6539\u9002\u914D\u5668\u7C7B\uFF0C\u53EA\u5B9E\u73B0\u76EE\u6807\u89D2\u8272\u63A5\u53E3\uFF0C\u7531\u4E0A\u9762\u7684\u7EE7\u627F\u6E90\u89D2\u8272\u6539\u4E3A\u6301\u6709\u8981\u9002\u914D\u7684\u591A\u4E2A\u63A5\u53E3\u7684\u591A\u4E2A\u5B9E\u73B0\u7C7B\u5BF9\u8C61\uFF0C\u901A\u8FC7\u5BF9\u8C61\u5C42\u6B21\u7684\u5173\u8054\u5B9E\u73B0\uFF0C\u79F0\u4E3A<em>\u5BF9\u8C61\u9002\u914D\u5668</em>\uFF0C\u901A\u8FC7\u7EE7\u627F\u8FDB\u884C\u9002\u914D\u79F0\u4E3A<em>\u7C7B\u9002\u914D\u5668</em>\u3002</p><p>\u7C7B\u9002\u914D\u5668\u662F<em>\u7C7B\u95F4\u7EE7\u627F</em>\uFF0C\u5BF9\u8C61\u9002\u914D\u5668\u662F<em>\u5BF9\u8C61\u7684\u5408\u6210\u5173\u7CFB</em>\u3002</p>`,25);function e(t,c){return p}var o=n(a,[["render",e]]);export{o as default};
