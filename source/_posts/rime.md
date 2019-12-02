
---
title: 「Rime 鼠须管」小鹤双拼配置指南
date: 2019-06-15 21:21:14
tags:  [rime]
categories: 
---

![](/file/15599183665365.jpg)

## 引言

如何将汉字输入到计算机中是一个编码有关的问题，目前市面上主流的方案包括音码、形码、音形码。和大多数人一样，之前我一直使用全拼，而且得益于 NLP 技术发展，使用搜狗输入法搭配云词库，输入效率可以媲美五笔输入法。

但是今天要和大家分享，是从年初开始使用的全新音码输入方案——小鹤双拼。最初关于双拼的概念来自李笑来《把时间当作朋友》：

>在很长的一段时间里，我常言之凿凿地对同学们说“练习打字完全是浪费时间。”我当时的逻辑是这样的。首先，我认为王码五笔字型输入法是给打字员用的。为什么要学它？难道你将来想要当个打字员？我总觉得五笔字型知识一种抄写输入法，因为用他输入时只能边看边打。而对真正创造内容的人来说，先用纸和笔写出来再录入电脑，还有比这更荒诞的事情吗？学习拆字学法已经很累人了，还要练什么指法，见鬼。更不用说这种所谓的输入法对思考的干扰——不仅要把字拆开再输入，还要按照莫名其妙的方法拆字。其次，盲打。我现在不是盲打，只是两根手指输入速度就已经很快了（至少比手写快）。
>
>这样看来，我还有必要学习什么五笔字型和盲打吗？
>
>在我有了这些定见很久之后，发生了一件事情。
>
>那是在1997年，我25岁。当时互联网除了聊天室和论坛，几乎没有什么实际的应用。适逢windows捆绑了哈尔滨工业大学开发的“微软拼音输入法1.0”，某天下午，当我在网上和一位永远都不会知道是谁的女生放肆地聊了两个小时之后，突然发现自己竟已无师自通地学会了所谓的“盲打”了！在这之后的一段时间里，我身边甚至很多人羡慕我打字的速度。为了让自己的打字速度再快一点，我索性花了差不多20分钟，把原本默认的“全拼输入”改成了“”双拼输入“。而这还远远不够。后来，我增设了”慢放模糊音“（不区分z/zh、c/ch、s⇧），又把打字速度提高了一些。这时我第一次意识到‘有些认识，哪怕是简单的常识，也需要亲身经历后才能真正体会”。只有拥有无与伦比的打字速度，才会体会打字速度快的好处。
>
>打字速度提升后，我发现自己不再讨厌在读书的时候做笔记了，因为在键盘上敲字相对于笔写字来说轻松太多。我开始大段地纪录感悟，有时甚至干脆整篇摘抄原文！

李笑来思考的问题正是如何利用最小的代价快速的输入文字。这里代价包括两个方面，输入方案的学习成本以及输入文字的速度。简单分析一下，主流输入法需要用户在键盘上敲击一些字符，然后映射到汉字。就是说输入文字的速度和两个因数有关：敲击键盘的次数（对应计算机中的码长）以及重码的字符数量（对于拼音输入法来说，这里指的是每个拼音对应多少的字）。

从这两个指标来说，五笔应该是接近输入法的极限，五次敲击键盘肯定能选定你需要的汉字。但是学习五笔需要记忆大量的说是有序其实没有太多规律的字根，学习曲线不是一般的陡峭。几年前，自己尝试跟着网上的视频教程学习，最后还是太复杂而放弃。

