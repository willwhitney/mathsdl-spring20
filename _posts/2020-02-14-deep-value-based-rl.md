---
layout: post
title: Deep value-based RL and DQN
---

#### Motivation

In the introduction, we saw value-based RL algorithms (and specifically
Q learning) in the tabular setting where we keep a separate Q value for
each $ s,a$ pair. If we want to scale to large state spaces we will need
to be able to *generalize* across an infinite state space using a
function approximator, like a neural network. This week we will see how
Q-learning can be modified to support function approximation and read
the influential paper from Deepmind introducing the deep Q network (DQN)
algorithm.

<!--more-->

#### Topics

-   Q-learning with function approximation

-   Experience replay

-   $\varepsilon$-greedy exploration

#### Required reading

-   [Sections 4.1-4.4](https://arxiv.org/pdf/1811.12560.pdf) from the
    Intro to Deep RL Monograph of François-Lavet et al. (pages 24-29)

-   [Playing Atari with Deep Reinforcement
    Learning](https://arxiv.org/pdf/1312.5602.pdf) (original DQN paper)

#### Optional reading

-   [Pytorch DQN
    tutorial](https://pytorch.org/tutorials/intermediate/reinforcement_q_learning.html)

-   Lectures from [David
    Silver](https://www.youtube.com/watch?v=UoPei5o4fps&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-&index=6)
    or [Emma
    Brunskill](https://www.youtube.com/watch?v=gOV8-bC1_KU&list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u&index=6)
    with [lecture
    notes](https://web.stanford.edu/class/cs234/slides/lnotes6.pdf)

-   [Section
    4.3](https://sites.ualberta.ca/~szepesva/papers/RLAlgsInMDPs-lecture.pdf)
    from Csaba Szepesvari’s RL monograph

-   [Sutton and Barto](http://incompleteideas.net/book/the-book.html)
    chapters 9, 10, and 11

-   [Neural Fitted Q
    Iteration](http://ml.informatik.uni-freiburg.de/former/_media/publications/rieecml05.pdf)

-   [Deep Reinforcement Learning with Double
    Q-learning](https://arxiv.org/abs/1509.06461)

#### Questions

-   What are the potential problems with Q-learning when we introduce
    function approximation?

-   Why might experience replay improve the performance of DQN?

-   Is the DQN algorithm more similar to Q-learning or value iteration?
    Why?

-   Download and run the Pytorch DQN tutorial linked in the optional
    reading list to get an intuition for how the algorithm works.