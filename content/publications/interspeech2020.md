---
title: "Caption Alignment for Low Resource Audio-Visual Data"
description: Interspeech 2020
timeline: 25th October 2019
authors: Co-authored along with Vighnesh Reddy Konda, Mayur Warialani and Rakesh Prasanth Achari
date: "2019-10-25T19:25:30+02:00"
publishDate: "2019-10-25T19:25:30+02:00"
---

**Brief Abstract:** Understanding videos via captioning has gained a lot of traction recently. 
<!--more-->

While captions are provided alongside videos, the information about where a caption aligns within a video is missing, which could be particularly useful for indexing and retrieval. Existing work on learning to infer alignments has mostly exploited visual features and ignored the audio signal. Video understanding applications often underestimate the importance of the audio modality. We focus on how to make effective use of the audio modality for temporal localization of captions within videos. We release a new audio-visual dataset that has captions time-aligned by 

1. carefully listening to the audio and watching the video, and 
2. watching only the video. 

Our dataset is audio-rich and contains captions in two languages, English and Marathi (a low-resource language). We further propose an attention-driven multimodal model, for effective utilization of both audio and video for temporal localization. We then investigate 

1. the effects of audio in both data preparation and model design, and 
2. effective pretraining strategies (Audioset, ASR-bottleneck features, PASE, etc.) handling low-resource setting to help extract rich audio representations. 

{{< links "https://github.com/varadhbhatnagar/MALTA" "https://www.isca-speech.org/archive/Interspeech_2020/pdfs/3157.pdf" "https://docs.google.com/presentation/d/18tUdPUuTaIjA6IGkMG4W53JwSUB54o50Jh9D75weNow/edit?usp=sharing" >}}