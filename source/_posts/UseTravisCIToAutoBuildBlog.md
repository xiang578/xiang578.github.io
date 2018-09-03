---
title: 使用 Travis CI 自动部署博客
date: 2018-09-04 07:05:50
tags: [hexo,blog,github,travis-ci]
categories: 程序园
---

之前一周，都在接受公司的项目开发培训，了解公司的项目开发全流程。其中有一点是服务的稳定性。不知道为什么，前几天自己的博客崩溃了，输入域名只能看到 404 页面。当时以为是 Travis CI 的原因，所以进行了全面的一次排查。最终发现问题在 Github Pages 的 Custom domain 上。具体的问题表现是：通过 Travis CI 推送博客静态文件到仓库中的 master 后，下图框中的域名就会变成空的，导致无法访问。解决方法也很简单，在源文件的 source 目录下创建一个 CNAME 文件，写上你自己的域名。

![-w768](7xkpe5.com1.z0.glb.clouddn.com/15358143289885.jpg)

## Travis CI

其实看一眼就应该知道，我的博客是基于 hexo 搭建的，文件托管在 github 仓库中。不过，按照之前的设想博客应该在 Coding 中也有一份备份。后来由于一些原因，在利用 hexo 生成静态文件之后，自动推送到 Coding 上的命令不起作用。自己也没有时间去排查问题，所以最近访问速度有点慢。

传统的 hexo 博客更新过程是：在完成写作之后，利用命令行调用 `hexo g && hexo d` 来生成静态博客文件以及并推送到远端的仓库中。这种方法会产生三个痛点：
1. 每一次修改源文件后都需要重新生成一边静态文件，当大量修改时，步骤就变得繁琐且无趣。
2. 生成文件依赖电脑中的 hexo 和 node.js 环境，不方便在外出时临时写或修改博客。
3. 博客源文件没有自动的备份功能，不符合安全原则。

Travis CI 是一种持续集成开发所使用的工具，在写作过程中引入他可以解决上面我提到的痛点。Travis CI 具体的含义我也不是很清楚，直接介绍我是怎么使用的。和大部分人一样，这个博客的静态文件保存在 github 的 xiang578.github.io 仓库 master 分支中。但是，我还创建了一个新的分支 hexo，用来保存博客源文件。每一次修改博客源文件之后，我不在本地生成静态文件，而是利用 git 命令，将所有的修改内容推送到仓库中的 hexo 分支。Travis CI 服务监听到新的 push 时，会根据你的配置将 git 仓库拉倒他的服务器上，编译源文件成为静态文件，并推送生成的文件到指定仓库的指定分支中。而且，如果编译静态文件失败，他也会通过邮件通知你结果。

![编译成功截图](7xkpe5.com1.z0.glb.clouddn.com/15359362837525.jpg)


## 流程

1. 将 github 上存放静态博客源文件的仓库拉下来，利用 `git checkout -b hexo` 创建并进入新的分支，删除分支内所有的文件。
2. 将博客源文件复制到第一步中的文件夹中。
3. 添加一个 `.travis.yml` 文件，文件内容可以参考下一节 Travis-ci 配置文件。
4. https://travis-ci.org/ 提供免费的持续集成服务，可以通过 github 登入，直接选择需要管理相关的项目。
5. 第一次将源文件上传到 github 时，可能会遇到问题。因为 themes/xxx 文件夹也是一个git仓库。可以利用 `git submodule add` 命令添加一个依赖，来解决这 个问题。

## Travis-ci 配置文件

```
language: node_js
node_js:
- 9.11.1
cache:
  directories:
  - node_modules
before_install:
- export TZ='Asia/Shanghai'
- npm install hexo-cli -g
install:
- npm install
script:
- hexo clean
- hexo generate
after_script:
  -  git clone https://${GH_REF} .deploy_git  # GH_REF是最下面配置的仓库地址
  - cd .deploy_git
  - git checkout master
  - cd ../
  - mv .deploy_git/.git/ ./public/ 
  - cd ./public
  - git config user.name "xiang578"
  - git config user.email "xiang578@foxmail.com"
  - git add .
  # - git commit -m "Deploy at $(date +"%Y-%m-%d %T")"
  - git commit -m "Travis CI Auto Builder at `date +"%Y-%m-%d %H:%M"`"
  # Github Pages
  - git push --force --quiet "https://${CI_TOKEN}@${GH_REF}" master:master 
  # Coding Pages
  # - git push --force --quiet "https://xiang578:${Coding_TOKEN}@${CO_REF}" master:master

branches:
  only:
  - hexo

env:
 global:
   # Github Pages
   - GH_REF: github.com/xiang578/xiang578.github.io
   # Coding Pages
   # - CO_REF: git.coding.net/xiang578/xiang578.git
```

## hexo 两个错误

在这一次的过程中，又遇到了两个本地编译 hexo 的错误，一同记录一下。错误表现如下：

```shell
ERROR Plugin load failed: hexo-renderer-sass
Error: Cannot find module 'node-sass'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo-renderer-sass/lib/renderer.js:4:12)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo/lib/hexo/index.js:219:21)
    at /Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo-renderer-sass/index.js:4:20
    at fs.readFile.then.script (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo/lib/hexo/index.js:232:12)
    at tryCatcher (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:512:31)
    at Promise._settlePromise (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:569:18)
    at Promise._settlePromise0 (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:614:10)
    at Promise._settlePromises (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:693:18)
    at Promise._fulfill (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:638:18)
    at Promise._resolveCallback (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:432:57)
    at Promise._settlePromiseFromHandler (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:524:17)
ERROR Plugin load failed: hexo-renderer-scss
Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (64)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v4.8.3
    at module.exports (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo-renderer-scss/node_modules/node-sass/lib/binding.js:13:13)
    at Object.<anonymous> (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo-renderer-scss/node_modules/node-sass/lib/index.js:14:35)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo-renderer-scss/lib/renderer.js:1:76)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo/lib/hexo/index.js:219:21)
    at /Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo-renderer-scss/index.js:1:81
    at fs.readFile.then.script (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/hexo/lib/hexo/index.js:232:12)
    at tryCatcher (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:512:31)
    at Promise._settlePromise (/Users/didi/Documents/Personal/xiang578.github.io/node_modules/bluebird/js/release/promise.js:569:18)
```

大概总结是下载两个插件时，出现错误。网上的建议是修改 npm 的源地址为淘宝的镜像，并且重新下载这两个包。

```shell
sudo npm config set registry https://registry.npm.taobao.org
npm install hexo-renderer-sass --save
npm install hexo-renderer-scss --save
```



## Reference
- [用TravisCI持续集成自动部署Hexo博客的个人实践 - CSDN博客](https://blog.csdn.net/qq_23079443/article/details/79015225)
- [关于 git-submodule 的一些基本操作 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000009928515)
- [安装 npm install hexo-renderer-sass --save 出错，有什么办法没 - V2EX](https://www.v2ex.com/t/260832)
- [hexo 发布之后 gitpage 自定义域名失效 - CSDN博客](https://blog.csdn.net/xs20691718/article/details/81873921)

## ChangeLog
- 180904：完成初稿






