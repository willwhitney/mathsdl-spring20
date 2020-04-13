---
layout: post
title: End-to-end training of deep visuomotor policies (Guided Policy Search)
---

#### Motivation

This is what it’s all about! Guided policy search is one of the most
efficient techniques for robotic control from vision with partially
known environments. This week we’ll put it all together, showing how GPS
combines trajectory optimization, imitation learning, and constrained
optimization to find high-quality neural network policies with very
little real-world experience.

<!--more-->

#### Topics

-   Guided Policy Search (GPS)

-   Trajectory optimization with unknown dynamics

-   Asymmetric imitation learning

#### Required reading

-   [End-to-end training of deep visuomotor
    policies](http://www.jmlr.org/papers/volume17/15-522/15-522.pdf)
    ([results video](https://www.youtube.com/watch?v=Q4bMcUk6pcw))

#### Optional reading

-   [Sergey’s lecture on
    GPS](http://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-12.pdf),
    which discusses some simpler alternatives and the problems with them
    ([video](https://www.youtube.com/watch?v=9AbBfIgTzoo&list=PLkFD6_40KJIwhWJpGazJ9VSj9CFMkb79A&index=13&t=0s))

-   [Asymmetric Actor Critic for Image-Based Robot
    Learning](https://arxiv.org/abs/1710.06542), a paper that takes the
    “asymmetric supervision” idea from GPS and applies it to model-free
    RL in simulation

#### Questions

-   How does GPS use each of the components we’ve discussed (LQR,
    imitation, constrained optimization)?

-   What advantages does the trained neural net policy have over the
    trajectory optimizer?

-   How does this paper propose to deal with unknown dynamics? When will
    this strategy work well?

-   How does GPS learn with so few samples?

-   What are the limitations of this method?
