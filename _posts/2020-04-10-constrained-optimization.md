---
layout: post
title: Constrained optimization and ADMM
---

#### Motivation

Guided policy search formulates its objective as a [constrained
optimization](https://en.wikipedia.org/wiki/Constrained_optimization),
minimizing the cost of its expert trajectories while guaranteeing that,
at convergence, the expert trajectories and the neural network policy
become identical. After this week you should understand the problem of
constrained optimization and the specific technique, ADMM, used by GPS.

<!--more-->

#### Topics

-   Constrained optimization

-   Alternating Direction Method of Moments (ADMM)

#### Required reading

-   [Chapter 10 of Kochenderfer &
    Wheeler](http://dl.booktolearn.com/ebooks2/computer/algorithms/9780262039420_Algorithms_for_Optimization_7cc2.pdf)

-   [Boyd monograph on ADMM, sections 2.3 -
    3.3](https://web.stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf)

#### Optional reading

-   A simple intuition and introduction for Lagrange multipliers: [Khan
    Academy’s Interpretation of Lagrange
    multipliers](https://www.khanacademy.org/math/multivariable-calculus/applications-of-multivariable-derivatives/constrained-optimization/a/interpretation-of-lagrange-multipliers)

-   [The Bregman ADMM paper](https://arxiv.org/pdf/1306.3203.pdf), which is what GPS actually
    uses

-   Some theory about Lagrange multipliers: [Marcus Brubaker’s
    notes](http://www.cs.toronto.edu/~mbrubake/teaching/C11/Handouts/LagrangeMultipliers.pdf)

-   In-depth chapter about constrained optimization and geometry: [Geoff
    Gordon’s Linear Programming, Lagrange Multipliers, and
    Duality](http://www.cs.cmu.edu/~ggordon/lp.pdf)

#### Questions

-   What is the advantage of using constrained optimization methods over
    a hand-tuned penalty?

-   Give an intuition for how Lagrange multipliers solve constrained
    optimization problems.

-   What benefit does the augmented Lagrangian method have over vanilla
    Lagrange multipliers?

-   How does ADMM differ from the above methods?
