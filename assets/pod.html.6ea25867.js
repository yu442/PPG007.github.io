import{_ as n,e as s}from"./app.269ed0ef.js";const a={},e=s(`<h1 id="pod" tabindex="-1"><a class="header-anchor" href="#pod" aria-hidden="true">#</a> Pod</h1><h2 id="\u521B\u5EFA-pod" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-pod" aria-hidden="true">#</a> \u521B\u5EFA Pod</h2><p>\u547D\u4EE4\u884C\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl run mynginx --image<span class="token operator">=</span>nginx --port<span class="token operator">=</span><span class="token number">80</span> --namespace<span class="token operator">=</span>example
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> demo
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mynginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token key atrule">limits</span><span class="token punctuation">:</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;200Mi&quot;</span>
      <span class="token key atrule">requests</span><span class="token punctuation">:</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;100Mi&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>8.5.68
    <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u67E5\u770B Pod \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl describe pod mynginx --namespace<span class="token operator">=</span>example
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5220\u9664 Pod\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl delete pod mynginx --namespace<span class="token operator">=</span>example
<span class="token comment"># \u5BF9\u4E8E\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u521B\u5EFA\u7684 Pod\uFF1A</span>
kubectl delete -f nginx.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67E5\u770B Pod \u7684\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl logs mynginx --namespace<span class="token operator">=</span>example
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5BF9\u4E8E\u6BCF\u4E2A Pod\uFF0CKubernetes \u90FD\u4F1A\u5206\u914D\u4E00\u4E2A IP\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get pod --namespace<span class="token operator">=</span>example -owide
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,14);function p(l,t){return e}var o=n(a,[["render",p]]);export{o as default};