这时候要介绍一下双拼输入法，它是一种基于全拼的激进改良版拼音输入法。简单来说，它将一个汉字的拼音分成声母和韵母两个部分，输入一个拼音只需要按两个键（减少键盘的敲击次数但是没有减少重码率）。比如对于“拼音”两个字来说，全拼需要输入 `pinyin` 六个字符，换成是双拼，只需要输入 4 个字符 `pbyb`。具体介绍可以看 [做少数派中的少数派：双拼输入快速入门](https://sspai.com/post/32809)。

由于双拼有声母和韵母，需要先从键盘上进行一次映射，所以有很多的输入方案。我自己入门使用的是小鹤双拼，也推荐大家使用这个方案。主要原因有两点：声母和韵母全部放在字母键上（微软双拼中要用到 `;` 键，以及 iOS12 和 MacOS 中自带的输入法都支持这个方案（国内那几个流氓输入法更不用提）。 

下图是一张小鹤双拼的输入法键位图，其中黑色的字符代表是键盘上的什么键，棕色的代表这个键表示声母时是什么，蓝色的代表这个键表示韵母时是什么。学习双拼的过程也很简单，拼音本身就会，无非是熟悉键位。从我自己的角度来说，每天抽出几分看一下键位图，再在 [双拼练习 @ BlueSky](https://api.ihint.me/shuang/) （相关的介绍可以看：[快速上手双拼，可以尝试这个练习平台 - 少数派](https://sspai.com/post/40185)）网站上练习 5 分钟，一周后可以完全脱离键位图来打字，之后就是孰能生巧的过程。

![](/file/15600908556759.jpg)

说回来当你学习了这么强大的内功之后，自然需要神兵来辅助你输入。在饱受国内的流氓输入法侵害之后（比如输入到一半给你跳一个什么斗图功能提示），我遇到今天的主角 [RIME | 中州韻輸入法引擎](https://rime.im/)，它是由佛振开发的一种开源输入框架，业内人士称之为「神级输入法」。上一个有类似拉风的称号的软件还是「神级编辑器」—— Vim。Rime 有趣的一点是在不同的平台上有不同的名字，包括 Linux 上的「中州韵」，Win 上的「小狼毫」以及 Mac 上的「鼠须管」。稍微有文化的人可以反应过来，后面两个正是两种不同的毛笔名字。

简单总结一下为什么要使用鼠须管：一是安全，不会出现什么输入法读取你个人信息更甚者是密码发送到服务器，也不知道他们用来机器学习什么；二是配置全平台同步，解决多台设备的输入法配置问题；三是快，不会出现输入法跟不上我的打字速度而导致思路中断的情况。

## 安装

在 [下載及安裝 | RIME | 中州韻輸入法引擎](https://rime.im/download/) 主页，你可以找到对应不同平台的安装方法。

对于 MacOS 来说，可以在终端中使用 `curl -fsSL https://git.io/rime-install | bash -s -- :preset double-pinyin` 安装软件本体。`preset double-pinyin` 指定下载的时候默认包括双拼输入方案。

## 配置 

防止配置时候出现各种意想不到的情况，首先推荐阅读官方文档 [CustomizationGuide · rime/home Wiki](https://github.com/rime/home/wiki/CustomizationGuide)。

Rime 的配置文件默认放在 `~/Library/Rime`，而且是一种扩展 yaml 文件。默认的文件名为 `.schema.yaml`，比如小鹤双拼相关的默认配置在 `double_pinyin_flpy.schema.yaml` 中。如果我们自己想添加一些设置，推荐写在以`.custom.yaml` 结尾的新文件中，比如 `double_pinyin_flypy.custom.yaml`

### default.custom.yaml

这个文件写一些全局的配置。

```yaml
patch:
  switcher:
    caption: 〔方案选单〕
    hotkeys: Control+grave
  # 候选词数量
  menu:
    page_size: 9
  # 使用的输入方案
  schema_list:
    - schema: luna_pinyin_simp
    - schema: luna_pinyin
    - schema: double_pinyin_flypy
  # 输入法中英文状态快捷键
  ascii_composer/switch_key:
    Caps_Lock: commit_code
    Control_L: noop
    Control_R: noop
    # 按下左 shift 英文字符直接上屏，不需要再次回车，输入法保持英文状态
    Shift_L: noop
    Shift_R: noop
  # 在一些软件中默认使用英文输入状态
  app_options:
    com.apple.finder: &a
      ascii_mode: true
      no_inline: true
    com.googlecode.iterm2: *a
    com.alfredapp.Alfred: *a
    com.runningwithcrayons.Alfred-2: *a
    org.vim.MacVim: *a
    com.apple.Terminal: *a
```

最后在修改配置时，可以查阅 [Rime_collections/Rime_description.md at master · LEOYoon-Tsaw/Rime_collections](https://github.com/LEOYoon-Tsaw/Rime_collections/blob/master/Rime_description.md) 寻找相关信息。

### installation.yaml 

配置文件多平台同步相关文件，`sync_dir` 指定同步文件夹的位置，配合例如坚果云之类的软件实现备份同步。

```yaml
distribution_code_name: Squirrel
distribution_name: "鼠鬚管"
distribution_version: 0.11.0
install_time: "Sun Dec 23 23:42:01 2018"
installation_id: "mac_didi"
sync_dir: "/Users/didi/Documents/rime_sync"
rime_version: 1.4.0
update_time: "Mon Jun  3 07:18:30 2019"
```

### double_pinyin_flypy.custom.yaml

小鹤双拼相关的自用配置

```yaml
patch:
  # 引用 `symbols.custom` 文件里面的符号
  # 'punctuator/import_preset': symbols.custom
  'recognizer/patterns/punct': "^/([a-z]+|[0-9])$"
  # 載入朙月拼音擴充詞庫
  "translator/dictionary": ryen
  # 更改‘西文’为‘英文’，‘增广’为‘扩展集’
  punctuator:
    import_preset: symbols.custom
    half_shape:
      "#": "#"
      "`": "`"
      "~": "~"
      "@": "@"
      "=": "="
      "/": ["/", "÷"]
      '\': ["、", '\']
      "'": {pair: ["「", "」"]}
      "[": ["【", "["]
      "]": ["】", "]"]
      "$": ["¥", "$", "€", "£", "¢", "¤"]
      "<": ["《", "〈", "«", "<"]
      ">": ["》", "〉", "»", ">"]
  switches:
    - name: ascii_mode
      reset: 0
      states: ["中文", "英文"]
    - name: full_shape
      states: ["半角", "全角"]
    - name: zh_simp
      reset: 1
      states: ["漢字","汉字"]
    - name: ascii_punct
      states: ["，。", "，．"]
    - name: extended_charset #生僻字开关
      states: ["通用", "扩展集"]
    - name: show_emoji # 该项为表情输入，具体内容可见下文中 [关于表情输入] 部分
      reset: 1
      states: [ "🈚️️\uFE0E", "🈶️️\uFE0F" ]
  # 输入双拼码的时候不转化为全拼码
  translator/preedit_format: {}
  simplifier:
    option_name: zh_simp
  # 分号上屏二候选词；引号上屏三候选词
  "key_binder/bindings":
    - { when: has_menu, accept: semicolon, send: 2 }
    - { when: has_menu, accept: apostrophe, send: 3 }
    - { when: paging, accept: bracketleft, send: Page_Up }
    - { when: has_menu, accept: bracketright, send: Page_Down }
```

### squirrel.custom.yaml 

自定义皮肤相关文件

```yaml
patch:
  style:
    color_scheme: psionics
    horizontal: true
    inline_preedit: true
    candidate_format: "%c\u2005%@ \u2005"   # 用 1/6 em 空格 U+2005 来控制编号 %c 和候选词 %@ 前后的空间。
    font_point: 16                          # 候选文字大小
    label_font_point: 14                    # 候选编号大小
    corner_radius: 5                        # 候选条圆角
    border_height: 0                        # 窗口边界高度，大于圆角半径才生效
    border_width: 0                         # 窗口边界宽度，大于圆角半径才生效
```

最后，我的配置在 [xiang578/rime](https://github.com/xiang578/rime) 同步。

## DEBUG

Debug 是折腾 rime 不得不面对的一步，主要通过查看 rime 部署的時候 log 文件实现。对于鼠鬚管， log 文件保存在 `$TMPDIR/rime.squirrel.*` 中。首先在命令行中输入 `echo $TMPDIR` 获得路径，然后将地址输入到 「访达-前往-前往文件夹...」跳转。点击 
`rime.squirrel.WARNING` 选择显示原身，利用文本编辑器打开。

文件格式类似于下面：

```yaml
Log file created at: 2019/06/07 23:31:54
Running on machine: didideMiBook-Pro.local
Log line format: [IWEF]mmdd hh:mm:ss.uuuuuu threadid file:line] msg
W0607 23:31:54.549346 162086912 config_compiler.cc:391] inaccessible node: punctuation.custom:/patch
W0607 23:31:54.554167 162086912 config_compiler.cc:391] inaccessible node: key_bindings.custom:/patch
W0607 23:31:54.560144 162086912 deployment_tasks.cc:179] schema list not defined.
W0607 23:36:13.133517 161013760 config_compiler.cc:391] inaccessible node: punctuation.custom:/patch
W0607 23:36:13.135843 161013760 config_compiler.cc:391] inaccessible node: key_bindings.custom:/patch
W0607 23:36:13.149406 161013760 config_data.cc:62] nonexistent config file '/Users/didi/Library/Rime/luna_pinyin_simp.custom.yaml'.
W0607 23:36:13.154920 161013760 config_compiler.cc:391] inaccessible node: punctuation.custom:/patch
W0607 23:36:13.156643 161013760 config_compiler.cc:391] inaccessible node: key_bindings.custom:/patch
W0607 23:36:13.331344 161013760 config_compiler.cc:391] inaccessible node: key_bindings.custom:/patch
W0607 23:36:13.333066 161013760 config_compiler.cc:391] inaccessible node: punctuation.custom:/patch
W0607 23:36:13.668072 161013760 config_data.cc:62] nonexistent config file '/Users/didi/Library/Rime/stroke.custom.yaml'.
W0607 23:36:13.670761 161013760 config_compiler.cc:391] inaccessible node: key_bindings.custom:/patch
W0607 23:36:13.672724 161013760 config_compiler.cc:391] inaccessible node: punctuation.custom:/patch
W0607 23:36:14.281919 161013760 config_compiler.cc:391] inaccessible node: punctuation.custom:/patch
W0607 23:36:14.283246 161013760 config_compiler.cc:391] inaccessible node: key_bindings.custom:/patch
```

## 按右 shift 切换输入法

之前使用搜狗输入法时，特别喜欢的一个功能：按右 shift 切换输入法的输入状态，实现暂时切换到英文状态。Rime 作者在 [使用 Control 鍵切換中西文，上屏已輸入的編碼；令 Caps Lock 改變字母的大小寫](https://gist.github.com/lotem/2981316) 中提到一种方案。例如下面：

```yaml
patch:
  ascii_composer/good_old_caps_lock: true
  ascii_composer/switch_key:
    Caps_Lock: commit_code
    Shift_L: noop
    Shift_R: commit_code
    Control_L: commit_code
    Control_R: commit_code
```

然而这样修改完成之后，不论按哪个 Shift 键，都会切换到英文输入状态。看前面那个网页下面作者与其他人的讨论中发现，鼠须管无法区分 Shift 键。

网上查了一下，简单实现的方法是通过 karabiner 软件来改键。详细步骤可以参考 [禁用 Squirrel 英文模式，使用左侧 Shift 切换中英 · rime/squirrel Wiki](https://github.com/rime/squirrel/wiki/%E7%A6%81%E7%94%A8-Squirrel-%E8%8B%B1%E6%96%87%E6%A8%A1%E5%BC%8F%EF%BC%8C%E4%BD%BF%E7%94%A8%E5%B7%A6%E4%BE%A7-Shift-%E5%88%87%E6%8D%A2%E4%B8%AD%E8%8B%B1)。

## Reference

- [双拼 · Issue #37 · xiang578/xiang578.github.io](https://github.com/xiang578/xiang578.github.io/issues/37)
- [基于Rime的鼠须管输入法配置记录](http://zhizhi.betahouse.us/2018/10/17/rime-setup/)
- [Rime 输入法配置记录](https://withdewhua.space/2019/01/30/rime-configuration)
- [Mac 下调校 Rime - 漠然的博客 | mritd Blog](https://mritd.me/2019/03/23/oh-my-rime/)
- [最新版 Rime 输入法使用 - jdhao's blog](https://jdhao.github.io/2019/02/18/rime_configuration_intro/)
- [「鼠须管」的调教笔记](https://scomper.me/gtd/-shu-xu-guan-de-diao-jiao-bi-ji)
- [「鼠须管」输入方案的添加](https://scomper.me/gtd/-shu-xu-guan-de-an-zhuang-he-bu-shu)
- [RIME输入法在Finder中自动切换成英文 @ Why & How](https://whyhow.tk/2016/04/29/rime0429.html)
- [鼠须管配置 2019](https://placeless.net/blog/rime-squirrel-customization-2019#article)
- [禁用 Squirrel 英文模式，使用左侧 Shift 切换中英 · rime/squirrel Wiki](https://github.com/rime/squirrel/wiki/%E7%A6%81%E7%94%A8-Squirrel-%E8%8B%B1%E6%96%87%E6%A8%A1%E5%BC%8F%EF%BC%8C%E4%BD%BF%E7%94%A8%E5%B7%A6%E4%BE%A7-Shift-%E5%88%87%E6%8D%A2%E4%B8%AD%E8%8B%B1)
- [rime-aca/dictionaries: Rime詞庫](https://github.com/rime-aca/dictionaries)