import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u5BA2\u6237\u7AEF-api" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF-api" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF API</h1><h2 id="\u5BFC\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u4F9D\u8D56" aria-hidden="true">#</a> \u5BFC\u5165\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.apache.zookeeper/zookeeper --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.7.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u521B\u5EFA\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a> \u521B\u5EFA\u8282\u70B9</h2><p>\u8FDC\u7A0B\u670D\u52A1\u5668\u8D85\u65F6\u65F6\u95F4\u8981\u8BBE\u7F6E\u7684\u4E45\u4E00\u4E9B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> timeOut<span class="token operator">=</span><span class="token number">200000</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> connectStr<span class="token operator">=</span><span class="token string">&quot;150.158.153.216:2181,39.107.112.172:2181,115.28.211.227:2181&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u4F7F\u7528\u9017\u53F7\u5206\u9694\uFF0C\u4E0D\u80FD\u5E26\u7A7A\u683C</span>
    <span class="token class-name">ZooKeeper</span> zooKeeper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectStr<span class="token punctuation">,</span> timeOut<span class="token punctuation">,</span> watchedEvent <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>watchedEvent<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">String</span> s <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;/sanguo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sanguo&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ZooDefs<span class="token punctuation">.</span>Ids</span><span class="token punctuation">.</span>OPEN_ACL_UNSAFE<span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span>PERSISTENT<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u76D1\u542C\u8282\u70B9\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u8282\u70B9\u53D8\u5316" aria-hidden="true">#</a> \u76D1\u542C\u8282\u70B9\u53D8\u5316</h2><p>\u521B\u5EFA\u76D1\u542C\u65B9\u6CD5\uFF0C\u6B64\u65B9\u6CD5\u963B\u585E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@org.junit.Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
    zooKeeper<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3Atrue\u8868\u793A\u4F7F\u7528\u521B\u5EFAzookeeper\u65F6\u5B9A\u4E49\u7684\u76D1\u542C\u5668</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5FAA\u73AF\u6CE8\u518C\uFF0C\u5FAA\u73AF\u76D1\u542C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Before</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> timeOut<span class="token operator">=</span><span class="token number">200000</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> connectStr<span class="token operator">=</span><span class="token string">&quot;150.158.153.216:2181,39.107.112.172:2181,115.28.211.227:2181&quot;</span><span class="token punctuation">;</span>
    zooKeeper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectStr<span class="token punctuation">,</span> timeOut<span class="token punctuation">,</span> watchedEvent <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> children <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            children <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">KeeperException</span> <span class="token operator">|</span> <span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">assert</span> children <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> child <span class="token operator">:</span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u5224\u65AD\u8282\u70B9\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u8282\u70B9\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u5224\u65AD\u8282\u70B9\u662F\u5426\u5B58\u5728</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@org.junit.Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Stat</span> exists <span class="token operator">=</span> zooKeeper<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token string">&quot;/sanguo&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exists <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8282\u70B9\uFF1A[/sanguo] \u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8282\u70B9\uFF1A[/sanguo] \u5B58\u5728&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,13);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
