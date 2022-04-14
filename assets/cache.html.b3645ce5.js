import{_ as n,e as a}from"./app.269ed0ef.js";const s={},e=a(`<h1 id="\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a> \u7F13\u5B58</h1><h2 id="\u7F13\u5B58\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u7B80\u4ECB" aria-hidden="true">#</a> \u7F13\u5B58\u7B80\u4ECB</h2><p>\u4EC0\u4E48\u662F\u7F13\u5B58\uFF1A</p><ul><li>\u5B58\u5728\u5185\u5B58\u4E2D\u7684\u4E34\u65F6\u6570\u636E\u3002</li><li>\u5C06\u7528\u6237\u7ECF\u5E38\u67E5\u8BE2\u7684\u6570\u636E\u653E\u5728\u7F13\u5B58\u4E2D\uFF0C\u4ECE\u7F13\u5B58\u4E2D\u67E5\u8BE2\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u89E3\u51B3\u4E86\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u6027\u80FD\u95EE\u9898\u3002</li></ul><p>\u4E3A\u4EC0\u4E48\u7528\u7F13\u5B58\uFF1A</p><ul><li>\u51CF\u5C11\u8BBF\u95EE\u6570\u636E\u5E93\u7684\u6B21\u6570\uFF0C\u51CF\u5C0F\u7CFB\u7EDF\u5F00\u9500\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u6548\u7387\u3002</li></ul><p>\u4EC0\u4E48\u6837\u7684\u6570\u636E\u9002\u5408\u7528\u7F13\u5B58\uFF1A</p><ul><li>\u7ECF\u5E38\u67E5\u8BE2\u4E14\u4E0D\u7ECF\u5E38\u6539\u53D8\u7684\u6570\u636E\u3002</li></ul><h2 id="mybatis-\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#mybatis-\u7F13\u5B58" aria-hidden="true">#</a> Mybatis \u7F13\u5B58</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>MyBatis \u5185\u7F6E\u4E86\u4E00\u4E2A\u5F3A\u5927\u7684\u4E8B\u52A1\u6027\u67E5\u8BE2\u7F13\u5B58\u673A\u5236\uFF0C\u5B83\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u914D\u7F6E\u548C\u5B9A\u5236\u3002</p></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u53EA\u542F\u7528\u4E86\u672C\u5730\u7684\u4F1A\u8BDD\u7F13\u5B58\uFF0C\u5B83\u4EC5\u4EC5\u5BF9\u4E00\u4E2A\u4F1A\u8BDD\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u7F13\u5B58\u3002(\u4E00\u7EA7\u7F13\u5B58\uFF0Csqlsession \u7EA7\u522B\u7684\u7F13\u5B58)\u3002</p><p>\u4E8C\u7EA7\u7F13\u5B58\u9700\u8981\u624B\u52A8\u5F00\u542F\uFF0C\u57FA\u4E8E namespace \u7EA7\u522B\u3002</p><p>mybatis \u63D0\u4F9B\u4E86 cache \u63A5\u53E3\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7F13\u5B58(\u4E8C\u7EA7)\u3002</p><h2 id="mybatis-\u7F13\u5B58\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#mybatis-\u7F13\u5B58\u673A\u5236" aria-hidden="true">#</a> Mybatis \u7F13\u5B58\u673A\u5236</h2><ul><li>\u6620\u5C04\u8BED\u53E5\u6587\u4EF6\u4E2D\u7684\u6240\u6709 select \u8BED\u53E5\u7684\u7ED3\u679C\u5C06\u4F1A\u88AB\u7F13\u5B58\u3002</li><li>\u6620\u5C04\u8BED\u53E5\u6587\u4EF6\u4E2D\u7684\u6240\u6709 insert\u3001update \u548C delete \u8BED\u53E5\u4F1A\u5237\u65B0\u7F13\u5B58\u3002</li><li>\u7F13\u5B58\u4F1A\u4F7F\u7528\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7B97\u6CD5\uFF08LRU, Least Recently Used\uFF09\u7B97\u6CD5\u6765\u6E05\u9664\u4E0D\u9700\u8981\u7684\u7F13\u5B58\u3002</li><li>\u7F13\u5B58\u4E0D\u4F1A\u5B9A\u65F6\u8FDB\u884C\u5237\u65B0\uFF08\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6CA1\u6709\u5237\u65B0\u95F4\u9694\uFF09\u3002</li><li>\u7F13\u5B58\u4F1A\u4FDD\u5B58\u5217\u8868\u6216\u5BF9\u8C61\uFF08\u65E0\u8BBA\u67E5\u8BE2\u65B9\u6CD5\u8FD4\u56DE\u54EA\u79CD\uFF09\u7684 1024 \u4E2A\u5F15\u7528\u3002</li><li>\u7F13\u5B58\u4F1A\u88AB\u89C6\u4E3A\u8BFB/\u5199\u7F13\u5B58\uFF0C\u8FD9\u610F\u5473\u7740\u83B7\u53D6\u5230\u7684\u5BF9\u8C61\u5E76\u4E0D\u662F\u5171\u4EAB\u7684\uFF0C\u53EF\u4EE5\u5B89\u5168\u5730\u88AB\u8C03\u7528\u8005\u4FEE\u6539\uFF0C\u800C\u4E0D\u5E72\u6270\u5176\u4ED6\u8C03\u7528\u8005\u6216\u7EBF\u7A0B\u6240\u505A\u7684\u6F5C\u5728\u4FEE\u6539\u3002</li></ul><h2 id="\u4E00\u7EA7\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EA7\u7F13\u5B58" aria-hidden="true">#</a> \u4E00\u7EA7\u7F13\u5B58</h2><p>\u5B9E\u4F53\u7C7B\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>mapper.xml\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    update mydata.usertable set password=#{password} where id=#{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryUsers<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from mydata.usertable
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from mydata.usertable where id=#{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p>\u6D4B\u8BD5\u4E00\uFF0C\u4E24\u6B21\u67E5\u8BE2\u540C\u4E00\u8BB0\u5F55(sqlsession \u751F\u547D\u5468\u671F\u5185):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Logging initialized using &#39;class org.apache.ibatis.logging.stdout.StdOutImpl&#39; adapter.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
Opening JDBC Connection
Created connection 293508253.
Setting autocommit to false on JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
==&gt;  Preparing: select * from mydata.usertable where id=?
==&gt; Parameters: 1(Integer)
&lt;==    Columns: id, username, password
&lt;==        Row: 1, \u4E1B\u7EF4\u4EEA, 110
&lt;==      Total: 1
User(id=1, username=\u4E1B\u7EF4\u4EEA, password=110)
==============================
User(id=1, username=\u4E1B\u7EF4\u4EEA, password=110)
true
Resetting autocommit to true on JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Closing JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Returned connection 293508253 to pool.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7531\u65E5\u5FD7\u6587\u4EF6\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E24\u6B21\u67E5\u8BE2\u540C\u4E00\u8BB0\u5F55\u53EA\u8BBF\u95EE\u4E86\u4E00\u6B21\u6570\u636E\u5E93\u3002</p></div></li><li><p>\u6D4B\u8BD5\u4E8C\uFF0C\u4E24\u6B21\u67E5\u8BE2\u7684\u4E0D\u662F\u540C\u4E00\u8BB0\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Logging initialized using &#39;class org.apache.ibatis.logging.stdout.StdOutImpl&#39; adapter.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
Opening JDBC Connection
Created connection 293508253.
Setting autocommit to false on JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
==&gt;  Preparing: select * from mydata.usertable where id=?
==&gt; Parameters: 1(Integer)
&lt;==    Columns: id, username, password
&lt;==        Row: 1, \u4E1B\u7EF4\u4EEA, 110
&lt;==      Total: 1
User(id=1, username=\u4E1B\u7EF4\u4EEA, password=110)
==============================
==&gt;  Preparing: select * from mydata.usertable where id=?
==&gt; Parameters: 2(Integer)
&lt;==    Columns: id, username, password
&lt;==        Row: 2, \u738B\u6D77\u6D0B, 13573285937
&lt;==      Total: 1
User(id=2, username=\u738B\u6D77\u6D0B, password=13573285937)
false
Resetting autocommit to true on JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Closing JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Returned connection 293508253 to pool.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7531\u65E5\u5FD7\u6587\u4EF6\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E24\u6B21\u67E5\u8BE2\u4E0D\u540C\u8BB0\u5F55\u8BBF\u95EE\u4E86\u4E24\u6B21\u6570\u636E\u5E93\u3002</p></div></li><li><p>\u6D4B\u8BD5\u4E09\uFF0C\u67E5\u8BE2\u5B8C\u7B2C\u4E00\u6761\u8BB0\u5F55\u540E\uFF0C\u66F4\u65B0\u6570\u636E\u5E93\u5185\u4EFB\u610F\u8BB0\u5F55\uFF0C\u518D\u6B21\u67E5\u8BE2\u540C\u4E00\u6761\u8BB0\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Logging initialized using &#39;class org.apache.ibatis.logging.stdout.StdOutImpl&#39; adapter.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
Opening JDBC Connection
Created connection 293508253.
Setting autocommit to false on JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
==&gt;  Preparing: select * from mydata.usertable where id=?
==&gt; Parameters: 1(Integer)
&lt;==    Columns: id, username, password
&lt;==        Row: 1, \u4E1B\u7EF4\u4EEA, 110
&lt;==      Total: 1
User(id=1, username=\u4E1B\u7EF4\u4EEA, password=110)
==&gt;  Preparing: update mydata.usertable set password=? where id=?
==&gt; Parameters: test1(String), 2(Integer)
&lt;==    Updates: 1
==============================
==&gt;  Preparing: select * from mydata.usertable where id=?
==&gt; Parameters: 1(Integer)
&lt;==    Columns: id, username, password
&lt;==        Row: 1, \u4E1B\u7EF4\u4EEA, 110
&lt;==      Total: 1
User(id=1, username=\u4E1B\u7EF4\u4EEA, password=110)
true
Rolling back JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Resetting autocommit to true on JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Closing JDBC Connection [com.mysql.cj.jdbc.ConnectionImpl@117e949d]
Returned connection 293508253 to pool.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7531\u65E5\u5FD7\u6587\u4EF6\u53EF\u4EE5\u770B\u51FA\uFF0C\u66F4\u65B0\u6570\u636E\u5E93\u5185\u5BB9\u5BFC\u81F4\u4E86\u7F13\u5B58\u7684\u66F4\u65B0\u3002</p></div></li></ul><h3 id="\u7F13\u5B58\u5931\u6548\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u5931\u6548\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u7F13\u5B58\u5931\u6548\u7684\u60C5\u51B5</h3><ol><li>\u67E5\u8BE2\u4E0D\u540C\u7684\u8BB0\u5F55\u3002</li><li>\u589E\u5220\u6539\u64CD\u4F5C\u540E\uFF0C\u5FC5\u5B9A\u5237\u65B0\u7F13\u5B58\u3002</li><li>\u67E5\u8BE2\u4E0D\u540C\u7684 mapper.xml\u3002</li><li>\u624B\u52A8\u6E05\u7406\u7F13\u5B58\u3002</li></ol><p>\u624B\u52A8\u6E05\u7406\u7F13\u5B58\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>sqlSession<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u7EA7\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u7EA7\u7F13\u5B58" aria-hidden="true">#</a> \u4E8C\u7EA7\u7F13\u5B58</h2><h3 id="\u5F00\u542F\u4E8C\u7EA7\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u4E8C\u7EA7\u7F13\u5B58" aria-hidden="true">#</a> \u5F00\u542F\u4E8C\u7EA7\u7F13\u5B58</h3><p>\u5728\u6620\u5C04\u5668 xml \u4E2D\u6DFB\u52A0\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7F13\u5B58\u53EA\u4F5C\u7528\u4E8E cache \u6807\u7B7E\u6240\u5728\u7684<strong>\u6620\u5C04\u6587\u4EF6</strong>\u4E2D\u7684\u8BED\u53E5\u3002\u5982\u679C\u4F60\u6DF7\u5408\u4F7F\u7528 Java API \u548C XML \u6620\u5C04\u6587\u4EF6\uFF0C\u5728\u5171\u7528\u63A5\u53E3\u4E2D\u7684\u8BED\u53E5\u5C06\u4E0D\u4F1A\u88AB\u9ED8\u8BA4\u7F13\u5B58\u3002\u4F60\u9700\u8981\u4F7F\u7528 <code>@CacheNamespaceRef</code> \u6CE8\u89E3\u6307\u5B9A\u7F13\u5B58\u4F5C\u7528\u57DF\u3002</p></div><h3 id="cache-\u5143\u7D20\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#cache-\u5143\u7D20\u7684\u5C5E\u6027" aria-hidden="true">#</a> cache \u5143\u7D20\u7684\u5C5E\u6027</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span>
  <span class="token attr-name">eviction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FIFO<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">flushInterval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60000<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>512<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">readOnly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>eviction\uFF1A\u6307\u5B9A\u6E05\u9664\u7B56\u7565\uFF0C\u9ED8\u8BA4\u7684\u6E05\u9664\u7B56\u7565\u662F <strong>LRU</strong>\u3002</p><p>\u53EF\u7528\u7684\u6E05\u9664\u7B56\u7565\u6709\uFF1A</p><ul><li>LRU\uFF1A\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\uFF1A\u79FB\u9664\u6700\u957F\u65F6\u95F4\u4E0D\u88AB\u4F7F\u7528\u7684\u5BF9\u8C61\u3002</li><li>FIFO\uFF1A\u5148\u8FDB\u5148\u51FA\uFF1A\u6309\u5BF9\u8C61\u8FDB\u5165\u7F13\u5B58\u7684\u987A\u5E8F\u6765\u79FB\u9664\u5B83\u4EEC\u3002</li><li>SOFT\uFF1A\u8F6F\u5F15\u7528\uFF1A\u57FA\u4E8E\u5783\u573E\u56DE\u6536\u5668\u72B6\u6001\u548C\u8F6F\u5F15\u7528\u89C4\u5219\u79FB\u9664\u5BF9\u8C61\u3002</li><li>WEAK\uFF1A\u5F31\u5F15\u7528\uFF1A\u66F4\u79EF\u6781\u5730\u57FA\u4E8E\u5783\u573E\u6536\u96C6\u5668\u72B6\u6001\u548C\u5F31\u5F15\u7528\u89C4\u5219\u79FB\u9664\u5BF9\u8C61\u3002</li></ul></li><li><p>flushInterval\uFF1A\u53EF\u4EE5\u88AB\u8BBE\u7F6E\u4E3A\u4EFB\u610F\u7684\u6B63\u6574\u6570\uFF0C\u8BBE\u7F6E\u7684\u503C\u5E94\u8BE5\u662F\u4E00\u4E2A\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\u7684\u5408\u7406\u65F6\u95F4\u91CF\u3002 \u9ED8\u8BA4\u60C5\u51B5\u662F\u4E0D\u8BBE\u7F6E\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u5237\u65B0\u95F4\u9694\uFF0C\u7F13\u5B58\u4EC5\u4EC5\u4F1A\u5728\u8C03\u7528\u8BED\u53E5\u65F6\u5237\u65B0\u3002</p></li><li><p>size\uFF1A\uFF08\u5F15\u7528\u6570\u76EE\uFF09\u53EF\u4EE5\u88AB\u8BBE\u7F6E\u4E3A\u4EFB\u610F\u6B63\u6574\u6570\uFF0C\u8981\u6CE8\u610F\u6B32\u7F13\u5B58\u5BF9\u8C61\u7684\u5927\u5C0F\u548C\u8FD0\u884C\u73AF\u5883\u4E2D\u53EF\u7528\u7684\u5185\u5B58\u8D44\u6E90\u3002\u9ED8\u8BA4\u503C\u662F 1024\u3002</p></li><li><p>readOnly\uFF1A\uFF08\u53EA\u8BFB\uFF09\u53EF\u4EE5\u88AB\u8BBE\u7F6E\u4E3A true \u6216 false\u3002\u53EA\u8BFB\u7684\u7F13\u5B58\u4F1A\u7ED9\u6240\u6709\u8C03\u7528\u8005\u8FD4\u56DE\u7F13\u5B58\u5BF9\u8C61\u7684\u76F8\u540C\u5B9E\u4F8B\u3002 \u56E0\u6B64\u8FD9\u4E9B\u5BF9\u8C61\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002\u8FD9\u5C31\u63D0\u4F9B\u4E86\u53EF\u89C2\u7684\u6027\u80FD\u63D0\u5347\u3002\u800C\u53EF\u8BFB\u5199\u7684\u7F13\u5B58\u4F1A\uFF08\u901A\u8FC7\u5E8F\u5217\u5316\uFF09\u8FD4\u56DE\u7F13\u5B58\u5BF9\u8C61\u7684\u62F7\u8D1D\u3002 \u901F\u5EA6\u4E0A\u4F1A\u6162\u4E00\u4E9B\uFF0C\u4F46\u662F\u66F4\u5B89\u5168\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u503C\u662F false\u3002</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E8C\u7EA7\u7F13\u5B58\u662F\u4E8B\u52A1\u6027\u7684\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5F53 SqlSession \u5B8C\u6210\u5E76\u63D0\u4EA4\u65F6\uFF0C\u6216\u662F\u5B8C\u6210\u5E76\u56DE\u6EDA\uFF0C\u4F46\u6CA1\u6709\u6267\u884C flushCache=true \u7684 insert/delete/update \u8BED\u53E5\u65F6\uFF0C\u7F13\u5B58\u4F1A\u83B7\u5F97\u66F4\u65B0\u3002</p></div><h3 id="\u4F7F\u7528\u4E8C\u7EA7\u7F13\u5B58\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E8C\u7EA7\u7F13\u5B58\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u4F7F\u7528\u4E8C\u7EA7\u7F13\u5B58\u7684\u6B65\u9AA4</h3><p>\u5F00\u542F\u5168\u5C40\u7F13\u5B58\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cacheEnabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u8981\u5F00\u542F\u4E8C\u7EA7\u7F13\u5B58\u7684 mapper.xml \u4E2D\u5F00\u542F\u4E8C\u7EA7\u7F13\u5B58\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span>
        <span class="token attr-name">eviction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FIFO<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">flushInterval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30000<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>512<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">readOnly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u82E5 readOnly \u5C5E\u6027\u8BBE\u7F6E\u4E3A false\uFF0C\u53EF\u80FD\u4F1A\u629B\u51FA\u5B9E\u4F53\u7C7B\u7684\u5E8F\u5217\u5316\u5F02\u5E38\u3002</p></div><p>\u6D4B\u8BD5\uFF1A</p><ul><li>\u53EA\u6709\u5F53\u4F1A\u8BDD\u63D0\u4EA4\u6216\u8005\u5173\u95ED\u65F6\uFF0C\u624D\u4F1A\u63D0\u4EA4\u5230\u4E8C\u7EA7\u7F13\u5B58\u3002</li><li>\u6240\u6709\u7684\u6570\u636E\u90FD\u4F1A\u5148\u653E\u5728\u4EE5\u53CA\u60E0\u5B58\u3002</li></ul><p>\u5F02\u5E38\u5206\u6790\uFF1A</p><p>\u4E3A\u4EC0\u4E48\u8981\u5B9E\u73B0\u5E8F\u5217\u5316\uFF1A</p><ul><li>\u7F13\u5B58\u673A\u5236\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u4FDD\u5B58\u5230\u5185\u5B58\u4E2D\u3002</li><li>\u5185\u5B58\u9971\u6EE1\uFF0C\u9700\u8981\u79FB\u51FA\u65F6\uFF0CMyBatis \u5C31\u4F1A\u81EA\u52A8\u5C06\u5185\u5B58\u4E2D\u7684\u5185\u5BB9\u8FDB\u884C\u79FB\u9664\uFF0C\u4F46\u662F\u6587\u4EF6\u5F88\u91CD\u8981\uFF0C\u4E0D\u80FD\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u8FDB\u884C\u5E8F\u5217\u5316\uFF0C\u4EE5\u6587\u4EF6\u7684\u5F62\u5F0F\u5C06\u5185\u5BB9\u4ECE\u5185\u5B58\u4FDD\u5B58\u5230\u786C\u76D8\u4E0A\uFF0C\u4E00\u4E2A\u5185\u5BB9\u4FDD\u5B58\u6210\u6587\u4EF6\u7684\u8BFB\u5199\uFF0C\u5FC5\u987B\u5B9E\u73B0\u5E8F\u5217\u5316\u3002</li></ul><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><ul><li>\u5B9E\u4F53\u7C7B\u5B9E\u73B0 Serializable \u5E8F\u5217\u5316\u63A5\u53E3\u3002</li><li>\u5C06 cache \u5143\u7D20\u7684 readOnly \u5C5E\u6027\u8BBE\u7F6E\u4E3A true\u3002</li></ul><h3 id="\u4E8C\u7EA7\u7F13\u5B58\u5DE5\u4F5C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u7EA7\u7F13\u5B58\u5DE5\u4F5C\u673A\u5236" aria-hidden="true">#</a> \u4E8C\u7EA7\u7F13\u5B58\u5DE5\u4F5C\u673A\u5236</h3><ul><li>\u4E00\u4E2A\u4F1A\u8BDD\u67E5\u8BE2\u4E00\u6761\u8BB0\u5F55\uFF0C\u8FD9\u4E2A\u8BB0\u5F55\u5C31\u4F1A\u88AB\u653E\u5728\u5F53\u524D\u4F1A\u8BDD\u7684<strong>\u4E00\u7EA7\u7F13\u5B58</strong>\u4E2D\u3002</li><li>\u5982\u679C\u5F53\u524D\u4F1A\u8BDD\u5173\u95ED\u4E86\uFF0C\u4E00\u7EA7\u7F13\u5B58\u4F1A\u6D88\u5931\uFF0C\u4E00\u7EA7\u7F13\u5B58\u4E2D\u7684\u6570\u636E\u88AB\u4FDD\u5B58\u5230\u4E8C\u7EA7\u7F13\u5B58\u4E2D\u3002</li><li>\u65B0\u7684\u4F1A\u8BDD\u67E5\u8BE2\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u4ECE\u4E8C\u7EA7\u7F13\u5B58\u4E2D\u83B7\u53D6\u5185\u5BB9\u3002</li><li>\u4E0D\u540C\u7684 mapper \u67E5\u51FA\u7684\u6570\u636E\u4F1A\u653E\u5728\u81EA\u5DF1\u5BF9\u5E94\u7684\u7F13\u5B58(map)\u4E2D\u3002</li></ul><h2 id="\u81EA\u5B9A\u4E49\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7F13\u5B58" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7F13\u5B58</h2><p>\u9664\u4E86\u4E0A\u8FF0\u7F13\u5B58\u7684\u65B9\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5B9E\u73B0\u4F60\u5DF1\u7684\u7F13\u5B58\uFF0C\u6216\u4E3A\u5176\u4ED6\u7B2C\u4E09\u65B9\u7F13\u5B58\u65B9\u6848\u521B\u5EFA\u9002\u914D\u5668\uFF0C\u6765\u5B8C\u5168\u8986\u76D6\u7F13\u5B58\u884C\u4E3A\u3002</p><p>Ehcache \u662F\u4E00\u79CD\u5E7F\u6CDB\u4F7F\u7528\u7684\u5F00\u6E90 Java \u5206\u5E03\u5F0F\u7F13\u5B58\u3002</p>`,52);function t(l,p){return e}var o=n(s,[["render",t]]);export{o as default};
