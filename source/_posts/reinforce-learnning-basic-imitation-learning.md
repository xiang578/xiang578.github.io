---
title: 李宏毅强化学习课程笔记 Imitation Learning
date: 2020-09-06 23:14:47
tags: [algorithm, reinforcement-learning]
categories: 机器学习
mathjax: true
---

我的笔记汇总：
- [Policy Gradient、PPO: Proximal Policy Optimization、Q-Learning](https://xiang578.com/post/reinforce-learnning-basic.html)
- [Actor Critic](https://xiang578.com/post/reinforce-learnning-basic-actor-critic.html)
- [Sparse Reward](https://xiang578.com/post/reinforce-learnning-basic-sparse-reward.html)
- [Imitation Learning](https://xiang578.com/post/reinforce-learnning-basic-imitation-learning.html)

apprenticeship learning

1. 无法从环境中获得 reward。
2. 某些任务中很难定义 reward。
3. 人为设计的奖励可能导致意外的行为。

学习专家的行为。

## Behavior Cloning

监督学习，但是样本有限。

Dataset Aggregation 

1. 通过行为克隆得到 actor $\pi_1$
2. 利用 $\pi_1$ 和环境交互得到一些新的样本
3. 由专家对上一步采样得到的样本进行标注
4. 利用新得到的样本训练 $\pi_2$

如果机器的学习能力有限，可能复制专家多余无用的动作。监督学习无法区分哪些是需要学习、哪些是需要忽视的行为。

### Miss match
监督学习中，我们假设训练数据和测试数据有相同的分布。Behavior Cloning 中可能分布不同。

![](https://media.xiang578.com/15733541795048.jpg)


## Inverse Reinfofcement Learning

反向强化学习
没有 reward 函数，通过专家和环境互动学到一个 reward function，然后再训练 actor。
![](https://media.xiang578.com/15733545279563.jpg)

类似于 GAN 的训练方法（actor 换成 generator，reward function 换成 discriminator）。
学到 actor 的 pi 后，调整 reward function，保证专家的行为得分大于学到的行为。

![](https://media.xiang578.com/15733546273431.jpg)




