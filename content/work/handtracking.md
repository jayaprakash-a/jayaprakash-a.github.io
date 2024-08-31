---
title: "3D Hand Tracking in the wild"
description: Details of project
timeline: Oct 2022 to present
guidance: Mr. Bindigan Pawan Prasad
organisation: Samsung Research Institute Bangalore
date: "2022-10-30T19:25:30+02:00"
publishDate: "2022-10-30T19:25:30+02:00"
---

The project involves predicting accurate 3D hand positions in world space using multiple cameras including monochrome fisheye cameras and depth ToF sensor.
<!--more-->

We have developed a sophisticated hand tracking system that begins with detecting hand positions in multi-view grayscale images. This involves using a Kalman Filter for tracking and refining the detection process with Non-Maximal Suppression to eliminate overlapping bounding boxes. By addressing false positives, false negatives, and partial hand detections, we significantly improved the model’s precision and recall, ensuring accurate hand position tracking.

For hand-keypoint estimation, we trained a model to identify specific hand features within the detected bounding boxes. We experimented with various architectures and added biomechanical constraints to filter out unrealistic poses, enhancing robustness. Additionally, we implemented a real-time visualization system that triangulates 2D keypoints from multiple sensors to compute 3D joint positions using an SVD-based minimization algorithm. This allows for precise and real-time tracking of hand movements in three dimensions, providing a detailed representation of hand gestures.

#### **Responsibilities**

- Worked on the 3D Hand tracking using grayscale cameras and ToF sensor
- Developed multiple deep learning models for 2D and 3D hand pose estimation for single and multi view inputs
- Applied biomechanical constraints as training objectives along with 2D/3D keypoint MSE
- Trained 8-bit quantized models and deployed on device using SNPE
- Achieved an overall MPJPE of ~5pixels (2D) and around ~14mm (3D)
- Reduced the temporal jitter from the solution by around 60\% using combination of statistical 1-euro filters and deep learning methods
- **Technologies:** C++, SNPE, Python, PyTorch
