// src/data/placeholder.js
import { 
  FaCode, FaServer, FaLaptopCode, FaRobot, 
  FaDatabase, FaBrain, FaChartLine
} from 'react-icons/fa';

// Placeholder data for when MongoDB is not connected
export const placeholderData = {
  about: {
    name: "John Doe",
    title: "Full Stack Developer & Data Scientist",
    email: "john.doe@example.com",
    location: "New York, USA",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    githubUrl: "https://github.com/johndoe",
    profileImage: "https://via.placeholder.com/150",
    bio: "Hi, I'm John! I'm a passionate full stack developer and data scientist with over 5 years of experience building web applications and working with machine learning models.\n\nI love solving complex problems and creating elegant solutions. My background in both software engineering and data science allows me to bridge the gap between these two domains and build data-driven applications that deliver real value.",
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Stanford University",
        duration: "2018 - 2020",
        description: "Specialized in Machine Learning and Artificial Intelligence"
      },
      {
        degree: "B.S. in Computer Science",
        institution: "MIT",
        duration: "2014 - 2018",
        description: "Minor in Mathematics"
      }
    ],
    skills: [
      {
        name: "Frontend Development",
        description: "Building responsive and interactive user interfaces with React, Angular, and Vue",
        level: 90,
        category: "development"
      },
      {
        name: "Backend Development",
        description: "Creating robust APIs and server applications with Node.js, Python, and Java",
        level: 85,
        category: "development"
      },
      {
        name: "Data Science",
        description: "Data analysis, visualization, and machine learning model development",
        level: 80,
        category: "data"
      },
      {
        name: "DevOps",
        description: "CI/CD pipelines, containerization, and cloud infrastructure management",
        level: 75,
        category: "operations"
      },
      {
        name: "Database Design",
        description: "Schema design, query optimization, and data modeling",
        level: 85,
        category: "database"
      },
      {
        name: "Problem Solving",
        description: "Algorithms, data structures, and computational thinking",
        level: 90,
        category: "core"
      }
    ]
  },

  problemSolving: {
    introduction: "I excel at solving complex technical challenges through a combination of analytical thinking, algorithmic knowledge, and creative approaches.",
    approaches: [
      {
        title: "Algorithmic Thinking",
        description: "Breaking down complex problems into manageable components and designing efficient algorithms to solve them."
      },
      {
        title: "Data-Driven Analysis",
        description: "Using data to understand patterns, identify bottlenecks, and inform solution design."
      },
      {
        title: "Creative Problem Solving",
        description: "Thinking outside the box to find innovative solutions when conventional approaches fall short."
      }
    ],
    platforms: [
      {
        name: "LeetCode",
        handle: "johndoe_codes",
        rating: "Top 5%",
        description: "Solved over 500 problems across all difficulty levels",
        achievements: [
          "Ranked in top 100 for weekly contests multiple times",
          "Completed all Dynamic Programming challenges",
          "Contributed several problem solutions to the discussion forum"
        ]
      },
      {
        name: "Codeforces",
        handle: "jdoe_dev",
        rating: "Candidate Master (1900+)",
        description: "Participated in over 50 competitive programming contests",
        achievements: [
          "Reached Candidate Master rating in under 6 months",
          "Finished in top 100 in two global rounds",
          "Solved complex graph theory and combinatorics problems"
        ]
      }
    ],
    projects: [
      {
        title: "Efficient Path Finder",
        description: "Implemented a highly optimized A* pathfinding algorithm for a route planning application.",
        image: "https://via.placeholder.com/300",
        technologies: ["Python", "NetworkX", "Algorithms"],
        githubLink: "https://github.com/johndoe/pathfinder"
      },
      {
        title: "Data Compression Tool",
        description: "Developed a custom compression algorithm that achieves 20% better compression ratio for specific file types.",
        image: "https://via.placeholder.com/300",
        technologies: ["C++", "Information Theory", "Data Structures"],
        githubLink: "https://github.com/johndoe/compressor"
      },
      {
        title: "Distributed Cache System",
        description: "Built a distributed caching system with efficient invalidation protocols and minimal network overhead.",
        image: "https://via.placeholder.com/300",
        technologies: ["Go", "Redis", "Distributed Systems"],
        githubLink: "https://github.com/johndoe/distcache",
        demoLink: "https://example.com/demo/cache"
      }
    ]
  },

  development: {
    introduction: "I specialize in building scalable, maintainable, and user-friendly applications using modern technologies and best practices.",
    skills: [
      {
        name: "React & React Native",
        description: "Building responsive web and mobile applications with reusable components",
        level: 90,
        category: "frontend"
      },
      {
        name: "Node.js",
        description: "Developing high-performance backend services and RESTful APIs",
        level: 85,
        category: "backend"
      },
      {
        name: "GraphQL",
        description: "Designing efficient data query interfaces with Apollo and Prisma",
        level: 80,
        category: "backend"
      },
      {
        name: "MongoDB & PostgreSQL",
        description: "Database modeling, optimization, and administration",
        level: 85,
        category: "database"
      },
      {
        name: "Docker & Kubernetes",
        description: "Containerization and orchestration for microservices architecture",
        level: 75,
        category: "devops"
      },
      {
        name: "AWS Cloud Services",
        description: "Leveraging cloud infrastructure for scalable applications",
        level: 80,
        category: "cloud"
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce solution with product management, cart functionality, and payment processing.",
        image: "https://via.placeholder.com/300",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
        githubLink: "https://github.com/johndoe/ecommerce",
        demoLink: "https://demo-ecommerce.example.com"
      },
      {
        title: "Real-time Collaboration Tool",
        description: "Developed a collaborative workspace with real-time document editing and team communication features.",
        image: "https://via.placeholder.com/300",
        technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
        githubLink: "https://github.com/johndoe/collabtool",
        demoLink: "https://collaborate.example.com"
      },
      {
        title: "Fitness Tracking App",
        description: "Created a mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
        image: "https://via.placeholder.com/300",
        technologies: ["React Native", "Firebase", "TensorFlow.js"],
        githubLink: "https://github.com/johndoe/fitnessapp"
      }
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "Gathering user needs and business requirements to define project scope and objectives.",
        tools: ["User Interviews", "User Stories", "Wireframing", "Figma"]
      },
      {
        title: "Architecture Design",
        description: "Designing system architecture with focus on scalability, security, and maintainability.",
        tools: ["System Diagrams", "AWS", "Microservices", "API Design"]
      },
      {
        title: "Development & Testing",
        description: "Implementing features with a test-driven approach and continuous integration.",
        tools: ["Git", "Jest", "Cypress", "GitHub Actions"]
      },
      {
        title: "Deployment & Monitoring",
        description: "Automating deployment processes and implementing monitoring for performance and errors.",
        tools: ["Docker", "Kubernetes", "Prometheus", "Grafana"]
      }
    ]
  },

  machineLearning: {
    introduction: "I combine theoretical knowledge with practical implementation to build effective machine learning and AI solutions for real-world problems.",
    skills: [
      {
        name: "Supervised Learning",
        description: "Classification and regression models for predictive analytics",
        level: 90,
        category: "ml"
      },
      {
        name: "Deep Learning",
        description: "Neural networks for computer vision and natural language processing tasks",
        level: 85,
        category: "deep learning"
      },
      {
        name: "Reinforcement Learning",
        description: "Training agents through reward-based learning for sequential decision making",
        level: 75,
        category: "ai"
      },
      {
        name: "Data Preprocessing",
        description: "Cleaning, transforming, and preparing data for machine learning pipelines",
        level: 90,
        category: "data science"
      },
      {
        name: "Model Deployment",
        description: "Deploying ML models to production environments with monitoring",
        level: 80,
        category: "ml"
      }
    ],
    projects: [
      {
        title: "Predictive Maintenance System",
        description: "Developed an ML system that predicts equipment failures before they occur, reducing downtime by 30%.",
        image: "https://via.placeholder.com/300",
        technologies: ["Python", "TensorFlow", "Time Series Analysis", "IoT"],
        githubLink: "https://github.com/johndoe/predictive-maintenance",
        demoLink: "https://demo.example.com/maintenance"
      },
      {
        title: "Natural Language Query Engine",
        description: "Created an NLP system that allows users to query databases using natural language questions.",
        image: "https://via.placeholder.com/300",
        technologies: ["BERT", "PyTorch", "spaCy", "SQL"],
        githubLink: "https://github.com/johndoe/nlq-engine"
      },
      {
        title: "Computer Vision for Agriculture",
        description: "Built a system that analyzes drone imagery to identify plant diseases and optimize crop management.",
        image: "https://via.placeholder.com/300",
        technologies: ["OpenCV", "CNNs", "Transfer Learning", "Drone Imagery"],
        githubLink: "https://github.com/johndoe/agri-vision"
      }
    ],
    researchAreas: [
      {
        title: "Explainable AI",
        description: "Developing methods to make complex ML models more interpretable and transparent.",
        keyPoints: [
          "LIME and SHAP for local explanations",
          "Feature importance visualization",
          "Counterfactual explanations for decision understanding"
        ]
      },
      {
        title: "Few-shot Learning",
        description: "Exploring techniques to train effective models with limited labeled data.",
        keyPoints: [
          "Meta-learning approaches",
          "Transfer learning optimization",
          "Data augmentation strategies"
        ]
      }
    ],
    publications: [
      {
        title: "Advances in Few-shot Learning for Computer Vision Tasks",
        authors: "Doe, J., Smith, A., and Johnson, B.",
        venue: "International Conference on Machine Learning",
        year: "2022",
        abstract: "This paper presents a novel approach to few-shot learning that combines meta-learning with contrastive representation learning.",
        link: "https://example.com/paper1"
      },
      {
        title: "Interpretable Deep Learning: Beyond the Black Box",
        authors: "Doe, J. and Williams, C.",
        venue: "Journal of Artificial Intelligence Research",
        year: "2021",
        abstract: "We propose a framework for making deep neural networks more interpretable while maintaining high performance.",
        link: "https://example.com/paper2"
      }
    ]
  },

  travelling: {
    introduction: "Exploring new places, experiencing different cultures, and creating lasting memories through my travels around the world.",
    countriesVisited: [
      "United States", "Japan", "Italy", "France", "Australia", 
      "Thailand", "Germany", "Spain", "Canada", "Mexico"
    ],
    totalTrips: 25,
    favoriteDestinations: ["Kyoto", "Barcelona", "New York", "Swiss Alps", "Bali"],
    trips: [
      {
        location: "Kyoto, Japan",
        date: "April 2023",
        description: "Explored traditional temples, gardens, and experienced the cherry blossom season.",
        image: "https://via.placeholder.com/400x300",
        highlights: [
          "Visited the Fushimi Inari Shrine",
          "Experienced a traditional tea ceremony",
          "Explored the Arashiyama Bamboo Grove",
          "Stayed in a traditional Ryokan"
        ]
      },
      {
        location: "Barcelona, Spain",
        date: "June 2022",
        description: "Immersed in the unique architecture, vibrant street life, and Mediterranean cuisine.",
        image: "https://via.placeholder.com/400x300",
        highlights: [
          "Toured Gaudí's masterpieces including Sagrada Família",
          "Explored the Gothic Quarter",
          "Relaxed on Barceloneta Beach",
          "Enjoyed tapas on La Rambla"
        ]
      },
      {
        location: "Swiss Alps",
        date: "December 2021",
        description: "Winter wonderland experience with skiing, mountain views, and charming villages.",
        image: "https://via.placeholder.com/400x300",
        highlights: [
          "Skied in Zermatt with views of the Matterhorn",
          "Rode the Glacier Express panoramic train",
          "Explored the car-free village of Mürren",
          "Tried traditional Swiss fondue"
        ]
      }
    ],
    philosophy: "Travel has been my greatest teacher. It's opened my mind to new perspectives, challenged my assumptions, and helped me grow as a person.\n\nI believe that immersing yourself in different cultures is one of the most enriching experiences. It builds empathy, adaptability, and a deeper understanding of our shared humanity despite our differences.\n\nWhether it's navigating language barriers, trying exotic foods, or finding my way through unfamiliar streets, each travel experience has built my confidence and problem-solving abilities in ways that translate to both my personal and professional life.",
    philosophyImage: "https://via.placeholder.com/600x400"
  },

  achievements: {
    introduction: "A collection of recognitions, awards, and milestones that mark my professional journey and accomplishments.",
    totalAwards: 8,
    totalCertifications: 5,
    totalPublications: 3,
    totalHonors: 7,
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    quoteAuthor: "Albert Schweitzer",
    items: [
      {
        title: "Best Paper Award",
        organization: "International Conference on Machine Learning",
        date: "July 2022",
        description: "Received the best paper award for research on few-shot learning techniques.",
        type: "Award"
      },
      {
        title: "AWS Certified Solutions Architect - Professional",
        organization: "Amazon Web Services",
        date: "March 2023",
        description: "Validated expertise in designing distributed systems on AWS.",
        type: "Certification"
      },
      {
        title: "Hackathon Winner",
        organization: "TechCrunch Disrupt",
        date: "September 2021",
        description: "First place in the annual hackathon for an innovative AI-powered accessibility tool.",
        type: "Award"
      },
      {
        title: "TensorFlow Developer Certificate",
        organization: "Google",
        date: "January 2022",
        description: "Demonstrated proficiency in building ML models using TensorFlow.",
        type: "Certification"
      },
      {
        title: "Distinguished Speaker",
        organization: "Web Summit",
        date: "November 2022",
        description: "Invited to give a talk on the future of explainable AI.",
        type: "Honor"
      },
      {
        title: "Research Publication",
        organization: "Journal of Artificial Intelligence",
        date: "May 2023",
        description: "Published research on interpretable deep learning techniques.",
        type: "Publication"
      }
    ]
  },

  hackathons: {
    introduction: "My journey through various hackathons where I've collaborated, innovated, and built solutions under time pressure.",
    totalParticipated: 12,
    totalWins: 5,
    totalProjects: 15,
    teamSize: "3-4",
    projects: [
      {
        title: "MediConnect",
        description: "A platform connecting patients with medical specialists for remote consultations using AI-powered matching.",
        image: "https://via.placeholder.com/300",
        technologies: ["React", "Node.js", "TensorFlow.js", "WebRTC"],
        githubLink: "https://github.com/johndoe/mediconnect",
        demoLink: "https://demo.example.com/mediconnect"
      },
      {
        title: "EcoTrack",
        description: "An IoT-based solution for monitoring and reducing household energy consumption with gamification elements.",
        image: "https://via.placeholder.com/300",
        technologies: ["Arduino", "React Native", "Firebase", "D3.js"],
        githubLink: "https://github.com/johndoe/ecotrack"
      },
      {
        title: "CodeBuddy",
        description: "An AI-powered programming assistant that provides contextual code suggestions and explains complex code snippets.",
        image: "https://via.placeholder.com/300",
        technologies: ["Python", "GPT-3", "VS Code Extension", "TypeScript"],
        githubLink: "https://github.com/johndoe/codebuddy",
        demoLink: "https://demo.example.com/codebuddy"
      }
    ],
    timeline: [
      {
        name: "TechCrunch Disrupt Hackathon",
        date: "September 2023",
        location: "San Francisco, CA",
        description: "48-hour hackathon focused on breakthrough technologies",
        achievement: "First Place Winner"
      },
      {
        name: "AI for Good Hackathon",
        date: "March 2023",
        location: "Virtual",
        description: "Building AI solutions to address UN Sustainable Development Goals",
        achievement: "Best Social Impact Award"
      },
      {
        name: "HealthTech Innovation Challenge",
        date: "November 2022",
        location: "Boston, MA",
        description: "Creating solutions to improve patient care and healthcare efficiency",
        achievement: "Finalist"
      },
      {
        name: "Global Climate Hackathon",
        date: "April 2022",
        location: "Berlin, Germany",
        description: "Developing tech solutions to combat climate change",
        achievement: "Second Place"
      }
    ]
  },

  dataEngineering: {
    introduction: "I specialize in designing and implementing scalable data infrastructure and ETL pipelines for analytics and machine learning systems.",
    skills: [
      {
        name: "Data Pipeline Architecture",
        description: "Designing efficient, scalable, and maintainable data processing workflows",
        level: 90,
        category: "pipeline"
      },
      {
        name: "Big Data Technologies",
        description: "Working with distributed computing frameworks for large-scale data processing",
        level: 85,
        category: "database"
      },
      {
        name: "Cloud Data Solutions",
        description: "Implementing data lakes, warehouses, and ETL processes in cloud environments",
        level: 85,
        category: "cloud"
      },
      {
        name: "Data Modeling",
        description: "Designing schemas and data models for analytical and operational databases",
        level: 80,
        category: "database"
      },
      {
        name: "Data Quality & Governance",
        description: "Implementing controls and monitoring for data quality and compliance",
        level: 75,
        category: "analytics"
      }
    ],
    projects: [
      {
        title: "Real-time Analytics Platform",
        description: "Built a streaming data pipeline processing millions of events per minute for a retail analytics dashboard.",
        image: "https://via.placeholder.com/300",
        technologies: ["Apache Kafka", "Spark Streaming", "Elasticsearch", "Kibana"],
        githubLink: "https://github.com/johndoe/realtime-analytics",
        demoLink: "https://demo.example.com/analytics"
      },
      {
        title: "Data Lake Architecture",
        description: "Designed and implemented a multi-tier data lake solution supporting both batch and streaming workloads.",
        image: "https://via.placeholder.com/300",
        technologies: ["AWS S3", "Delta Lake", "Apache Airflow", "Glue", "Athena"],
        githubLink: "https://github.com/johndoe/datalake-arch"
      },
      {
        title: "ML Feature Store",
        description: "Developed a centralized feature repository for machine learning models with version control and lineage tracking.",
        image: "https://via.placeholder.com/300",
        technologies: ["Python", "Feast", "PostgreSQL", "Redis", "Docker"],
        githubLink: "https://github.com/johndoe/feature-store"
      }
    ],
    technologies: {
      "Databases & Storage": ["PostgreSQL", "MongoDB", "Cassandra", "Amazon S3", "HDFS", "Snowflake"],
      "Processing & Compute": ["Apache Spark", "Apache Kafka", "Apache Flink", "dbt", "Airflow", "Luigi"],
      "Cloud Platforms": ["AWS", "Google Cloud Platform", "Azure Data Factory", "Databricks"],
      "Monitoring & Quality": ["Great Expectations", "Apache Griffin", "Prometheus", "Grafana", "dbt Tests"]
    },
    pipelineDescription: "I approach data engineering with a focus on building robust, scalable systems that can evolve with changing business needs. My typical architecture includes layered data storage with raw, processed, and consumption zones.\n\nI emphasize modularity and reusability in pipeline components, allowing for easier maintenance and extension. Data quality checks are integrated at multiple stages to ensure reliable outputs for downstream consumers.\n\nFor real-time use cases, I implement streaming architectures with proper error handling and exactly-once processing guarantees. For batch workflows, I design idempotent processes with comprehensive monitoring and alerting."
  },

  computerScience: {
    introduction: "My foundation in computer science fundamentals enables me to solve complex problems and build robust systems across different domains.",
    coreAreas: [
      {
        name: "Algorithms & Data Structures",
        description: "Design and analysis of algorithms, time and space complexity, optimization techniques",
        level: 95,
        category: "algorithms"
      },
      {
        name: "Operating Systems",
        description: "Process management, memory allocation, file systems, concurrency, and virtualization",
        level: 85,
        category: "systems"
      },
      {
        name: "Computer Networks",
        description: "Protocol design, network architecture, security, and distributed systems",
        level: 80,
        category: "networks"
      },
      {
        name: "Database Systems",
        description: "Relational theory, query optimization, transaction processing, and NoSQL systems",
        level: 90,
        category: "systems"
      },
      {
        name: "Programming Language Theory",
        description: "Language design, type systems, compilers, and runtime environments",
        level: 75,
        category: "systems"
      }
    ],
    projects: [
      {
        title: "Distributed Cache Implementation",
        description: "Built a distributed in-memory caching system with consistent hashing and fault tolerance.",
        image: "https://via.placeholder.com/300",
        technologies: ["Go", "gRPC", "Redis Protocol", "Raft Consensus"],
        githubLink: "https://github.com/johndoe/distributed-cache"
      },
      {
        title: "Virtual Machine from Scratch",
        description: "Implemented a stack-based virtual machine that can execute bytecode with garbage collection.",
        image: "https://via.placeholder.com/300",
        technologies: ["C++", "Assembly", "Compiler Theory"],
        githubLink: "https://github.com/johndoe/mini-vm"
      },
      {
        title: "Lock-Free Data Structures",
        description: "Developed thread-safe data structures using lock-free programming techniques for high concurrency.",
        image: "https://via.placeholder.com/300",
        technologies: ["C++", "Atomics", "Memory Models", "Benchmarking"],
        githubLink: "https://github.com/johndoe/lockfree-ds"
      }
    ],
    researchInterests: [
      {
        title: "Distributed Systems",
        description: "Study of scalable, fault-tolerant distributed computing systems and consensus protocols.",
        relatedConcepts: ["Consensus Algorithms", "CAP Theorem", "Distributed Transactions", "Partition Tolerance"]
      },
      {
        title: "Parallel Computing",
        description: "Techniques for efficient parallel algorithm design and implementation on modern hardware.",
        relatedConcepts: ["GPGPU", "Memory Hierarchies", "Work Stealing", "Lock-Free Programming"]
      }
    ],
    coreConcepts: [
      {
        name: "Time & Space Complexity",
        description: "Analysis of algorithm efficiency in terms of computational resources required."
      },
      {
        name: "Memory Management",
        description: "Techniques for efficient allocation, tracking, and freeing of memory resources."
      },
      {
        name: "Concurrency Control",
        description: "Methods to ensure correct operation when multiple processes access shared resources."
      },
      {
        name: "Networking Protocols",
        description: "Standards that enable communication between computing devices."
      },
      {
        name: "Database Normalization",
        description: "Process of structuring relational databases to reduce redundancy and improve integrity."
      },
      {
        name: "Finite State Machines",
        description: "Mathematical models used to design computer programs and digital logic circuits."
      }
    ]
  }
};

// Export individual section data for direct import
export const placeholderAboutData = placeholderData.about;
export const placeholderProblemSolvingData = placeholderData.problemSolving;
export const placeholderDevelopmentData = placeholderData.development;
export const placeholderMachineLearningData = placeholderData.machineLearning;
export const placeholderTravellingData = placeholderData.travelling;
export const placeholderAchievementsData = placeholderData.achievements;
export const placeholderHackathonsData = placeholderData.hackathons;
export const placeholderDataEngineeringData = placeholderData.dataEngineering;
export const placeholderComputerScienceData = placeholderData.computerScience;