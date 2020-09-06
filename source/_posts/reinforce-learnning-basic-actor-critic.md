 ---
title: 李宏毅强化学习课程笔记：Actor Critic
date: 2020-09-06 21:14:47
tags: [algorithm, reinforcement-learning]
categories: 机器学习
mathjax: true
---

## Info 

课件下载：[Hung-yi Lee - Deep Reinforcement Learning](http://speech.ee.ntu.edu.tw/~tlkagk/courses_MLDS18.html)

课程视频：[DRL Lecture 1: Policy Gradient (Review) - YouTube](https://www.youtube.com/watch?v=z95ZYgPgXOY&list=PLJV_el3uVTsODxQFgzMzPLa16h6B8kWM_)

- Change Log
    - 上半部分笔记见：[李宏毅强化学习课程笔记 上| 算法花园](https://xiang578.com/post/reinforce-learnning-basic.html)
    - 20200906： 整理 Actor Critic 相关内容
    
## Actor Critic

### policy gradient

- 给定在某个 state 采取某个 action 的概率。
- baseline b 的作用是保证 reward 大的样本有更大的概率被采样到。
- 从当前时间点累加 reward，并且当前 action 对后面的 reward 影响很小，添加折扣系数。
- PG 效果受到采样数量和质量影响。

![](https://media.xiang578.com/15731332476541.jpg)

### Q-learning

状态价值函数 $V^{\pi}(s)$ 
状态行动价值函数 $Q^{\pi}(s,a)$ 

![](https://media.xiang578.com/15731335120798.jpg)

### Actor-Critic

用 V 和 Q 替换 PG 中的累积 reward 和 baseline。新的模型需要训练两个网络，比较困难。

![](https://media.xiang578.com/15731338724158.jpg)


### Advantage Actor-Critic

用 V 去替代 Q，能降低模型整体方差（MC 到 TD)。最下面两个公式转化是由实验得到。

![](https://media.xiang578.com/15731340046945.jpg)

训练过程：



![](https://media.xiang578.com/15731341766172.jpg)

tip:

1. actor 和 critic 具有相同的输入 s，可以共享部分网络结构。
2. output entropy 作为 pi 的正则项，entropy 越大采样效果越好。

![](https://media.xiang578.com/15731342994690.jpg)

### Asynchronous Advantage Acotr-Critic A3C

1. 利用多个 worker 去训练。
2. 每个 worker 复制主模型的参数。
3. 每个模型单独采样，并且计算梯度。
4. 更新全局参数。
                                    
### Pathwise derivative policy gradient

该网络不仅仅告诉 actor 某一个 action 的好坏，还告诉 actor 应该返回哪一个 action。

![](https://media.xiang578.com/15731346701840.jpg)

将这个 actor 返回的 action 和 state 一起输入到一个固定的 Q，利用梯度上升更新 actor。

![](https://media.xiang578.com/15731348191409.jpg)
 
 完整的训练过程和 conditional GAN 类似， actor 是 generator，Q 是 discriminator。
 
 ![](https://media.xiang578.com/15731350424130.jpg)

算法：

1. action 由训练的 actor 决定
2. 利用 s 和 a 更新 Q
![](https://media.xiang578.com/15731351315860.jpg)

### GAN 和 AC 方法对比

![](https://media.xiang578.com/15731353632450.jpg)
