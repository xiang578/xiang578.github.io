---
title: 我常用的自动化流程
date: 2018-07-07 14:09:22
tags: [workflow,alfred,ifttt]
categories: 生活志
---

## 什么是自动化

日常工作学习中，我们需要使用不同的工具来应对各种各样的任务。比如，用印象笔记收集网页，利用图库管理博客中的图片。但是，由于大部分工具不是同一家公司发布的，彼此之间很难进行简单的协作。如果你有编程能力，可以利用很多工具提供的 API（应用程序接口），让信息在不同的软件中流动。
对于普通人而言，目前市面上也有很多 App 提供这种功能，可以解决少部分的问题。我对这些功能的定义就是自动化流程，通过使用这些功能，可以减少一些重复机械的工作，使我们更好的享受生活。老罗在吹锤子系统时，提到过「One Step」，在我心目中也是自动化的一种。自动化流程指的是我自己在实践中，配置的一些软件使用流程。

## Workflow

Workflow (新手入门请看[iOS 效率神器 Workflow 怎么用？跟着这篇入门指南从零开始 | 新手问号](https://sspai.com/post/43849)）是 iOS 上的一款自动化软件。似乎是去年被苹果收购，现在在 App Store 中可以免费下载。前一段时间的 WWDC 上，也公布了进行版本，能利用 Siri 的「捷径」App。

![](7xkpe5.com1.z0.glb.clouddn.com/15309425389934.jpg)

在 iPhone 上，我最常用的 workflow 动作是碎片知识摘记，实现利用 iPhone 阅读时，将值得多次阅读的内容，集中保存到印象笔记中。有关这个动作更多的介绍可以查看 [Workflow + 印象笔记，定制高效碎片知识管理工作流 | Matrix 精选 - 少数派](https://sspai.com/post/35281)。

《奇特的一生》在时间管理领域如雷贯耳，很多人都按照柳比歇夫的那种方法进行时间。如果你希望可以使用 Workflow 来记录时间，可以进一步阅读少数派中 [想学柳比歇夫？用这个Workflow来帮你一把](https://sspai.com/post/44579)。

最后，授人以鱼不如授人以渔，少数派的 [Workflow Gallery](http://workflow.sspai.com/#/main/workflow) 提供很多相关的工作下载，可以自行前往挑选。

## Aflred

Aflred 是 Mac 上的一款效率工具。之前我在自己的博客中也有分享过，[Alfred 使用记录 - RyenX](https://xiang578.com/2017/07/02/alfred-lists/)。这里，我就补充介绍几个自己目前在用的功能。

由于我平时是使用 Markdown 进行写作的，难免会遇到需要插入很多链接的时候，比如现在正在写的这一篇文章。Afled 中有一个 workflows 「[fallroot/copy-url-for-alfred](https://github.com/fallroot/copy-url-for-alfred)」，通过这个动作可以将 Chrome 或者 Safari 中的当前正在浏览的网页的标题以及网址以 Anchor 、URL、Title、Markdown 等多种形式复制到当前的输入框或者是剪贴板。
![](7xkpe5.com1.z0.glb.clouddn.com/15309430608042.png)
[ngreenstein/alfred-process-killer: An Alfred 2 workflow that makes it easy to kill misbehaving processes. It is, in essence, a way to easily find processes by name and kill them using `kill -9`.](https://github.com/ngreenstein/alfred-process-killer)：快速结束 Mac 中的某些进程。
![-w607](7xkpe5.com1.z0.glb.clouddn.com/15309434519054.jpg)

## IFTTT

Workflow 和 Aflred 需要在自己的 iPhone 或者 Mac 上才可以运行，说起来多少还有些不自动。我经常使用的另外一个自动化服务「[IFTTT](https://ifttt.com/)」就可以解决这个问题。IFTTT 是什么？它是英文 **IF This Then That** 的首字母缩写，它是一个提供自动化服务的网站。它的功能可以从字面猜测出来大概，完整地解释是「如果A完成事件1，那么就让B完成事件2」。简单来说，你可以通过设置一些规则，让它帮你自动完成一些重复工作。比如设置规则实现当你发布一条微博后，IFTTT 自动将微博同步到印象笔记中。所以，IFTTT 对我的意义是将不同的应用连接在了一下，方便我造各种工作流。

![](7xkpe5.com1.z0.glb.clouddn.com/15309318778409.png)

与上面的形式相同，继续介绍一下我目前在使用的规则。

### 碎片阅读

互联网的发展，使每个人有更多表达自己的机会，越来越多的人开始通过文字展示自己。碎片阅读指的正是阅读这些散落在不同平台上的文章。对于我而言，一般是先将在网上看到的想要阅读的文章放到稍后读软件 [Pocket](https://getpocket.com/) 中。之后在自己空闲时，打开 Pocket 网站阅读。比起直接阅读这样的好处有二：
1. 不是每一个网站或者平台都有良好的阅读环境，比如很多广告、字体字号。
2. Pocket 提供丰富的 API 接口，通过 IFTTT 可以很好的和 Evernote、Airtable 等软件写作。

[If New favorite item, then Append to a note in Evernote - IFTTT](https://ifttt.com/applets/79292089d-if-new-favorite-item-then-append-to-a-note-in-evernote)：古语「不动笔墨不读书」，很多文章有值得记录地方，而且也希望可以将自己所做的笔记集中在一处。针对这个问题，很多人会复杂，并且再粘贴到某一个文档中。这种方法做起来简单粗暴，却打断了阅读的连续性。通过我这个动作，可以将在 Pocket 中高亮的句子，直接添加到印象笔记的一条特定笔记中。

![印象笔记中效果](7xkpe5.com1.z0.glb.clouddn.com/15309335067450.jpg)

[If item archived , then create record in airtable](https://ifttt.com/applets/75619425d-if-item-archived-then-create-record-in-airtable)：这一个动作是实现阅读数据的统计，当我在 Pocket 中归档一篇文章之后，会在 Airatble 指定的表单里添加一条相关的阅读记录。

![Airtable record](7xkpe5.com1.z0.glb.clouddn.com/15309336298823.jpg)


### 任务管理

- [Github issues assigned to me Todoist](https://ifttt.com/applets/75605766d-github-issues-assigned-to-me-todoist)：这个规则可以实现，在 Github 中有人分配给我 issue 时，自动在 Todoist 中创建相关任务。
- [Log completed Todoist Tasks to Airtable](https://ifttt.com/applets/75612887d-log-completed-todoist-tasks-to-airtable)：记录所有完成的任务到 Airtable 中。
- [If Todoist task with label is completed, create new task - IFTTT](https://ifttt.com/applets/75612567d-if-todoist-task-with-label-is-completed-create-new-task)：实现 Todoist 中的任务循环。

### 创意

IFTTT 中有一个与 RSS 相关的触发器，而且如下图所示，提供了对文章进行关键字匹配的选项。
![IFTTT RSS](7xkpe5.com1.z0.glb.clouddn.com/15309338021730.jpg)

前一阵子是 618 年中大促，正好我想购买一个 QC35 的耳机。为了追求优惠，大部分人会不停的查看想购买商品的页面，看看有没有什么新的变化。而我利用 IFTTT 搞了一个监控 QC35 全网优惠的监控。具体思路如下：什么值得买中有一个[精选好价](https://www.smzdm.com/jingxuan/)的频道，很多人会在上面爆料商品的优惠信息。幸运的是，这个频道提供 RSS 订阅链接。所以，配合上面提到的 RSS 相关触发器，我写了 [If new feed item matches 'qc35' from http://faxian.smzdm.com/feed, then send me an email at xiang578@foxmail.com - IFTTT](https://ifttt.com/applets/75671738d-if-new-feed-item-matches-qc35-from-http-faxian-smzdm-com-feed-then-send-me-an-email-at-xiang578-foxmail-com) 以及 [If new feed item matches 'QC35' from http://feed.smzdm.com, then send me an email at xiang578@foxmail.com - IFTTT](https://ifttt.com/applets/75621100d-if-new-feed-item-matches-qc35-from-http-feed-smzdm-com-then-send-me-an-email-at-xiang578-foxmail-com) 两个规则。从而实现，有人爆料 QC35 相关的价格优惠时，我会收到一条由 IFTTT 发送的邮件。

![qc](7xkpe5.com1.z0.glb.clouddn.com/15309346475002.jpg)

## Reference
- [玩转 IFTTT，互联网自动化也可以很简单 - 少数派](https://sspai.com/post/43731)


## Changelog
- 20180707：完成初稿
