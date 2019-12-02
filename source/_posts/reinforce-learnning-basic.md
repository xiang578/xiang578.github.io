---
title: 强化学习基础知识
date: 2019-11-21 20:50:36
tags: [algorithm, reinforcementlearning]
categories: 机器学习
mathjax: true
---

这篇博文是李弘毅教授深度强化学习课程相关笔记。

课件下载：[Hung-yi Lee - Deep Reinforcement Learning](http://speech.ee.ntu.edu.tw/~tlkagk/courses_MLDS18.html)

课程视频：[DRL Lecture 1: Policy Gradient (Review) - YouTube](https://www.youtube.com/watch?v=z95ZYgPgXOY&list=PLJV_el3uVTsODxQFgzMzPLa16h6B8kWM_)

## RL 基础

强化学习基本定义：

- Actor：可以感知环境中的状态，通过执行不同的动作得到反馈的奖励，在此基础上进行学习优化。
- Environment：指除 Actor 之外的所有事务，受 Actor 动作影响而改变其状态，并给 Actor 对应的奖励。

一些符号：

- State s 是对环境的描述，其状态空间是 S。
- Action a 是 Actore 的行为描述，其动作空间是 A。
- Policy $\pi(a|s)=P[A_t=a|S_t=s]$ 代表在给定环境状态 s 下 动作 a 的分布。
- Reward ${r(s,a,s^{\prime})}$ 在状态 s 下执行动作 a 后，Env 给出的打分。

## Policy Gradient

Policy Network 最后输出的是概率。

目标：调整 actor 中神经网络 policy $\pi(\theta)$，得到 $a=\pi(s, \theta)$，最大化 reward。

trajectory $\tau$ 由一系列的状态和动作组成，出现这种组合的概率是 $p_{\theta}(\tau)$ 。

$$
\begin{array}{l}{p_{\theta}(\tau)} \\ {\quad=p\left(s_{1}\right) p_{\theta}\left(a_{1} | s_{1}\right) p\left(s_{2} | s_{1}, a_{1}\right) p_{\theta}\left(a_{2} | s_{2}\right) p\left(s_{3} | s_{2}, a_{2}\right) \cdots} \\ {\quad=p\left(s_{1}\right) \prod_{l=1}^{T} p_{\theta}\left(a_{t} | s_{t}\right) p\left(s_{t+1} | s_{t}, a_{t}\right)}\end{array}
$$

reward ：根据 s 和 a 计算得分 r，求和得到 R。在围棋等部分任务中，无法获得中间的 r（下完完整的一盘棋后能得到输赢的结果）。

需要计算 R 的期望 $\bar{R}_{\theta}$，形式和 GAN 类似。如果一个动作得到 reward 多，那么就增大这个动作出现的概率。最终达到 agent 所做 policy 的 reward 一直都比较高。

$$
\bar{R}_{\theta}=\sum_{\tau} R(\tau) p_{\theta}(\tau)
$$

强化学习中，没有 label。需要从环境中采样得到 $\tau$ 和 R，根据下面的公式去优化 agent。相当于去求一个 likelihood。 

$\nabla f(x) = f(x) \frac{\nabla f(x)}{f(x)}= f(x) \nabla \log f(x)$ ，这一步中用到对 log 函数进行链式求导。

$$
\nabla \bar{R}_{\theta}=\sum_{\tau} R(\tau) \nabla p_{\theta}(\tau)
$$

$$
\begin{array}{l}{=E_{\left.\tau \sim p_{\theta}(\tau)[R(\tau)] \log p_{\theta}(\tau)\right]} \approx \frac{1}{N} \sum_{n=1}^{N} R\left(\tau^{n}\right) \nabla \log p_{\theta}\left(\tau^{n}\right)} \\ {=\frac{1}{N} \sum_{n=1}^{N} \sum_{t=1}^{T_{n}} R\left(\tau^{n}\right) \nabla \log p_{\theta}\left(a_{t}^{n} | s_{t}^{n}\right)}\end{array}
$$

参数更新方法：
1. 在环境中进行采样，得到一系列的轨迹和回报。
2. 利用状态求梯度，更新模型。如果 R 为正，增大概率 $p_{\theta}(a_t|s_t)$, 否则减少概率。
3. 重复上面的流程。


![](/file/15726799935625.jpg)

### PG 的例子

训练 actor 的过程看成是分类任务：输入 state ，输出 action。

最下面公式分别是反向传播梯度计算和 PG 的反向梯度计算，PG 中要乘以整个轨迹的 R。

![-w914](/file/15752505145081.jpg)


tip 1： add a baseline

强化学习的优化和样本质量有关，避免采样不充分。Reawrd 函数变成 R-b，代表回报小于 b 的都被我们当成负样本，这样模型能去学习得分更高的动作。b 一般可以使用 R 的均值。

tip 2: assign suitable credit

一场游戏中，不论动作好坏，总会乘上相同的权重 R，这种方法是不合理的，希望每个 action 的权重不同。

1. 引入一个 discount rate，对 t 之后的动作 r 进行降权重。
2. 利用 Advantage Function 评价状态 s 下动作 a 的好坏 critic。

 ![-w844](/file/15752505547153.jpg)

## PPO

## Q-Learning

## Actor Critic

## Sparse Reward

## Imitation Learning


