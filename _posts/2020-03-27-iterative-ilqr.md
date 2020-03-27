---
layout: post
title: Iterative linear quadratic regulation
---

#### Motivation

Iterative linear quadratic regulation (iLQR) approximates the dynamics
using a time-varying linear model and approximately solves it using an
iterative algorithm. It enables optimal control via trajectory
optimization for arbitrary environments where the dynamics are known or
can be approximated. Guided Policy Search uses iLQR to find optimal
guiding trajectories. After this week you should understand how iLQR
solves nonlinear trajectory optimization problems.

<!--more-->

#### Topics

-   Nonlinear trajectory optimization

-   Iterative Linear Quadratic Regulation (iLQR)

#### Required reading

-   [Blog post about iLQR by Travis
    deWolf](https://studywolf.wordpress.com/2016/02/03/the-iterative-linear-quadratic-regulator-method/)

-   [Russ’s textbook chapter on trajectory
    optimization](http://underactuated.mit.edu/trajopt.html) — read
    beginning through 10.3.3, plus 10.7.

#### Optional reading

-   [Russ’s lecture on trajectory
    optimization](https://www.youtube.com/watch?v=uO9EP6FyeAE&list=PLThjctra-6WwKlMWopX22dYHXfHQjUxLS&index=10)

-   Work pushing trajectory optimization to the limits to get dramatic
    results: [Discovery of Complex Behaviors through Contact-Invariant
    Optimization](https://homes.cs.washington.edu/~todorov/papers/MordatchSIGGRAPH12.pdf)
    ([video](https://www.youtube.com/watch?v=mhr_jtQrhVA))

-   The paper that produced the first really amazing iLQR results (and
    introduced MuJoCo): [Synthesis and Stabilization of Complex
    Behaviors through Online Trajectory
    Optimization](https://homes.cs.washington.edu/~todorov/papers/TassaIROS12.pdf)
    ([video](https://www.youtube.com/watch?v=anIsw2-Lbco))

#### Questions

-   What problem does iLQR try to solve?

-   How does it differ from regular LQR?

-   What other techniques does Russ suggest for solving this problem?

-   How computationally expensive are these trajectory optimization
    methods?

#### References from the session

- [Iterative Linearized Control: Stable Algorithms and Complexity Guarantees](http://proceedings.mlr.press/v97/roulet19a/roulet19a.pdf)

- A representative paper doing trajectory optimization in a learned model: [Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models](https://arxiv.org/abs/1805.12114)

- The MuZero paper: [Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model](https://arxiv.org/abs/1911.08265)