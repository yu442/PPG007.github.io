import{_ as p,r as t,o as l,c,a as s,d as o,F as r,e as n,b as a}from"./app.269ed0ef.js";const u={},i=n(`<h1 id="\u5B89\u88C5-kubernetes" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-kubernetes" aria-hidden="true">#</a> \u5B89\u88C5 Kubernetes</h1><h2 id="\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker" aria-hidden="true">#</a> \u5B89\u88C5 Docker</h2><p>\u5378\u8F7D\u65E7\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> remove docker docker-engine docker.io containerd runc
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io
<span class="token function">sudo</span> <span class="token function">rm</span> -rf /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> -rf /var/lib/containerd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56\u4EE5\u53CAdocker\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg <span class="token punctuation">\\</span>
    lsb-release

<span class="token function">curl</span> -fsSL https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release -cs<span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E3A\u4E86\u9002\u914D k8s\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/docker
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json</span>
{
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;log-driver&quot;: &quot;json-file&quot;,
  &quot;log-opts&quot;: {
    &quot;max-size&quot;: &quot;100m&quot;
  },
  &quot;storage-driver&quot;: &quot;overlay2&quot;
}
EOF</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> docker
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart docker
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u5B89\u88C5-kubeadm\u3001kubelet-\u548C-kubectl" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-kubeadm\u3001kubelet-\u548C-kubectl" aria-hidden="true">#</a> \u5B89\u88C5 kubeadm\u3001kubelet \u548C kubectl</h2><p>\u7981\u7528\u4EA4\u6362\u5206\u533A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>swapoff -a
<span class="token function">sed</span> -ri <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5141\u8BB8 iptables \u68C0\u67E5\u6865\u63A5\u6D41\u91CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
<span class="token function">sudo</span> sysctl --system
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u6BCF\u53F0\u673A\u5668\u4E0A\u5B89\u88C5\u4EE5\u4E0B\u7684\u8F6F\u4EF6\u5305\uFF1A</p><ul><li>kubeadm\uFF1A\u7528\u6765\u521D\u59CB\u5316\u96C6\u7FA4\u7684\u6307\u4EE4\u3002</li><li>kubelet\uFF1A\u5728\u96C6\u7FA4\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u7528\u6765\u542F\u52A8 Pod \u548C\u5BB9\u5668\u7B49\u3002</li><li>kubectl\uFF1A\u7528\u6765\u4E0E\u96C6\u7FA4\u901A\u4FE1\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u3002</li></ul><p>\u66F4\u65B0 apt \u5305\u7D22\u5F15\u5E76\u5B89\u88C5\u4F7F\u7528 Kubernetes apt \u4ED3\u5E93\u6240\u9700\u8981\u7684\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y apt-transport-https ca-certificates <span class="token function">curl</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0B\u8F7D Google Cloud \u516C\u5F00\u7B7E\u540D\u79D8\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0 Kubernetes apt \u4ED3\u5E93\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/kubernetes.list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u66F4\u65B0 apt \u5305\u7D22\u5F15\uFF0C\u5B89\u88C5 kubelet\u3001kubeadm \u548C kubectl\uFF0C\u5E76\u9501\u5B9A\u5176\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y kubelet kubeadm kubectl
<span class="token function">sudo</span> apt-mark hold kubelet kubeadm kubectl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u521D\u59CB\u5316\u4E3B\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4E3B\u8282\u70B9" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4E3B\u8282\u70B9</h2><p>\u521D\u59CB\u5316\u4E3B\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.2.118 <span class="token punctuation">\\</span>
--control-plane-endpoint<span class="token operator">=</span>ubuntu1 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/16 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">192.167</span>.0.0/16
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B89\u88C5\u7F51\u7EDC\u63D2\u4EF6\uFF0C\u4E3A\u4E86 Pod \u4E4B\u95F4\u80FD\u591F\u901A\u4FE1\uFF0C\u8FD9\u91CC\u4F7F\u7528 calico\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> https://projectcalico.docs.tigera.io/manifests/calico.yaml -O
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5C06\u6B64 yaml \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 192.168.0.0/16 \u4FEE\u6539\u4E3A\u4E0A\u9762 --pod-network-cidr \u7684\u503C\u5E76\u53D6\u6D88\u6CE8\u91CA\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CALICO_IPV4POOL_CIDR
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;192.167.0.0/16&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5\u7F51\u7EDC\u7EC4\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f calico.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6DFB\u52A0\u5176\u4ED6\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5176\u4ED6\u8282\u70B9" aria-hidden="true">#</a> \u6DFB\u52A0\u5176\u4ED6\u8282\u70B9</h2><p>\u6DFB\u52A0\u7684\u65F6\u5019\u9700\u8981\u7528\u5230 <code>kubeadm init</code> \u521D\u59CB\u5316\u65F6\u6700\u540E\u751F\u6210\u7684 token\uFF0C\u5982\u679C\u5FD8\u8BB0\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>kubeadm token list</code> \u547D\u4EE4\u83B7\u53D6 token \u5217\u8868\uFF0C\u9ED8\u8BA4 token \u6709\u6548\u671F\u4E3A 24 \u5C0F\u65F6\uFF0C\u5982\u679C\u5DF2\u7ECF\u8FC7\u671F\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>kubeadm token create</code> \u547D\u4EE4\u91CD\u65B0\u751F\u6210\uFF0C\u8FD8\u53EF\u4EE5\u52A0\u4E0A <code>--print-join-command</code> \u76F4\u63A5\u628A\u52A0\u5165\u547D\u4EE4\u6253\u5370\u51FA\u6765\u3002</p><p>\u5728\u5176\u4ED6\u8282\u70B9\u6267\u884C\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.2.118:6443 --token qz28oa.pi6w2ewiwhnixv9m --discovery-token-ca-cert-hash sha256:e81804ebb8dfc4311d4663927f6f5918cff1f5c87a0566234a86bd1f126b6db0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8BC1\u4E66\u54C8\u5E0C\u4E5F\u5FD8\u8BB0\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u751F\u6210\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt <span class="token operator">|</span> openssl rsa -pubin -outform der <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> openssl dgst -sha256 -hex <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^.* //&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u73B0\u5728\u5728\u4E3B\u8282\u70B9\u4F7F\u7528 <code>kubectl get nodes</code> \u547D\u4EE4\u5C31\u53EF\u4EE5\u770B\u5230\u52A0\u5165\u7684\u8282\u70B9\uFF0C\u521A\u5F00\u59CB\u72B6\u6001\u662F NotReady\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>kubectl get pods -A -w</code> \u547D\u4EE4\u67E5\u770B\u5176\u4ED6\u8282\u70B9\u7684\u51C6\u5907\u60C5\u51B5\uFF0C\u7A0D\u7B49\u4E00\u4F1A\u5C31 Ready \u4E86\u3002</p>`,39),b={id:"\u90E8\u7F72-dashbord",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#\u90E8\u7F72-dashbord","aria-hidden":"true"},"#",-1),k=a(" \u90E8\u7F72 "),m={href:"https://github.com/kubernetes/dashboard",target:"_blank",rel:"noopener noreferrer"},g=a("dashbord"),h=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.1/aio/deploy/recommended.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u8BBF\u95EE\u7AEF\u53E3\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5C06\u5176\u4E2D\u7684 type: ClusterIP \u6539\u4E3A type: NodePort\u3002</p><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u83B7\u53D6\u66B4\u9732\u7684\u7AEF\u53E3\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get svc -A <span class="token operator">|</span><span class="token function">grep</span> kubernetes-dashboard
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA access.yaml\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin<span class="token punctuation">-</span>user
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u751F\u6210 token\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f access.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u8BBF\u95EE\u4EE4\u724C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl -n kubernetes-dashboard get secret <span class="token variable"><span class="token variable">$(</span>kubectl -n kubernetes-dashboard get sa/admin-user -o <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.secrets[0].name}&quot;</span><span class="token variable">)</span></span> -o go-template<span class="token operator">=</span><span class="token string">&quot;{{.data.token | base64decode}}&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,12);function v(f,y){const e=t("ExternalLinkIcon");return l(),c(r,null,[i,s("h2",b,[d,k,s("a",m,[g,o(e)])]),h],64)}var _=p(u,[["render",v]]);export{_ as default};