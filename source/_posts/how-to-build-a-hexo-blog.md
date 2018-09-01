title: 从零开始利用 hexo + Github/Coding 搭建个人博客
date: 2015-08-15 19:43:17
tags: [hexo,blog]
categories: 程序园
---

> 更新历史
> - 2015年8月15日：完成初稿
> - 2017年10月05日：添加新主题 `Even` 相关内容
> - 2017年10月11日：文章阅读次数统计
> - 2018年1月19日： 修改页脚
> - 2018年3月26日：双更新

-------

前几天自己在电脑上装Linux时，不小心把博客的数据文件夹给删了。无奈重新安装，同时写下这篇备忘录以防万一。当然，经历这个失误，看来也要利用网盘对博客的一些文件进行备份。

<!-- more -->

### 安装git和Node.js

 就是正常的在他们官网上下载最新版本，然后再点几下鼠标安装到你的电脑。不过，也许后面安装hexo时要设置node.js的环境变量，具体过程也可以百度到。

### 安装hexo
打开gitbash（可能需要以管理员身份运行），利用npm命令安装。

```bash
$ npm install -g hexo
```

安装成功后大概会在shell中出现下面这样的信息
![](http://7xkpe5.com1.z0.glb.clouddn.com/安装hexo.jpg)

### 部署hexo
比如我要安装在E盘hexo文件夹内，可以在gitbash中使用下面命令进行。如果你想明白这些命令是什么意思，可以百度cmd指令。（如无特殊说明，下面有的命令都在`/E/hexo`中使用gitbash完成）

```
$ cd /E/hexo
$ npm install hexo init
```

安装成功后大概会在shell中出现下面这样的信息
![](http://7xkpe5.com1.z0.glb.clouddn.com/部署hexo.jpg)

### 安装依赖包
基础功能包，采用下面的命令安装

```
$ npm install
```

deploy git功能相关插件，网上发布时用的……

```
 $ npm install hexo-deployer-git --save
```

附加功能有sitemap和feed插件，如果你不懂这些也没有必要安装

```
$ npm install hexo-generator-sitemap
$ npm install hexo-generator-feed
```

### 第一次本地查看博客
执行以下命令，然后到浏览器输入localhost:4000查看。

```
$ hexo g
$ hexo s
```

默认大概是下面的样子
![](http://7xkpe5.com1.z0.glb.clouddn.com/第一次本地查看.jpg)

### github相关部署和ssh设置
我的这些功能还可以用，所以没有重新设置。故不能详细论述，你可从下面参考链接中获得方法。

### 发布功能部署
编辑站点的`_config.yml`文件。你在部署时，要把下面的xiang578都换成你的账号名。

```
  deploy: 
  type: git
  repository: https://github.com/xiang578/xiang578.github.io.git
  branch: master
```

执行下列指令即可完成部署，中间需要输入github用户名和密码。

```
hexo generate hexo deploy
```

### 安装主题（以NexT为例）
使用gitbash输入下面指令

```
$ cd your-hexo-site
$ git clone https://github.com/iissnan/hexo-theme-next themes/next
```

### 启用主题
修改Hexo目录下的config.yml配置文件中的theme属性，将其设置为next。运行`hexo g`和`hexo s`，并访问 http://localhost:4000，确保站点正确运行。

### 主题优化
参考相关主题的说明文档进行优化，或者访问使用相同主题的博客，查看博主相关文章。或者速成css和html自己改造。

### next主题404页面改造
`E:\hexo\public`中创建404.html文件，复制下面代码，并保存，在配置文件中启用相关功能。

```HTML
<!DOCTYPE HTML>
<html>
<head>
	<title>404 - arao'blog</title>
	<meta name="description" content="404错误，页面不存在！">
	<meta http-equiv="content-type" content="text/html;charset=utf-8;"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="robots" content="all" />
	<meta name="robots" content="index,follow"/>
</head>
<body>
	<script type="text/javascript" src="http://qzonestyle.gtimg.cn/qzone_v6/lostchild/search_children.js" charset="utf-8"></script>
</body>
</html>
```
    
效果如下：
![](http://7xkpe5.com1.z0.glb.clouddn.com/404.jpg)

### 多说评论改造 
参考[ 动动手指，给你的Hexo站点添加最近访客（多说篇）](http://www.arao.me/2015/hexo-next-theme-optimize-duoshuo/)

效果如下：![](http://7xkpe5.com1.z0.glb.clouddn.com/多说.jpg)

### 域名绑定
域名可以在[万网](http://wanwang.aliyun.com/)上购买，大体上流程和淘宝购物差不多。现在大部分域名第一年价格比较便宜，续费也可以接受。当然如果你非要买`.集团`这种上万的域名，那么请联系我，土豪做个朋友吧！域名是有兴趣可以选择购买，采用默认的`github.io`也不错。

首先在`E:hexo\public`文件夹下创建名为`CNAME`文件（不要扩展名）接着输入你的域名。比如：

```
xiang578.top
www.xiang578.top
```

接着在万网的域名控制台增加如下图所示的两个解析
![](http://7xkpe5.com1.z0.glb.clouddn.com/域名设置.jpg)

### 为 next 主题添加分类
参考知乎[hexo下新建页面下如何放多个文章？](https://www.zhihu.com/question/33324071)

### 去除 Coding Pages 等待跳转页面

根据常识，只需要修改主题下面跟页脚相关的代码即可。比如 `Even` 主题中相关的代码在 `themes/even/layout/_partial/footer.swig`。

然后在这个文件中添加如下的代码即可。

```html
<span class="hosted-by-coding-pages">
    Hosted by <a href="https://pages.coding.me" style="font-weight: bold">Coding Pages</a>
  </span>  
```
最后，在项目的 Pages 服务中勾选`已放置 Hosted by Coding Pages`，等待审核通过就去除等待跳转页面。

### 修改Even主题的首页

不知道为什么，我不是很喜欢首页那种标题和文章摘要的形式。所以，决定把首页改造成归档页面的形式。

这步改造的思路是将生成归档页面相关的代码复制到生成首页的模板上去。在 `themes/even/layout` 文件夹里面修改`index.swig`，具体如下：


```
{% extends "_layout.swig" %}
{% import '_macro/post.swig' as post_template %}

{% block title %} {{ config.title }} {% endblock %}

{% block content %}
  <section id="posts" class="posts">
    <section id="archive" class="archive">
    {% if not page.prev %}
        <div class="archive-title">
          <span class="archive-post-counter">
            {{ _p("counter.archives", site.posts.length) }}
          </span>
        </div>
    {% endif %}

    {% for post in page.posts %}
        {% set year %}
        {% set post.year = date(post.date, 'YYYY') %}

        {% if post.year !== year %}
          {% set year = post.year %}
          <div class="collection-title">
            <h2 class="archive-year">{{ year }}</h2>
          </div>
        {% endif %}

      <div class="archive-post">
        <span class="archive-post-time">
            {{ date(post.date, 'MM-DD') }}
        </span>
        <span class="archive-post-title">
          <a href="{{ url_for(post.path) }}" class="archive-post-link">
            {{ post.title }}
          </a>
        </span>
      </div>
    {% endfor %}
    </section>
  </section>

  {% include "_partial/pagination.swig" %}
{% endblock %}
```

如果需要在首页显示所有的文章，可以参考 [如何设置页面文章的篇数？](http://theme-next.iissnan.com/faqs.html#setting-page-size) 安装需要的插件，将 `per_page` 设置为0即可解决。

### 添加文章统计
- 参考 [添加文章访问量统计](https://github.com/ahonn/hexo-theme-even/wiki/%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E8%AE%BF%E9%97%AE%E9%87%8F%E7%BB%9F%E8%AE%A1)以及 [leanCloud,实现文章阅读量统计](http://www.joryhe.com/2016-05-29-how_to_create_leancloud_read_Counter.html)
- 自己使用时发现一个问题：每篇文章只有第一次打开时才显示阅读次数，而且计数都为1
    - 参考[Hexo搭建博客系列：（五）Hexo添加不蒜子和LeanCloud统计无标题文章](http://www.jianshu.com/p/702a7aec4d00)中提到的创建 class 需要 `数据条目的默认 ACL 权限` 中选择无限制

### 修改页脚

未修改之前的页脚相关代码(`themes/even/layout/_partial/footer.swig`)

```html
<div class="copyright">
  <span class="hosted-by-coding-pages">
    Hosted by <a href="https://pages.coding.me" style="font-weight: bold">Coding Pages</a>
  </span>
  <span class="division">|</span>
  <span class="theme-info">
    {{ __('footer.theme') }} -
    <a class="theme-link" href="https://github.com/ahonn/hexo-theme-even">Even</a>
  </span>

  <span class="copyright-year">
    {% set current = date(Date.now(), "YYYY") %}
    &copy;
    {% if theme.since and theme.since != current %}
      {{ theme.since }} -
    {% endif %}
    {{ current }}

    <span class="heart">
      <i class="iconfont icon-heart"></i>
    </span>
    <span class="author">{{ config.author }}</span>
  </span>
</div>
```

未修改之前的效果

![](http://
7xkpe5.com1.z0.glb.clouddn.com/15163684556026.jpg)

### 双更新

同时在 github 和 coding 上更新，然后根据访问时的 ip 地址跳转到不同的服务上。

下图框中的 a 和 b 为两个库的地址。
![](http://
7xkpe5.com1.z0.glb.clouddn.com/15220743101609.jpg)

github 项目中相关的地址修改
![](http://
7xkpe5.com1.z0.glb.clouddn.com/15220746073007.jpg)

最后，域名解析服务中添加如下的解析方式。
![](http://
7xkpe5.com1.z0.glb.clouddn.com/15220746795739.jpg)

### 自动备份博客相关的源文件


参考博文[自动备份Hexo博客源文件 | Jolson's Blog](http://zhujiegao.com/2015/12/06/automatic-backup/)

-------

大概这样就完成一个博客的安装和部署，接下来你就可以快乐的写博客。




### 参考文章：
- [献给写作者的 Markdown 新手指南](http://www.jianshu.com/p/q81RER) 
- [hexo系列教程：（二）搭建hexo博客](http://zipperary.com/2013/05/28/hexo-guide-2/)
- [hexo官方网站](https://hexo.io/zh-cn/)
- [Hexo 使用中遇到的问题总结](http://blog.csdn.net/wx_962464/article/details/44786929)
- [如何搭建一个独立博客——简明Github Pages与Hexo教程](http://cnfeat.com/2014/05/10/2014-05-11-how-to-build-a-blog/)
- [动动手指，NexT主题与Hexo更搭哦（基础篇）](http://www.arao.me/2015/hexo-next-theme-optimize-base/)
- [从零开始制作 Hexo 主题](http://www.ahonn.me/2016/12/15/create-a-hexo-theme-from-scratch/)
- [Hexo 主题开发指南](http://chensd.com/2016-06/hexo-theme-guide.html?utm_source=tuicool&utm_medium=referral)


