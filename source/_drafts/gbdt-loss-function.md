---
title: All About GBDT (2) Loss Function
tags: []
mathjax: true
date: 2020-01-26 14:15:43
categories:
---




部分内容参考 [Generalized Boosted Models:
A guide to the gbm package](https://cran.r-project.org/web/packages/gbm/vignettes/gbm.pdf)

### 通用

- ${L = \sum^{n}_{i=1}l(y_i,\hat y_i)}$
- ${Obj = \sum^{n}_{i=1}l(y_i,\hat y_i)+\sum^{T}_{t=1}\Omega(f_t)}$
- ${Obj^{(t)} = \sum^{n}_{i=1}l(y_i,\hat y_i^{t-1} + f_t(x_i))+\Omega(f_t)+constant}$
- ${f(x+\Delta x) \approx f(x)+f'(x)\Delta x + \frac{1}{2}f''(x)\Delta x^2}$
- ${Obj^{(t)}=\sum^n_{i=1}[l(y_i,\hat y_i^{t-1})+ g_if_t(x_i) + \frac{1}{2}+ h_i f_t(x_i)^2] + \Omega(f_t)+constant}$
- ${Obj^{(t)} \approx \sum^n_{i=1}[l(y_i,\hat y_i^{t-1})+ g_if_t(x_i) + \frac{1}{2}h_i f_t(x_i)^2] + \Omega(f_t)}$
- ${= \sum^n_{i=1}[l(y_i,\hat y_i^{t-1})+ g_if_t(x_i) + \frac{1}{2}h_i f_t(x_i)^2] + \gamma T + \frac{1}{2}\lambda \sum^T_{j=1}w_j^2}$

## 二阶泰勒展开

- 优化目标、损失函数：${Obj = L = \sum^{n}_{i=1}l(y_i,\hat y_i)}$
- 第 t 轮迭代：${Obj^{(t)} = \sum^{n}_{i=1}l(y_i,\hat y_i^{t-1} + f_t(x_i))}$
- 二阶泰勒展开 ${f(x+\Delta x) \approx f(x)+f'(x)\Delta x + \frac{1}{2}f''(x)\Delta x^2}$
- 带入化解：${Obj^{(t)}=\sum^n_{i=1}[l(y_i,\hat y_i^{t-1})+ g_if_t(x_i) + \frac{1}{2} h_i f_t(x_i)^2]}$

## t

- ${Obj^{(t)} \approx \sum^n_{i=1}[g_if_t(x_i) + \frac{1}{2}h_i f_t(x_i)^2]}$
- 树的维度，带入 ${f_t(x_i)=w_j}$：${Obj^{(t)} = \sum^T_{j=1}[ (\sum_{i \in I_j} g_i)w_j + \frac{1}{2} (\sum_{i \in I_j}h_i) w_i^2]}$
- 设 ${G_j = \sum_{i \in I_j} g_i, H_j = \sum_{i \in I_j}h_i}$，可以得到 ${w_j = -\frac{G_j}{H_j}}$
- 目标函数化简为 ${Obj^{(t)} = - \frac{1}{2} \sum^T_{j=1} \frac{G_j^2}{H_j}}$
- 树分裂 ${Gain = \frac{1}{2} [\frac{G_L^2}{H_L} + \frac{G_R^2}{H_R} - \frac{(G_L+G_R)^2}{H_L+H_R}]}$
- 函数没有二阶导数时：${w_j = -G_j}$


### Gaussian
- 损失函数 ${(y_i - f(x_i))^2}$
- 负梯度 ${y_i - f(x_i)}$
- 初始化 ${\frac {\sum y_i}{m}}$
- 叶节点估计

### AdaBoost
- 损失函数 ${e^{-(2y-1)f(x)}, y\in \{1,0\}}$
    - 也可以是 ${e^{-yf(x)}, y\in \{1,-1\}}$
- 负梯度 ${(2y-1)e^{-(2y-1)f(x)}}$
- ${g=-(2y-1)e^{-(2y-1)f(x)}}$, ${h=(2y-1)^2e^{-(2y-1)f(x)}=e^{-(2y-1)f(x)}}$
- 初始化 ${F_0=\frac{1}{2} \log \frac{\sum P(y=1|x)}{\sum P(y=-1|x)}}$
- 叶节点估计 ${-\frac{g}{h}=\frac{(2y-1)e^{-(2y-1)f(x)}}{e^{-(2y-1)f(x)}}=2y-1}$

### Bernoulli
- gbdt 代码中 ${y\in \{0,1\}}$
    - logistics Regression 与对数损失函数转化
    - ${y^*=\frac{1}{2}, y^*\in \{0,1\}}$
    - ${e^{yF(x)}+e^{-yF(x)}=e^{F(x)}+e^{-F(x)}, y\in \{-1,1\}}$
    - ${y^*\log p(x)+(1-y^*) \log (1-p(x))=\frac{1+y}{2}\log \frac{e^{F(x)}}{e^{F(x)}+e^{-F(x)}}+\frac{1-y}{2}\log \frac{e^{-F(x)}}{e^{F(x)}+e^{-F(x)}}}$
    - ${=\frac{1+y}{2}\log e^{F(x)}+\frac{1-y}{2}\log e^{-F(x)} +\frac{1+y}{2}\log \frac{1}{e^{F(x)}+e^{-F(x)}}+\frac{1-y}{2}\log \frac{1}{e^{F(x)}+e^{-F(x)}}=yF(x)+\log \frac{1}{e^{F(x)}+e^{-F(x)}}}$
    - ${=\log \frac{e^{yF(x)}}{e^{yF(x)}+e^{-yF(x)}}=\log(1+e^{-2yF(x)})}$
- 对数损失函数 ${\log(1+e^{-2yf(x)})}, y\in \{-1,1\}, F(x)=\frac{1}{2} \log \frac{P(y=1|x)}{P(y=-1|x)}$
- 负梯度 ${\frac{2y}{1+e^{2yf(x)}}}$
- 初始化 ${F_0= \log \frac{\sum P(y=1|x)}{\sum P(y=-1|x)}}$
- 叶节点估计  ${\frac{\sum_{x_i \in R_{jm}}\tilde{y_i}}{\sum_{x_i \in R_{jm}}|\tilde{y_i}|(2-|\tilde{y_i}|)}}$
-  single Newton-Raphson
    -  ${log(1+e^{-2yf(x)})}$ 
    -  一阶导数 ${g=-\frac{2y_i}{1+e^{2y_iF_{m-1}(x)}}}$
    -  二阶导数 ${h=\frac{4y_i^2e^{2y_iF_{m-1}(x)}}{(1+e^{2y_iF_{m-1}(x)})^2}}$
    -  ${\theta = -\frac{g}{h}=\frac{\tilde{y_i}}{|\tilde{y_i}|(2-|\tilde{y_i}|)}}$
    -  ${|\tilde{y_i}|(2-|\tilde{y_i}|)=|\frac{2y_i}{1+e^{2y_iF_{m-1}(x)}}|(2-|\frac{2y_i}{1+e^{2y_iF_{m-1}(x)}}|)=\frac{|2y_i|(2|1+e^{2y_iF_{m-1}(x)}|-|2y_i|)}{(1+e^{2y_iF_{m-1}(x)})^2}=\frac{|4y_i+4y_ie^{2y_iF_{m-1}(x)}|-4y_i^2}{(1+e^{2y_iF_{m-1}(x)})^2}=\frac{4y_i^2e^{2y_iF_{m-1}(x)}}{(1+e^{2y_iF_{m-1}(x)})^2}}$


### Poisson
- 为什么会与 Poisson 分布有关
- ${Y \sim Poisson(\mu)}$，其中 ${\mu = h_W(X) = e^{W^TX}}$ 为期望。
- 概率密度函数：${f(y;\mu)=\frac{\mu ^y}{y!}e^{-\mu }}$
- 对数似然函数：${l(y;\mu) = \sum^{m}_{i=1} y_i\log \mu_i - \mu_i - \log(y_i!)}$ 
- 损失函数：${L(y_i, F(x_i)) = \sum^{m}_{i=1}e^{h_W(x)} - y_i\log (h_W(x_i))}$ 
- 负梯度：${ \tilde{y_i} = -[\frac{\partial L(y_i, F(x_i))}{\partial F(x)}]_{F(x)=F_{m-1}(x)} = y_i-e^{F_{m-1}(x_i)}}$
- 初始化 ${\log(\frac {\sum^{m}_{i=1} y_i}{m})}$
- 叶节点估计 ${\log(\frac {\sum^{m}_{i=1} \tilde{y_i}}{\sum^{m}_{i=1} e^{F_{m-1}(x_i)}})}$


### Laplace(MAE)
- 损失函数 ${\sum^{m}_{i=1} |y_i-F(x_i)|}$
- 负梯度 ${ \tilde{y_i} = -[\frac{\partial L(y_i, F(x_i))}{\partial F(x)}]_{F(x)=F_{m-1}(x)} = sign(y_i-F(x_i))}$
- 初始化 ${median(y)}$
- 叶节点估计 ${median(\tilde{y_i})}$

### MAPE
- 损失函数 ${\sum^{m}_{i=1} \frac{|y_i-F(x_i)|}{y_i}}$
- 负梯度 ${ \tilde{y_i} = -[\frac{\partial L(y_i, F(x_i))}{\partial F(x)}]_{F(x)=F_{m-1}(x)} = -\frac{sign(y_i-F(x_i))}{y_i}}$
- 初始化 ${median_w(y)}$
- 叶节点估计 ${median_w(\tilde{y_i})}$
- 证明：
    - 对损失函数求完偏导之后的结果是 ${\frac{\partial L(y_i, F(x_i))}{\partial F(x)}= \sum_{\tilde{y_i}<0} - \frac{1}{y_i} +\sum_{\tilde{y_i}>=0} \frac{1}{y_i}}$
    - 叶节点要估计一个值 ${\lambda}$，使损失函数最小，即可以转化为 ${\frac{\partial L(y_i, F(x_i)+\lambda)}{\partial F(x)}= \sum_{\tilde{y_i}+\lambda<0} - \frac{1}{y_i} +\sum_{\tilde{y_i+\lambda}\geqslant 0} \frac{1}{y_i}}=0$
    - 对残差进行从小到大排序，找到一个 ${\tilde{y_p}}$ 值，满足 ${\sum_{i=0}^{p} - \frac{1}{y_i} \geqslant \frac{1}{2}\sum_{i=0}^{m} \frac{1}{y_i}}$

### SMAPE

- 损失函数 ${\sum^{m}_{i=1} \frac{|y_i-F(x_i)|}{\frac{y_i + F(x_i)}{2}}}$
- 负梯度 ${\tilde{y_i} = -[\frac{\partial L(y_i, F(x_i))}{\partial F(x)}]_{F(x)=F_{m-1}(x)} = -\frac{ 4 * y_i * sign(y_i - F(x_i))}{(y_i + F(x_i))^2}}$
- 
