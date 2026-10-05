export const portfolioData = {
  personal: {
    name: "Rayhan Uddin Bhuiyan",
    shortName: "Rayhan",
    role: "Computer Science & Engineering Student",
    subRoles: [
      "Aspiring Software Engineer",
      "AI & Data Science Enthusiast",
      "Full Stack Web Developer"
    ],
    bio: "I am a dedicated Computer Science and Engineering student at Southeast University with a passion for building scalable software systems, intelligent web applications, and data-driven solutions.",
    aboutDetailed: "I specialize in modern software development, artificial intelligence, machine learning, data science, and web engineering. With a strong academic record maintaining a 3.84/4.00 CGPA in my final semester at Southeast University, I bridge theoretical computer science principles with practical software implementation.",
    university: "Southeast University",
    degree: "BSc in Computer Science and Engineering",
    cgpa: "3.84 / 4.00",
    status: "Final Semester (1 Semester Remaining)",
    github: "https://github.com/rayhanuddinbhuiyan",
    linkedin: "https://bd.linkedin.com/in/rayhan-uddin-bhuiyan-683174376",
    phone: "+8801637619636",
    email: "rayhan.scholar@gmail.com",
    location: "Dhaka, Bangladesh",
    availability: "Available for Software Engineering & Intern Roles"
  },

  interests: [
    { title: "Software Engineering", desc: "Designing modular, clean, and maintainable enterprise software architectures." },
    { title: "Web Development", desc: "Building responsive, modern, and interactive web applications using React.js and Spring Boot." },
    { title: "Artificial Intelligence", desc: "Exploring neural networks, intelligent agent systems, and automated reasoning." },
    { title: "Machine Learning & Data Science", desc: "Applying statistical models, data analysis, and Predictive AI to real-world datasets." },
    { title: "Computer Vision", desc: "Processing digital image data, object detection, and visual feature extraction." },
    { title: "Natural Language Processing", desc: "Analyzing textual datasets, sentiment classification, and intelligent language modeling." }
  ],

  education: [
    {
      id: "seu-bsc",
      degree: "BSc in Computer Science and Engineering",
      institution: "Southeast University",
      status: "Final Semester (1 Semester Remaining)",
      cgpa: "3.84 / 4.00",
      location: "Dhaka, Bangladesh",
      description: "Comprehensive curriculum covering core computer science principles, software engineering methodologies, data structures, algorithms, databases, artificial intelligence, and web technologies.",
      highlights: [
        "Consistently high academic standing with a 3.84 CGPA",
        "Author of an IEEE 28th ICCIT Conference Research Paper (IEEE Xplore Published)",
        "Key Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Machine Learning, Web Engineering, Operating Systems"
      ]
    },
    {
      id: "fgci-diploma",
      degree: "Diploma in Engineering",
      institution: "Feni Govt. Computer Institute",
      status: "Completed",
      cgpa: "3.73 / 4.00",
      location: "Feni, Bangladesh",
      description: "Specialized technical diploma focused on computer technology, network administration, database management, hardware troubleshooting, and foundational programming.",
      highlights: [
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
      { name: "Machine Learning", level: "Supervised & Unsupervised", icon: "Brain" },
      { name: "Deep Learning", level: "Neural Networks", icon: "Sparkles" },
      { name: "Computer Vision", level: "Image Processing", icon: "Eye" },
      { name: "NLP", level: "Text Analytics", icon: "MessageSquareText" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Version Control", icon: "GitBranch" },
      { name: "VS Code", level: "Primary IDE", icon: "Code" },
      { name: "Google Colab", level: "AI & ML Notebooks", icon: "Cloud" },
      { name: "Vite & Modern Tooling", level: "Build Systems", icon: "Zap" }
    ]
  },

  projects: [
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
      description: "An intelligent recruitment and talent evaluation system that leverages Natural Language Processing and Machine Learning to parse resumes, match skill sets against target job requirements, and rank candidate suitability.",
      repoUrl: "https://github.com/rayhanuddinbhuiyan/TalentScan.git",
      demoUrl: null,
      technologies: ["Python", "Machine Learning", "NLP", "React.js", "MySQL"],
      features: [
        "Automated resume parsing and candidate information extraction",
        "Semantic skill keyword matching and scoring algorithm",
        "Interactive dashboard for viewing top-matching applicant profiles",
        "Customizable job description skill weight configuration"
      ],
      featured: true
    },
    {
      id: "seums",
      title: "SEUMS / University Management System",
      category: "Web Engineering",
      description: "An integrated web portal designed to streamline university administrative processes, student registration workflows, faculty course management, and academic announcements.",
      repoUrl: "https://github.com/rayhanuddinbhuiyan",
      demoUrl: null,
      technologies: ["React.js", "JavaScript", "HTML5/CSS3", "MySQL", "REST APIs"],
      features: [
        "Modular dashboard interface for students and academic advisors",
        "Course catalog browsing and real-time registration slot tracking",
        "Notice board for departmental announcements and schedule updates",
        "Responsive glassmorphism UI layout optimized for web and mobile"
      ],
      featured: true
    }
  ],

  activities: [
    {
      id: "iccit-paper",
      type: "Research Paper",
      title: "IEEE 28th ICCIT Conference Paper",
      organization: "28th International Conference on Computer and Information Technology (ICCIT)",
      status: "Published on IEEE Xplore",
      paperUrl: "https://ieeexplore.ieee.org/abstract/document/11491404",
      description: "Authored and presented a peer-reviewed research paper at the 28th International Conference on Computer and Information Technology (ICCIT), published on IEEE Xplore.",
      highlights: [
        "Published in IEEE Xplore digital library (Document ID: 11491404)",
        "Conducted empirical experimental evaluation and dataset analysis",
        "Presented findings to academic researchers and domain experts"
      ]
    },
    {
      id: "academic-projects",
      type: "Academic & Technical Projects",
      title: "Undergraduate Computer Science Research & Capstone",
      organization: "Department of Computer Science & Engineering, Southeast University",
      status: "Ongoing / Final Year",
      description: "Engaged in collaborative capstone project development, algorithmic problem solving, software design architecture, and peer learning initiatives.",
      highlights: [
        "Maintained high academic standard (3.84 CGPA) across advanced CSE coursework",
        "Active involvement in departmental programming contests and technical workshops"
      ]
    }
  ]
};
