import{_ as n,e as s}from"./app.269ed0ef.js";const a={},p=s(`<h1 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h1><h2 id="\u7C7B\u578B\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B</h2><p>\u81EA\u5B9A\u4E49\u7C7B\u578B\u662F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5168\u65B0\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u5185\u7F6E\u7684\u57FA\u672C\u7C7B\u578B\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7ED3\u6784\u4F53\u5B9A\u4E49\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u81EA\u5B9A\u4E49\u7C7B\u578B</span>
<span class="token keyword">type</span> MyInt <span class="token builtin">int</span>

<span class="token comment">// \u7C7B\u578B\u522B\u540D</span>
<span class="token keyword">type</span> <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token builtin">uint8</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5B9A\u4E49\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u5B9A\u4E49\u7ED3\u6784\u4F53</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  username <span class="token builtin">string</span>
  password <span class="token builtin">string</span>
  age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> user1 user
user1<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;koston&quot;</span>
user1<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
user1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u533F\u540D\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u533F\u540D\u7ED3\u6784\u4F53</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> ticket <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  destination <span class="token builtin">string</span>
  depature <span class="token builtin">string</span>
  date time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>
ticket<span class="token punctuation">.</span>destination <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
ticket<span class="token punctuation">.</span>depature <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span>
ticket<span class="token punctuation">.</span>date <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53</h2><p>Go \u8BED\u8A00\u4E2D\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u6307\u9488\u64CD\u4F5C\u6210\u5458\uFF0C\u53EF\u4EE5\u4E0D\u4F7F\u7528\u661F\u53F7\uFF08\u8BED\u6CD5\u7CD6\uFF09\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> user1 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
user1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
<span class="token punctuation">(</span><span class="token operator">*</span>user1<span class="token punctuation">)</span><span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;koston&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>user1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u53D6\u7ED3\u6784\u4F53\u7684\u5730\u5740\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#\u53D6\u7ED3\u6784\u4F53\u7684\u5730\u5740\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> \u53D6\u7ED3\u6784\u4F53\u7684\u5730\u5740\u5B9E\u4F8B\u5316</h2><p>\u7528 <code>&amp;</code> \u53D6\u5730\u5740\u76F8\u5F53\u4E8E\u8FDB\u884C\u4E86\u4E00\u6B21 new \u64CD\u4F5C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>user1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>user<span class="token punctuation">{</span><span class="token punctuation">}</span>
user1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4F7F\u7528\u952E\u503C\u5BF9\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u952E\u503C\u5BF9\u521D\u59CB\u5316" aria-hidden="true">#</a> \u4F7F\u7528\u952E\u503C\u5BF9\u521D\u59CB\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// user1 \u662F user \u7C7B\u578B\u3002</span>
user1 <span class="token operator">:=</span> user<span class="token punctuation">{</span>
  username<span class="token punctuation">:</span> <span class="token string">&quot;koston&quot;</span><span class="token punctuation">,</span>
  password<span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
  age<span class="token punctuation">:</span>      <span class="token number">21</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span>
<span class="token comment">// user2 \u662F user \u6307\u9488\u7C7B\u578B\u3002</span>
user2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>user<span class="token punctuation">{</span>
  username<span class="token punctuation">:</span> <span class="token string">&quot;PPG007&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>user2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4F7F\u7528\u503C\u7684\u5217\u8868\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u503C\u7684\u5217\u8868\u521D\u59CB\u5316" aria-hidden="true">#</a> \u4F7F\u7528\u503C\u7684\u5217\u8868\u521D\u59CB\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>user1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>user<span class="token punctuation">{</span>
  <span class="token string">&quot;koston&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
  <span class="token number">21</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>user1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u5FC5\u987B\u521D\u59CB\u5316\u7ED3\u6784\u4F53\u7684\u6240\u6709\u5B57\u6BB5\u3002</li><li>\u521D\u59CB\u503C\u7684\u586B\u5145\u987A\u5E8F\u5FC5\u987B\u4E0E\u5B57\u6BB5\u5728\u7ED3\u6784\u4F53\u4E2D\u7684\u58F0\u660E\u987A\u5E8F\u4E00\u81F4\u3002</li><li>\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u548C\u952E\u503C\u521D\u59CB\u5316\u65B9\u5F0F\u6DF7\u7528\u3002</li></ul><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><p>Go \u8BED\u8A00\u4E2D\u7ED3\u6784\u4F53\u6CA1\u6709\u6784\u9020\u51FD\u6570\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7\u5176\u4ED6\u65B9\u5F0F\u5B9E\u73B0\u540C\u6837\u6548\u679C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">newUser</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>user <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>user<span class="token punctuation">{</span>
    username<span class="token punctuation">,</span>
    password<span class="token punctuation">,</span>
    age<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  user1 <span class="token operator">:=</span> <span class="token function">newUser</span><span class="token punctuation">(</span><span class="token string">&quot;koston&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>user1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> demo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span>
  <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u533F\u540D\u5B57\u6BB5\u9ED8\u8BA4\u91C7\u7528\u7C7B\u578B\u540D\u4F5C\u4E3A\u5B57\u6BB5\u540D\uFF0C\u7ED3\u6784\u4F53\u8981\u6C42\u5B57\u6BB5\u540D\u79F0\u5FC5\u987B\u552F\u4E00\uFF0C\u4E00\u4E2A\u7ED3\u6784\u4F53\u4E2D\u540C\u7C7B\u578B\u7684\u533F\u540D\u5B57\u6BB5\u53EA\u80FD\u6709\u4E00\u4E2A\u3002</p><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p>\u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53\u53EF\u4EE5\u5B9E\u73B0\u7EE7\u627F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>animal<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s move\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token operator">*</span>animal
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>dog<span class="token punctuation">)</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s wang\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  dog1 <span class="token operator">:=</span> dog<span class="token punctuation">{</span>
    animal<span class="token punctuation">:</span> <span class="token operator">&amp;</span>animal<span class="token punctuation">{</span>
      name<span class="token punctuation">:</span> <span class="token string">&quot;dog1&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  dog1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dog1<span class="token punctuation">.</span><span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u5B57\u6BB5\u7684\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u7684\u53EF\u89C1\u6027" aria-hidden="true">#</a> \u5B57\u6BB5\u7684\u53EF\u89C1\u6027</h2><p>\u7ED3\u6784\u4F53\u4E2D\u5B57\u6BB5\u5927\u5199\u5F00\u5934\u8868\u793A\u53EF\u516C\u5F00\u8BBF\u95EE\uFF0C\u5C0F\u5199\u8868\u793A\u79C1\u6709\uFF0C\u4EC5\u5728\u5B9A\u4E49\u5F53\u524D\u7ED3\u6784\u4F53\u7684\u5305\u4E2D\u53EF\u4EE5\u8BBF\u95EE\u3002</p><h2 id="\u7ED3\u6784\u4F53\u4E0E-json-\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u4E0E-json-\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u4E0E JSON \u5E8F\u5217\u5316</h2><p>\u53EA\u6709\u53EF\u516C\u5F00\u8BBF\u95EE\u7684\u5B57\u6BB5\u624D\u4F1A\u51FA\u73B0\u5728 JSON \u5B57\u7B26\u4E32\u4E2D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>user1 <span class="token operator">:=</span> <span class="token function">newUser</span><span class="token punctuation">(</span><span class="token string">&quot;koston&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&quot;SD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;QD&quot;</span><span class="token punctuation">)</span>
jsonString<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;JSON \u5E8F\u5217\u5316\u5931\u8D25&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">)</span>

user2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>user<span class="token punctuation">{</span><span class="token punctuation">}</span>
json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">,</span> user2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>user2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u7ED3\u6784\u4F53\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u6807\u7B7E" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u6807\u7B7E</h2><p>\u7ED3\u6784\u4F53\u6807\u7B7E\u662F\u7ED3\u6784\u4F53\u7684\u5143\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u901A\u8FC7\u53CD\u5C04\u8BFB\u53D6\u3002\u6807\u7B7E\u5728\u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u540E\u65B9\u5B9A\u4E49\uFF0C\u4F7F\u7528\u53CD\u5F15\u53F7\uFF0C\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u952E\u503C\u5BF9\u6784\u6210\uFF0C\u952E\u503C\u4F7F\u7528\u5192\u53F7\u5206\u9694\uFF0C\u503C\u7528\u53CC\u5F15\u53F7\uFF0C\u952E\u503C\u5BF9\u4E4B\u95F4\u4F7F\u7528\u4E00\u4E2A\u7A7A\u683C\u5206\u9694\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u901A\u8FC7\u7ED3\u6784\u4F53\u6807\u7B7E\u6307\u5B9A\u8F6C\u4E3A JSON \u65F6\u7684\u952E</span>
<span class="token keyword">type</span> address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Province <span class="token builtin">string</span> <span class="token string">\`json:&quot;\u7701\u4EFD&quot;\`</span>
  City <span class="token builtin">string</span> <span class="token string">\`json:&quot;\u57CE\u5E02&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,38);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};