---
title: 使用BackWPup恢复wordpress
date: 2017-07-22 22:13:33
tags: [wordpress,backwpup]
categoties: 程序园
---


昨天晚上手贱点了升级服务器上的Ubuntu版本,然后发现wordpress不能用了...删了nginx装上Apache才解决,之后发现主题有问题,一激动就提交工单把服务器重装了...

接下来就是wordpress重装的过程,自己一直使用BackWPup每周备份wordpress,所以本以为重装会很轻松.

早上起来将wordpress以及BackWPup装好.然后就在BackWPup里面翻了好久都没有发现怎么还原的按钮...又用百度谷歌搜了一下,也没有教程...

没有办法,只好硬着头皮去看插件的官网,然后发现了[这边文章](http://docs.backwpup.com/article/127-how-to-restore-a-wordpress-backup),按照这里面的描述成功的恢复了wordpress.

## 恢复数据库
由于我用的是`phpmyadmin`,所以登录到服务器的`phpmyadmin`管理页面.选择数据库`wordpress`,点击导入,上传BackWPup备份压缩文件中的`.sql`文件,点击执行,这样数据库中的内容就还原了.

![-w1277](http://7xkpe5.com1.z0.glb.clouddn.com/15006908280096.jpg)

## 恢复wordpress文件
这一步只需要将备份文件里面的文件上传到服务器新的网站目录下覆盖就可以了.由于我用的是iTerm2,所以可以在本地使用`scp`命令

## 尾声
zz插件,连个一键还原都没有...

