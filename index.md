---
layout: page
title: Home
---

Topics course Mathematics of Deep Learning, NYU, Spring 2020. CSCI-GA 3033.

## Logistics

* Thursdays from 5.10pm-7pm <s>in CIWW 201</s> on Zoom: [https://nyu.zoom.us/j/528868904](https://nyu.zoom.us/j/528868904)

* (**optional**) Parallel Curriculum sessions: Fridays 11am-12:15pm <s>in CIWW 102</s> on Zoom: [https://nyu.zoom.us/j/724449246](https://nyu.zoom.us/j/724449246)

* Campuswire (forum): [sign up here](https://campuswire.com/p/G3EE2F76E) and use code 5548



## Instructors

__Lecture Instructor__: Joan Bruna ([bruna@cims.nyu.edu](mailto:bruna@cims.nyu.edu))

__Tutors (Parallel Curriculum)__: Will Whitney ([wwhitney@cs.nyu.edu](mailto:wwhitney@cs.nyu.edu)) and David Brandfonbrener ([david.brandfonbrener@nyu.edu](mailto:david.brandfonbrener@nyu.edu))


## Syllabus

This graduate-level course explores some of the open mathematical challenges arising in the study of Deep Learning. In particular, we will focus on three main topics: (i) signal processing principles underpinning convolutional neural networks and their generalisations to non-euclidean geometries (ii) non-convex optimization challenges arising in high-dimensional (or overparametrised) learning problems, and (iii) geometry of Markov Decision Processes and its role in Reinforcement Learning guarantees.

### Parallel curriculum

Besides the lectures, we will also run an optional parallel curriculum during the recitation section on two topics in reinforcement learning (RL). This parallel curriculum builds from the basics of RL to reach seminal modern papers in the field. We will have two segments. The first will lead to [Unifying Count-Based Exploration and Intrinsic Motivation](http://papers.nips.cc/paper/6382-unifying-count-based-exploration-and-intrinsic-motivation), covering bandits, deep Q-learning, and exploration along the way. The second will lead to [Guided Policy Search](http://www.jmlr.org/papers/volume17/15-522/15-522.pdf) and cover continuous control, trajectory optimization, imitation learning, and constrained optimization.



## Prerequisites

Background on high-dimensional probability, statistics, and/or harmonic analysis. Familiarity with general Machine Learning topics and basic notions of optimization.


## Assignments and Grading

The course will involve weekly required readings before class and a final paper, which will be an in-depth survey of a topic related to the syllabus. A detailed abstract of the final paper will be due in the middle of the term. The abstract and final paper should be submitted on [NYU Classes](https://newclasses.nyu.edu/portal/site/088123d4-f476-4f00-9382-f27d02b1502c/).

The course will be graded in three components: paper abstract, final paper, and participation.


### Final paper

The paper will be written in groups which should be roughly evenly divided around 12 topics (groups of 3-4). You can sign up with your group on [this spreadsheet](https://docs.google.com/spreadsheets/d/15XlvR-eXNTncQh9hyOWOduEw_45mOOsem-zH31wbkdU/edit?usp=sharing_eil&invite=CPzMrKcN&ts=5e2f3a27). There should be no more than one paper per topic. [Here is an example](assets/example_paper) of a high-quality paper from a previous year.

#### Paper proposal / abstract

The proposal should be two pages. The first page should include a description of the topic area and an outline of the major directions you will cover.
The second page should consist of a list of at least 10 papers which you will include in your review.
It is due by 10 PM on 3/5  by submission to [NYU classes](https://newclasses.nyu.edu/portal/site/088123d4-f476-4f00-9382-f27d02b1502c/).


## Lectures

| Week        | Lecture Date |  Topic       |  Section Date       | Parallel topic                     |
| ---------------|----------------| ------------|---------------------------|---------------------------|
| 1 | 1/30 | **Parallel takeover:** Introduction to Reinforcement Learning ([Lecture notes](http://mathsdl-spring20.willwhitney.com/assets/documents/Lecture1_Intro_to_RL.pdf))| 1/31 | **No session**  |
| 2 | 2/6  | Lecture 1: The Curse of Dimensionality  | 2/7  |  Bandits and the Upper confidence bound algorithm  |
| 3 | 2/13  | Lecture 2: Symmetries and Geometric Stability  | 2/14  |  Deep value-based RL and DQN  |
| 4 | 2/20  | Lecture 3: The Scattering Transform <br /> [**Topic due.**](https://docs.google.com/spreadsheets/d/15XlvR-eXNTncQh9hyOWOduEw_45mOOsem-zH31wbkdU/edit?usp=sharing_eil&invite=CPzMrKcN&ts=5e2f3a27) | 2/21  |  UCB in tabular RL  |
| 5 | 2/27  | Lecture 4: From Euclidean to Non-Euclidean Stability | 2/28  |  **Room change: 60FA room 110** <br /> Deep RL with principled exploration  |
| 6 | 3/5   | Lecture 5: Convex Optimization <br /> [**Abstract due.**](https://newclasses.nyu.edu/portal/site/088123d4-f476-4f00-9382-f27d02b1502c/) | 3/6  |  New directions in exploration for deep RL  |
| 7 | 3/12  | Lecture 6: Discrete vs Continuous Time, Mirror Descent. | 3/11  |  Control and linear trajectory optimization  |
| 8 | 3/19  | **Spring  Break**  | 3/20  |  **Spring Break**  |
| 9 | 3/26  | Lecture 7: Stochastic Optimization | 3/27  |  Iterative linear quadratic regulation  |
| 10 | 4/2  | Lecture 8: Topics in Non-Convex Optimization | 4/3  |  Imitation learning  |
| 11 | 4/9  | Lecture 9: Approximation in high-dimensional spaces.  | 4/10  |  Constrained optimization and ADMM  |
| 12 | 4/16  | Lecture 10: Reproducing Kernel Hilbert Spaces. Measure Spaces.   | 4/17  |  Guided Policy Search  |
| 13 | 4/23  | Lecture 11: Overparametrised Neural Networks. Lazy and Active regimes | 4/24  |  **No session**  |
| 14 | 4/30  | Lecture 12: Mean-Field Limit of overparamerised neural networks <br /> [**Paper due.**](https://newclasses.nyu.edu/portal/site/088123d4-f476-4f00-9382-f27d02b1502c/)  | 5/1  |  **No session**  |
| 15 | 5/7  | Lecture 13: Depth Separation. Open Problems  | 5/8  |  **No session**  |


## Main References

- [The Scattering Transform](assets/documents/ScatteringTransform.pdf)
- Geometric Deep Learning: going beyond Euclidean Data.
- [Understanding Machine Learning: from Theory to Algorithms](https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf)
- Breaking the Curse of Dimensionality with Convex Neural Networks, Bach.
- Convex Optimization: Algorithms and Complexity, Bubeck.
- Lazy Training
- Neural Tangent Kernel
- Mean-field papers

## Paper topics

The following are some recommended topics for the final paper. If your group doesn't want to do one of these topics, you can propose something else to us instead.

- Neural Tangent Kernel
- Depth separation
- Double descent
- PAC-Bayes
- Competitive optimization (games, VI, applications like GANs, mirror-prox, extra-gradient)
- Deep learning for PDEs
- Graph neural networks (approximation, optimization)
- Bayesian NNs (Bayes by backprop, Yarin Gal's work, etc)
- Self-supervised learning
- Imitation learning (behavior cloning, DAGGER, GAIL)
- Offline / batch RL (offline policy evaluation, connections to causal inference, etc)
- Advanced topics on control (path integral control, trajectory optimization, controller verification)
- Loss landscapes of neural networks
- Mean-field analysis of neural networks


