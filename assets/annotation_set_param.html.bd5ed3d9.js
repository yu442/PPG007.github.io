import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u4F7F\u7528\u6CE8\u89E3\u8FDB\u884C\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6CE8\u89E3\u8FDB\u884C\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528\u6CE8\u89E3\u8FDB\u884C\u53C2\u6570\u914D\u7F6E</h1><p>\u5047\u8BBE\u94F6\u884C\u6709\u4E2A\u8F6C\u8D26\u4E1A\u52A1\uFF0C\u8F6C\u8D26\u7684\u9650\u989D\u53EF\u80FD\u4F1A\u6839\u636E\u6C47\u7387\u7684\u53D8\u5316\u800C\u53D8\u5316\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u6CE8\u89E3\u7075\u6D3B\u914D\u7F6E\u8F6C\u8D26\u7684\u9650\u989D\uFF0C\u800C\u4E0D\u7528\u6BCF\u6B21\u90FD\u53BB\u4FEE\u6539\u6211\u4EEC\u7684\u4E1A\u52A1\u4EE3\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\u5B9A\u4E49\u9650\u989D\u6CE8\u89E3
 * <span class="token keyword">@author</span> 16582*/</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">BankTransferMoney</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> <span class="token function">maxMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">10000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\u8F6C\u8D26\u5904\u7406\u4E1A\u52A1\u7C7B
 * <span class="token keyword">@author</span> 16582*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">money</span> \u8F6C\u8D26\u91D1\u989D
     */</span>
    <span class="token annotation punctuation">@BankTransferMoney</span><span class="token punctuation">(</span>maxMoney <span class="token operator">=</span> <span class="token number">15000</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">transferMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">processAnnotationMoney</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">processAnnotationMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Method</span> transferMoney <span class="token operator">=</span> <span class="token class-name">BankService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;transferMoney&quot;</span><span class="token punctuation">,</span><span class="token keyword">double</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">boolean</span> annotationPresent <span class="token operator">=</span> transferMoney<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">BankTransferMoney</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>annotationPresent<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">BankTransferMoney</span> annotation <span class="token operator">=</span> transferMoney<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">BankTransferMoney</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">double</span> l <span class="token operator">=</span> annotation<span class="token punctuation">.</span><span class="token function">maxMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>money<span class="token operator">&gt;</span>l<span class="token punctuation">)</span><span class="token punctuation">{</span>
                   <span class="token keyword">return</span> <span class="token string">&quot;\u8F6C\u8D26\u91D1\u989D\u5927\u4E8E\u9650\u989D\uFF0C\u8F6C\u8D26\u5931\u8D25&quot;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span><span class="token string">&quot;\u8F6C\u8D26\u91D1\u989D\u4E3A:&quot;</span><span class="token operator">+</span>money<span class="token operator">+</span><span class="token string">&quot;\uFF0C\u8F6C\u8D26\u6210\u529F&quot;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">NoSuchMethodException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u8F6C\u8D26\u5904\u7406\u5931\u8D25&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">transferMoney</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,4);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
