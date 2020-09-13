---
title: Never-Reading 202008 选择记忆
tags: []
categories: Never-Reading
mathjax: true
date: 2020-09-13 23:55:11
---

某一刻突然意识到可以选择自己的记忆，我顿悟了。

<!-- more -->

## Roam CN 聚会

8 月 29 日参与由 [Jessie@FG](https://twitter.com/JESSCATE93)发起一次北京 RoamCN 微信群聚会，其他到场的还有 [pimgeek](https://twitter.com/pimgeek)、[Flynn](http://flynngao.github.io/about) 等 7 位群友。聚会中大家讨论和知识管理、Roam Research 相关的内容。记录一些给我灵感的内容：

### Anki

做为一个知识管理爱好者，很难没有听说过 Anki。这一次线下的相关内容讨论，给我留下的最大感受就是本期标题的由来「选择记忆」。Flynn 介绍在 Michael Nielsen 的 [Augmenting Long-term Memory](http://augmentingcognition.com/ltm.html) ，一直坚持使用 Anki，他举的例子是「可以记住全部的正则匹配」。和绝大部分人一样，我记忆内容的方式就是看一遍，然后等到要用的时候，再去查相关的内容。Anki 可以自己制作需要记忆内容的卡片，这个过程不就是选择自己的记忆吗？其实几年前也看过 Michael Nielsen 的文章，可能是当时境界太低，没有理解选择记忆对自己的重要性。现在觉得有几点很重要：

1. 自己制作卡片，网上下载的卡片没有灵魂。
2. 卡片尽量原子化，使用 QA 形式。原子化保证没一张可以快速过去，QA 形式费曼技巧，防止假懂。
3. 坚持使用。

等到自制卡片能到达 1k 张，再来具体分享自己的体验。

Michael Nielsen 的文章实在是太长了，先分享第一部分的摘录：

- 之前看过中文翻译但是没有实践 [【三万字长文】量子物理学家是如何使用 Anki 的？ - 知乎](https://zhuanlan.zhihu.com/p/65131722)
- Solomon Shereshevsky 以超级记忆力闻名
- memex 外部记忆机器，汇总全部个人资料
    - [[Douglas Engelbart]] augmentation of human intelligence
    - [[Ted Nelson]] [[Project Xanadu]]
    - Tim Berners-Lee world wide web
- Anki makes memory a __choice__, rather than a haphazard event, to be left to chance.
- But, as we shall see, there are already powerful ideas about personal memory systems based solely on the structuring and presentation of information. 从信息组织和展示的角度入手。
- Anki 卡片之间的复习间隔时间
    - 一张卡片在 20 年间需要花费 4-7 分钟去记忆
- 制作卡片的标准，Anki make memory a choice：你可以选择自己记忆的内容
    -  if memorizing a fact seems worth 10 minutes of my time in the future, then I do it
    - superseding the first, if a fact seems striking then into Anki it goes, regardless of whether it seems worth 10 minutes of my future time or not.
- 尝试使用 Anki 很不容易，通过学习 Unix 命令掌握需要的技巧。可以把之前 [[Vim 实用技巧]] 拆解到 Anki 中。
- 用 QA  的形式来使用 Anki
- Using Anki to thoroughly read a research paper in an unfamiliar field
    - [[AlphaGo]]还记得多少？
    - 举例的问题
        - “What's the size of a Go board?”; 
        - “Who plays first in Go?”; 
        - “How many human game positions did AlphaGo learn from?”;
        -  “Where did AlphaGo get its training data?”; 
        - “What were the names of the two main types of neural network AlphaGo used?”
    - 多轮记录问题
    - 通过一年之后阅读 [[AlphaGo Zero]] 检验记忆效果
    - I find Anki works much better when used in service to some personal creative project. 
    - 为了一个明确目标去设置 Anki 的问题，没有温度。
        - when I'm reading in support of some creative project, I ask much better Anki questions.
- Using Anki to do shallow reads of papers [[how to read a paper]](10 to 60 minutes Ankifying a paper)
    - 基于主题去阅读论文，读重要的论文。
    - 选择性阅读，记录关键。I'll add to Anki questions about the core claims, core questions, and core ideas of the paper.
    - 一篇论文 5 到 20 个问题。
    - 避免 Anki 化有误导性的条目，仔细选择提问的方法。
        - “What does Jones 2011 claim is the average age at which physics Nobelists made their prizewinning discovery, over 1980-2011?” (Answer: 48).
        - “Which paper claimed that physics Nobelists made their prizewinning discovery at average age 48, over the period 1980-2011?” (Answer: Jones 2011).
    - Ankifying figures：知道某张图存在，然后参考。
        - 曲线大概走向？
        - 图表细节
- Syntopic reading using Anki
    - 从 key paper 出发，best 5-10 paper，普通的论文也有助于认识整个领域。
    - Anki 从设计上不是为了创造性工作而生。
    - Anki 创造理解新领域的机会。
- More patterns of Anki use
    - [Effective learning: Twenty rules of formulating knowledge](https://www.supermemo.com/en/archives1990-2015/articles/20rules)
    - 原子化 **Make most Anki questions and answers as atomic as possible**
        - How to create a soft link from linkname to filename?
            - `ln -s filename linkname`
            - 根据答案分解成两部分。
        - 回答错原子化问题，能更清楚在哪一方面不足。
    - 追求大师级使用 **Anki use is best thought of as a virtuoso skill, to be developed:**
        - 软件简单，但是功能强大。
        - 你就是创造者。
    - 一个卡组 **Use one big deck**
        - 不同知识混合在一起，会产生意想不到的结果。
    - 避免临时感兴趣的话题 **Avoid orphan questions**
    - **95% of Anki's value comes from 5% of the features**
    - **Using Anki for APIs, books, videos, seminars, conversations, the web, events, and places**
        - 研讨会记录 3 个左右高质量的问题。
        - 有选择记忆 unmindfully Ankifying everything in sight is a bad habit
        - Ankify things that serve your long-term goals
        - Anki 之前读过的书或者论文
    - 避免判断题
    - 创造性工作需要内化理解部分知识。
        - 知识的流畅度 Fluency matters in thinking。
    - 为什么 Anki 不火？**If personal memory systems are so great, why aren't they more widely used?**
        - 人们更喜欢临时报佛脚。In experimental research on memory, people consistently underestimate the gains that come from distributing their study in a manner similar to Anki. Instead, they prefer last-minute cramming, and believe it produces better results, though many studies show it does not.
        - 理想难度原理 The psychologist Robert Bjork has suggested the “principle of desirable difficulty”, the idea that memories are maximally strengthened if tested when we're on the verge of forgetting them. This suggests that an efficient memory system will intrinsically be somewhat difficult to use. Human beings have a complex relationship to difficult activities, and often dislike performing them, unless strongly motivated (in which case they may become pleasurable).
        - 用好很难。Systems such as Anki are challenging to use well, and easy to use poorly.

最后，Michael Nielsen 在文章中提到 AlphaGo，分享一个这个相关的例子：

[RyenX 算法花园 在 Twitter: "几周前和大老板开会，他突然问我们一个问题，总结一下就是知识层次。 第一层：alpha go 和 alpha zero 的策略网络是如何训练的？（go 学习获胜的下法，zero 学习分布） 第二层：为什么会产出这样的区别？ 第三层：那么这和我们的业务中什么类似？" / Twitter](https://twitter.com/xiang578/status/1300068256045129728)
### Zettelkasten

最近中文圈比较火的概念，我也多次在 「Never Reading」分享相关的内容。Flynn 在聚会中也分享自己之前写过的一篇文章 [拆解Zettelkasten | 卡片盒知识管理体系实践反思 - Flynn](http://flynngao.github.io/2020/07/18/zettelkasten-1)，摘录相关的内容：

- 工作流和笔记方式
- Zettelkasten 认可思考的非线性特征，给出了一种脱离现有顺序框架的方式。
- **本来就没有一个完整的知识管理工作流。** 如何判断
    - 是否在各种情景下都可以使用有效方式捕捉素材？
    - 是否对待读材料有合适的管理方式？是否能够不定期清空待读材料？
    - 是否建立了自己的关注领域清单，并且建立对应的项目？
    - 是否知道如何为任何项目快速建立下一步行动？
    - 是否有种合理的方式检验自己对知识的理解？
    - 是否确认现有正在执行系统/习惯能可以长期执行？
    - 是否确定现有系统在遭遇中断甚至奔溃之后可以很快恢复？
- [[Evergreen Note]] 比 Permanent Notes 更合适
    - 以能够直接公布为目的逻辑完备的小文章，并且需要不停的更新他们之间的可能存在的逻辑关系，共同点，冲突点。
        - 笔记可以直接公开，比如 [[Andy Matuschak]]
    - 写作当做最重要的事情
    - 引用 [[Simon Eskildsen]] [How to Make Yourself Into a Learning Machine - Superorganizers](https://superorganizers.substack.com/p/how-to-build-a-learning-machine) 以及 [notes.andymatuschak.org](https://notes.andymatuschak.org/z7kEFe6NfUSgtaDuUjST1oczKKzQQeQWk4Dbc)
        - ![](https://media.xiang578.com/flynn-andy.png)
        - ![](https://media.xiang578.com/flynn-zk.png)
- 从他的理解来看，[[Obsidian]] 比 [[Roam]] 更合适，以及在 RoamCN 聚会时提到的，需要对文字数量进行限制。[[Progressive Summarization]] 和 [[Evergreen Note]] 的生长概念类似。



### 有限与无限的游戏

> 有本书对我蛮有影响的——叫做《有限与无限的游戏》。有限游戏在边界内玩，无限游戏却是在和边界，也就是和“规则”玩，探索改变边界本身。实际上只有一个无限游戏，那就是你的人生，死亡是不可逾越的边界。与之相比，其他的边界并不是那么重要了。
> 人人网、美团网、饭否网创始人王兴

有限游戏有明确的游戏结束目标，无限游戏的目标是让游戏一直进行下去。生活中的很多方面更多接近于无限游戏。比如工作之后的学习，没有明确的目标引导，更多是去保持这个习惯。

本期中脱不花的四个面试题中的驱动力也和这两个游戏有关。文章中介绍到谷歌之前从编程比赛中寻找程序员（回想到自己大学参加 ACM 经历），这些人习惯与在边界内做事情（外部刺激和目标）。而谷歌希望的人更多能根据自己的兴趣不断地拓展边界，打破旧有规则。结合到自己的工作中，很多任务没有之前编程时那么明确的目标，更多时候是依赖自己去寻找问题和解决问题。

另外 [谁在驱动滴滴发动机？](https://mp.weixin.qq.com/s/0tUYITGjZjFb7JLU4F-MUw) 中也提到张博最近在看 《有限与无限的游戏》，互联网下半场可能各个大佬更希望自己的企业基业长青。

### 其他

还有部分提及的内容还没有时间看，记录一下关键字和大家分享：active recall、spaced repetition、learn how to learn、nstigation habit、Atomic Habits、Mini Habits。


## 阅读

### 「个人成长」，知乎上最神奇的「专业领域」

- 厉害的标准
	- 在一个职级体系中通过竞争的手段达到了高位。
	- 留下传世的精品
	- 让足够多的人改善自己的生活

### [[产品沉思录]] Product Thinking】Vol.20200816：[[把自己作为方法]]

- 他用「**蜂鸟般悬浮**」来描述当下中国人焦虑的现状
- 反而对这种「温州乡绅式」的做事方式
- 他还提到了一种温柔而坚定地力量 —— **认命不认输**
	- 所以关键是要把自己所在的社会位置想透。在这个现实下如何去**超脱自己的角色，和强大的社会和历史力量持续的较劲，不认输的较劲。**
- Temporary Social Media
	- 事实证明我还是想的肤浅了、Snap 这两篇文章，是从现有社交网络的设计模式出发，从中寻找被忽略掉的边缘行为，然后反思为何社交网络会的「默认值」会被设计为「记录一切」，而这背后会带来什么样的代价。
	- 铭记每一刻，但也带来各种挖坟的效果。#idea 删除全部 QQ 空间的说说？
	- 所有的事情都能被记录的时候，往往意味着什么事情都不重要。#idea 你写日记的时候有没有这个问题？
	- 所以 Snap 看似用有限的时间和形式，反而促进你能更好的记住某个故事和感觉，而不是像档案馆一样收集你所有的，几乎不会回溯的过往。
- 温故知新：如何巧妙地达到你沟通的目的？
	- 文中关于沟通的定义值得着重记录 —— Ronald B. Adler与Russell F. Proctor将沟通定义为：**“（沟通是）一种交流的过程，参与者经由交换信息而建立关系。”**
	- 不过另一个有趣的地方是关于沟通深度的，即不是两个人在一起聊得越多越好，而是聊得是否是**对自己意义重大的事件，或者是极为隐私的事件**。


###  [回顾我学心理学的这8年经历 - Discovery - Hi!PDA Hi!PDA](https://www.hi-pda.com/forum/viewthread.php?tid=2760589&extra=page%3D1) #[[fatdragoncat]]
    
- 沙盘游戏展示个人心理状态
- 为了改变这个现状，我用了一个最简单粗暴的办法，就是你不理我，那我就去跟随你，参加你参加的一切活动
- 我一改过去记者生涯养成的晚上到处约饭的习惯，下班准点回家，周末绝不加班，而且开始主动参加老婆的各种活动，有时是到公园一群妈妈带娃的聚会，有时是做蛋糕，有时是去不同妈妈家聚餐，我本身是极端内向的人，而且前面也说过，我其实是有社交恐惧症的，所以参加这些活动每次都会迅速让我极端疲劳
- 移情(transference)来访者对分析者产生的一种强烈的情感，将自己过去对生活中某些重要人物的情感会太多投射到分析者身上的过程。
- 反移情(counter-transference)移情是咨询师把对生活中某个重要人物的情感、态度和属性转移到了来访者身上。
- 从那时起我就知道了，自己真正渴望的就是一个温暖的家，我想服务的客户，也是渴望家的温暖的人，而不是只想疗愈自己，而不顾伴侣死活的人。
- 我不想再听一帮只是花钱找人诉苦，却不肯承担家庭责任的人说废话了
- 我的心理咨询工作终结了，我的婚姻也over了，我以为往后的岁月，就是漂泊江湖，四海为家了。
- 于是我开始研究，怎么才能背一个双肩背，就能一边工作，一边生活，然后就撞上了知识付费时代的来临。
- 心理咨询教练很难，但是保持自己的心理健康可能很容易。


###  [【观点】得到CEO脱不花：面试一个人，你只问ta这四个问题就够了 ！](https://mp.weixin.qq.com/s/ks6JKet-GR81QZbqxHgOCw) 

- [[面试]] 后来 HR 和 Mentor 告诉我日常要，多积累一些面试相关的题目，这样进去之前就知道，通过什么问题考核什么方面。从此收集一些面试题就成了习惯，而在这个过程中关注点也从对专业内容的考核，变成了对人本身的考核，也变成了对自己的向内思索：这些问题，自己会如何回答呢？
- [[少楠]] 的面试题
	- 有哪些事情是别人做起来觉得很难很无趣，但是你自己却乐此不彼的坚持了很久。
	- 最近半年有什么观点改变了你的认知或者行为方式，为什么？
	- 你迄今为止做过的，最让你有成就感的一件事是什么？
- [[脱不花]] 面试题
	- **驱动力：**如果你突然有半个月的带薪休假，只有一个条件，就是必须研究一个事儿，你会研究什么?
		- 主要考察的是内驱力，擅长比赛的要靠外部刺激和目标(原文中举例谷歌从编程比赛中寻找程序员)，在边界内做事。
			- #idea 所以我对工作的不适应，除了不了解机器学习，另外一方面来自于大学靠的是外部刺激和目标。现在需要尝试的是突破业务理解？
		- 而内驱力更能适应变化，他们能根据自己的兴趣不断地拓展边界，打破旧有规则
		- 和最终在谷歌成功概率相关的问题：你几岁开始拥有自己的电脑？
		- 谷歌的这两条经验,本质上都指向一个问题:一个人的驱动力是从哪里来的?是来自他自己的兴趣或者对自己的要求,还是来自外界什么人给他设定的标准？
		- 瞬间反应和回答问题的思路。研究的标的、怎么使用这些时间、达到什么目标？
		- 因为了解个人的内驱力高低,基本上就能判断出来这个人未来应对变化的能力。当环境对他提出新的要求时,他的抗压性强不强,能不能主动适应变化,就能从这个问题中反映出来了。
	- **期望值：**你正在做的事，行业里最顶尖的人或公司是谁，他们是怎么做的?
		- 主要是看眼界如何，视野开阔与否。能不能把内驱力转化为行动力
		- 对自己领域的理解
		- 对高手的定义决定了他的认知，定义的过程能看到研究的过程及人脉情况
		- 关键是如何定义和标杆的差异，以及差异如何形成及缩短方式。
	- **人际**：你在此之前的人生经历中，做过什么重要的取舍?
		- 如果你做重要取舍都是一个人，是不是验证你是一个孤独的人？
		- 核心是看决策机制的形成，了解进退感和分寸，是否有清晰的边界意识。
		- 为什么做出这种选择？出发点是什么？为什么这个时候做？你能不能清晰地界定选择的代价是什么？在你做出这些选择的前后都发生了什么，分别怎么解决的？
		- 重大决策都会有一两个关键人的影响，关注是否有其他相关人被提及，以及这些人在决策中的角色，来判断他的关系网络
		- 啰嗦的人无法带大队伍，因为边界不清晰
	- **反思：**针对你刚才提到过的这件事，如果你有机会能重新做一遍，会有哪些地方不一样?
		- 反思能力，自己经历过的事情是否有清醒的觉察，评估他对待机会的敏感度。
		- 对过往是否有总结和复盘，以及对机会的敏感度。颗粒度越细，反思越深。
		- 面试中很难靠一面之词分清哪些是团队的水平，哪些是个人的贡献。通过反思，根据提到的颗粒度，能够判断，他在项目中究竟起到了多大的作用。
	- 对一个人的内驱力、关系建立能力、目标感和反思能力都有充分的了解能更好帮助做出准确的判断。
	- 很幽默以及不温和
	- 最后推荐了 [[奈飞文化手册]]


## 商业

-  [谁在驱动滴滴发动机？](https://mp.weixin.qq.com/s/0tUYITGjZjFb7JLU4F-MUw)
    - 平台治理
    - [[有限与无限的游戏]]
    - 叶杰平来滴滴的两道面试题：
        - “一道题目，跟出行里抢单、派单相关，问我能不能抽象成数学问题。”
        - 能不能把抢单到派单问题，具体建立成一套算法模型？
        - 纪念一下人已经走了。
- 失去字节技术中台支持的 TikTok，还会是曾经那个 TikTok 吗？ [[The Information]]
    - 美国政府：威胁国家安全和违反数据隐私。
    - 国内以什么理由封杀部分软件？美国是实行对等的权力吗？中国和美国之间的战争一部分，没有一个人是无辜的。另外，没有看到国内政府在这一件事情上发表任何的声明？
    - 联系一下，这件事情对滴滴的国际化会产生什么样的影响？滴滴会不会被更加宽容的处理？还是不要抱有幻想？
    - 从监管层到潜在买家，试图改写 TikTok 未来的角色变多了[[The Information]]


## 算法

这个月看起来，看得论文和文章比较少。ai-labs 单机 93w QPS 的模型承保我好几点的笑点。

### [滴滴KDD2020论文(六) | 滴滴公开ETA新系统，线上推理速度进入微秒时代](https://mp.weixin.qq.com/s/quJq0bvTs0qpwYUglQrUfw) [[CompactETA]]  #ETA
- 之前写过他们原来的 ETA 模型文章： [(WDR) Learning to Estimate the Travel Time | 算法花园](https://xiang578.com/post/wdr.html)。
-  数据稀疏
	- 空间稀疏：link 历史数据少
		- 基于路况分布来度量不同 link 的相似性，利用 metric learning 进行训练
	- 时间稀疏：相邻时段的 embedding 设置共享参数，使得相邻时段的 embedding 更加相似
- 如何解决线上预测耗时？
	- [[GAN]] 替代 [[LSTM]]，link 之间的依赖关系通过学习路网的拓扑结构来建立
	- 位置编码：保持序列信息
	- 查表 + g 然后过 MLP
	- ![](https://media.xiang578.com/compacteta.png)
	
### [算法工程师技术路线图 - 知乎](https://zhuanlan.zhihu.com/p/192633890) 
- [[Python]]：[[Learn Python the Hard Way]] [[流畅的 Python]]
	- 能读懂 panads、sklearn 等包的源代码
- [[Scala]]
	- Spark快速大数据分析
	- [[Scala函数式编程]]
	- [[冒号课堂]]
- [[cpp]] 能够读懂[[LightGBM]]里对于tweedie loss的相关定义代码。
- [常用设计模式有哪些？](https://refactoringguru.cn/design-patterns)


##  [Embedding 技术的非端到端学习方法 - 知乎](https://zhuanlan.zhihu.com/p/188569580) 

- 下载记录变成一个 session
- 随机游走扩充数据
- #Airbnb 全局 context [[Real-time Personalization using Embeddings for Search Ranking at Airbnb]]
- 同一个类别的随机负样本，分类成本不高。
- ![](https://media.xiang578.com//tencent-app-store-embedding.png)
