export const personalInfo = {
  name: "Irshad Alam",
  title: "Full Stack Developer",
  subtitle: "React | Next.js | Java | Spring Boot | Microservices | Express.js | MongoDB",
  bio: "I am a full-stack developer with a balanced background in startup-level rapid development and enterprise-grade engineering discipline. My expertise spans across powerful frontend frameworks like React and Next.js, scalable backend ecosystems such as Spring Boot microservices and Express.js, and full-stack architecture using modern databases and tools.",
  location: "Kushinagar, India",
  email: "irshadalam.nith@gmail.com",
  phone: "+91-9628602137",
  linkedin: "https://www.linkedin.com/in/irshad-alam-5399a3204/",
  github: "https://github.com/irshad-alam-irish",
  portfolio: "https://irshadalam.dev"
};

export const skills = {
  frontend: [
    { name: "HTML5 & CSS3", icon: "Code2" },
    { name: "JavaScript (ES6+)", icon: "FileJson" },
    { name: "React.js", icon: "Atom" },
    { name: "Next.js", icon: "Zap" },
    { name: "Material-UI", icon: "Palette" },
    { name: "Tailwind CSS", icon: "Wind" },
    { name: "Bootstrap", icon: "Layout" },
    { name: "Framer Motion", icon: "Sparkles" },
    { name: "shadcn/ui", icon: "Component" }
  ],
  backend: [
    { name: "Core Java", icon: "Coffee" },
    { name: "Spring Boot", icon: "Leaf" },
    { name: "Microservices", icon: "Network" },
    { name: "Spring Security", icon: "Shield" },
    { name: "Hibernate/JPA", icon: "Database" },
    { name: "Node.js", icon: "Server" },
    { name: "Express.js", icon: "Boxes" }
  ],
  database: [
    { name: "MongoDB", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "MySQL", icon: "Database" },
    { name: "SQL Server", icon: "Database" },
    { name: "SQLite", icon: "Database" }
  ],
  tools: [
    { name: "Git & GitHub", icon: "Github" },
    { name: "Postman", icon: "Send" },
    { name: "pnpm", icon: "Package" },
    { name: "SendGrid API", icon: "Mail" },
    { name: "WSL", icon: "Terminal" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services (TCS)",
    role: "React Developer",
    period: "Feb 2025 – Present",
    location: "Onsite, India",
    type: "Current Role",
    description: "Building and maintaining large-scale React applications for enterprise clients.",
    responsibilities: [
      "Building scalable UI components using React, MUI, and Tailwind",
      "Integrating with backend microservices",
      "Modernizing enterprise UI systems",
      "Creating reusable, scalable UI components",
      "Ensuring performance, accessibility, and clean coding standards"
    ],
    current: true
  },
  {
    id: 2,
    company: "Tata Consultancy Services (TCS)",
    role: "Java Developer (Training Phase)",
    period: "Nov 2024 – Feb 2025",
    location: "Onsite, India",
    type: "Training",
    description: "Intensive training in enterprise Java development and microservices architecture.",
    responsibilities: [
      "Trained under TCS corporate curriculum",
      "Built enterprise-grade applications using Core Java, Spring Boot, Microservices, Hibernate",
      "Designed REST APIs and microservice patterns",
      "Strengthened understanding of clean architecture, OOP, and system design"
    ],
    current: false
  },
  {
    id: 3,
    company: "CareerSuite.ai",
    role: "Full-Time Developer",
    period: "May 2024 – Oct 2024",
    location: "Remote, Australia",
    type: "Full-Time",
    description: "Developed full-stack features for an AI-powered career guidance platform.",
    responsibilities: [
      "Built full modules end-to-end (UI → Logic → API → DB)",
      "Designed course recommendation features",
      "Implemented mentor-matching algorithms UI",
      "Created dynamic dashboards with MUI components",
      "Built Excel upload → parser → DB automation flow",
      "Developed SendGrid-based email workflows (welcome, OTP, reset emails)"
    ],
    current: false
  },
  {
    id: 4,
    company: "CareerSuite.ai",
    role: "Software Developer Intern",
    period: "Feb 2024 – May 2024",
    location: "Remote, Australia",
    type: "Internship",
    description: "Started my professional journey building UI components and learning full-stack development.",
    responsibilities: [
      "Developed UI modules using React, MUI, and Tailwind",
      "Participated in API integration and modular component design",
      "Debugged critical UI issues and optimized frontend performance",
      "Assisted in backend workflows with Express.js",
      "Learned Agile patterns and Git-based team collaboration"
    ],
    current: false
  }
];

export const projects = [
  {
    id: 1,
    title: "School ERP System",
    description: "Comprehensive school management system with multiple modules for efficient administration.",
    tech: ["React", "MUI", "Express.js", "MongoDB", "Framer Motion"],
    features: [
      "Streams, Classes, and Subjects management",
      "Transport and Routes tracking",
      "Fees Management system",
      "Dashboard with statistics",
      "Complex card layouts with popups",
      "Full CRUD operations"
    ],
      image: "/images/project-erp.png"
  
  },
  {
    id: 2,
    title: "AI Mentor Recommendation Platform",
    description: "Intelligent platform that matches users with mentors based on their skill set and goals.",
    tech: ["React", "Node.js", "MongoDB", "AI/ML"],
    features: [
      "Skill-based mentor matching algorithm",
      "Dynamic skill chips and badges",
      "Professional mentor profiles",
      "Clean card layout with CTAs",
      "API integration for recommendations"
    ],
    image: "/images/AI-Mentor.jpeg"
  },
  {
    id: 3,
    title: "LegalSightAI",
    description: "Legal assistance platform providing rules, guidance, and AI-powered legal insights.",
    tech: ["React", "FastAPI", "SendGrid", "PostgreSQL"],
    features: [
      "User signup and authentication",
      "OTP verification flow",
      "Email automation with SendGrid",
      "Formal legal UI design",
      "Accessibility-focused interface"
    ],
    image: "/images/Legalsight.jpeg"
  },
  {
    id: 4,
    title: "Course Recommendation & Tracking System",
    description: "Smart course recommendation engine that suggests courses based on skill gaps.",
    tech: ["React", "Python", "SQLAlchemy", "MongoDB"],
    features: [
      "Skill gap analysis",
      "Dynamic course suggestions",
      "User dashboard for booked courses",
      "Tag-based filtering",
      "Course-user mapping system"
    ],
    image: "/images/course-recomendation.jpeg"
  },
  {
    id: 5,
    title: "Excel Automation for User Signup",
    description: "Bulk user import system that processes Excel files and automates user creation.",
    tech: ["Node.js", "Express.js", "MongoDB", "xlsx"],
    features: [
      "Excel file upload and parsing",
      "Duplicate user detection",
      "Auto-password generation",
      "Direct database integration",
      "Validation and error handling"
    ],
    image: "/images/excel-automation.jpg"
  },
  {
    id: 6,
    title: "AI Mentor Avatar Popup",
    description: "Interactive AI chatbot interface with smooth animations and engaging user experience.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Lucide Icons"],
    features: [
      "Animated popup with smooth transitions",
      "Interactive AI bot interface",
      "Modern icon integration",
      "Responsive design",
      "Enhanced user engagement"
    ],
    image: "/images/ai-mentor--.jpeg"
  },
  {
    id: 7,
    title: "Animated Personal Portfolio",
    description: "Modern developer portfolio with elegant animations and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Hero section with profile",
      "Mobile-responsive layout",
      "Elegant motion effects",
      "Clean modern design",
      "SEO optimized"
    ],
    image: "/images/Animated-portfolio.jpeg"
  }
];

export const stats = [
  { label: "Years Experience", value: "2+", icon: "Calendar" },
  { label: "Projects Completed", value: "15+", icon: "Briefcase" },
  { label: "Technologies", value: "20+", icon: "Code2" },
 { label: "Open Source Contributions", value: "1+", icon: "Github" }
];
