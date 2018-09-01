---
title: 解决 OmniFocus 中 Applescrpit 脚本输出文件中文乱码问题
date: 2018-03-05 16:45:30
tags: [applescript,omnifocus,dash]
categories: 程序园
---

在学习[OmniFocus 入门与进阶 - 少数派](https://sspai.com/series/27)教程中，了解到了一个 Applescript 脚本 [Weekly project report generator（周报生成器）](http://forums.omnigroup.com/showthread.php?t=23290)。这个脚本可以将 OmniFocus 中前七天活跃的项目以及完成的动作导出成为一个`.md`文件。这样子，可以大大减轻周回顾时回忆本周完成任务的压力，也可以将生成的文本粘贴到周报中使用。

但是当我第一次运行这个脚本时，生成的文件中所有的中文字符都变成了问号。

![错误](http://
7xkpe5.com1.z0.glb.clouddn.com/15202379974944.jpg)

由于，之前没有接触过中文显示为问号的问题。所以，与少数派教程的作者联系，他很快给我回复了一份邮件，并给出两个建议。

![回信](http://
7xkpe5.com1.z0.glb.clouddn.com/15202381199945.jpg)

按照邮件中的建议，我进行了下面三个尝试。

1. Sublime Text中安装转化编码方式的插件`ConvertToUTF8`，最终发现无法识别出生成文件的默认编码。
2. 使用系统自带的文本编辑打开时，还是显示编码错误。
3. 利用`homebrew`安装了`enca`软件，使用`enca -L zh_CN file`无法检测出文件的编码方式。

无奈这些方式都没有找出问题的所在，只好打开脚本编辑器，查看这个脚本是怎么写的。

如下图所示，该脚本将需要输出的字符串指定为`Unicode text` 格式，用 `write` 将这个字符串写进文本中。
![](http://
7xkpe5.com1.z0.glb.clouddn.com/15202388604296.jpg)

根据之前的编程经验，输出文本一般都能指定编码方式。所以又用 `Dash` 来查看 AppleScript 中 `Write` 的相关语法。

![](http://
7xkpe5.com1.z0.glb.clouddn.com/15202391269270.jpg)

最终，找到 `as` 可以用来指定编码方式，成功解决乱码问题。

![](http://
7xkpe5.com1.z0.glb.clouddn.com/15202392024378.jpg)

![IMG_0233](http://
7xkpe5.com1.z0.glb.clouddn.com/IMG_0233.JPG)







