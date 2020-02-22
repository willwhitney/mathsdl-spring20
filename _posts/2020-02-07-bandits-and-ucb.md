---
layout: post
title: Bandits and the Upper Confidence Bound algorithm
---

#### Motivation

The most basic setting where we need to consider the
exploration/exploitation tradeoff is in multi-armed bandits. This week
we will introduce the bandit problem and see how concentration
inequalities are used to derive the upper confidence bound algorithm
which has near optimal worst-case regret.

<!--more-->

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