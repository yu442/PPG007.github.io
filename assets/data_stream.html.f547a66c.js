import{_ as n,e as a}from"./app.269ed0ef.js";const s={},t=a(`<h1 id="\u6570\u636E\u6D41" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6D41" aria-hidden="true">#</a> \u6570\u636E\u6D41</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DataOutputStream</span> dataOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>PATH_PREFIX <span class="token operator">+</span> <span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">writeUTF</span><span class="token punctuation">(</span><span class="token string">&quot;PPG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">writeBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">writeDouble</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataInputStream</span> dataInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>PATH_PREFIX <span class="token operator">+</span> <span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataInputStream<span class="token punctuation">.</span><span class="token function">readUTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataInputStream<span class="token punctuation">.</span><span class="token function">readBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataInputStream<span class="token punctuation">.</span><span class="token function">readDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,2);function p(o,c){return t}var u=n(s,[["render",p]]);export{u as default};
