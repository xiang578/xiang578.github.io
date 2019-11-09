---
title: 博客折腾记：主题更新、迁移博客到腾讯云COS以及解决百度收录
date: 2019-05-19 15:44:09
tags: [travis, blog, cos]
categories: 站务
---

本周有空对博客进行新一轮折腾，现在将这些尝试记下来和大家分享。

### 1. 主题更新

我在 [博客折腾记：使用 Travis CI 自动部署](http://xiang578.com/2018/05/28/use-travis-ci-to-auto-update/) 中提到将主题以 modules 的形式加入主仓库。而且现在使用的主题 git 仓库是我自己 fork 的，也有一些修改。几个天之前，hexo-theme-even 的 master 接受 [feat: add LaTeX support by JieJiSS · Pull Request #236 ](https://github.com/ahonn/hexo-theme-even/pull/236) ，完成对  LaTeX 公式的支持。所以，我需要将使用的代码和最新的代码合并。

这里使用的是 github Pull request 功能。在你自己 fork 的仓库的网页上点击 `new pull request`，然后按照下图修改。就会生成一个新的  Pull request 。
![-w1009](/file/15582362469640.jpg)

而且，如果你没有修改过原来的代码，PR 能自动合并。不过由于我对代码做了一些修改，会产生一些冲突，需要手动解决冲突（这里推荐使用 VS code）。出现下图的情况即成功合并两个库。
![-w1046](/file/15582366459115.jpg)

完成 PR 后，进入你站点下面的对应主题目录，使用 `git checkout master` 切换到主题的 master 分支，使用 `git pull origin master` 拉取最新的代码。回退到站点目录下，利用 `git add` 更新。

### 2. 迁移博客到腾讯云COS

利用腾讯云存储博客的静态文件，并配合使用 CDN 可以加快国内的访问速度。参考 [Hexo博客迁移之旅（Coding到腾讯云COS）+ Travis CI持续集成 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000018752657?utm_source=tag-newest) 以及 [如何在腾讯云COS部署HEXO博客 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1185253) 。

记录两个我遇到的坑。

#### 新的域名解析

完成 COS 配置后，需要将博客域名解析到腾讯提供CDN节点上的地址。

#### 添加持续集成自动发布到COS（Travis CI）

为了发布到 COS，站点的 `_config.yml` 会添加下面的代码。

```yml
 deploy:
- type: cos
  secretId: XXX_ID
  secretKey: XXX_KEY
  appId: 1252086360
  bucket: blog-1252086360
  region: ap-shanghai
```
其中出现的 secretId 以及 secretKey 是私钥，不要在公开仓库展示。通过Travis-ci 中添加 Environment Variables 解决。

很多教程里，他们的 `_config.yml` 不会出现 secretId 和 secretKey 这两行，取而代之的是让你在 `.travis.yml` 添加几行。

```
script 
- hexo d
env:
 global:
   - secretId: ${secretId} # Environment Variables 中配置
   - secretKey: ${secretKey} # Environment Variables 中配置
```
按照这样设置，build 时，出现错误提示如下：

```
{ error:
   { Code: 'InvalidAccessKeyId',
     Message: 'The access key Id format you provided is invalid.',
     Resource:
      'blog-1252086360.cos.ap-shanghai.myqcloud.com/2012/01/23/2011/index.html',
     RequestId: 'NWNlMDU3NzlfNWI5ZDA4MDlfNWVlMF81ZWUzNTg=',
     TraceId:
      'OGVmYzZiMmQzYjA2OWNhODk0NTRkMTBiOWVmMDAxODc0OWRkZjk0ZDM1NmI1M2E2MTRlY2MzZDhmNmI5MWI1OTQyYWVlY2QwZTk2MDVmZDQ3MmI2Y2I4ZmI5ZmM4ODFjMDU3YThkNThjZmQ1NWVkMGY2ZDBiNGM1YTEyNGIzMGM=' },
  statusCode: 403,
  headers:
   { 'content-type': 'application/xml',
     'content-length': '513',
     connection: 'keep-alive',
     date: 'Sat, 18 May 2019 19:05:29 GMT',
     server: 'tencent-cos',
     'x-cos-request-id': 'NWNlMDU3NzlfNWI5ZDA4MDlfNWVlMF81ZWUzNTg=',
     'x-cos-trace-id':
      'OGVmYzZiMmQzYjA2OWNhODk0NTRkMTBiOWVmMDAxODc0OWRkZjk0ZDM1NmI1M2E2MTRlY2MzZDhmNmI5MWI1OTQyYWVlY2QwZTk2MDVmZDQ3MmI2Y2I4ZmI5ZmM4ODFjMDU3YThkNThjZmQ1NWVkMGY2ZDBiNGM1YTEyNGIzMGM=' } }
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
TypeError: Cannot read property 'statusCode' of undefined
    at uploadFileToCOS.catch.then.data (/home/travis/build/xiang578/xiang578.github.io/node_modules/hexo-deployer-cos/lib/deployer.js:42:16)
    at process._tickCallback (internal/process/next_tick.js:68:7)
```

出现这个问题是 `hexo -d` 时，_config.yml 无法获得环境变量 secretId 和 secretKey 的。会导致没有秘钥。

参考 [使用 Travis CI 部署你的 Hexo 博客 - 知乎](https://zhuanlan.zhihu.com/p/37014376) ，在 .trvis.yml 文件的 `hexo d` 命令前，加入下面两行即可解决。

```
- sed -i "s~XXX_ID~${secretId}~" _config.yml
- sed -i "s~XXX_KEY~${secretKey}~" _config.yml
```
之后build 时，会自动利用环境变量中 secretId 和 secretKey 的值替换 `_config.yml ` 文件缺省的值。

最后提供我的两份配置文件给大家参考：[_config.yml](https://github.com/xiang578/xiang578.github.io/blob/hexo/_config.yml)、[.travis.yml](https://github.com/xiang578/xiang578.github.io/blob/hexo/.travis.yml)。

### 3. 百度收录

之前，我一直将博客的静态文件存储在 github 的项目中，也使用插件生成 [baidusitemap](https://xiang578.com/baidusitemap.xml) 文件。但是由于一些不为人知的秘密，百度的爬虫实际上无法爬取 github 上的资源，导致博客最新的文章没有被收录到百度中。

而且从百度提供的抓取诊断上来看，配置腾讯云 COS 后，百度的爬虫依然访问的是 github 上的仓库。

![-w558](/file/15582343082714.jpg)

一顿搜索之后，找到一个主动提交 hexo 博客链接至百度的插件 [huiwang/hexo-baidu-url-submit](https://github.com/huiwang/hexo-baidu-url-submit)。

参考 [Hexo插件之百度主动提交链接 | 王辉的博客](https://hui-wang.info/2016/10/23/Hexo%E6%8F%92%E4%BB%B6%E4%B9%8B%E7%99%BE%E5%BA%A6%E4%B8%BB%E5%8A%A8%E6%8F%90%E4%BA%A4%E9%93%BE%E6%8E%A5/) 以及 [Hexo百度主动提交链接 - 简书](https://www.jianshu.com/p/f37452d4978e) 完成配置。

- 安装插件 `cnpm install hexo-baidu-url-submit --save`
- 修改根目录下面的 `config.yml` 文件，配置 baidu_url_submit 和 deploy。

```
baidu_url_submit:
  count: 100 ## 比如3，代表提交最新的三个链接
  host: xiang578.com ## 在百度站长平台中注册的域名
  token: your_token ## 请注意这是您的秘钥， 请不要发布在公众仓库里!
  path: baidu_urls.txt ## 文本文档的地址， 新链接会保存在此文本文档里

deploy:
- type: cos
  secretId: XXX_ID
  secretKey: XXX_KEY
  appId: 1252086360
  bucket: blog-1252086360
  region: ap-shanghai
- type: baidu_url_submitter
```

上面的代码中出现一个 token，由于这是一个私有的，不能出现在 github 公开的仓库中。所以也需要 Travis-ci 中添加 Environment Variables 解决。和前文提到相同，在 `.travis.yml` 中添加 `- sed -i "s~your_token~${BD_TOKEN}~" _config.yml` 解决私钥问题。

最终在 travis-ci 中发现下面的日志即配置成功。另外一点，百度的站长平台的数据不能及时展示我们提交后的结果，需要耐心等待。

![-w866](/file/15582352091163.jpg)
