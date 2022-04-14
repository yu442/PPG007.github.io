import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u95E8\u9762\u6A21\u5F0F-\u5916\u89C2\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u95E8\u9762\u6A21\u5F0F-\u5916\u89C2\u6A21\u5F0F" aria-hidden="true">#</a> \u95E8\u9762\u6A21\u5F0F\uFF08\u5916\u89C2\u6A21\u5F0F\uFF09</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u8981\u6C42\u4E00\u4E2A\u5B50\u7CFB\u7EDF\u7684\u5916\u90E8\u4E0E\u5176\u5185\u90E8\u7684\u901A\u4FE1\u5FC5\u987B\u901A\u8FC7\u4E00\u4E2A\u7EDF\u4E00\u7684\u5BF9\u8C61\u8FDB\u884C\u3002\u95E8\u9762\u6A21\u5F0F\u63D0\u4F9B\u4E00\u4E2A\u9AD8\u5C42\u6B21\u7684\u63A5\u53E3\uFF0C\u4F7F\u5F97\u5B50\u7CFB\u7EDF\u66F4\u6613\u4E8E\u4F7F\u7528\u3002</p><h2 id="\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272" aria-hidden="true">#</a> \u89D2\u8272</h2><ul><li>Facade \u95E8\u9762\u89D2\u8272\uFF1A\u5BA2\u6237\u7AEF\u8C03\u7528\u6B64\u89D2\u8272\u7684\u65B9\u6CD5\uFF0C\u6B64\u89D2\u8272\u6CA1\u6709\u5B9E\u9645\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EA\u662F\u4E00\u4E2A\u59D4\u6258\u7C7B\u3002</li><li>subsystem \u5B50\u7CFB\u7EDF\u89D2\u8272\uFF1A\u53EF\u4EE5\u540C\u65F6\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5B50\u7CFB\u7EDF\u3002\u6BCF\u4E00\u4E2A\u5B50\u7CFB\u7EDF\u90FD\u662F\u4E00\u4E2A\u7C7B\u7684\u96C6\u5408\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u5B50\u7CFB\u7EDF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Light</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6253\u5F00\u4E86\u706F....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5173\u95ED\u4E86\u706F....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Television</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6253\u5F00\u4E86\u7535\u89C6....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5173\u95ED\u4E86\u7535\u89C6....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AirCondition</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6253\u5F00\u4E86\u7A7A\u8C03....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5173\u95ED\u4E86\u7A7A\u8C03....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u95E8\u9762\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Facade</span><span class="token punctuation">{</span>

    <span class="token class-name">Light</span> light<span class="token punctuation">;</span>
    <span class="token class-name">Television</span> television<span class="token punctuation">;</span>
    <span class="token class-name">AirCondition</span> aircondition<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span><span class="token class-name">Light</span> light<span class="token punctuation">,</span><span class="token class-name">Television</span> television<span class="token punctuation">,</span><span class="token class-name">AirCondition</span> aircondition<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>light <span class="token operator">=</span> light<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>television  <span class="token operator">=</span> television <span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>aircondition <span class="token operator">=</span>aircondition<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D77\u5E8A\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        light<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        television<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aircondition<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7761\u89C9\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        light<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        television<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aircondition<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u542F\u52A8\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Light</span> light <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Light</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Television</span> television <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Television</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AirCondition</span> aircondition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AirCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u4F20\u53C2</span>
        <span class="token class-name">Facade</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span>light<span class="token punctuation">,</span>television<span class="token punctuation">,</span>aircondition<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5BA2\u6237\u7AEF\u76F4\u63A5\u4E0E\u5916\u89C2\u5BF9\u8C61\u8FDB\u884C\u4EA4\u4E92</span>
        facade<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        facade<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u95E8\u9762\u6A21\u5F0F\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u95E8\u9762\u6A21\u5F0F\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u95E8\u9762\u6A21\u5F0F\u7684\u4F18\u70B9</h2><ul><li>\u51CF\u5C11\u7CFB\u7EDF\u7684\u76F8\u4E92\u4F9D\u8D56\uFF1A\u4E0D\u66B4\u9732\u5B50\u7CFB\u7EDF\u3002</li><li>\u63D0\u9AD8\u7075\u6D3B\u6027\u3002</li><li>\u63D0\u9AD8\u8BBF\u95EE\u5B89\u5168\u6027\uFF1A\u53EA\u6709\u95E8\u9762\u4E0A\u4F7F\u7528\u7684\u65B9\u6CD5\u624D\u80FD\u88AB\u8BBF\u95EE\u3002</li></ul><h2 id="\u95E8\u9762\u6A21\u5F0F\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u95E8\u9762\u6A21\u5F0F\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u95E8\u9762\u6A21\u5F0F\u7684\u7F3A\u70B9</h2><p>\u4E0D\u7B26\u5408\u5F00\u95ED\u539F\u5219\u3002</p><h2 id="\u95E8\u9762\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u95E8\u9762\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u95E8\u9762\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F</h2><ul><li>\u4E3A\u4E00\u4E2A\u590D\u6742\u7684\u6A21\u5757\u6216\u5B50\u7CFB\u7EDF\u63D0\u4F9B\u4E00\u4E2A\u4F9B\u5916\u754C\u8BBF\u95EE\u7684\u63A5\u53E3\u3002</li><li>\u5B50\u7CFB\u7EDF\u76F8\u5BF9\u72EC\u7ACB\u3002</li><li>\u9884\u9632\u4F4E\u6C34\u5E73\u4EBA\u5458\u5E26\u6765\u7684\u98CE\u9669\u6269\u6563\u3002</li></ul><h2 id="\u95E8\u9762\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u95E8\u9762\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u95E8\u9762\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879</h2><p>\u4E00\u4E2A\u5B50\u7CFB\u7EDF\u53EF\u4EE5\u6709\u591A\u4E2A\u95E8\u9762\u3002</p><p>\u591A\u95E8\u9762\u60C5\u51B5\uFF1A</p><ul><li>\u95E8\u9762\u8FC7\u4E8E\u5E9E\u5927\u3002</li><li>\u5B50\u7CFB\u7EDF\u53EF\u4EE5\u63D0\u4F9B\u4E0D\u540C\u8BBF\u95EE\u8DEF\u5F84\u3002</li><li>\u95E8\u9762\u4E0D\u53C2\u4E0E\u5B50\u7CFB\u7EDF\u5185\u7684\u4E1A\u52A1\u903B\u8F91</li></ul><p>\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C\u95E8\u9762\u7C7B\u4E2D\u7684\u65B9\u6CD5\u5B8C\u6210\u4E86\u5B50\u7CFB\u7EDF\u65B9\u6CD5\u7684\u7EC4\u5408\uFF0C\u5FC5\u987B\u901A\u8FC7\u95E8\u9762\u624D\u80FD\u5B8C\u6210\u5F00\u5173\u52A8\u4F5C\uFF0C\u4E5F\u5C31\u662F\u5B50\u7CFB\u7EDF\u9700\u8981\u4F9D\u8D56\u95E8\u9762\uFF0C\u8FDD\u80CC\u4E86\u5355\u4E00\u804C\u8D23\u539F\u5219\u3002</p><p>\u4FEE\u6539\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u589E\u52A0\u5C01\u88C5\u7C7B\u5B8C\u6210\u5F00\u5173\u52A8\u4F5C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token punctuation">{</span>

    <span class="token class-name">Light</span> light<span class="token punctuation">;</span>
    <span class="token class-name">Television</span> television<span class="token punctuation">;</span>
    <span class="token class-name">AirCondition</span> aircondition<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token class-name">Light</span> light<span class="token punctuation">,</span><span class="token class-name">Television</span> television<span class="token punctuation">,</span><span class="token class-name">AirCondition</span> aircondition<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>light <span class="token operator">=</span> light<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>television  <span class="token operator">=</span> television <span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>aircondition <span class="token operator">=</span>aircondition<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D77\u5E8A\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        light<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        television<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aircondition<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7761\u89C9\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        light<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        television<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aircondition<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u7136\u540E\u95E8\u9762\u7C7B\u53EA\u8D1F\u8D23\u59D4\u6258\u8FD9\u4E2A\u5C01\u88C5\u7C7B\u5373\u53EF\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u95E8\u9762\u89D2\u8272\u5E94\u8BE5\u7A33\u5B9A\u3001\u4E0D\u7ECF\u5E38\u53D8\u5316\uFF0C\u4E1A\u52A1\u903B\u8F91\u7684\u53D8\u5316\u5C01\u88C5\u5728\u4E86\u5B50\u7CFB\u7EDF\u4E2D\uFF0C\u5BF9\u5916\u95E8\u9762\u4FDD\u6301\u4E0D\u53D8\u3002</p></div>`,29);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
