---
layout: post
title: Deep RL with principled exploration
---

#### Motivation

We have seen provably efficient exploration in small MDPs, but this
requires keeping track of independent estimates of a model or Q function
at every state and action. To scale up the algorithms to large state
spaces we need to find a way to avoid this sort of tabular
representation. This week we will look at one of the first papers that
was able to effectively scale up a UCB-style exploration bonus to the
deep RL setting of large MDPs.

<!--more-->

#### Topics

-   Scaling up exploration algorithms

-   Pseudocounts from density models

#### Required reading

-   [Unifying Count-Based Exploration and Intrinsic
    Motivation](https://arxiv.org/abs/1606.01868)

#### Optional reading

-   [Count-Based Exploration with Neural Density
    Models](https://arxiv.org/abs/1703.01310) (a follow up paper with a
    neural density model and better performance)

-   [VIME: Variational Information Maximizing
    Exploration](https://arxiv.org/pdf/1605.09674.pdf) (a concurrent
    paper that performs approximate information maximization)

-   [Intrinsic Motivation Systems for Autonomous Mental
    Development](http://www.pyoudeyer.com/ims.pdf) (a neuroscience paper
    that gives some context to the discussion of intrinsic motivation)

-   [Near-Bayesian Exploration in Polynomial
    Time](http://zicokolter.com/publications/kolter2009nearbayesian.pdf)
    (a paper that provides the lower bound referenced in Bellemare et
    al. for small exploration bonuses, see Theorem 2)

#### Questions

-   What is a pseudocount? Why is it useful for exploration in large
    state spaces?

-   What do you think are the biggest weaknesses of the pseudocount
    approach? Why?

-   How else might we be able to extend our exploration algorithms to
    large state spaces?
