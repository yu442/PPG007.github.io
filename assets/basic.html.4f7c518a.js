import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u5B9E\u73B0\u591A\u7EBF\u7A0B\u7684\u57FA\u672C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u591A\u7EBF\u7A0B\u7684\u57FA\u672C\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u73B0\u591A\u7EBF\u7A0B\u7684\u57FA\u672C\u65B9\u6CD5</h1><h2 id="\u7EE7\u627F-thread-\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F-thread-\u7C7B" aria-hidden="true">#</a> \u7EE7\u627F Thread \u7C7B</h2><p>\u7EE7\u627F Thread \u7C7B\uFF0C\u91CD\u5199 run() \u65B9\u6CD5\uFF0C\u8C03\u7528 start \u5F00\u542F\u7EBF\u7A0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadTest</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        \u4E0D\u4E00\u5B9A\u7ACB\u5373\u6267\u884C</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run Thread===&gt;&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        \u521B\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\u5BF9\u8C61</span>
        <span class="token class-name">ThreadTest</span> threadTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u8C03\u7528start()\u65B9\u6CD5\u5F00\u542F\u7EBF\u7A0B</span>
        threadTest<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run main===&gt;&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5B9E\u73B0-runnable-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-runnable-\u63A5\u53E3" aria-hidden="true">#</a> \u5B9E\u73B0 Runnable \u63A5\u53E3</h2><p>\u5B9E\u73B0 runnable \u63A5\u53E3\uFF0C\u91CD\u5199 run \u65B9\u6CD5\uFF0C\u6267\u884C\u7EBF\u7A0B\u9700\u8981\u4E22\u5165 runnable \u63A5\u53E3\u5B9E\u73B0\u7C7B\uFF0C\u8C03\u7528 start \u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run Thread===&gt;&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run main===&gt;&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u5B9E\u73B0-callable-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-callable-\u63A5\u53E3" aria-hidden="true">#</a> \u5B9E\u73B0 Callable \u63A5\u53E3</h2><p>\u5B9E\u73B0 Callable \u63A5\u53E3\uFF0C\u91CD\u5199 call \u65B9\u6CD5\uFF0C\u901A\u8FC7\u7EBF\u7A0B\u6C60\u6216 FutureTask \u6267\u884C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CallableDownload</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CallableDownload</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Downloader</span> downloader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Downloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        downloader<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;From &quot;</span><span class="token operator">+</span>url<span class="token operator">+</span><span class="token string">&quot; download &quot;</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">CallableDownload</span> downloadImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CallableDownload</span><span class="token punctuation">(</span><span class="token string">&quot;http://112.126.61.130/download/src/2021.jpg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1283.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CallableDownload</span> downloadImage1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CallableDownload</span><span class="token punctuation">(</span><span class="token string">&quot;http://112.126.61.130/download/src/1.jpg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u521B\u5EFA\u6267\u884C\u670D\u52A1</span>
        <span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u63D0\u4EA4\u6267\u884C</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> submit <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>downloadImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> submit1 <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>downloadImage1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u83B7\u53D6\u7ED3\u679C</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> submit<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> result2 <span class="token operator">=</span> submit1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u5173\u95ED\u670D\u52A1</span>
        executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Downloader</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">copyURLToFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;thread.Downloader Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>FutureTask\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CallableDownload</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CallableDownload</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Downloader</span> downloader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Downloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        downloader<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;From &quot;</span><span class="token operator">+</span>url<span class="token operator">+</span><span class="token string">&quot; download &quot;</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">CallableDownload</span> downloadImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CallableDownload</span><span class="token punctuation">(</span><span class="token string">&quot;http://112.126.61.130/download/src/2222.jpg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1283.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CallableDownload</span> downloadImage1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CallableDownload</span><span class="token punctuation">(</span><span class="token string">&quot;http://112.126.61.130/download/src/1.jpg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringFutureTask <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>downloadImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringFutureTask1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>downloadImage1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>stringFutureTask<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>stringFutureTask1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Downloader</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">copyURLToFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;thread.Downloader Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,12);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
