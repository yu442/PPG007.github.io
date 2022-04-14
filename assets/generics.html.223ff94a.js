import{_ as p,r as t,o as e,c as o,a as s,d as c,F as l,e as u,b as n}from"./app.269ed0ef.js";const i={},r=u(`<h1 id="\u6CDB\u578B-go1-18" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B-go1-18" aria-hidden="true">#</a> \u6CDB\u578B(Go1.18)</h1><h2 id="\u5728\u51FD\u6570\u58F0\u660E\u4E2D\u4F7F\u7528\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u5728\u51FD\u6570\u58F0\u660E\u4E2D\u4F7F\u7528\u6CDB\u578B" aria-hidden="true">#</a> \u5728\u51FD\u6570\u58F0\u660E\u4E2D\u4F7F\u7528\u6CDB\u578B</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>min<span class="token punctuation">[</span><span class="token builtin">float64</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> min<span class="token punctuation">[</span>T <span class="token builtin">int</span><span class="token operator">|</span><span class="token builtin">float64</span><span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> T <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Go1.18 \u4E2D\u4F7F\u7528\u4E2D\u62EC\u53F7\u8868\u793A\u6CDB\u578B\uFF0C\u6CDB\u578B\u7C7B\u578B T \u7684\u53EF\u9009\u7C7B\u578B\u5728\u540E\u9762\u4F7F\u7528\u6216\u8FD0\u7B97\u7B26\u5206\u5272\uFF0C\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u4F7F\u7528\u8BE5\u51FD\u6570\u7684\u54EA\u4E2A\u7C7B\u578B\uFF08\u4E0A\u9762\u7684<code>fmt.Println(min[float64](1.2, 2.1))</code>\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u7701\u7565\u3002</p><p>\u5982\u679C\u6211\u4EEC\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF08\u4E0D\u662F\u8D77\u522B\u540D\uFF09\uFF0C\u90A3\u4E48\u5C06\u81EA\u5B9A\u4E49\u7C7B\u578B\u4F20\u5165\u4E0A\u9762\u7684 min \u51FD\u6570\u4F1A\u62A5\u9519\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>~</code>\u7B26\u53F7\uFF0C\u6B64\u7B26\u53F7\u58F0\u660E\u7684\u7C7B\u578B\u53EF\u4EE5\u63A5\u6536\u539F\u7C7B\u578B\u4E0E\u5E95\u5C42\u7C7B\u578B\u662F\u6B64\u539F\u7C7B\u578B\u7684\u7C7B\u578B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myFloat <span class="token builtin">float64</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	a myFloat <span class="token operator">=</span> <span class="token number">1.1</span>
	b myFloat <span class="token operator">=</span> <span class="token number">2.2</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> min<span class="token punctuation">[</span>T <span class="token builtin">int</span> <span class="token operator">|</span> ~<span class="token builtin">float64</span><span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> T <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5982\u679C\u9700\u8981\u9650\u5236\u4E00\u4E2A\u65B9\u6CD5\u662F\u67D0\u4E9B\u7C7B\u578B\u800C\u53C8\u4E0D\u60F3\u5C06\u4E2D\u62EC\u53F7\u5199\u7684\u592A\u957F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u63A5\u53E3\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> minType <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token builtin">int8</span> <span class="token operator">|</span> <span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">int16</span> <span class="token operator">|</span> <span class="token builtin">int32</span> <span class="token operator">|</span> <span class="token builtin">int64</span> <span class="token operator">|</span> <span class="token builtin">uint8</span> <span class="token operator">|</span> <span class="token builtin">uint</span> <span class="token operator">|</span> <span class="token builtin">uint16</span> <span class="token operator">|</span> <span class="token builtin">uint32</span> <span class="token operator">|</span> <span class="token builtin">uint64</span> <span class="token operator">|</span> <span class="token builtin">float32</span> <span class="token operator">|</span> <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> min<span class="token punctuation">[</span>T minType<span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> T <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u63A5\u53E3\u4E2D\u7684\u7C7B\u578B\u53EF\u4EE5\u6362\u884C\u5199\uFF0C\u6362\u884C\u540E\u8868\u793A\u8981\u540C\u65F6\u5177\u6709\u6BCF\u4E00\u884C\u7684\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	a myInt <span class="token operator">=</span> <span class="token number">1</span>
	b myInt <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> minType <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token builtin">int8</span> <span class="token operator">|</span> ~<span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">int16</span> <span class="token operator">|</span> <span class="token builtin">int32</span> <span class="token operator">|</span> <span class="token builtin">int64</span> <span class="token operator">|</span> <span class="token builtin">uint8</span> <span class="token operator">|</span> <span class="token builtin">uint</span> <span class="token operator">|</span> <span class="token builtin">uint16</span> <span class="token operator">|</span> <span class="token builtin">uint32</span> <span class="token operator">|</span> <span class="token builtin">uint64</span> <span class="token operator">|</span> <span class="token builtin">float32</span> <span class="token operator">|</span> <span class="token builtin">float64</span>
	myInt
<span class="token punctuation">}</span>

<span class="token keyword">func</span> min<span class="token punctuation">[</span>T minType<span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> T <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u4E0A\u9762\u7684 myInt \u540C\u65F6\u6EE1\u8DB3 <code>~int</code>\u4EE5\u53CA myInt \u7C7B\u578B\u3002</p><p>\u5F53\u7136\u63A5\u53E3\u4E5F\u53EF\u4EE5\u540C\u65F6\u5177\u6709\u65B9\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">type</span> minStrct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>minStrct<span class="token punctuation">)</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;demo&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">demo</span><span class="token punctuation">(</span>minStrct<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> demoType <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	minStrct
	<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> demo<span class="token punctuation">[</span>T demoType<span class="token punctuation">]</span><span class="token punctuation">(</span>a T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5982\u679C\u63A5\u53E3\u91CC\u6709\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u4E0D\u80FD\u7528\u6765\u4F5C\u4E3A\u53D8\u91CF\u7C7B\u578B\u58F0\u660E\u53D8\u91CF\u4E86\uFF0C\u53EA\u80FD\u7528\u4F5C\u7C7B\u578B\u7EA6\u675F\u3002</p></div><p>\u5728 <code>golang.org/x/exp/constraints</code> \u5305\u4E2D\uFF0C\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u4E00\u4E9B\u7C7B\u578B\u63A5\u53E3\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> minType <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// int8 | ~int | int16 | int32 | int64 | uint8 | uint | uint16 | uint32 | uint64 | float32 | float64</span>
	myInt
	constraints<span class="token punctuation">.</span>Float<span class="token operator">|</span>constraints<span class="token punctuation">.</span>Signed<span class="token operator">|</span>constraints<span class="token punctuation">.</span>Unsigned<span class="token operator">|</span>constraints<span class="token punctuation">.</span>Integer<span class="token operator">|</span>constraints<span class="token punctuation">.</span>Ordered
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u7C7B\u578B\u63A5\u53E3\u524D\u4E0D\u80FD\u4F7F\u7528<code>~</code>\u7B26\u53F7\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6B64\u5916\uFF0C<code>golang.org/x/exp/slices</code> \u5305\u53CA <code>golang.org/x/exp/maps</code> \u5305\u4E2D\u5206\u522B\u5B9A\u4E49\u4E86\u4E00\u4E9B\u4F7F\u7528\u6CDB\u578B\u7684\u5207\u7247\u53CA map \u7684\u5DE5\u5177\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slices<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h2 id="\u7ED3\u6784\u4F53\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u6CDB\u578B" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u6CDB\u578B</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myType <span class="token builtin">int</span>

<span class="token keyword">type</span> DemoStructType <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token builtin">int8</span> <span class="token operator">|</span> ~<span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">int16</span> <span class="token operator">|</span> <span class="token builtin">int32</span> <span class="token operator">|</span> <span class="token builtin">int64</span> <span class="token operator">|</span> <span class="token builtin">uint8</span> <span class="token operator">|</span> <span class="token builtin">uint</span> <span class="token operator">|</span> <span class="token builtin">uint16</span> <span class="token operator">|</span> <span class="token builtin">uint32</span> <span class="token operator">|</span> <span class="token builtin">uint64</span> <span class="token operator">|</span> <span class="token builtin">float32</span> <span class="token operator">|</span> <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DemoStruct<span class="token punctuation">[</span>T DemoStructType<span class="token punctuation">]</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Data T
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m myType <span class="token operator">=</span> <span class="token number">2</span>
	d <span class="token operator">:=</span> DemoStruct<span class="token punctuation">[</span>myType<span class="token punctuation">]</span><span class="token punctuation">{</span>
		Data<span class="token punctuation">:</span> m<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4F7F\u7528\u6CDB\u578B\u7ED3\u6784\u4F53\u58F0\u660E\u53D8\u91CF\u65F6\uFF0C\u7ED3\u6784\u4F53\u7684\u6CDB\u578B\u7C7B\u578B\u4E0D\u80FD\u7701\u7565\u3002</p></div><h2 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h2><p>any \u662F\u4E00\u4E2A\u65B0\u7684\u6807\u8BC6\u7B26\uFF0C\u662F <code>interface{}</code> \u7684\u522B\u540D\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// any is an alias for interface{} and is equivalent to interface{} in all ways.</span>
<span class="token keyword">type</span> any <span class="token operator">=</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u4EE5\u4F7F\u7528 any \u6765\u4EE3\u66FF\u539F\u6765\u7684\u7A7A\u63A5\u53E3\u7C7B\u578B\u3002</p><h2 id="comparable" tabindex="-1"><a class="header-anchor" href="#comparable" aria-hidden="true">#</a> comparable</h2><p>comparable \u662F\u4E00\u4E2A\u63A5\u53E3\uFF0C\u8868\u793A\u53EF\u4EE5\u4F7F\u7528 <code>==</code> \u6216 <code>!=</code> \u8FDB\u884C\u6BD4\u8F83\u7684\u6240\u6709\u7C7B\u578B\u7684\u96C6\u5408\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">IsEqual</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">IsNotEqual</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> IsEqual<span class="token punctuation">[</span>T comparable<span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">==</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> IsNotEqual<span class="token punctuation">[</span>T comparable<span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b T<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">!=</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>comparable \u53EA\u80FD\u7528\u6765\u9650\u5236\u6CDB\u578B\u7C7B\u578B\u3002</p></div><h2 id="\u6CDB\u578B\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u5207\u7247" aria-hidden="true">#</a> \u6CDB\u578B\u5207\u7247</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> mySlice<span class="token punctuation">[</span>T <span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>T

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a mySlice<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> b mySlice<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u6CDB\u578B-map" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B-map" aria-hidden="true">#</a> \u6CDB\u578B map</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myMap <span class="token punctuation">[</span>K <span class="token builtin">int</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">,</span> V <span class="token builtin">float32</span><span class="token operator">|</span><span class="token builtin">float64</span><span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span>K<span class="token punctuation">]</span>V

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> m myMap<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float32</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span>
		<span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">1.1</span><span class="token punctuation">,</span>
		<span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">2.2</span><span class="token punctuation">,</span>
		<span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">3.3</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6CDB\u578B-channel" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B-channel" aria-hidden="true">#</a> \u6CDB\u578B channel</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myChannel<span class="token punctuation">[</span>T <span class="token builtin">int</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token keyword">chan</span> T

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> m myChannel<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span>myChannel<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> x <span class="token operator">:=</span> <span class="token operator">&lt;-</span> m<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>

		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	m <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="go1-18-\u5176\u4ED6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#go1-18-\u5176\u4ED6\u5185\u5BB9" aria-hidden="true">#</a> Go1.18 \u5176\u4ED6\u5185\u5BB9</h2>`,36),k=n("Go1.18 \u4FEE\u6539\u5E76\u589E\u52A0\u4E86\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u5F15\u5165\u4E86 workspace \u53CA\u6A21\u7CCA\u6D4B\u8BD5\uFF0C\u8BE6\u89C1\uFF1A"),b={href:"https://tip.golang.org/doc/go1.18",target:"_blank",rel:"noopener noreferrer"},m=n("Go1.18 Release Notes"),d=n("\u3002");function g(y,f){const a=t("ExternalLinkIcon");return e(),o(l,null,[r,s("p",null,[k,s("a",b,[m,c(a)]),d])],64)}var h=p(i,[["render",g]]);export{h as default};