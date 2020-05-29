---
title: All About GBDT (1)
tags: [gdbt, ml]
date: 2020-01-26 14:15:43
categories: 机器学习
mathjax: true
---

GBDT(Gradient Boosting Decision Tree) 从名字上理解包含三个部分：提升、梯度和树。它最早由 Freidman 在 `greedy function approximation ：a gradient boosting machine` 中提出。很多公司线上模型是基于 GBDT+FM 开发的，我们 Leader 甚至认为 GBDT 是传统的机器学习集大成者。断断续续使用 GBDT 一年多后，大胆写一篇有关的文章和大家分享。

## 朴素的想法

假设有一个游戏：给定数据集 ${(x_1,y_1),(x_2,y_2),...,(x_n,y_n)}$，寻找一个模型${\hat y=F(x_i)}$，使得平方损失函数 ${\sum \frac{1}{2}(\hat y_i - y_i)^2}$ 最小。

如果你的朋友提供一个可以使用但是不完美的模型，比如 
$$F(x_1)=0.8,y_1=0.9$$
$$F(x_2)=1.4,y_2=1.3$$
在如何不修改这个模型的参数情况下，提高模型效果？

一个简单的思路是：重新训练一个模型实现 
$$F(x_1)+h(x_1)=y_1$$
$$F(x_2)+h(x_2)=y_2$$
$$...$$
$$F(x_n)+h(x_n)=y_n$$

换一个角度是用模型学习数据 ${(x_1,y_1-F(x_1)),(x_2,y_2-F(x_2)),...,(x_n,y_n-F(x_n))}$。得到新的模型 ${\hat y=F(x_i)+h(x_i)}$。

其中 ${y_i-F(x_i)}$ 的部分被我们称之为残差，即之前的模型没有学习到的部分。重新训练模型 ${h(x)}$正是学习残差。如果多次执行上面的步骤，可以将流程描述成：

$${F_0(x)}$$
$${F_1(x)=F_0(x)+h_1(x)}$$
$${F_2(x)=F_1(x)+h_2(x)}$$
$${...}$$
$${F_t(x)=F_t-1(x)+h_t(x)}$$

即 ${F(x;w)=\sum^T_{t=1}h_t(x;w)}$，这也就是 GBDT 。

## 如何理解 Gradient Boosting Decision Tree ?

Gradient Boosting Decision Tree 简称 GBDT，最早由 Friedman 在论文《Greedy function approximation: a gradient boosting machine》中提出。简单从题目中理解包含三个部分内容：Gradient Descent、Boosting、Decision Tree。

Decision Tree 即决策树，利用超平面对特征空间划分来预测和分类，根据处理的任务不同分成两种：分类树和回归树。在 GBDT 算法中，用到的是 CART 即分类回归树。用数学语言来描述为 ${F=\{f(x)=w_{q(x)}\}}$，完成样本 ${x}$ 到决策树叶子节点 ${q(x)}$ 的映射，并将该叶子节点的权重 ${w_{q(x)}}$ 赋给样本。CART 中每次通过计算 gain 值贪心来进行二分裂。

Boosting 是一种常用的集成学习方法（另外一种是 Bagging）。利用弱学习算法，反复学习，得到一系列弱分类器（留一个问题，为什么不用线性回归做为弱分类器）。然后组合这些弱分类器，构成一个强分类器。上面提到的模型 ${F(x;w)=\sum^T_{t=1}h_t(x)}$ 即是一种 boosting 思路，依次训练多个 CART 树 ${h_i}$，并通过累加这些树得到一个强分类器 ${F(x;w)}$。

## 为什么 GBDT 可行？

在 2 中我提到 GBDT 包括三个部分并且讲述了 Boosting 和 Decison Tree。唯独没有提到 Gradient Descent，GBDT 的理论依据却恰恰和它相关。

回忆一下，Gradient Descent 是一种常用的最小化损失函数 ${L(\theta)}$ 的迭代方法。

- 给定初始值 ${\theta_0}$
- 迭代公式：${\theta ^t = \theta ^{t-1} + \Delta \theta}$
- 将 ${L(\theta ^t)}$ 在 ${\theta ^{t-1}}$ 处进行一阶泰勒展开：${L(\theta ^t)=L(\theta ^{t-1} + \Delta \theta) \approx L(\theta ^{t-1}) + L^\prime(\theta ^{t-1})\Delta \theta}$
- 要使 ${L(\theta ^t) < L(\theta ^{t-1}) }$，取 ${\Delta \theta = -\alpha L^\prime(\theta ^{t-1})}$
- 其中  ${\alpha}$ 是步长，可以通过 line search 确定，但一般直接赋一个很小的数。

