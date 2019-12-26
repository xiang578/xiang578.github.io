---
title: 李宏毅强化学习课程笔记
date: 2019-12-26 21:14:47
tags: [algorithm, reinforcementlearning]
categories: 机器学习
mathjax: true
---

## Info 

课件下载：[Hung-yi Lee - Deep Reinforcement Learning](http://speech.ee.ntu.edu.tw/~tlkagk/courses_MLDS18.html)

课程视频：[DRL Lecture 1: Policy Gradient (Review) - YouTube](https://www.youtube.com/watch?v=z95ZYgPgXOY&list=PLJV_el3uVTsODxQFgzMzPLa16h6B8kWM_)

- Change Log
    - 20191226: 整理 PPO 相关资料

## RL 基础

强化学习基本定义：

- Actor：可以感知环境中的状态，通过执行不同的动作得到反馈的奖励，在此基础上进行学习优化。
- Environment：指除 Actor 之外的所有事务，受 Actor 动作影响而改变其状态，并给 Actor 对应的奖励。
- on-policy 和 off-policy 的区别在于 Actor 和 Environment 交互的策略和它自身在学习的策略是否是同一个。

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

![PG](/file/15752505145081.jpg)


tip 1： add a baseline

强化学习的优化和样本质量有关，避免采样不充分。Reawrd 函数变成 R-b，代表回报小于 b 的都被我们当成负样本，这样模型能去学习得分更高的动作。b 一般可以使用 R 的均值。

tip 2: assign suitable credit

一场游戏中，不论动作好坏，总会乘上相同的权重 R，这种方法是不合理的，希望每个 action 的权重不同。

1. 引入一个 discount rate，对 t 之后的动作 r 进行降权重。
2. 利用 Advantage Function 评价状态 s 下动作 a 的好坏 critic。

 ![Assign Suitable Credit](/file/15752505547153.jpg)

## PPO: Proximal Policy Optimization

### importance sampling

假设需要估计期望 $E_{x~p[f(x)]}$，x 符合 p 分布，将期望写成积分的形式。由于在 P 分布下面很难采样，把问题转化到已知 q 分布上，得到在 p 分布下计算期望公式。

![](/file/15771920437580.jpg)

上面方法得到 p 和 q 期望接近，但是方差可能相差很大，且和 $\frac{p(x)}{q(x)}$ 有关。

原分布的方差：
$$
\operatorname{Var}_{x-p}[f(x)]=E_{x-p}\left[f(x)^{2}\right]-\left(E_{x-q}[f(x)]\right)^{2}
$$

新分布的方差：
$$
\begin{array}{l}{\operatorname{Var}_{x \sim p}[f(x)]=E_{x \sim p}\left[f(x)^{2}\right]-\left(E_{x \sim p}[f(x)]\right)^{2}} \\ {\operatorname{Var}_{x \sim q}\left[f(x) \frac{p(x)}{q(x)}\right]=E_{x \sim q}\left[\left(f(x) \frac{p(x)}{q(x)}\right)^{2}\right]-\left(E_{x \sim q}\left[f(x) \frac{p(x)}{q(x)}\right]\right)^{2}} \\ {=E_{x \sim p}\left[f(x)^{2} \frac{p(x)}{q(x)}\right]-\left(E_{x \sim p}[f(x)]\right)^{2}}\end{array}
$$

在 p 和 q 分布不一致时，且采样不充分时，可能会带来比较大的误差。

![Issue of Importance Sampling](/file/15771931618906.jpg)


### 从 On-policy 到 Off-policy

on-policy 时，PG 每次参数更新完成后，actor 就改变了，不能使用之前的数据，必须和环境重新互动收集数据。引入 $p_{\theta \prime}$ 进行采样，就能将 PG 转为 off-ploicy。

![](/file/15771932374489.jpg)

和之前相比，相当于引入重要性采样，所以也有前一节中提到的重要性采样不足问题。

$$
J^{\theta^{\prime}}(\theta)=E_{\left(s_{t}, a_{t}\right) \sim \pi_{\theta^{\prime}}}\left[\frac{p_{\theta}\left(a_{t} | s_{t}\right)}{p_{\theta^{\prime}}\left(a_{t} | s_{t}\right)} A^{\theta^{\prime}}\left(s_{t}, a_{t}\right)\right]
$$


### PPO/TRPO

为了克服采样的分布与原分布差距过大的不足，PPO 引入 KL 散度进行约束。KL 散度用来衡量两个分布的接近程度。

$$
J_{P P O}^{\theta^{\prime}}(\theta)=J^{\theta^{\prime}}(\theta)-\beta K L\left(\theta, \theta^{\prime}\right)
$$

TRPO(Trust Region Policy Optimization)，要求 $K L\left(\theta, \theta^{\prime}\right)<\delta$。

$$
J_{T R P O}^{\theta^{\prime}}(\theta)=E_{\left(s_{t}, a_{t}\right) \sim \pi_{\theta^{\prime}}}\left[\frac{p_{\theta}\left(a_{t} | s_{t}\right)}{p_{\theta^{\prime}}\left(a_{t} | s_{t}\right)} A^{\theta^{\prime}}\left(s_{t}, a_{t}\right)\right]
$$

KL 散度可能比较难计算，在实际中常使用 PPO2。 

- A>0，代表当前策虑表现好。需要增大 $\pi( \theta )$，通过 clip 增加一个上限，防止 $\pi( \theta )$ 和旧分布变化太大。
- A<0，代表当前策虑表现差，不限制新旧分布的差异程度，只需要大幅度改变 $\pi( \theta )$。

参考 [【点滴】策略梯度之PPO - 知乎](https://zhuanlan.zhihu.com/p/43114711)

![](/file/15772793086357.jpg)


### PPO algorithm

系数 $\beta$ 在迭代的过程中需要进行动态调整。引入 $KL_{max} KL_{min}$，KL > KLmax，说明 penalty 没有发挥作用，增大 $\beta$。

![](/file/15772793200430.jpg)


## Q-Learning

## Actor Critic

## Sparse Reward

## Imitation Learning


