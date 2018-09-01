---
title: Shadowsocks 配置以及使用
date: 2018-06-29 15:12:10
tags: shadowsocks
categories: 程序园
---

前几年，一直不要脸的蹭同学的 ss 服务器使用。去年 10 月份左右，开始和其他人合资购买蓝灯的服务，由于蓝灯无法再 iOS 系统上使用，所以也有一些不方便。正好有人问服务器相关的问题，自己尝试了购买服务器并配置 Shadowsocks ，尝试的过程写在这里和大家分享。

## 服务器购买和配置

国外有很多家云服务器提供商，我没有比较就选择了 [vultr](https://www.vultr.com/?ref=7463730)（这是我的邀请链接，不知道你点击这个注册之后会给我什么好处，反正我会分给你一半）。 当然也可以去网上找一下优惠码或者优惠链接，我就找到了一个充10美元送25美元的链接注册（这个活动只能使用信用卡或者 paypal 支付，正常充值可以使用支付宝）。他家的服务器有下面几种选择，其实用来搞 ss 服务，这些配置都是可以的，只需要关注流量问题就好了。2.5 美元一个月的服务，写着 ipv6 only，我不知道是什么意思，所以自己选择的是 5 美元的那一档，1 t 流量也是绰绰有余的。

![](http://
7xkpe5.com1.z0.glb.clouddn.com/15302534391376.jpg)

选择方案之后，会让你选择操作系统以及机房位置，这些东西一般用他默认的就好了。完成之后，可以在控制面板看见服务器的相关信息。拿到 ip 地址、用户名和密码，利用 ssh 登录服务器。
![](http://
7xkpe5.com1.z0.glb.clouddn.com/15302541061041.jpg)

网上找到一篇教程 [Shadowsocks 一键安装脚本（四合一） | 秋水逸冰](https://teddysun.com/486.html)，跟着敲了几行指令就完成了 ss 服务的安装。最终会显示 ss 相关设置，这些在配置客户端时会有用。

![](http://
7xkpe5.com1.z0.glb.clouddn.com/15302546455992.jpg)


为了增强性能，可以参考 [一键安装最新内核并开启 BBR 脚本 | 秋水逸冰](https://teddysun.com/489.html) 这篇教程配置 BBR 服务。到这一步服务器最基础的配置以及完成，可以实现科学上网服务。

其实针对我这种流量绰绰有余的情况，可以和其他人一起合资购买服务器。这时候，可以参考[shadowsocks配置多用户多密码 各种多用户配置方法总结 - flyzy小站](https://www.flyzy2005.com/fan-qiang/shadowsocks/shadowsocks-config-multiple-users/)这篇文章继续配置服务器。最后，服务器性能不错，所以应该也可以利用在上面搭建其他服务，一个小机器是可以玩的很花的。

## 客户端配置

客户端可以实现将我们的一些流量打到服务器上去。我主要配置 iPhone、iPad 和 mbp 三台设备。iPhone 和 iPad 配置方法相类似，所以合并成 iOS 来写。

国区 AppStore 中的 Shadowsocks 客户端基本上都在去年被下架了，所以我是从美区 AppStore 下载的。客户端选择很多，最有名的是 Surge，功能强大，但是价格也很贵。由于美区没有充过钱，所以就下载免费的 Potatso Lite。在软件中填入上一步提到的 ss 配置就可以开始使用了。如果你希望实现国内的流量不通过 ss 传输，可以将智能路由打开。

![IMG_0552](http://
7xkpe5.com1.z0.glb.clouddn.com/IMG_0552.png)

至于 Mac，可以从 [shadowsocks/ShadowsocksX-NG: Next Generation of ShadowsocksX](https://github.com/shadowsocks/ShadowsocksX-NG) 这个库中下载客户端。配置方式也很简单。而且这个也支持多种模式，PAC 自动模式和 Potatso Lite 的智能路由相类似。全局模式可以将电脑上的全部流量走 ss 通道。不过，我在使用谷歌的 Backup and Sync 应用时，会出现网络错误。所以，搜索了一下找到可以控制应用是否走 ss 通道的 Proxifier ，使用方式可以参考 [Proxifier配合Shadowsocks实现全局代理 - flyzy小站](https://www.flyzy2005.com/fan-qiang/shadowsocks/proxifier-with-shadowsocks/)。完成之后，就可以正常使用了。
![](http://
7xkpe5.com1.z0.glb.clouddn.com/15302558024622.jpg)

## 浏览器配置

利用 Proxifier 可以实现应用的访问方式，有些时候浏览某些网站时，我们也希望可以这样控制，Chrome 中可以使用插件 SwitchyOmega。这个软件通过情景模式实现访问的控制，我们可以先创建通过 ss 服务器的情景模式，如下图所示，这里面的代理服务器和代理端口不是 ss 服务器中的配置，而是本地的 Shadowsocks 客户端中的配置（可以打开软件中偏好设置查看）。

![](http://
7xkpe5.com1.z0.glb.clouddn.com/15302560137907.jpg)
如果需要实现对网页的智能路由功能，可以参考我在几年前写的博文 [SwitchyOmege自动切换功能 - RyenX](https://xiang578.com/2016/06/23/switchyomege/)。

如果还有什么疑问，可以在文章下方留言和我讨论。👊


