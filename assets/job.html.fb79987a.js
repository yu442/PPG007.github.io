import{_ as n,e as a}from"./app.269ed0ef.js";const s={},e=a(`<h1 id="job" tabindex="-1"><a class="header-anchor" href="#job" aria-hidden="true">#</a> Job</h1><h2 id="\u666E\u901A-job" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A-job" aria-hidden="true">#</a> \u666E\u901A Job</h2><p>Job \u4F1A\u521B\u5EFA\u4E00\u4E2A\u6216\u591A\u4E2A Pods\uFF0C\u5E76\u5C06\u7EE7\u7EED\u91CD\u8BD5 Pods \u7684\u6267\u884C\uFF0C\u76F4\u5230\u6307\u5B9A\u6570\u91CF\u7684 Pods \u6210\u529F\u7EC8\u6B62\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355 Job \u7684\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Job
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> sms
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myali<span class="token punctuation">-</span>docker
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sms
        <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>qingdao.aliyuncs.com/ppg007/cronjob<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">1.0</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ./tencent<span class="token punctuation">-</span>sms
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
  <span class="token key atrule">backoffLimit</span><span class="token punctuation">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>job \u4E2D\u7684 restartPolicy \u53EA\u80FD\u8BBE\u7F6E\u4E3A Never \u6216 OnFailure\u3002</p><p>backoffLimit \u8868\u793A\u89C6 Job \u4E3A\u5931\u8D25\u524D\u7684\u91CD\u8BD5\u6B21\u6570\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CJob \u4F1A\u6301\u7EED\u8FD0\u884C\uFF0C\u9664\u975E\u67D0\u4E2A Pod \u5931\u8D25\uFF08restartPolicy=Never\uFF09\u6216\u8005\u67D0\u4E2A\u5BB9\u5668\u51FA\u9519\u9000\u51FA\uFF0CJob \u57FA\u4E8E backoffLimit \u51B3\u5B9A\u662F\u5426\u4EE5\u53CA\u5982\u4F55\u91CD\u8BD5\uFF0C\u4E00\u65E6\u5230\u8FBE\u4E0A\u9650\uFF0CJob \u4F1A\u88AB\u6807\u8BB0\u5931\u8D25\uFF0C\u5176\u4E2D\u8FD0\u884C\u7684 Pods \u90FD\u4F1A\u88AB\u7EC8\u6B62\u3002</p><p>Job \u5B8C\u6210\u65F6\u4E0D\u4F1A\u518D\u521B\u5EFA\u65B0\u7684 Pod\uFF0C\u5DF2\u6709\u7684 Pod \u901A\u5E38\u4E5F\u4E0D\u4F1A\u88AB\u5220\u9664\u3002\u53EF\u4EE5\u901A\u8FC7 <code>.spec.activeDeadlineSeconds</code> \u8BBE\u7F6E\u6D3B\u8DC3\u671F\u9650\uFF0C\u8FD9\u662F\u4E00\u4E2A\u79D2\u6570\u503C\uFF0C\u65E0\u8BBA Job \u521B\u5EFA\u4E86\u591A\u5C11\u4E2A Pod\uFF0C\u4E00\u65E6 Job \u8FD0\u884C\u65F6\u95F4\u5230\u8FBE\u6D3B\u8DC3\u671F\u9650\u9650\u5236\uFF0C\u5176\u6240\u6709\u8FD0\u884C\u4E2D\u7684 Pod \u90FD\u4F1A\u88AB\u7EC8\u6B62\u3002</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u6D3B\u8DC3\u671F\u9650\u4F18\u5148\u7EA7\u9AD8\u4E8E backoffLimit\uFF0C\u5982\u679C\u4E00\u4E2A Job \u6B63\u5728\u91CD\u8BD5\u4E00\u4E2A\u6216\u591A\u4E2A\u5931\u6548\u7684 Pod\uFF0C\u8BE5 Job \u4E00\u65E6\u5230\u8FBE\u6D3B\u8DC3\u671F\u9650\uFF0C\u5C31\u4E0D\u518D\u90E8\u7F72\u989D\u5916\u7684 Pod\uFF0C\u5373\u4F7F\u91CD\u8BD5\u6B21\u6570\u8FD8\u6CA1\u5230\u8FBE backoffLimit\u3002</p></div><h3 id="\u81EA\u52A8\u6E05\u7406\u5B8C\u6210\u7684-job" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6E05\u7406\u5B8C\u6210\u7684-job" aria-hidden="true">#</a> \u81EA\u52A8\u6E05\u7406\u5B8C\u6210\u7684 Job</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>.spec.ttlSecondsAfterFinished</code> \u8BBE\u7F6E Job \u6210\u529F\u591A\u5C11\u79D2\u540E\u88AB\u6E05\u9664\u3002</p><h2 id="\u4F7F\u7528-cronjob-\u8FD0\u884C\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-cronjob-\u8FD0\u884C\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u4F7F\u7528 CronJob \u8FD0\u884C\u5B9A\u65F6\u4EFB\u52A1</h2><p>\u901A\u8FC7\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A CronJob\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> CronJob
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hello
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span> <span class="token string">&quot;* * * * *&quot;</span>
  <span class="token key atrule">jobTemplate</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">spec</span><span class="token punctuation">:</span>
          <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myali<span class="token punctuation">-</span>docker
          <span class="token key atrule">containers</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hello
            <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>qingdao.aliyuncs.com/ppg007/cronjob<span class="token punctuation">-</span>demo<span class="token punctuation">:</span><span class="token number">1.0</span>
            <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
            <span class="token key atrule">command</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> ./tencent<span class="token punctuation">-</span>sms
          <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Job \u540D\u79F0\u548C\u5BF9\u5E94\u7684 Pod \u540D\u79F0\u4E0D\u540C\uFF0CPod \u540D\u79F0\u53EF\u4EE5\u901A\u8FC7 <code>kubectl get jobs --watch -n example</code> \u770B\u5230\uFF0C\u7136\u540E\u4F7F\u7528 <code>kubectl logs POD_NAME</code> \u5373\u53EF\u770B\u5230 Pod \u65E5\u5FD7\u3002</p></div><h3 id="\u5F00\u59CB\u7684\u6700\u540E\u671F\u9650" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u7684\u6700\u540E\u671F\u9650" aria-hidden="true">#</a> \u5F00\u59CB\u7684\u6700\u540E\u671F\u9650</h3><p><code>spec.startingDeadlineSeconds</code> \u57DF\u662F\u53EF\u9009\u7684\uFF0C\u4EFB\u52A1\u5982\u679C\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\u9519\u8FC7\u4E86\u8C03\u5EA6\u65F6\u95F4\uFF0C\u5F00\u59CB\u8BE5\u4EFB\u52A1\u622A\u6B62\u65F6\u95F4\u7684\u79D2\u6570\u3002\u8FC7\u4E86\u622A\u6B62\u65F6\u95F4 CronJob \u5C31\u4E0D\u4F1A\u5F00\u59CB\u4EFB\u52A1\u3002</p><h3 id="\u5E76\u53D1\u6027\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u6027\u89C4\u5219" aria-hidden="true">#</a> \u5E76\u53D1\u6027\u89C4\u5219</h3><p><code>.spec.concurrencyPolicy</code> \u58F0\u660E\u4E86 CronJob \u521B\u5EFA\u7684\u4EFB\u52A1\u6267\u884C\u65F6\u53D1\u751F\u91CD\u53E0\u5982\u4F55\u5904\u7406\uFF0Cspec \u4EC5\u80FD\u58F0\u660E\u4E0B\u5217\u89C4\u5219\u4E2D\u7684\u4E00\u79CD\uFF1A</p><ul><li>Allow(\u9ED8\u8BA4)\uFF1ACronJob \u5141\u8BB8\u5E76\u53D1\u4EFB\u52A1\u6267\u884C\u3002</li><li>Forbin\uFF1ACronJob \u4E0D\u5141\u8BB8\u5E76\u53D1\u6267\u884C\u4EFB\u52A1\uFF0C\u5982\u679C\u65B0\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\u5230\u4E86\u4F46\u662F\u8001\u4EFB\u52A1\u8FD8\u6CA1\u6709\u6267\u884C\u5B8C\u6BD5\uFF0CCronJob \u4F1A\u5FFD\u7565\u65B0\u4EFB\u52A1\u7684\u6267\u884C\u3002</li><li>Replace\uFF1A\u5982\u679C\u65B0\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\u5230\u4E86\u800C\u8001\u4EFB\u52A1\u6CA1\u6709\u6267\u884C\u5B8C\uFF0CCronJob \u4F1A\u7528\u65B0\u4EFB\u52A1\u66FF\u6362\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5E76\u53D1\u6027\u89C4\u5219\u4EC5\u9002\u7528\u4E8E\u76F8\u540C CronJob\uFF0C\u5982\u679C\u6709\u591A\u4E2A CronJob\uFF0C\u5B83\u4EEC\u76F8\u5E94\u7684\u4EFB\u52A1\u603B\u662F\u5141\u8BB8\u5E76\u53D1\u6267\u884C\u3002</p></div>`,21);function p(t,c){return e}var l=n(s,[["render",p]]);export{l as default};