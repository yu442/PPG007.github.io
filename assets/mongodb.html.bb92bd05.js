import{_ as p,r as t,o,c,a as n,d as e,F as u,b as s,e as l}from"./app.269ed0ef.js";const i={},k=n("h1",{id:"\u64CD\u4F5C-mongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u64CD\u4F5C-mongodb","aria-hidden":"true"},"#"),s(" \u64CD\u4F5C MongoDB")],-1),r=s("\u8FD9\u91CC\u4F7F\u7528 MongoDB \u7684\u5B98\u65B9\u9A71\u52A8\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528"),b={href:"https://github.com/qiniu/qmgo/blob/master/README_ZH.md",target:"_blank",rel:"noopener noreferrer"},m=s("Qmgo"),d=s("\u3002"),g=l(`<h2 id="\u8FDE\u63A5-mongodb" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5-mongodb" aria-hidden="true">#</a> \u8FDE\u63A5 MongoDB</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>ctx<span class="token punctuation">,</span> cancelFunc <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token keyword">defer</span> <span class="token function">cancelFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">,</span> err <span class="token operator">:=</span> mongo<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> options<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ApplyURI</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FDE\u901A\u6027\u6D4B\u8BD5</span>
client<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> readpref<span class="token punctuation">.</span><span class="token function">Primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> client<span class="token punctuation">.</span><span class="token function">Disconnect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
collection <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Database</span><span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Collection</span><span class="token punctuation">(</span><span class="token string">&quot;member&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8BA1\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570" aria-hidden="true">#</a> \u8BA1\u6570</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u7CBE\u786E\u8BA1\u6570</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>collection<span class="token punctuation">.</span><span class="token function">CountDocuments</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;$gte&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u4F30\u7B97</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>collection<span class="token punctuation">.</span><span class="token function">EstimatedDocumentCount</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// bson.D \u7528\u6765\u6784\u9020 JSON \u67E5\u8BE2\uFF0Cbson.A \u76F8\u5F53\u4E8E\u67E5\u8BE2\u4E2D\u7684\u6570\u7EC4</span>
filter <span class="token operator">:=</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;$or&quot;</span><span class="token punctuation">,</span> bson<span class="token punctuation">.</span>A<span class="token punctuation">{</span>
      bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;$lt&quot;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;$gte&quot;</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8BBE\u7F6E\u8981\u8FD4\u56DE\u7684\u6587\u6863</span>
projection <span class="token operator">:=</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">// \u8BBE\u7F6E\u67E5\u8BE2\u9009\u9879</span>
opts <span class="token operator">:=</span> options<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetLimit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetSort</span><span class="token punctuation">(</span>bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetProjection</span><span class="token punctuation">(</span>projection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetSkip</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">,</span> err <span class="token operator">:=</span> collection<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> filter<span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token punctuation">[</span><span class="token punctuation">]</span>bson<span class="token punctuation">.</span>D
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">All</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> result <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u805A\u5408\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u64CD\u4F5C" aria-hidden="true">#</a> \u805A\u5408\u64CD\u4F5C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>stages <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token string">&quot;$unwind&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token string">&quot;$tags&quot;</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token string">&quot;$group&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        Key<span class="token punctuation">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token string">&quot;$tags&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        Key<span class="token punctuation">:</span> <span class="token string">&quot;peopleNumber&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span>
          <span class="token punctuation">{</span>
            Key<span class="token punctuation">:</span> <span class="token string">&quot;$sum&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        Key<span class="token punctuation">:</span> <span class="token string">&quot;avgAge&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span>
          <span class="token punctuation">{</span>
            Key<span class="token punctuation">:</span> <span class="token string">&quot;$avg&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token string">&quot;$age&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Key<span class="token punctuation">:</span> <span class="token string">&quot;$project&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> bson<span class="token punctuation">.</span>D<span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        Key<span class="token punctuation">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
cursor<span class="token punctuation">,</span> err <span class="token operator">:=</span> collection<span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> stages<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token punctuation">[</span><span class="token punctuation">]</span>bson<span class="token punctuation">.</span>M
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">All</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> result <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;res:&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,8);function f(q,h){const a=t("ExternalLinkIcon");return o(),c(u,null,[k,n("p",null,[r,n("a",b,[m,e(a)]),d]),g],64)}var x=p(i,[["render",f]]);export{x as default};
