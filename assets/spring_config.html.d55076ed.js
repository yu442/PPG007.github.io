import{_ as n,e as s}from"./app.269ed0ef.js";var a="/Spring/bean\u7684\u4F5C\u7528\u57DF.jpg";const t={},p=s(`<h1 id="spring-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#spring-\u914D\u7F6E" aria-hidden="true">#</a> Spring \u914D\u7F6E</h1><ul><li><p>\u522B\u540D\u3002</p><ul><li><p>\u901A\u8FC7 alias \u6807\u7B7E\u8D77\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>alias</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u901A\u8FC7 bean \u6807\u7B7E\u4E2D\u7684 name \u5C5E\u6027\u8D77\u522B\u540D\uFF0C\u53EF\u4EE5\u7528\u9017\u53F7\u6216\u8005\u7A7A\u683C\u6216\u8005\u5206\u53F7\u8FDB\u884C\u5206\u5272\u8D77\u591A\u4E2A\u522B\u540D\uFF1A</p></li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>service.UserServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService2,userService3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userDaoOracle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>scope \u4F5C\u7528\u57DF\uFF1A</p><p><img src="`+a+`" alt="bean\u7684\u4F5C\u7528\u57DF"></p></li><li><p>import\uFF1A</p><p>\u4E00\u822C\u7528\u4E8E\u56E2\u961F\u5F00\u53D1\uFF0C\u5C06\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6\u5BFC\u5165\u5408\u5E76\u4E3A\u4E00\u4E2A,\u5141\u8BB8\u591A\u4E2A\u76F8\u540C\u522B\u540D\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u5728applicationContext.xml\u4E2D\u6DFB\u52A0import\u6807\u7B7E--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beans.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u6D4B\u8BD5\u4EE3\u7801\u53EA\u8BFB\u53D6applicationContext.xml</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ApplicationContext</span> context<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Object</span> o<span class="token operator">=</span>context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;userService3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserServiceImpl</span><span class="token punctuation">)</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul>`,2);function e(c,o){return p}var u=n(t,[["render",e]]);export{u as default};