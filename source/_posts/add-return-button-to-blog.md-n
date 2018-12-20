---
title: 为博客添加返回顶部按钮
date: 2017-02-11 22:16:49
tags: [wordpress,blog]
categories: 程序园
---

> 适用于WordPress

由于主题没有自带的返回顶部按钮，所以我一直在寻找一种解决方案。之前使用的是wordpress插件提供的返回顶部按钮，后来在网上乱逛，发现有Xnces – 衔铁部落的返回顶部按钮非常的酷炫，正是我要寻找的。于是，我在那个博客下留言询问制作方法。
前几天，看到那个博客上出现了一篇文章[-本博客的返回顶部效果](https://www.xnces.com/back-to-top.html)。
按照上面的方法，折腾一会儿，我也制作出来了，特地记录一下。

1. 首先，先加载一下环境。在后台`functions.php`中找到`ms_scripts()`函数，添加`wp_enqueue_script( 'jquery' );`调用wordpress默认的JQuery文件。

2. 我将这个效果有关的js代码放在了主题目录下新建的`themes.js`文件中。所以在上面的函数中添加下面两句话导入这个文件`wp_register_script( 'themes_js', THEMEPATH  . '/themes.js',array());`和`wp_enqueue_script( 'themes_js' );`
3. CSS代码我直接加在了主题`style.css`中。

4. 重新打开网站就能看到效果了。

`themes.js`文件中代码如下
```javascript
var bigfa_scroll = {
    drawCircle: function(id, percentage, color) {
        var width = jQuery(id).width();
        var height = jQuery(id).height();
        var radius = parseInt(width / 2.20);
        var position = width;
        var positionBy2 = position / 2;
        var bg = jQuery(id)[0];
        id = id.split("#");
        var ctx = bg.getContext("2d");
        var imd = null;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineCap = "square";
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3;
        imd = ctx.getImageData(0, 0, position, position);
        var draw = function(current, ctxPass) {
            ctxPass.putImageData(imd, 0, 0);
            ctxPass.beginPath();
            ctxPass.arc(positionBy2, positionBy2, radius, -(quart), ((circ) * current) - quart, false);
            ctxPass.stroke();
        }
        draw(percentage / 100, ctx);
    },
    backToTop: function($this) {
        $this.click(function() {
            jQuery("body,html").animate({
                scrollTop: 0
            },
            800);
            return false;
        });
    },
    scrollHook: function($this, color) {
        color = color ? color: "#000000";
        $this.scroll(function() {
            var docHeight = (jQuery(document).height() - jQuery(window).height()),
            $windowObj = $this,
            $per = jQuery(".per"),
            percentage = 0;
            defaultScroll = $windowObj.scrollTop();
            percentage = parseInt((defaultScroll / docHeight) * 100);
            var backToTop = jQuery("#backtoTop");
            if (backToTop.length > 0) {
                if ($windowObj.scrollTop() > 200) {
                    backToTop.addClass("button--show");
                } else {
                    backToTop.removeClass("button--show");
                }
                $per.attr("data-percent", percentage);
                bigfa_scroll.drawCircle("#backtoTopCanvas", percentage, color);
            }

        });
    }
}

jQuery(document).ready(function() {
    jQuery("body").append('<div id="backtoTop" data-action="gototop"><canvas id="backtoTopCanvas" width="48" height="48"></canvas><div class="per"></div></div>');
    var T = bigfa_scroll;
    T.backToTop(jQuery("#backtoTop"));
    T.scrollHook(jQuery(window), "#555555");
});
```

CSS文件要添加的代码
```css
#backtoTop{
    background-color:#eee;
    border-radius:100%;
    bottom:10%;height:48px;
    position:fixed;
    right:-100px;
    width:48px;
    transition:0.5s;
    -webkit-transition:0.5s
}

#backtoTop.button--show{
    right:10px
}

.per{
    font-size:16px;
    height:48px;
    line-height:48px;
    position:absolute;
    text-align:center;
    top:0;
    width:48px;
    color:#555;
    cursor:pointer
}
.per:before{
    content:attr(data-percent)
}
.per:hover:before{
    content:"↑";font-size:20px
}
```