在 1 中提到的问题中，损失函数是 MSE ${L(y, F(x))=\frac{1}{2}(y_i - f(x_i))^2}$。

我们的任务是通过调整 ${F(x_1), F(x_2), ..., F(x_n)}$ 最小化 ${J=\sum_i L(y_i, F(x_i))}$。

如果将 ${F(x_i)}$ 当成是参数，并对损失函数求导得到 ${ \frac{\partial J}{\partial F(x_i)} = \frac{\partial \sum_i L(y_i, F(x_i))}{\partial F(x_i)} = \frac{\partial L(y_i, F(x_i))}{\partial F(x_i)} = F(x_i)-y_i}$。

可以发现，在 1 中提到的模型 ${h(x)}$ 学习的残差 ${y_i-F(x_i)}$正好等于负梯度，即 ${y_i-F(x_i)=-\frac{\partial J}{\partial F(x_i)}}$。

所以，参数的梯度下降和函数的梯度下降原理上是一致的：

- ${F_{t+1}(x_i)=F_t(x_i)+h(x_i)=F(x_i)+y_i-F(x_i)=F_t(x_i)-1\frac{\partial J}{\partial F(x_i)}}$
- ${\theta ^t = \theta ^{t-1} + \alpha L^\prime(\theta ^{t-1})}$


## GBDT 算法流程

模型 F 定义为加法模型：

$${F(x;w)=\sum^{M}_{m=1} \alpha_m h_m(x;w_m) = \sum^{M}_{m=1}f_t(x;w_t)}$$
其中，x 为输入样本，h 为分类回归树，w 是分类回归树的参数，${\alpha}$ 是每棵树的权重。

通过最小化损失函数求解最优模型：${F^* = argmin_F \sum^N_{i=1}L(y_i, F(x_i))}$

输入: ${(x_i,y_i),T,L}$

1. 初始化：${f_0(x)}$
2. 对于 ${t = 1 to T}$ ：
    1. 计算负梯度（伪残差）： ${ \tilde{y_i} = -[\frac{\partial L(y_i, F(x_i))}{\partial F(x)}]_{F(x)=F_{m-1}(x)} ,i=1,2,...,N}$
    2. 根据 ${\tilde{y_i}}$ 学习第 m 棵树： ${w^*=argmin_{w} \sum_{i=1}^N(\tilde{y_i} - h_t(x_i;w))^2}$
    3. line searcher 找步长：${\rho^* = argmin_\rho \sum_{i=1}^{N}L(y_i, F_{t-1}(x_i)+\rho h_t(x_i;w^*))}$
    4. 令 ${f_t=\rho^*h_t(x;w*)}$，更新模型：${F_t=F_{t-1}+f_t}$
3. 输出 ${F_T}$

说明：

1. 初始化 ${f_0}$ 方法
    1. 求解损失函数最小
    2. 随机初始化
    3. 训练样本的充分统计量
2. 每一轮拟合负梯度，而不是拟合残差，是为方便之后扩展到其他损失函数。
3. 最小化问题中，如果有解析解，直接带入。否则，利用泰勒二阶展开，Newton Step 得到近似解。

这一篇就先到这里，之后还会分享 GBDT 常用损失函数推导以及 XGboost 相关内容。如果有任何想法，都可以在留言区和我交流。

## Reference

1. 李航, 《统计学习方法》8.4 提升树
2. Freidman，greedy function approximation ：a gradient boosting machine
3. [【19年ML思考笔记】GBDT碎碎念（1）谈回归树的分裂准则 - 知乎](https://zhuanlan.zhihu.com/p/73381835) 
4. [机器学习-一文理解GBDT的原理-20171001 - 知乎](https://zhuanlan.zhihu.com/p/29765582)
5. [GBDT入门详解 - Scorpio.Lu|Blog](https://louisscorpio.github.io/2017/12/13/GBDT%E5%85%A5%E9%97%A8%E8%AF%A6%E8%A7%A3/#)
6. [python - Why Gradient Boosting not working in Linear Regression? - Stack Overflow](https://stackoverflow.com/questions/45409110/why-gradient-boosting-not-working-in-linear-regression)
7. [GBDT基本原理及算法描述 - Y学习使我快乐V的博客 - CSDN博客](https://blog.csdn.net/qq_24519677/article/details/82020863)
8. [GBDT的那些事儿 - 知乎](https://zhuanlan.zhihu.com/p/30711812)


