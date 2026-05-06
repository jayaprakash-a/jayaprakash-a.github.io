const portfolioData = {
  hero: {
    title: "",
    subtitle: "Hey! My name is Jayaprakash Akula and I am a Computer Vision Engineer. I am a Computer Science post-graduate from Indian Institute of Technology, Bombay with my thesis in multi-modal learning area. I graduated from the Indian Institute of Technology, Bombay in 2019 with a Bachelor's Degree in Computer Science and Engineering. I am a decent coder and programmer."
  },
  gallery: [
    { title: "Work", image: "images/work.png", link: "#experience" },
    { title: "Projects", image: "images/projects.png", link: "#projects" },
    { title: "Thesis", image: "images/thesis.png", link: "#projects" },
    { title: "Publications", image: "images/publication.png", link: "#publications" }
  ],
  experience: [
    {
      title: "3D Hand Tracking in the wild",
      meta: "Samsung Research Institute Bangalore | Oct 2022 to Oct 2025",
      description: "Developed sophisticated hand tracking systems predicting accurate 3D hand positions in world space using multiple cameras and depth ToF sensors.",
      details: "<p>Hand tracking is a big part of making XR (Extended Reality) feel natural you can just use your hands instead of relying on controllers. That means more intuitive interaction, better immersion, and a much lower learning curve, whether it’s for gaming, training, or general navigation in virtual or mixed reality.</p><p>In this project, we built a full pipeline to estimate accurate 3D hand positions in real-world coordinates using a combination of multiple grayscale fisheye cameras and a ToF depth sensor. The system starts by detecting hands across multiple camera views. We used a multi-view object detector along with a Kalman Filter to track hands smoothly over time, and applied Non-Maximal Suppression to clean up overlapping detections. </p><p>Once we have the hand regions, we run a keypoint model to estimate detailed hand joints.</p><p>For 3D tracking, we triangulate 2D keypoints from multiple camera views using an SVD-based optimization approach, which gives us accurate 3D joint positions in real time. We also fused information from the ToF sensor to improve depth estimation. The final system achieved around <b>~5 pixels MPJPE in 2D</b> and <b>~14 mm in 3D</b>, with an even more optimized variant getting below <b>4 mm MPJPE</b>.</p><p>One of the key challenges was making the output stable over time. We reduced temporal jitter by about 60% using a combination of statistical filters (like 1-Euro) and learned temporal models, which made the hand motion look much smoother in XR.</p><p>On the deployment side, we quantized models to 8-bit and optimized them to run efficiently on-device using SNPE. The entire system—from detection to 3D reconstruction—was designed to run in real time on embedded hardware.</p>",
      bullets: [
        "Developed multiple deep learning models for 2D and 3D hand pose estimation for single and multi view inputs.",
        "Trained 8-bit quantized models and deployed on device using SNPE.",
        "Achieved an overall MPJPE of ~5pixels (2D) and around ~14mm (3D)."
      ],
      tags: ["C++", "SNPE", "Python", "PyTorch"]
    },
    {
      title: "JumpShot - Multi Human Pose Estimation",
      meta: "Samsung Research Institute Bangalore | July 2021 to Oct 2022",
      description: "Developed a robust multi-human pose and posture recognition system for Samsung’s Single Take Photo mode.",
      details: "<p>Capturing the perfect jump shot is harder than it looks the “peak” moment lasts just a split second, and most people end up jumping over and over trying to time it right. It’s tiring and still pretty hit-or-miss.</p><p>This is where Samsung’s <b>Single Take</b> feature comes in. Instead of worrying about when to tap the shutter, you just hit it once while the person jumps. Behind the scenes, an on-device AI engine tracks the motion in real time, figures out whether it’s a proper jump (not just a small hop), and pinpoints the exact frame where the subject reaches maximum height.</p><p>I worked on the AI system powering this feature, specifically on human pose estimation. The core idea was to detect key body joints (2D pose) from images and track them across time to understand motion patterns. We built lightweight deep neural networks that support both single-person and multi-person scenarios, optimized for temporal sequences so the model can reason about motion not just individual frames.</p><p>A big challenge was making everything fast enough to run directly on a phone. We optimized and deployed the models on-device, achieving around <b>80 FPS</b> end-to-end, which made real-time processing possible without relying on the cloud.</p><p>Once the capture is done, the system automatically processes the footage and generates a set of curated outputs, including the perfect jump shot. The idea is simple: you focus on the moment, and the AI makes sure you don’t miss it.</p><p>This feature was commercialized and shipped across Samsung flagship devices starting from the Galaxy S23 series.</p>",
      bullets: [
        "Developed light weight multi-human pose estimation model for video sequences running at 80fps.",
        "Product commercialized in all flagship Samsung devices as JumpShot starting from S23 series."
      ],
      tags: ["OpenCV", "Python", "PyTorch", "Caffe", "C++"]
    },
    {
      title: "Chat bot and Voice banking service",
      meta: "I-Exceed Technology Solutions | May 2018 to Jul 2018",
      description: "Developed a python based chat bot for internet banking with named entity recognition and spell checker functionalities.",
      details: "<p>I worked on building a chatbot for digital banking platforms at a company focused on helping financial institutions modernize their customer experience. The goal was pretty straightforward—make banking interactions faster, simpler, and available 24/7 without needing users to visit a branch or wait for support.</p><p>The chatbot was designed to handle common tasks like answering customer queries, helping with KYC updates, and providing information about banking services and schemes. A key focus was to make the interaction feel natural and seamless, so users don’t feel like they’re talking to a rigid system.</p><p>On the technical side, I worked on core NLP components like Named Entity Recognition (NER) to understand user inputs better, along with a spell-checking system to handle noisy or misspelled queries. This helped improve the overall accuracy and reliability of the chatbot responses.</p><p>I also built an API to collect and store user voice samples, which were then used to train a speech-to-text model. This enabled us to extend the chatbot into a voice-based interface, allowing users to interact with the system using speech instead of typing.</p><p>The speech-to-text pipeline was developed using deep learning models, making it robust enough for real-world usage in a banking context. Overall, the project combined NLP and speech technologies to create a more accessible and user-friendly digital banking experience.</p>",
      bullets: [],
      tags: ["Python", "Tensorflow"]
    },
    {
      title: "FOSSEE Summer Internship",
      meta: "Indian Institute of Technology Bombay | May 2017 to July 2017",
      description: "Helped in creating a web version of Xcos, a Scilab application, and developed a module that enables two way communication with minimal latency.",
      details: "<p>I worked on bringing Xcos (a Scilab-based tool for modeling and simulating dynamic systems) to the web, so users could run simulations directly in a browser without needing to install any software. The idea was to make it more accessible and easier to use, especially for people who just want to quickly build and test system models using block diagrams.</p><p>Xcos itself lets you design systems by connecting blocks that represent mathematical functions or dynamic components, including both continuous and discrete systems. Our goal was to replicate these core capabilities in a browser environment while keeping the experience smooth and interactive.</p><p>My main contribution was building a module for the <b>tkscale block</b> that supports two-way communication in real time. This essentially means that when a user adjusts a control (like a slider), the change is immediately reflected in the simulation, and the simulation outputs can also update the UI dynamically.</p><p>One of the key challenges here was minimizing latency to make the interaction feel truly real-time. We optimized the communication layer to ensure fast and reliable data exchange between the frontend and the simulation backend, achieving near real-time performance.</p>",
      bullets: [],
      tags: ["Python", "JavaScript", "C", "Fortran"]
    }
  ],
  projects: [
    {
      title: "Self supervised audio-visual learning",
      meta: "Master's Thesis | Aug 2020 - Jun 2021",
      description: "Investigated various techniques to learn joint audio-visual-linguistic embeddings for video-text retrieval and explored novel audio-visual video parsing tasks.",
      details: "<p>This project was about understanding what’s happening in a video by combining both audio and visual signals—for example, figuring out not just <i>what</i> event is occurring (like a dog barking or a car passing by), but also <i>when</i> exactly it starts and ends in the video.</p> <p>We approached this as a multimodal learning problem, where the model learns from both sound and visuals together instead of treating them separately. More specifically, we framed it as a Multiple Instance Learning setup, where the model looks at different time segments of a video and figures out which parts actually contain meaningful events.</p> <p>A key part of the work was improving how audio and visual information interact. We used a transformer-based architecture (inspired by UNITER) and pre-trained it using a self-supervised task called audio-video grounding. This essentially teaches the model to align what it hears with what it sees, using large-scale datasets like AudioSet before fine-tuning on the target task.</p> <p>On top of that, we built a hybrid attention network that uses global context-aware attention to better capture long-range dependencies across the video. We also incorporated adversarial training to make the model more robust and improve generalization across different types of audio-visual events.</p> <p>To handle temporal localization, we used an attentive pooling mechanism that selectively focuses on the most relevant segments across both modalities. This helped the model pick out useful signals from noisy or less relevant parts of the video.</p> <p>We evaluated the system on the LLP (Look, Listen, and Parse) dataset and ran detailed ablation studies to understand the impact of each component—pretraining, attention, and adversarial learning. Overall, the combination of these techniques led to better alignment between audio and visual cues and improved event detection performance.</p> <p><b>References:</b><br> <a href='https://www.cse.iitb.ac.in/~malta/avvp.html' target='_blank'>Project Page</a><br> <a href='https://www.isca-archive.org/interspeech_2021/lamba21_interspeech.pdf' target='_blank'>Research Paper (Interspeech 2021)</a> </p>",
      tags: ["Python", "PyTorch"]
    },
    {
      title: "Self-supervised cross modality representation learning",
      meta: "Master's Thesis | Jan 2020 - Jun 2021",
      description: "Explored self-supervised representation learning for unimodal and multimodal settings. Suggested audio-linguistic feature representation yielding a 5.6% improvement.",
      details: "<p>This project focuses on improving video-text retrieval by learning richer joint embeddings between videos and natural language using an enhanced loss formulation. Traditional approaches rely on triplet-based losses that consider only positive and negative pairs, which often fail to adequately model semantically ambiguous or partially related samples—especially in low-resource settings. To address this, the work introduces a novel quadruplet-based partial-order loss that incorporates an additional “partial” sample, representing intermediate semantic similarity between positive and negative pairs. By enforcing differential margins among positive, partial, and negative samples, the method achieves better structuring of the embedding space and improved coverage of complex semantic relationships. The partial samples are generated using domain-informed heuristics, enabling scalable supervision without heavy annotation costs. Experimental results across multiple datasets demonstrate consistent improvements over standard triplet and max-margin losses, establishing the approach as an effective solution for robust and generalizable video-text retrieval.</p>",
      tags: ["Python", "PyTorch"]
    },
    {
      title: "Sahayatra Android App",
      meta: "Bachelor's Thesis | Aug 2018 - Apr 2019",
      description: "Developed a robust open-source ride allocation and dispatch application utilizing MVVM architecture and secure microservices.",
      details: "<p> I worked on building an open-source ride dispatch app aimed at making ride-sharing more practical for smaller, closed communities like organizations or remote villages. The idea was to keep it simple, customizable, and reliable even in low-connectivity environments. Right now, the app supports Android devices and focuses on efficiently matching drivers with customers. </p> <p> On the Android side, I developed the app in Kotlin using an MVVM architecture, integrating features like maps and network handling with Volley. For the backend, I designed a microservices-based system using Node.js (Express.js) with MySQL and Knex for database management, and Redis for caching. Authentication and security were handled using JSON Web Tokens (JWT). One of the key challenges I worked on was implementing an offline-friendly driver location estimation mechanism so the system can still function reasonably well in areas with poor internet connectivity. </p> <p> You can check out the project here: <a href='https://bitbucket.org/sahayatra/' target='_blank'>Sahayatra Ride Dispatch Project</a> </p>",
      tags: ["Android", "NodeJS", "MySQL", "Redis"]
    }
  ],
  publications: [
    {
      title: "Posture Guided Human Action Recognition for Fitness Applications",
      meta: "ICVGIP 2022 | Dec 2022",
      description: "Proposed a novel multi-stage deep learning method for action recognition to predict upright as well as non-upright actions with high accuracy, optimizing for computational efficiency.",
      details: "<p><strong>Abstract</strong></p><p>Human action recognition has attracted a lot of attention in the recent past due to newer applications in computer vision such as fitness tracking, augmented reality and virtual reality. Most of the existing deep learning based methods first deploy a deep neural network to estimate the human pose from a sequence of images followed by a second network to classify the human actions using all the estimated human poses. However, the pose estimation used in these methods typically fail to generalize for non-upright actions such as push-ups, plank, etc since the keypoints are closer to each other than observed in upright postures such as jump, dead-lift, etc. Hence, the accuracy of these methods gets impacted for non-upright actions, typically seen in fitness applications. In this paper, we propose a novel multi-stage deep learning based method for action recognition to predict upright as well as non-upright actions with high accuracy. We use a Light Weight Boundary Refinement Module (LWBRM) during pose estimation to distinguish closer keypoints more effectively. Further, we also introduce an intermediate frame-by-frame posture classification stage after pose estimation. We observed that this intermediate stage enables us to improve the human action recognition accuracy by while improving computational efficiency by ∼ 2 × compared to state-of-the-art methods. Our method can process at 104 frames per second on an android smartphone, and hence can readily be deployed for consumer oriented fitness applications.</p>",
      link: "https://dl.acm.org/doi/10.1145/3571600.3571612",
      citations: 1
    },
    {
      title: "Cross Lingual Video and Text Retrieval: A New Benchmark Dataset and Algorithm",
      meta: "ACM ICMI 2021 | Jul 2021",
      description: "Introduced RUDDER, a multilingual video-text retrieval dataset, and a margin-based partial-order loss to compensate for data scarcity in audio-visual embeddings.",
      details: "<p><strong>Abstract</strong></p><p>Video retrieval using natural language queries requires learning semantically meaningful joint embeddings between the text and the audio-visual input. Often, such joint embeddings are learnt using pairwise (or triplet) contrastive loss objectives which cannot give enough attention to ‘difficult-to-retrieve’ samples during training. This problem is especially pronounced in data-scarce settings where the data is relatively small (10% of the large scale MSR-VTT) to cover the rather complex audio-visual embedding space. In this context, we introduce Rudder - a multilingual video-text retrieval dataset that includes audio and textual captions in Marathi, Hindi, Tamil, Kannada, Malayalam and Telugu. Furthermore, we propose to compensate for data scarcity by using domain knowledge to augment supervision. To this end, in addition to the conventional three samples of a triplet (anchor, positive, and negative), we introduce a fourth term - a partial - to define a differential margin based partialorder loss. The partials are heuristically sampled such that they semantically lie in the overlap zone between the positives and the negatives, thereby resulting in broader embedding coverage. Our proposals consistently outperform the conventional max-margin and triplet losses and improve the state-of-the-art on MSR-VTT and DiDeMO datasets. We report benchmark results on Rudder while also observing significant gains using the proposed partial order loss, especially when the language specific retrieval models are jointly trained by availing the  cross-lingual alignment across the language-specific datasets.</p>",
      link: "https://dl.acm.org/doi/10.1145/3462244.3479913",
      citations: 3
    },
    {
      title: "Cross-Modal learning for Audio-Visual Video Parsing",
      meta: "Interspeech 2021 | Jul 2021",
      description: "Presented a novel approach to the audio-visual video parsing task that demarcates events from a video separately for audio and visual modalities utilizing adversarial training and global context-aware attention.",
      details: "<p><strong>Abstract</strong></p><p>In this paper, we present a novel approach to the audio-visual video parsing (AVVP) task that demarcates events from a video separately for audio and visual modalities. The proposed parsing approach simultaneously detects the temporal boundaries in terms of start and end times of such events. We show how AVVP can benefit from the following techniques geared towards effective cross-modal learning: (i) adversarial training and skip connections (ii) global context aware attention and, (iii) self-supervised pretraining using an audio-video grounding objective to obtain cross-modal audio-video representations. We present extensive experimental evaluations on the Look, Listen, and Parse (LLP) dataset and show that we outperform the state-of-the-art Hybrid Attention Network (HAN) on all five metrics proposed for AVVP. We also present several ablations to validate the effect of pretraining, global attention and adversarial training.</p>",
      link: "https://www.isca-archive.org/interspeech_2021/lamba21_interspeech.pdf",
      citations: 10
    },
    {
      title: "Caption Alignment for Low Resource Audio-Visual Data",
      meta: "Interspeech 2020 | Oct 2019",
      description: "Focused on making effective use of the audio modality for temporal localization of captions within videos, releasing a new audio-visual dataset in English and Marathi.",
      details: "<p><strong>Abstract</strong></p><p>Understanding videos via captioning has gained a lot of traction recently. While captions are provided alongside videos, the information about where a caption aligns within a video is missing, which could be particularly useful for indexing and retrieval. Existing work on learning to infer alignments has mostly exploited visual features and ignored the audio signal. Video understanding applications often underestimate the importance of the audio modality. We focus on how to make effective use of the audio modality for temporal localization of captions within videos. We release a new audio-visual dataset that has captions time-aligned by (i) carefully listening to the audio and watching the video, and (ii) watching only the video. Our dataset is audio-rich and contains captions in two languages, English and Marathi (a low-resource language). We further propose an attention-driven multimodal model, for effective utilization of both audio and video for temporal localization. We then investigate (i) the effects of audio in both data preparation and model design, and (ii) effective pretraining strategies (Audioset, ASR-bottleneck features, PASE, etc.) handling low-resource setting to help extract rich audio representations.</p>",
      link: "https://www.isca-archive.org/interspeech_2020/konda20_interspeech.pdf",
      citations: 1
    }
  ],
  achievements: [
    {
      title: "Research Excellence Award",
      meta: "Indian Institute of Technology Bombay",
      description: "Secured research excellence award for Master’s thesis at Indian Institute of Technology Bombay"
    },
    {
      title: "Work Achievements",
      meta: "Samsung Research Bangalore",
      description: "Awarded Star of the Quarter and multiple team awards for my contributions at Samsung Research Bangalore."
    },
    {
      title: "Coding proficiency",
      meta: "Samsung Research Bangalore",
      description: "Received professional certification for coding competence at Samsung Research Bangalore."
    },
    {
      title: "Top-performer incentive",
      meta: "Samsung Research Institute Bangalore",
      description: "Recognised as core-staff member of Samsung Research Bangalore (awarded to less than 0.1%people)."
    },

  ]
};
