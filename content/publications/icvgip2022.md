---
title: "Posture Guided Human Action Recognition for Fitness Applications"
description: ICVGIP 2022
timeline: 8th December 2022
authors: Co-authored along with Vishakha S R, B H Pawan Prasad and Green Rosh
date: "2022-12-08T19:25:30+02:00"
publishDate: 2022-12-08T19:25:30+02:00"
---

**Brief Abstract:** Multi-stage deep learning based method for action recognition to predict upright as well as non-upright actions with high accuracy
<!--more-->
Human action recognition has attracted a lot of attention in the recent past due to newer applications in computer vision such as fitness tracking, augmented reality and virtual reality. 

Most of the existing deep learning based methods first deploy a deep neural network to estimate the human pose from a sequence of images followed by a second network to classify the human actions using all the estimated human poses. However, the pose estimation used in these methods typically fail to generalize for non-upright actions such as push-ups, plank, etc since the keypoints are closer to each other than observed in upright postures such as jump, dead-lift, etc. Hence, the accuracy of these methods gets impacted for non-upright actions, typically seen in fitness applications. 

In this paper, we propose a novel multi-stage deep learning based method for action recognition to predict upright as well as non-upright actions with high accuracy. We use a Light Weight Boundary Refinement Module (LWBRM) during pose estimation to distinguish closer keypoints more effectively. Further, we also introduce an intermediate frame-by-frame posture classification stage after pose estimation. We observed that this intermediate stage enables us to improve the human action recognition accuracy by while improving computational efficiency by ∼2× compared to state-of-the-art methods. Our method can process at 104 frames per second on an android smartphone, and hence can readily be deployed for consumer oriented fitness applications.

{{< links "" "https://dl.acm.org/doi/10.1145/3571600.3571612" "" >}}