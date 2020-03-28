---
layout: post
title: Imitation learning
---

#### Motivation

Imitation learning is the subfield concerned with learning policies from
expert demonstrations. Cascading errors and distribution mismatch are
the main challenges in imitation learning. Guided policy search
simultaneously trains a neural network policy to imitate expert
trajectories and generates additional expert trajectories which stay
close to the policy. After this week you should understand the
challenges of designing an imitation learning algorithm such as GPS.

<!--more-->

#### Topics

-   Imitation learning

-   Compounding error

-   Dataset Aggregation (DAGGER)

#### Required reading

-   [Drew Bagnell’s An Invitation to
    Imitation](https://pdfs.semanticscholar.org/f04d/3ddee335927186b012a1bee765c142ddce57.pdf)

-   The original DAGGER paper: [A Reduction of Imitation Learning and
    Structured Prediction to No-Regret Online
    Learning](https://arxiv.org/pdf/1011.0686.pdf)

#### Optional reading

-   [Hal Daumé’s book chapter on imitation
    learning](http://ciml.info/dl/v0_99/ciml-v0_99-ch18.pdf), which
    covers much of the same material as the Bagnell monograph from a
    slightly different perspective

-   An influential modern paper which addresses imitation learning as
    state distribution matching: [Generative Adversarial Imitation
    Learning](https://arxiv.org/abs/1606.03476)

-   Using imitation learning for very impressive physics-based
    animation: [DeepMimic: Example-Guided Deep Reinforcement Learning of
    Physics-Based Character
    Skills](https://arxiv.org/pdf/1804.02717.pdf)
    ([video](https://www.youtube.com/watch?v=vppFvq2quQ0))

#### Questions

-   What are the main challenges in learning policies by behavior
    cloning?

-   What information about the environment is behavior cloning using and
    ignoring?

-   How does DAGGER address those challenges? What changes to the
    setting does DAGGER require to do so?

-   Is DAGGER safe during training?

-   Other than interactively querying a human, how could we generate the
    expert guidance that DAGGER needs?
