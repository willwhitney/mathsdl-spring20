---
layout: page
title: Home
---


# Parallel curriculum on reinforcement learning

Fridays 11am-12:15pm in CIWW 102.


Intro to Reinforcement Learning (covered in the intro lecture on 1/30)
======================================================================

[Lecture notes](http://mathsdl-spring20.willwhitney.com/assets/documents/Lecture1_Intro_to_RL.pdf)

#### Topics

-   Sequential decision making under uncertainty

-   Markov Decision Processes (MDP)

-   Challenges: credit assignment, exploration

-   Policy search:

    -   Ways to represent policies

    -   Ways to search for policies

    -   Policy gradients

-   Value estimation:

    -   Value function and Q function

    -   Bellman equation and Bellman optimality equation

    -   Dynamic programming and value iteration

    -   TD learning and Q-learning

    -   Policy iteration

#### Useful resources

-   The [Sutton and
    Barto](http://incompleteideas.net/book/the-book-2nd.html) textbook

-   [Github repo](https://github.com/dennybritz/reinforcement-learning)
    from Denny Britz with notebooks covering examples from the book

-   Courses from [Emma
    Brunskill](http://web.stanford.edu/class/cs234/CS234Win2019/index.html)
    (for more theory), [Sergey
    Levine](http://rail.eecs.berkeley.edu/deeprlcourse-fa18/index.html)
    (for more deep RL/control) [David
    Silver](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html)
    (for somewhere in between)

-   Lilian Weng’s [peek into reinforcement
    learning](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html)
    blog post

-   [Gridworld
    visualization](https://cs.stanford.edu/people/karpathy/reinforcejs/index.html)
    from Andrej Karpathy

Unifying count-based exploration and intrinsic motivation
=========================================================

#### Overview

The paper we are targeting in this section of the curriculum extends
traditional exploration techniques to the deep learning setting. We will
cover the basics of exploration algorithms and value-based deep RL and
then see how the paper is able to combine the two.

Bandits and the upper confidence bound (UCB) algorithm (2/7)
------------------------------------------------------------

#### Motivation

The most basic setting where we need to consider the
exploration/exploitation tradeoff is in multi-armed bandits. This week
we will introduce the bandit problem and see how concentration
inequalities are used to derive the upper confidence bound algorithm
which has near optimal worst-case regret.

#### Topics

-   Multi-Armed Bandit (MAB)

-   Concentration inequalities

-   UCB algorithm

#### Required reading

-   [Chapter 1](https://arxiv.org/pdf/1904.07272.pdf) of this monograph
    on bandits by Aleksandrs Slivkins (pages 5-13)

-   [Blog
    post](https://gauss.math.yale.edu/~gcl22/blog/probability/2018/01/07/concentration-inequalities.html)
    about concentration inequalities by George Linderman

#### Optional reading

-   Lecture on exploration from [David
    Silver](https://www.youtube.com/watch?v=sGuiWX07sKw&t=2s) or [Emma
    Brunskill](https://www.youtube.com/watch?v=RN8qpSs8ozY&list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u&index=11)

-   [Chapters 7 and
    8](https://tor-lattimore.com/downloads/book/book.pdf) from the
    Bandit Algorithms textbook by Lattimore and Szepesvari

#### Questions

-   Implement UCB and play with bandits in [this
    notebook](https://colab.research.google.com/drive/14e0ortd6yvfRKl6zSt4JV5D_q26EcVSC)

-   Why do we need exploration?

-   Give an intuitive explanation for why optimism in the face of
    uncertainty works.

-   (Optional) Complete exercise 1.1 from Slivkins


Deep value-based RL (and DQN) (2/14)
------------------------------------

#### Motivation

In the introduction, we saw value-based RL algorithms (and specifically
Q learning) in the tabular setting where we keep a separate Q value for
each $ s,a$ pair. If we want to scale to large state spaces we will need
to be able to *generalize* across an infinite state space using a
function approximator, like a neural network. This week we will see how
Q-learning can be modified to support function approximation and read
the influential paper from Deepmind introducing the deep Q network (DQN)
algorithm.

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