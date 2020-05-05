---
title: 博客维护日志 beta 0.2
date: 2019-06-15 13:39:49
tags: [blog, hexo, vps]
categories: 
---

> 记录博客修修补补的故事

## beta 0.2

长达 9 个月闲置之后，终于迎来一轮对博客的更新。
- 本着闭环的原则，将评论系统从 Disqus 替换为基于 Github Issues 的 Gitalk。不过，依旧没有多少留言量。
- 博客主题从 Next 切换到 [fi3ework/hexo-theme-archer: 🏹 A smart and modern theme for Hexo.](https://github.com/fi3ework/hexo-theme-archer)
    - [ ] LaTex
    - [ ] 评论系统
    - [ ] 统计
    - [ ] 细节设定
- 添加一个新的固定栏目 「每月分享」，目前正在持续探索这个栏目的形式中。
- 除继续使用百度统计之外，加上 Google Analytics 进行数据分析。

## beta 0.1

- 开始使用版本号来记录博客更新。从 beta 0.1 开始，预计完成博客发布会的计划后（参见：[博客发布会 · Issue #23](https://github.com/xiang578/xiang578.github.io/issues/23)，切换到正式版本。
- 本次更新带来最大的变化是在博客中加入豆瓣个人[阅读](https://xiang578.com/books)和[观影](https://xiang578.com/movies)记录。感谢 [hexo-douban: A simple plugin for hexo that helps us generate pages for douban books ,movies and games.](https://github.com/mythsman/hexo-douban) 提供技术支持。

## beta 0

早期对博客进行的相关修改有：

- [从零开始利用 hexo + Github/Coding 搭建个人博客 | 算法花园](https://xiang578.com/post/how-to-build-a-hexo-blog.html)
- [为博客添加返回顶部按钮 | 算法花园](https://xiang578.com/post/add-return-button-to-blog.html)
- [博客折腾记：使用 Travis CI 自动部署 | 算法花园](https://xiang578.com/post/use-travis-ci-to-auto-update.html)
- [博客折腾记：使用 Travis CI 自动部署博客 | 算法花园](https://xiang578.com/post/use-travis-ci-to-auto-build-blog.html)
- [博客折腾记：修复七牛云测试域名失效问题 | 算法花园](https://xiang578.com/post/fix-qiniu-test-url-error.html)
- [博客折腾记：主题更新、迁移博客到腾讯云COS以及解决百度收录 | 算法花园](https://xiang578.com/post/use-cos-to-store-blog.html)
- [博客折腾记：hexo-leancloud-counter-security 与标题中的引号冲突 | 算法花园](https://xiang578.com/post/meet-leancloud-counter-security-problem.html) 

## 博客专栏
* 【每周分享】：每周六更新，记录过去一周，我看到值得分享的内容
* 【月读】：每月更新，推荐本月我阅读的一本书
* 【数字生活】：我的数字生活实践
* 【博客公告】：分享与这个博客维护相关的内容

## 博客记录

- 本博客采用[hexo](https://hexo.io/)搭建，使用[Even](https://github.com/ahonn/hexo-theme-even)主题
- 托管：Coding Pages
- 域名：腾讯云
- 评论：Disqus
- 统计：百度统计
- 图床：七牛 
- 20151006：恢复订阅功能
- 20160303：开启分类和请我喝一杯咖啡
- 20160623：重新开启评论和百度统计，与自己和解
- 20160624：更换主题大道至简Maupassant，增加favicon和apple-touch-icon
- 20170104：放弃github+hexo,投入vps+wordpress怀抱,依旧使用maupassant主题
- 20170722：主机系统升级失败,从备份中恢复博客,并采用 Twenty Twelve 主题
- 20171005：重新投入hexo怀抱，并托管于Coding Pages
- 20180101：开启功德箱
- 20180501：PV: 657 | UV: 242
- 20180528：使用 Travis CI 自动部署

## 除虫记录

### Error: Cannot find module 'node-sass-magic-importer'

[ERROR in Cannot find module 'node-sass'（已解决） - line - CSDN博客](https://blog.csdn.net/Nalaluky/article/details/82598300)

```bash
cnpm install node-sass@latest
```

