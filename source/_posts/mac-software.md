---
title: Mac软件清单
date: 2017-09-18 22:11:31
tags: [mac,software]
categories: 程序园
---

最近痛下血本买了一台Mac，这里记录一下我装的软件。

> 君子生非异也，善假于物也。

### 更新
1. 2017年9月20日：Anaconda
2. 2017年9月21日：lantern、Dash、Xcode
3. 2017年12月10日：虚拟机相关

### Clion
- C++ IDE

### Pycharm
- Python IDE

### Alfred 3
- 替换默认的搜索工具
- 搭配workflow使用效果更佳

### MWeb 
- MacOS 下面最喜欢的Markdown编辑器
- 常用的高级功能有发布WordPress博客和自动将图片上传到图床

### Wiznote
- 用官方的话来讲Mac功能少是小而美
- 如果不是会员到2020年结束，我一定会转到Evernote上去

### iina
- 视频播放软件

### ~~ShadowsocksX-NG~~
- 看名字就知道干什么的
- 突然发现自己买不起服务器，转向蓝灯

### Parallels Desktop 
- 虚拟机软件

### Sublime Text 3
- 性感的编辑器？
- 处理小文本时使用，写题目还是喜欢vim

### iTerm2
- 用来替换默认的Terminal
- 推荐主题：`solarized-dark`
- 推荐字体：`Hack`

### Homebrew
- Terminal内下载软件
- 使用：`brew update;brew install vim`
- 查看软件信息：`brew info vim`
- 临时替换：`export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles`
- [清华大学镜像地址](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)
- [中国科学技术大学源地址](https://lug.ustc.edu.cn/wiki/mirrors/help/brew.git)

### tmux
- 增强终端功能
- 配置文件：[.tmux](https://github.com/gpakosz/.tmux)
- 更新配置文件：`tmux source ~/.tmux.conf`
- 常用快捷键
    - `prefix s` 查看/切换sessoin
    - `prefix d` 离开session
    - `prefix $` 重命名当前session
    - `prefix c` 新建窗口    
    - `prefix space` 切换到上一个活动的窗口    
    - `prefix &` 关闭一个窗口
    - `prefix 窗口号` 使用窗口号切换
    - `prefix o` 切换到下一个窗格    
    - `prefix q` 查看所有窗格的编号    
    - `prefix “` 垂直拆分出一个新窗格    
    - `prefix %` 水平拆分出一个新窗格    
    - `prefix z` 暂时把一个窗体放到最大    

### Oh My ZSH!
- 用`zsh`来替换默认的shell
- 推荐主题：`agnoster`
- 最喜欢的是对git的增加以及git相关快捷键的缩写
- 常用快捷键
    - `gaa`: git add .
    - `gb`: git branch
    - `gcm`: git checkout master
    - `gcmsg`: git commit -m
    - `gst`: git status

### vim
- 配置文件：spf3，已经不想折腾这些东西
- 常用快捷键
    - `dd`: 删除当前行,并把删除的行存在剪贴板里面
    - `*#`: 匹配当前光标所在的单词移动到下一个或者上一个匹配的单词
    - `%`: 匹配括号移动
    -  `:set number`: 显示绝对行号
    - `:set relativenumber`: 显示相对行号
    - `r`: 将光标所在的字符替换掉
    - `<<`: 将当前行向左移动一个偏移宽度
    - `>>`: 将当前行向右移动一个偏移宽度

### Powerline fonts
- vim中的状态栏以及zsh某些主题正确显示的核心

### iStat Menus
- 系统增强工具
- 在状态栏显示当前网速、CPU占用以及温度等信息

### Jietu
- 腾讯为数不多的良心之作，截图软件

### 坚果云
- 良心同步软件，每个月上传流量不多，但是够用
- iCloud默认空间实在是太少

### Anaconda
- python 科学计算包？
- 最主要使用是jupyter notebook
- 根据之前在公司安装时得到的经验，完成安装之后还需要更新zsh相关的配置，否者在iTerm中依旧无法使用
- 在 `.zshrc` 中添加一条记录：`export PATH="/Users/xiangrunye/anaconda3/bin:$PATH"` 注意这里需要写绝对地址
- 更新配置文件：`source ~/.zshrc`

### Lantern
- 捍卫互联网自由？

### Dash
- 快速查阅各种语法的文档
- 配合Alfred食用更佳，建议将 keyword 改为 `ds`

### Xcode
- 感觉自己可以转ios开发
- 下这东西才知道，国内连AppStore网络有多差

### Parallels Desktop
- [win镜像获取](https://bitmingw.com/2017/04/24/windows-thin-pc-download-install-activate/)

### Chrome
- 看中的是插件多的特点
- MacOS设置为英文的环境下，Chrome里面下载时经常出现文件名乱码，找到了这个网页[ Mac OS X 下修改 Google Chrome 显示语言的方法](http://blog.csdn.net/maxsky/article/details/52411977)

### 参考链接
- [MacTalk:Alfred](http://macshuo.com/?p=625)
- [Tmux 速成教程：技巧和调整](http://blog.jobbole.com/87584/)
- [vim 学习卡](http://macshuo.com/?p=1045)
- [vim 帮助和配置 ](http://macshuo.com/?p=769)
- [从零开始学习Alfred](https://sspai.com/post/32979)
- [markdown.wordflow](https://github.com/tiann/markdown-img-upload)


