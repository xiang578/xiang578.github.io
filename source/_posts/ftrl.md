---
title: (FTRL) Follow The Regularized Leader
date: 2020-01-03 21:26:06
tags: [google, ml, ftrl, fm]
categories: 机器学习
mathjax: true
---

FTRL 是 Google 提出的一种优化算法。常规的优化方法例如梯度下降、牛顿法等属于批处理算法，每次更新需要对 batch 内的训练样本重新训练一遍。在线学习场景下，我们希望模型迭代速度越快越好。例如用户发生一次点击行为后，模型就能快速进行调整。FTRL 在这个场景中能求解出稀疏化的模型。

## 基础知识

- L1 正则比 L2 正则可以产生更稀疏的解。
- 次梯度：对于 L1 正则在 $x=0$ 处不可导的情况，使用次梯度下降来解决。次梯度对应一个集合 $\{v: v(x-x_t) \le f(x)-f(x_t)\}$，集合中的任意一个元素都能被当成次梯度。以 L1 正则为例，非零处梯度是 1 或 -1，所以 $x=0$ 处的次梯度可以取 $[-1, 1]$ 之内任意一个值。

## FTL

FTL(Follow The Leader) 算法：每次找到让之前所有损失函数之和最小的参数。

$$W=argmin_W \sum^t_{i=1}F_i(W)$$

FTRL 中的 R 是 Regularized，可以很容易猜出来在 FTL 的基础上加正则项。

$$W=argmin_W \sum^t_{i=1}F_i(W) + R(W)$$


## 代理函数

FTRL 的损失函数直接很难求解，一般需要引入一个代理损失函数 $h(w)$。代理损失函数常选择比较容易求解析解以及求出来的解和优化原函数得到的解差距不能太大。

我们通过两个解之间的距离 Regret 来衡量效果：

$$
\begin{array}{c}{w_{t}=\operatorname{argmin}_{w} h_{t-1}(w)} \\ {\text {Regret}_{t}=\sum_{t=1}^{T} f_{t}\left(w_{t}\right)-\sum_{t=1}^{T} f_{t}\left(w^{*}\right)}\end{array}
$$

其中 $w^{*}$ 是直接优化 FTRL 算法得到的参数。当距离满足 $\lim _{t \rightarrow \infty} \frac{\text {Regret}_{t}}{t}=0$，损失函数认为是有效的。其物理意义是，随着训练样本的增加，两个优化目标优化出来的参数效果越接近。

## 推导过程

参数 $w_{t+1}$ 的迭代公式：

$${w_{t+1}=argmin_w\{ g_{(1:t)}w + \frac{1}{2} \sum_{s=1}^t \sigma_s \lVert w - w_s \rVert ^2   + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 \}}$$

其中 $g_{(1:t)}=\sum^{t}_{s=1}g_s$，$g_s$ 为 $f(w_s)$ 的次梯度。参数 $\sum^t_{s=1}\sigma_s=\frac{1}{\eta _t}$，学习率 $\eta _t = \frac{1}{\sqrt{t}}$，随着迭代轮数增加而减少。

展开迭代公式

$${F(w)=  g_{(1:t)}w + \frac{1}{2} \sum_{s=1}^t \sigma_s \lVert w - w_s \rVert ^2   + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 }$$

$${F(w)=  g_{(1:t)}w + \frac{1}{2} \sum_{s=1}^t \sigma_s ( w^Tw - 2w^Tw_s + w_s^Tw_s)   + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 }$$

$${F(w)=  (g_{(1:t)} - \sum_{s=1}^t \sigma_s w_s)w + \frac{1}{2} (\sum_{s=1}^t \sigma_s + \lambda_2) w^Tw   + \lambda_1 \lVert W \rVert_1 + const }$$

$${F(w)=  z_t^Tw + \frac{1}{2} (\frac{1}{\eta _t} + \lambda_2) w^Tw   + \lambda_1 \lVert W \rVert_1 + const }$$

其中 ${z_{t-1}=g^{(1:t-1)} - \sum_{s=1}^{t-1} \sigma_s w_s}$。

对 $F(w)$ 求偏导得到：

$${z_t + (\frac{1}{\eta _t} + \lambda_2) w + \lambda_1 \partial \lvert W \rvert = 0}$$

$w$ 和 $z$ 异号时，等式成立。

根据基础知识里面提到的对于 L1 正则利用偏导数代替无法求解的情况，得到：

