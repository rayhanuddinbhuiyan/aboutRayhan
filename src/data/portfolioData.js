export const portfolioData = {
  personal: {
    name: "Rayhan Uddin Bhuiyan",
    shortName: "Rayhan",
    role: "Computer Science & Engineering Student",
    subRoles: [
      "Software Engineer & AI Researcher",
      "NLP & Computer Vision Specialist",
      "Full Stack Web Developer"
    ],
    bio: "I am a dedicated Computer Science and Engineering student maintaining a 3.84/4.00 CGPA at Southeast University. I specialize in software engineering, NLP research, Computer Vision in healthcare, and machine learning systems.",
    aboutDetailed: "I specialize in modern software development, artificial intelligence, NLP research, computer vision, and scalable web engineering. With a strong academic record maintaining a 3.84/4.00 CGPA in my final semester at Southeast University, I bridge theoretical computer science principles with practical software implementation and peer-reviewed research.",
    university: "Southeast University",
    degree: "BSc in Computer Science and Engineering",
    cgpa: "3.84 / 4.00",
    status: "Final Semester (1 Semester Remaining)",
    github: "https://github.com/rayhanuddinbhuiyan",
    linkedin: "https://bd.linkedin.com/in/rayhan-uddin-bhuiyan-683174376",
    phone: "+8801637619636",
    whatsapp: "https://wa.me/8801637619636",
    email: "rayhan.scholar@gmail.com",
    location: "Dhaka, Bangladesh",
    availability: "Open to Work (Software Engineering & AI Roles)"
  },

  interests: [
    { title: "Software Engineering", desc: "Designing modular, clean, and maintainable enterprise software architectures." },
    { title: "Web Development", desc: "Building responsive, modern, and interactive web applications using React.js and Spring Boot." },
    { title: "Natural Language Processing", desc: "Hands-on experience in NLP research, regional text classification, hate speech datasets, and language modeling." },
    { title: "Computer Vision in Healthcare", desc: "Hands-on experience applying Computer Vision to medical diagnostic imaging, specifically Oral Cancer feature extraction and classification." },
    { title: "Artificial Intelligence", desc: "Exploring neural networks, intelligent agent systems, and automated reasoning." },
    { title: "Machine Learning & Data Science", desc: "Applying statistical models, predictive analytics, and empirical dataset evaluation to real-world problems." }
  ],

  education: [
    {
      id: "seu-bsc",
      degree: "BSc in Computer Science and Engineering",
      institution: "Southeast University",
      status: "Final Semester (1 Semester Remaining)",
      cgpa: "3.84 / 4.00",
      location: "Dhaka, Bangladesh",
      description: "Comprehensive curriculum covering core computer science principles, software engineering methodologies, data structures, algorithms, databases, artificial intelligence, computer vision, and web technologies.",
      highlights: [
        "Consistently high academic standing with a 3.84 / 4.00 CGPA",
        "Published IEEE 28th ICCIT Conference Research Author (IEEE Xplore Published)",
        "Hands-on research in NLP (Hate Speech Datasets) and Computer Vision in Healthcare (Oral Cancer Detection)",
        "Key Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Machine Learning, Web Engineering, Operating Systems"
      ]
    },
    {
      id: "fgci-diploma",
      degree: "Diploma in Engineering",
      department: "Computer Science and Technology",
      institution: "Feni Govt. Computer Institute",
      status: "Completed",
      cgpa: "3.73 / 4.00",
      location: "Feni, Bangladesh",
      description: "Specialized technical diploma in the Department of Computer Science and Technology, focused on computer engineering, network administration, database management, hardware troubleshooting, and programming.",
      highlights: [
        "Department of Computer Science and Technology (CST)",
        "Graduated with a strong academic standing of 3.73 / 4.00 CGPA",
        "Hands-on practical training in computer engineering, system architecture, and software labs"
      ]
    },
    {
      id: "ssc-pilot",
      degree: "Secondary School Certificate (SSC)",
      institution: "Feni Govt. Pilot High School",
      status: "Science Group",
      cgpa: "4.83 / 5.00",
      location: "Feni, Bangladesh",
      description: "Secondary education background with a primary concentration in Science, Mathematics, and Higher Mathematics.",
      highlights: [
        "Achieved a 4.83 / 5.00 GPA in the Science Group",
        "Solid analytical foundation in mathematics and physical sciences"
      ]
    }
  ],

  skills: {
    programming: [
      { name: "Java", level: "Core / Advanced", icon: "Code2" },
      { name: "JavaScript", level: "ES6+ / Modern", icon: "FileCode" },
      { name: "Python", level: "Data Science & AI", icon: "Terminal" },
      { name: "C / C++", level: "Problem Solving", icon: "Cpu" }
    ],
    web: [
      { name: "React.js", level: "Frontend Framework", icon: "Layers" },
      { name: "HTML5 & CSS3", level: "Responsive Styling", icon: "Layout" },
      { name: "Spring Boot", level: "Backend Development", icon: "Server" },
      { name: "RESTful APIs", level: "Integration", icon: "Globe" }
    ],
    database: [
      { name: "MySQL", level: "Relational DB & SQL", icon: "Database" },
      { name: "Database Design", level: "Schema & Normalization", icon: "Table" }
    ],
    aiMl: [
      { name: "NLP Research", level: "Hate Speech & Datasets", icon: "MessageSquareText" },
      { name: "Computer Vision", level: "Healthcare & Oral Cancer", icon: "Eye" },
      { name: "Machine Learning", level: "Supervised & Unsupervised", icon: "Brain" },
      { name: "Deep Learning", level: "Neural Networks", icon: "Sparkles" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Version Control", icon: "GitBranch" },
      { name: "VS Code", level: "Primary IDE", icon: "Code" },
      { name: "Google Colab", level: "AI & ML Notebooks", icon: "Cloud" },
      { name: "Vite & Tooling", level: "Build Systems", icon: "Zap" }
    ]
  },

  projects: [
    {
      id: "bidwesh-hate-speech",
      title: "BIDWESH : A Bangla Regional Hate Speech Dataset",
      category: "NLP & AI Research",
      description: "A published benchmark NLP dataset and research framework developed for analyzing, detecting, and classifying regional Bangla hate speech and toxic comments across machine learning architectures.",
      repoUrl: "https://github.com/rayhanuddinbhuiyan",
      demoUrl: "https://ieeexplore.ieee.org/abstract/document/11491404",
      technologies: ["Python", "NLP", "Machine Learning", "Text Analytics", "Dataset Engineering"],
      features: [
        "Hands-on research on regional Bangla text processing and hate speech categorization",
        "Curated and annotated benchmark dataset for regional linguistic nuances",
        "Comprehensive model benchmarking across BERT, Transformer, and ML classifiers",
        "Published research contribution advancing low-resource regional NLP"
      ],
      featured: true
    },
    {
      id: "oral-cancer-cv",
      title: "Oral Cancer Medical Vision Diagnosis",
      category: "Computer Vision & Healthcare",
      description: "A healthcare AI project applying Computer Vision and Convolutional Neural Networks (CNNs) for early detection and visual classification of oral cancer lesions from clinical imaging datasets.",
      repoUrl: "https://github.com/rayhanuddinbhuiyan",
      demoUrl: null,
      technologies: ["Python", "Computer Vision", "Deep Learning", "PyTorch/TensorFlow", "OpenCV"],
      features: [
        "Hands-on experience in Healthcare Computer Vision and medical image analysis",
        "Automated image pre-processing, noise reduction, and lesion feature extraction",
        "Deep Learning classification pipeline optimized for high diagnostic sensitivity",
        "Visual evaluation metrics supporting medical decision assistance"
      ],
      featured: true
    },
    {
      id: "student-management",
      title: "Student Management System",
      category: "Desktop & Web System",
      description: "A comprehensive student management application engineered for managing academic records, student profiles, grade tracking, course enrollments, and administrative reporting.",
      repoUrl: "https://github.com/rayhanuddinbhuiyan/StudentManagementSystem.git",
      demoUrl: null,
      technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "Git"],
      features: [
        "Complete CRUD operations for student records and course enrollments",
        "Automated CGPA and grade calculation module",
        "Role-based control for administrative staff and students",
        "Fast database queries for record search and filtering"
      ],
      featured: true
    },
    {
      id: "talentscan",
      title: "TalentScan",
      category: "AI & Data Science",
      description: "An intelligent recruitment system leveraging NLP and ML to parse resumes, match skill sets against target job requirements, and rank candidate suitability.",
      repoUrl: "https://github.com/rayhanuddinbhuiyan/TalentScan.git",
      demoUrl: null,
      technologies: ["Python", "Machine Learning", "NLP", "React.js", "MySQL"],
      features: [
        "Automated resume parsing and candidate information extraction",
        "Semantic skill keyword matching and scoring algorithm",
        "Interactive dashboard for candidate profile evaluation"
      ],
      featured: false
    }
  ],

  activities: [
    {
      id: "iccit-paper",
      type: "Research Publication",
      title: "BIDWESH : A Bangla Regional Hate Speech Dataset",
      organization: "28th International Conference on Computer and Information Technology (ICCIT)",
      status: "Published on IEEE Xplore",
      paperUrl: "https://ieeexplore.ieee.org/abstract/document/11491404",
      description: "Published research paper and dataset titled 'BIDWESH : A Bangla Regional Hate Speech Dataset' at the 28th International Conference on Computer and Information Technology (ICCIT), available on IEEE Xplore.",
      highlights: [
        "Published in IEEE Xplore Digital Library (Document ID: 11491404)",
        "Hands-on experience in NLP research, regional dialect text classification, and dataset creation",
        "Conducted empirical experimental evaluations across competitive machine learning models",
        "Presented findings to academic researchers and international domain experts"
      ]
    },
    {
      id: "healthcare-cv-research",
      type: "Healthcare AI Research",
      title: "Computer Vision in Healthcare: Oral Cancer Detection",
      organization: "Department of Computer Science & Engineering, Southeast University",
      status: "Research & Development",
      description: "Hands-on research on applying state-of-the-art Computer Vision and deep learning techniques to medical healthcare datasets for early oral cancer detection.",
      highlights: [
        "Built diagnostic pipeline for medical image processing and visual feature segmentation",
        "Explored deep learning architectures tailored for clinical healthcare accuracy",
        "Collaborated with academic peers on medical AI technology applications"
      ]
    }
  ]
};

