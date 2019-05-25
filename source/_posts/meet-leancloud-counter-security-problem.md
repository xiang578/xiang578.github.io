---
title: 博客折腾记：hexo-leancloud-counter-security 与标题中的引号冲突
date: 2019-05-25 21:21:14
tags:  [blog, hack, hexo]
categories: 站务
---

昨天按照 [hexo-theme-next/LEANCLOUD-COUNTER-SECURITY.md at master · theme-next/hexo-theme-next](https://github.com/theme-next/hexo-theme-next/blob/master/docs/LEANCLOUD-COUNTER-SECURITY.md) 这个文档配置博客阅读次数时，遇到 `hexo-leancloud-counter-security` 插件的一个冲突。

完成配置使用 `hexo -d` 时，终端中出现下面的错误提示：

 ```shell
 ATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
SyntaxError: Unexpected token h in JSON at position 30
    at JSON.parse (<anonymous>)
    at /Users/didi/Documents/personal/xiang578.github.io/node_modules/hexo-leancloud-counter-security/index.js:92:42
    at arrayEach (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_lodash@4.17.11@lodash/lodash.js:516:11)
    at Function.forEach (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_lodash@4.17.11@lodash/lodash.js:9344:14)
    at Hexo._callee$ (/Users/didi/Documents/personal/xiang578.github.io/node_modules/hexo-leancloud-counter-security/index.js:83:27)
    at tryCatch (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js:62:40)
    at Generator.invoke [as _invoke] (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js:296:22)
    at Generator.prototype.(anonymous function) [as next] (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js:114:21)
    at step (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js:17:30)
    at /Users/didi/Documents/personal/xiang578.github.io/node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js:28:13
    at process._tickCallback (internal/process/next_tick.js:68:7)
 ```
 
 看提示貌似是利用 Json 解析字符串的时候出现问题。打开  `node_modules/hexo-leancloud-counter-security/index.js:92`，对应出现一个解析 JSON的：
 
 ```js
 y = JSON.parse(memoData[memoIdx].substring(0, memoData[memoIdx].length - 1));
 ```
 
 js 没有怎么接触过，不知道能不能单步调试之类的，只好祭出输出调试大法，加上两个输出：
 
 ```js
console.log(memoIdx)
console.log(memoData[memoIdx])
y = JSON.parse(memoData[memoIdx].substring(0,memoData[memoIdx].length - 1));
 ```
 
 然后再执行 `hexo -d` 命令，命令行输出为：
```shell
28
{"title":"System.out.println("hello world!");","url":"/post/hello-world.html"},
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
SyntaxError: Unexpected token h in JSON at position 30
    at JSON.parse (<anonymous>)
    at /Users/didi/Documents/personal/xiang578.github.io/node_modules/hexo-leancloud-counter-security/index.js:92:42
    at arrayEach (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_lodash@4.17.11@lodash/lodash.js:516:11)
    at Function.forEach (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_lodash@4.17.11@lodash/lodash.js:9344:14)
    at Hexo._callee$ (/Users/didi/Documents/personal/xiang578.github.io/node_modules/hexo-leancloud-counter-security/index.js:83:27)
    at tryCatch (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js:62:40)
    at Generator.invoke [as _invoke] (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js:296:22)
    at Generator.prototype.(anonymous function) [as next] (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js:114:21)
    at step (/Users/didi/Documents/personal/xiang578.github.io/node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js:17:30)
    at /Users/didi/Documents/personal/xiang578.github.io/node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js:28:13
    at process._tickCallback (internal/process/next_tick.js:68:7)
```

JSON 在解析字符串`{"title":"System.out.println("hello world!");","url":"/post/hello-world.html"}` 时出现错误。对应的正是之前写的一篇名为 `System.out.println("hello world!");` 的文章，由于 JSON 格式中字符串是需要用`""` 修饰，导致JSON 中出现了一个  `"title":"System.out.println("hello world!");"` key-value 组合。然而实际上 JSON 只会将 `"System.out.println("h` 解析成 value，之后出现的 `h` 被当成非法字符报错。

 定位问题之后，暂时修改文章的标题为  [hello world! | 算法花园](https://xiang578.com/post/hello-world.html)，绕过部署失败。