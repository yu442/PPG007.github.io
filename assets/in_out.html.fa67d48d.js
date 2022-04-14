import{_ as n,e as s}from"./app.269ed0ef.js";var a="/Netty/image-20210815211039834.png",p="/Netty/image-20210816132016781.png";const e={},t=s('<h1 id="netty-\u5165\u7AD9\u51FA\u7AD9\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#netty-\u5165\u7AD9\u51FA\u7AD9\u673A\u5236" aria-hidden="true">#</a> Netty \u5165\u7AD9\u51FA\u7AD9\u673A\u5236</h1><p>\u5BF9\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u6765\u8BF4\uFF0C\u5411\u5916\u53D1\u9001\u662F\u51FA\u7AD9(\u76F8\u5BF9\u81EA\u5DF1)\uFF0C\u5411\u5185\u63A5\u6536\u662F\u5165\u7AD9(\u76F8\u5BF9\u81EA\u5DF1)\u3002</p><p>\u5165\u7AD9\u4F1A\u8C03\u7528\u89E3\u7801\u5668\u5C06\u5B57\u8282\u89E3\u7801\u6210\u5BF9\u8C61\uFF0C\u51FA\u7AD9\u4F1A\u8C03\u7528\u7F16\u7801\u5668\uFF0C\u5C06\u5BF9\u8C61\u7F16\u7801\u6210\u5B57\u8282\u3002</p><h2 id="\u89E3\u7801\u5668-bytetomessagedecoder" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7801\u5668-bytetomessagedecoder" aria-hidden="true">#</a> \u89E3\u7801\u5668 ByteToMessageDecoder</h2><p>\u7C7B\u56FE\uFF1A</p><p><img src="'+a+'" alt="image-20210815211039834"></p><p>\u7531\u4E8E\u4E0D\u53EF\u80FD\u77E5\u9053\u8FDC\u7A0B\u8282\u70B9\u662F\u5426\u4F1A\u4E00\u6B21\u6027\u53D1\u9001\u4E00\u4E2A\u5B8C\u6574\u7684\u4FE1\u606F\uFF0CTCP \u6709\u53EF\u80FD\u51FA\u73B0\u7C98\u5305\u62C6\u5305\u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u7C7B\u4F1A\u5BF9\u5165\u7AD9\u6570\u636E\u8FDB\u884C\u7F13\u51B2\uFF0C\u76F4\u5230\u5B83\u51C6\u5907\u597D\u88AB\u5904\u7406\u3002</p><h2 id="\u7F16\u7801\u5668-messagetobyteencoder" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801\u5668-messagetobyteencoder" aria-hidden="true">#</a> \u7F16\u7801\u5668 MessageToByteEncoder</h2><p><img src="'+p+`" alt="image-20210816132016781"></p><h2 id="handler-\u94FE\u4E0E\u7F16\u89E3\u7801\u5668\u8C03\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#handler-\u94FE\u4E0E\u7F16\u89E3\u7801\u5668\u8C03\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> Handler \u94FE\u4E0E\u7F16\u89E3\u7801\u5668\u8C03\u7528\u5B9E\u4F8B</h2><p>\u6848\u4F8B\u76EE\u6807\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u4E2A Long \u7C7B\u578B\u7684\u6570\u636E\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u540E\u56DE\u9001\u4E00\u4E2A Long \u7C7B\u578B\u6570\u636E\u3002</p><p>Long \u5411\u5B57\u8282\u8F6C\u6362\u7F16\u7801\u5668\uFF0CLongToByteEncoder\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LongToByteEncoder</span> <span class="token keyword">extends</span> <span class="token class-name">MessageToByteEncoder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Long</span> msg<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        out<span class="token punctuation">.</span><span class="token function">writeLong</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5B57\u8282\u5411 Long \u89E3\u7801\u5668\uFF0CByteToLongDecoder\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteToLongDecoder</span> <span class="token keyword">extends</span> <span class="token class-name">ByteToMessageDecoder</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> in<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;=</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u5224\u65AD\u591F\u4E0D\u591F8\u4E2A\u5B57\u8282</span>
            out<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u670D\u52A1\u7AEF\u521D\u59CB\u5316\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServerInitialize</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> ch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChannelPipeline</span> pipeline <span class="token operator">=</span> ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6CE8\u610F\u5148\u540E\u987A\u5E8F</span>
        pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ByteToLongDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LongToByteEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ServerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5BA2\u6237\u7AEF\u521D\u59CB\u5316\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClientInitialize</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> ch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChannelPipeline</span> pipeline <span class="token operator">=</span> ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LongToByteEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ByteToLongDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ClientHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u81EA\u5B9A\u4E49 handler \u76F4\u63A5\u8C03\u7528 <code>writeAndFlush()</code> \u65B9\u6CD5\u4F20\u5165\u4E00\u4E2A msg \u5373\u53EF\u3002</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u4E0D\u8BBA\u7F16\u7801\u5668\u548C\u89E3\u7801\u5668\uFF0C\u63A5\u6536\u7684\u6D88\u606F\u7C7B\u578B\u5FC5\u987B\u4E0E\u5F85\u5904\u7406\u7684\u6D88\u606F\u7C7B\u578B\u4E00\u81F4\uFF0C\u5426\u5219 Handler \u4E0D\u4F1A\u6267\u884C\u3002</p></div><h2 id="netty-\u4E2D\u5176\u4ED6\u5E38\u7528\u7F16\u89E3\u7801\u5668" tabindex="-1"><a class="header-anchor" href="#netty-\u4E2D\u5176\u4ED6\u5E38\u7528\u7F16\u89E3\u7801\u5668" aria-hidden="true">#</a> Netty \u4E2D\u5176\u4ED6\u5E38\u7528\u7F16\u89E3\u7801\u5668</h2><ul><li><p>ReplayingDecoder\uFF1A</p><p>ReplayingDecoder \u6269\u5C55\u4E86 ByteToMessageDecoder \u7C7B,\u4F7F\u7528\u8FD9\u4E2A\u7C7B,\u6211\u4EEC\u4E0D\u5FC5\u8C03\u7528 <code>readableBytes()</code> \u65B9\u6CD5\uFF0C\u5373\u4E0D\u9700\u8981\u5224\u65AD\u5B57\u8282\u6570\u662F\u5426\u6EE1\u8DB3\u8F6C\u6362\u8981\u6C42\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteToLongDecoder2</span> <span class="token keyword">extends</span> <span class="token class-name">ReplayingDecoder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> in<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        out<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7F3A\u70B9\uFF1A</p><p>\u5E76\u4E0D\u662F\u6240\u6709\u7684 ByteBuf \u64CD\u4F5C\u90FD\u88AB\u652F\u6301,\u5982\u679C\u8C03\u7528\u4E86\u4E00\u4E2A\u4E0D\u88AB\u652F\u6301\u7684\u65B9\u6CD5,\u5C06\u4F1A\u629B\u51FA\u4E00\u4E2A UnsupportedOperationException\uFF0CReplayingDecoder \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u7A0D\u6162\u4E8E ByteToMessageDecoder,\u4F8B\u5982\u7F51\u7EDC\u7F13\u6162\u5E76\u4E14\u6D88\u606F\u683C\u5F0F\u590D\u6742\u65F6,\u6D88\u606F\u4F1A\u88AB\u62C6\u6210\u4E86\u591A\u4E2A\u788E\u7247,\u901F\u5EA6\u53D8\u6162\u3002</p></li><li><p>LineBasedFrameDecoder\uFF1A\u4F7F\u7528\u884C\u5C3E\u63A7\u5236\u5B57\u7B26(<code>\\n\\r</code>)\u505A\u5206\u9694\u7B26\u89E3\u6790\u6570\u636E\u3002</p></li><li><p>DelimiterBasedFrameDecoder\uFF1A\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u7279\u6B8A\u5B57\u7B26\u4F5C\u4E3A\u6D88\u606F\u7684\u5206\u9694\u7B26\u3002</p></li><li><p>Httpobjectdecoder\uFF1A\u4E00\u4E2A HTTP \u6570\u636E\u7684\u89E3\u7801\u5668\u3002</p></li><li><p>LengthFieldBasedFrameDecoder\uFF1A\u901A\u8FC7\u6307\u5B9A\u957F\u5EA6\u6765\u6807\u8BC6\u6574\u5305\u6D88\u606F,\u8FD9\u6837\u5C31\u53EF\u4EE5\u81EA\u52A8\u7684\u5904\u7406\u9ECF\u5305\u548C\u534A\u5305\u6D88\u606F\u3002</p></li></ul>`,23);function c(o,l){return t}var i=n(e,[["render",c]]);export{i as default};
