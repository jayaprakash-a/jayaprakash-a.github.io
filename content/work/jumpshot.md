---
title: "JumpShot - Multi Human Pose Estimation "
description: Details of work experience
timeline: July 2021 to Oct 2022
organisation: Samsung Research Institute Bangalore
guidance: Mr. Bindigan Pawan Prasad
date: "2021-07-29T19:25:30+02:00"
publishDate: "2021-07-29T19:25:30+02:00"
---

This work uses multi-human pose estimation at the core along with posture detection. 
<!--more-->
We have developed a roust multi-human pose and posture recognition system. We experimented with various top-down and bottom-up models to detect humans and their keypoints over time, and developed a multi-human tracking algorithm to ensure temporal consistency across frames. Additionally, we addressed occlusion issues, particularly with legs, to enhance posture detection accuracy.

For posture identification, we have trained a classifier to recognize various postures such as standing, squatting, jumping, and lunging. By implementing a temporal state machine, the system could determine actions performed by individuals, including detecting jumps and their timelines, from start to peak to end.

#### **Responsibilities :**

- Worked on the Single Take Photo (STP) mode of the Samsung’s camera app
- Developed light weight multi-human pose estimation model for video sequences
- Developed 
- The DNNs were ported to device and the entire pipeline was running at 80fps
- Product was commercialised in all the flagship Samsung devices as JumpShot starting from S23 series
- **Technologies:** OpenCV, Python, Pytorch, Caffe, C++

Here’s a brief read to understand the project’s impact and ideology. Checkout this [link](https://www.sammyfans.com/2023/03/03/samsung-single-take-camera-mode-gets-new-jump-shot-feature-available-on-galaxy-s23/) for more details.
