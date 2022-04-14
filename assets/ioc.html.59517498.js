import{_ as s,e as n}from"./app.269ed0ef.js";const a={},p=n(`<h1 id="ioc-\u7406\u8BBA" tabindex="-1"><a class="header-anchor" href="#ioc-\u7406\u8BBA" aria-hidden="true">#</a> IOC \u7406\u8BBA</h1><h2 id="ioc-\u57FA\u672C\u539F\u7406\u4E0E\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#ioc-\u57FA\u672C\u539F\u7406\u4E0E\u601D\u60F3" aria-hidden="true">#</a> IOC \u57FA\u672C\u539F\u7406\u4E0E\u601D\u60F3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao<span class="token punctuation">;</span>
    <span class="token comment">//\u4F7F\u7528set\u5B9E\u73B0\u4E86\u52A8\u6001\u6CE8\u5165</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span> userDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDao<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u82E5\u4E0D\u4F7F\u7528 set \u65B9\u6CD5\uFF0C\u7A0B\u5E8F\u4E3B\u52A8\u521B\u5EFA\u5BF9\u8C61\uFF0C\u63A7\u5236\u6743\u5728\u7A0B\u5E8F\u5458\u624B\u4E2D\u3002</li><li>\u4F7F\u7528\u540E\uFF0C\u7A0B\u5E8F\u4E0D\u518D\u5177\u6709\u4E3B\u52A8\u6027\uFF0C\u8F6C\u800C\u88AB\u52A8\u63A5\u6536\u5BF9\u8C61\uFF0C\u901A\u8FC7 set \u5B9E\u73B0\u4E86\u63A7\u5236\u53CD\u8F6C\u3002</li></ul><p>\u4F7F\u7528 set \u65B9\u6CD5\u7684\u7528\u6237\u4EE3\u7801\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> userService<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserServiceImpl</span><span class="token punctuation">)</span>userService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserDaoMysqlImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u82E5\u4E0D\u4F7F\u7528 set \u65B9\u6CD5\uFF0C\u5219\u9700\u8981\u5728 <code>UserServiceImpl</code> \u4E2D\u4E0D\u505C\u4FEE\u6539\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u6BCF\u4E2ADao\u5C42\u5B9E\u73B0\u90FD\u8981\u8D4B\u503C</span>
<span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">UserDaoMysqlImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDao<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="ioc-\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#ioc-\u672C\u8D28" aria-hidden="true">#</a> IOC \u672C\u8D28</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u63A7\u5236\u53CD\u8F6C IOC \u662F\u4E00\u79CD\u8BBE\u8BA1\u601D\u60F3\uFF0CDI\uFF08\u4F9D\u8D56\u6CE8\u5165\uFF09\u662F\u5B9E\u73B0 IOC \u7684\u4E00\u79CD\u65B9\u6CD5</p></div><p>\u63A7\u5236\u53CD\u8F6C\uFF1A\u5BF9\u8C61\u7684\u521B\u5EFA\u8F6C\u79FB\u7ED9\u7B2C\u4E09\u65B9\uFF0C\u83B7\u5F97\u4F9D\u8D56\u5BF9\u8C61\u7684\u65B9\u5F0F\u53CD\u8F6C\u4E86\u3002 Spring \u5BB9\u5668\u5728\u521D\u59CB\u5316\u65F6\u5148\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF0C\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u6216\u5143\u6570\u636E\u521B\u5EFA\u4E0E\u7EC4\u7EC7\u5BF9\u8C61\u5B58\u5165\u5BB9\u5668\u4E2D\uFF0C\u7A0B\u5E8F\u4F7F\u7528\u65F6\u518D\u4ECE IOC \u5BB9\u5668\u4E2D\u53D6\u51FA\u9700\u8981\u7684\u5BF9\u8C61\u3002</p>`,11);function e(t,c){return p}var l=s(a,[["render",e]]);export{l as default};