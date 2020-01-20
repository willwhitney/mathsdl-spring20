---
layout: page
title: Home
---

<!-- # MathsDL-spring18 -->
Topics course Mathematics of Deep Learning, NYU, Spring 2020. CSCI-GA 3033. 

## Logistics

* Thursdays from 5.10pm-7pm in CIWW 201

* (**optional**) Parallel Curriculum sessions: Fridays 11am-12:15pm in CIWW 102.

* Piazza: [sign up here](http://piazza.com/nyu/spring2020/csciga3033)


## Instructors

__Lecture Instructor__: Joan Bruna ([bruna@cims.nyu.edu](mailto:bruna@cims.nyu.edu))

__Tutors (Parallel Curriculum)__: Will Whitney ([wwhitney@cs.nyu.edu](mailto:wwhitney@cs.nyu.edu)) and David Brandfonbrener ([david.brandfonbrener@nyu.edu](mailto:david.brandfonbrener@nyu.edu))


## Syllabus

This graduate-level course explores some of the open mathematical challenges arising in the study of Deep Learning. In particular, we will focus on three main topics: (i) signal processing principles underpinning convolutional neural networks and their generalisations to non-euclidean geometries (ii) non-convex optimization challenges arising in high-dimensional (or overparametrised) learning problems, and (iii) geometry of Markov Decision Processes and its role in Reinforcement Learning guarantees.

### Parallel curriculum

Besides the lectures, we will also run an optional parallel curriculum during the recitation section on two topics in reinforcement learning (RL). This parallel curriculum builds from the basics of RL to reach seminal modern papers in the field. We will have two segments. The first will lead to [Unifying Count-Based Exploration and Intrinsic Motivation](http://papers.nips.cc/paper/6382-unifying-count-based-exploration-and-intrinsic-motivation), covering bandits, deep Q-learning, and exploration along the way. The second will lead to [Guided Policy Search](http://www.jmlr.org/papers/volume17/15-522/15-522.pdf) and cover continuous control, trajectory optimization, imitation learning, and constrained optimization.



<!-- ### Detailed Syllabus 

*  Introduction: the Curse of Dimensionality

* Part I: Geometry of Data
  * Euclidean Geometry: transportation metrics, CNNs , scattering. 
  * Non-Euclidean Geometry: Hausdorff-Gromov distances, Graph Neural Networks. 
  * Unsupervised Learning under Geometric Priors (Implicit vs explicit models, microcanonical, transportation metrics).
  * Applications and Open Problems: adversarial examples, graph inference, inverse problems.

* Part II: Geometry of Optimization and Generalization
  * Stochastic Optimization (Robbins & Munro, Convergence of SGD) 
  * Stochastic Differential Equations (Fokker-Plank, Gradient Flow, Langevin Dynamics, links with SGD; open problems) 
  * Information Geometry and Optimal Transport (Amari, Fisher-Rao metric, Wasserstein) 
  * Reproducing Kernel Hilbert Spaces 
  * Landscape of Deep Learning Optimization (Tensor/Matrix factorization, Deep Nets; open problems). 
  * Generalization in Deep Learning.  -->


## Prerequisites

Background on high-dimensional probability, statistics, and/or harmonic analysis. Familiarity with general Machine Learning topics and basic notions of optimization.


## Assignments and Grading

The course will involve weekly required readings before class and a final paper, which will be an in-depth survey of a topic related to the syllabus. A detailed abstract of the final paper will be due in the middle of the term.

The course will be graded in three components: paper abstract, final paper, and participation.


## Lectures

| Week        | Lecture Date |  Topic       |  Section Date       | Parallel topic                     |
| ---------------|----------------| ------------|---------------------------|---------------------------|
| 1 | 1/30 | **Parallel takeover:** Introduction to Reinforcement Learning | 1/31 | **No session**  |
| 2 | 2/6  | TBA  | 2/7  |  Bandits and the Upper confidence bound algorithm  |
| 3 | 2/13  | TBA  | 2/14  |  Deep value-based RL and DQN  |
| 4 | 2/20  | TBA | 2/21  |  UCB in tabular RL  |
| 5 | 2/27  | TBA | 2/28  |  Intrinsic motivation and Information Gain  |
| 6 | 3/5  | TBA | 3/6  |  Unifying Count-Based Exploration and Intrinsic Motivation  |
| 7 | 3/12  | TBA | 3/11  |  Control and linear trajectory optimization  |
| 8 | 3/19  | **Spring  Break**  | 3/20  |  **Spring Break**  |
| 9 | 3/26  | TBA | 3/27  |  Iterative linear quadratic regulation  |
| 10 | 4/2  | TBA | 4/3  |  Imitation learning  |
| 11 | 4/9  | TBA | 4/10  |  Constrained optimization and ADMM  |
| 12 | 4/16  | TBA | 4/17  |  Guided Policy Search  |
| 13 | 4/23  | TBA | 4/24  |  **No session**  |
| 14 | 4/30  | TBA | 5/1  |  **No session**  |
| 15 | 5/7  | TBA | 5/8  |  **No session**  |


## Paper topics

The following are some recommended topics for the final paper. If your group doesn't want to do one of these topics, you can propose something else to us instead.

- Neural Tangent Kernel
- Depth separation
- Advanced topics on control (path integral control, Russ Tedrake stuff)
- Imitation learning (behavior cloning, DAGGER, GAIL)
- maximum-entropy RL / RL as inference (maybe not, there are good reviews)
- competitive optimization (games, VI, applications like GANs, mirror-prox, extra-gradient)
- double descent
- contextual bandits
- PAC-Bayes
- Bayesian NNs (Bayes by backprop, Yarin stuff, etc)
- Graph neural networks (approximation, optimization)
- Deep learning for PDEs
- Offline / batch RL
- Self-supervised RL





