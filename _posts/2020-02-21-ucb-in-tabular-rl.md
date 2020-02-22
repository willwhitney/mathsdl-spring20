---
layout: post
title: UCB in tabular RL
---

#### Motivation

We have seen algorithms that can have provably good performance in terms
of regret in the bandit setting by adaptively exploring. And while the
DQN algorithm we learned about last week has impressive performance on
some tasks, it often fails to explore well enough since it relies on
non-adaptive epsilon-greedy exploration. This week we will look at
algorithms to extend the exploration ideas from the bandit setting to
finite MDPs with tabular representations, getting us one step closer to
the goal of scalable algorithms for RL with adaptive exploration
mechsanisms.

<!--more-->

#### Topics

-   Exploration in MDPs

-   Model-based interval estimation

#### Required reading

-   [An analysis of model-based Interval Estimation for Markov Decision
    Processes](https://www.ics.uci.edu/~dechter/courses/ics-295/winter-2018/papers/2008-littman-aij-main.pdf)

#### Optional reading

-   [Chapter 38](https://tor-lattimore.com/downloads/book/book.pdf) of
    the Bandit Algorithms textbook by Lattimore and Szepesvari (this
    reintroduces the MDP framework, gives the UCRL2 algorithm with a
    proof of its regret bound, and provides a regret lower bound)

-   [Is Q-learning Provably
    Efficient?](https://arxiv.org/abs/1807.03765) (a recent paper that
    uses a UCB-style bonus to make a variant of tabular Q-learning with
    a regret bound)

-   [R-max: A General Polynomial Time Algorithm for Near-Optimal
    Reinforcement
    Learning](https://ie.technion.ac.il/~moshet/brafman02a.pdf) (an
    older paper with an intuitive algorithm)

#### Questions

-   How does the goal of the PAC-MDP framework differ from the regret
    framework? Can you give some examples of problems where one
    framework may be preferred?

-   Why does MBIE choose to keep confidence intervals over models? How
    does this compare to the bandit setting from the first week?

-   What are the benefits of the exploration bonus version of the
    algorithm (MBIE-EB) over the standard version (MBIE)?

-   What makes it difficult to scale algorithms like MBIE-EB to settings
    where we want to use neural networks instead of tabular
    representations?