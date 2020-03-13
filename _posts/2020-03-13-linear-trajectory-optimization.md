---
layout: post
title: Linear trajectory optimization
---

#### Motivation

We're now going to switch from talking about exploration to control and trajectory optimization. Whereas the focus from the first half of the course was building up to "Unifying Count-Based Exploration and Intrinsic Motivation", the second half will lead to "End-to-end training of deep visuomotor policies" and the method it proposes, Guided Policy Search.

Guided policy search (GPS) is a family of methods which combine optimal
control with rich model-free policies. By leveraging models of the
environment and privileged information during training, GPS has been
used to learn policies that map directly from pixels to torques on real
robots, marking one of the first successes of deep RL on a physical
system.

[Trajectory
optimization](https://en.wikipedia.org/wiki/Trajectory_optimization)
uses a model of a system’s dynamics to choose the controls which
minimize some cost. The [linear quadratic
regulator](https://en.wikipedia.org/wiki/Linear–quadratic_regulator), or
LQR, is the fundamental tool of trajectory optimization. Guided policy
search uses iLQR, which is based on LQR, to find optimal guiding
trajectories. After this week you should understand the problem of
trajectory optimization and how LQR solves it for linear systems.

<!--more-->

#### Topics

-   Trajectory optimization

-   Linear dynamical systems

-   Linear Quadratic Regulator (LQR)

#### Required reading

-   [Introduction to Linear Quadratic
    Regulation](http://www.ccs.neu.edu/home/rplatt/cs5335_2015/slides/lqr_writeup.pdf)

-   [Russ Tedrake on
    LQR](http://underactuated.csail.mit.edu/underactuated.html?chapter=lqr)

#### Optional reading

-   [Introduction to control as optimization from Russ’s
    book](http://underactuated.csail.mit.edu/dp.html) (includes the
    Hamilton-Jacobi-Bellman equation)

-   [Video of Russ’s lecture on
    LQR](https://www.youtube.com/watch?v=VX86z8U4OsA&list=PLThjctra-6WwKlMWopX22dYHXfHQjUxLS&index=5)

#### Questions

-   What is trajectory optimization?

-   Play with the notebooks in Russ’s Example 8.2.

-   What kinds of systems are linear? What would happen if you ran LQR
    on a nonlinear system?

-   Is there a way to adapt LQR to more complex dynamics?


#### References from class

- [Autonomous Helicopter Aerobatics through Apprenticeship Learning](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.894.5921&rep=rep1&type=pdf) by Pieter Abbeel, Adam Coates, and Andrew Ng