$$
\partial|W|=\left\{\begin{array}{ll}{0,} & {\text { if }-1<w<1} \\ {1,} & {\text { if } w>1} \\ {-1,} & {\text { if } w<-1}\end{array}\right.
$$

1. 当 ${  z_t  > \lambda_1}$ 时，${w_i < 0}$ , ${w_i = \frac{- z_t + \lambda_1 }{\frac{1}{\eta _t} + \lambda_2 }}$
2. 当 ${  z_t < - \lambda_1}$ 时，${w_i > 0}$ , ${w_i = \frac{- z_t - \lambda_1 }{\frac{1}{\eta _t} + \lambda_2 }}$
3. 当 ${ \lvert z_t \rvert < \lambda_1}$ 时，当且仅当 ${w_i=0}$ 成立

因此可得：

$$
w_{i}=\left\{\begin{array}{ll}{0,} & {\text { if }\left|z_{i}\right| \leq \lambda_{1}} \\ {\frac{-\left(z_{i}-\text sgn(z_i) \lambda_{1}\right)}{\eta_{t}+\lambda_{2}},} & {\text { if others }}\end{array}\right.
$$

## FTRL 和 SGD 的关系

将 SGD 的迭代公式写成：${W^{t+1}=W^t - \eta _tg_t}$

FTRL 迭代公式为：${W^{t+1}=argmin_w\{ G^{(1:t)}W + \lambda_1 \lVert W \rVert_1 +\lambda_2 \frac{1}{2} \lVert W \rVert \}}$

代入 ${\sum^t_{s=1}\sigma _s= \frac{1}{\eta _t}}$ 到上面的公式中，得到 ${W^{t+1}=argmin_w\{ \sum_t^{s=1}g_sW + \frac{1}{2} \sum^t_{s=1}\sigma _s\lVert W - W_s \rVert_2^2 \}}$

求偏导得到 ${\frac{\partial f(w)}{\partial w} = \sum^t_{s=1}g_s +  \sum^t_{s=1}\sigma _s( W - W_s )}$

令偏导等于 0 ：${\sum^t_{s=1}g_s +  \sum^t_{s=1}\sigma _s( W^{t+1} - W_s ) = 0}$

化简得到：${(\sum^t_{s=1}\sigma _s) W^{t+1} = \sum^t_{s=1}\sigma _s W^{s} -  \sum^t_{s=1}g_s}$

代入 $\sigma$：${\frac{1}{\eta _t} W^{t+1} = \sum^t_{s=1}\sigma _s W^{s} -  \sum^t_{s=1}g_s}$

根据上一个公式得出上一轮的迭代公式：${\frac{1}{\eta _{t-1}} W^{t} = \sum^{t-1}_{s=1}\sigma _s W^{s} -  \sum^{t-1}_{s=1}g_s}$

两式相减：${\frac{1}{\eta _t} W^{t+1} - \frac{1}{\eta _{t-1}} W^{t} = (\frac{1}{\eta _t} - \frac{1}{\eta _{t-1}}) W_t - g_t}$

最终化简得到和 SGD 迭代公式相同的公式：${W_{t+1} = W_t - \eta_t g_t}$

## FTRL 工程化伪代码

引用自论文 [Ad Click Prediction: a View from the Trenches](https://static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/41159.pdf)

下面的伪代码中学习率和前面公式推导时使用的一些不一样： $\eta_{t_{i}}=\frac{\alpha}{\beta+\sqrt{\sum_{s=1}^{t} g_{s_{i}}^{2}}}$。Facebook 在 GBDT + LR 的论文中研究过不同的学习率影响，具体可以参看博文 [Practical Lessons from Predicting Clicks on Ads at Facebook(gbdt + lr) | 算法花园](https://xiang578.com//post/media/gbdt_lr.html#%E5%AD%A6%E4%B9%A0%E7%8E%87%E9%80%89%E6%8B%A9)。

![FTRL](https://media.xiang578.com/15780559628822.jpg)


## 例：FM 使用 FTRL 优化

FM 是工业界常用的机器学习算法，在之前博文 [(FM)Factorization Machines](https://xiang578.com/post/fm.html) 中有简单的介绍。内部的 FTRL+FM 代码没有开源，所以也不好分析。从 [FM+FTRL算法原理以及工程化实现 - 知乎](https://zhuanlan.zhihu.com/p/58508137) 中找了一张 FTRL+FM 的伪代码图片。

![](https://media.xiang578.com/15780576261639.jpg)

## Reference

- [Online Learning算法理论与实践 - 美团技术团队](https://tech.meituan.com/2016/04/21/online-learning.html)
- [FTRL公式推导 - 知乎](https://zhuanlan.zhihu.com/p/32694097)
- [每周一文】Ad Click Prediction: a View from the Trenches(2013)_机器学习,CTR,online_fangqingan_java的专栏-CSDN博客](https://blog.csdn.net/fangqingan_java/article/details/51020653)

