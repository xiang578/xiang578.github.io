---
title: (FTRL)Follow The Regularized Leader
date: 2019-12-16 20:48:06
tags: 
categories: 机器学习
---

> FTRL 经常和在线学习系统一起提起。常规的优化方法是基于 batch 数据进行训练



## 基础知识

- 次梯度：对于 L1 正则在 $x=0$ 处不可导的情况，使用次梯度下降来解决。次梯度对应一个集合 $\{v: v(x-x_t) \le f(x)-f(x_t)\}$，集合中的任意一个元素都能被当成次梯度。对于 L1 正则来说，非零点梯度是 1 或 -1，所以 $x=0$ 处的次梯度可以取 $[-1, 1]$ 范围之内任意一个数。

## FTL

FTL(Follow The Leader) 算法：每次找到让之前所有损失函数之和最小的参数。

$$W=argmin_W \sum^t_{i=1}F_i(W)$$

FTRL 中的 R 是 Regularized，可以很容易猜出来在 FTL 的基础上加正则项。

$$W=argmin_W \sum^t_{i=1}F_i(W) + R(W)$$


## 代理函数

FTRL 的损失函数直接很难求解，一般需要引入一个代理损失函数 $h(w)$。代理损失函数需要选择比较容易求解析解以及求出来的解和优化原函数得到的解差距不能太大。

我们通过两个解之间的距离 Regret 来衡量效果：

$$
\begin{array}{c}{w_{t}=\operatorname{argmin}_{w} h_{t-1}(w)} \\ {\text {Regret}_{t}=\sum_{t=1}^{T} f_{t}\left(w_{t}\right)-\sum_{t=1}^{T} f_{t}\left(w^{*}\right)}\end{array}
$$

其中 $w^{*}$ 是直接优化 FTRL 算法得到的参数。当距离满足 $\lim _{t \rightarrow \infty} \frac{\text {Regret}_{t}}{t}=0$，损失函数认为是有效的。简单描述一下，随着训练样本的增加，两个优化目标优化出来的参数效果越接近。


${W_{t+1}=argmin_w\{ G^{(1:t)}W + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 \}}$
${w_{t+1}=argmin_w\{ g^{(1:t)}w + \frac{1}{2} \sum_{s=1}^t \sigma_s \lVert w - w_s \rVert ^2   + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 \}}$

${F(w)=  g^{(1:t)}w + \frac{1}{2} \sum_{s=1}^t \sigma_s \lVert w - w_s \rVert ^2   + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 }$
${F(w)=  g^{(1:t)}w + \frac{1}{2} \sum_{s=1}^t \sigma_s ( w^Tw - 2w^Tw_s + w_s^Tw_s)   + \lambda_1 \lVert W \rVert_1 + \frac{1}{2} \lambda_2 \lVert W \rVert^2 }$

${F(w)=  (g^{(1:t)} - \sum_{s=1}^t \sigma_s w_s)w + \frac{1}{2} (\sum_{s=1}^t \sigma_s + \lambda_2) w^Tw   + \lambda_1 \lVert W \rVert_1 + const }$

${F(w)=  z_t^Tw + \frac{1}{2} (\frac{1}{\eta _t} + \lambda_2) w^Tw   + \lambda_1 \lVert W \rVert_1 + const }$

${z_{t-1}=g^{(1:t-1)} - \sum_{s=1}^{t-1} \sigma_s w_s}$

${z_t + (\frac{1}{\eta _t} + \lambda_2) w + \lambda_1 \partial \lvert W \rvert = 0}$

w  和 z 异号时，等式成立

${\partial \lvert W \rvert = 0, -1 < w < 1}$
${\partial \lvert W \rvert = 1,  w > 1}$
${\partial \lvert W \rvert = -1, w < -1}$

当 ${  z_t  > \lambda_1}$ 时，${w_i < 0}$ , ${w_i = \frac{- z_t + \lambda_1 }{\frac{1}{\eta _t} + \lambda_2 }}$
当 ${  z_t < - \lambda_1}$ 时，${w_i > 0}$ , ${w_i = \frac{- z_t - \lambda_1 }{\frac{1}{\eta _t} + \lambda_2 }}$
当 ${ \lvert z_t \rvert < \lambda_1}$ 时，当且仅当 ${w_i=0}$ 成立

## FTRL 和 SGD 的关系

${W^{t+1}=W^t - \eta _tg_t}$
${W^{t+1}=argmin_w\{ G^{(1:t)}W + \lambda_1 \lVert W \rVert_1 +\lambda_2 \frac{1}{2} \lVert W \rVert \}}$
${\sum^t_{s=1}\sigma _s= \frac{1}{\eta _t}}$
${W^{t+1}=argmin_w\{ \sum_t^{s=1}g_sW + \frac{1}{2} \sum^t_{s=1}\sigma _s\lVert W - W_s \rVert_2^2 \}}$

${\frac{\partial f(w)}{\partial w} = \sum^t_{s=1}g_s +  \sum^t_{s=1}\sigma _s( W - W_s )}$

${\sum^t_{s=1}g_s +  \sum^t_{s=1}\sigma _s( W^{t+1} - W_s ) = 0}$

${(\sum^t_{s=1}\sigma _s) W^{t+1} = \sum^t_{s=1}\sigma _s W^{s} -  \sum^t_{s=1}g_s}$

${\frac{1}{\eta _t} W^{t+1} = \sum^t_{s=1}\sigma _s W^{s} -  \sum^t_{s=1}g_s}$

${\frac{1}{\eta _{t-1}} W^{t} = \sum^{t-1}_{s=1}\sigma _s W^{s} -  \sum^{t-1}_{s=1}g_s}$

${\frac{1}{\eta _t} W^{t+1} - \frac{1}{\eta _{t-1}} W^{t} = (\frac{1}{\eta _t} - \frac{1}{\eta _{t-1}}) W_t - g_t}$

 ${W_{t+1} = W_t - \eta_t g_t}$


## 例：FM 使用 FTRL 优化

## Reference

- [Online Learning算法理论与实践 - 美团技术团队](https://tech.meituan.com/2016/04/21/online-learning.html)

