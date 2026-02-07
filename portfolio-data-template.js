/* ============================================
   PORTFOLIO CONTENT DATA TEMPLATE
   
   This file contains all your portfolio content in one place.
   Edit this file to update your portfolio information easily.
   
   NOTE: This is a template to help you organize your content.
   You still need to manually update index.html with these values.
   Consider building a dynamic version using this data structure.
   ============================================ */

const portfolioData = {
    
    /* ==========================================
       PERSONAL INFORMATION
       ========================================== */
    personal: {
        name: "Your Name",
        title: "Full Stack Developer & Creative Problem Solver",
        tagline: "Crafting elegant solutions through code and design",
        location: "City, Country",
        
        contact: {
            email: "your.email@example.com",
            phone: "+1 (234) 567-890",
            
            social: {
                github: "https://github.com/yourusername",
                linkedin: "https://linkedin.com/in/yourusername",
                twitter: "https://twitter.com/yourusername"
            }
        }
    },

    /* ==========================================
       ABOUT ME SECTION
       ========================================== */
    about: {
        introduction: [
            "Hello! I'm a passionate developer who loves turning ideas into reality through clean, efficient code.",
            
            "With expertise in both front-end and back-end development, I create comprehensive solutions that not only work flawlessly but also provide exceptional user experiences. My journey in tech has been driven by curiosity and a constant desire to learn and innovate.",
            
            "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
        ],
        
        skills: {
            frontend: [
                "HTML5, CSS3, JavaScript",
                "React, Vue.js, Angular",
                "Tailwind CSS, Bootstrap",
                "Responsive Design"
            ],
            
            backend: [
                "Node.js, Express",
                "Python, Django, Flask",
                "Java, Spring Boot",
                "RESTful APIs, GraphQL"
            ],
            
            tools: [
                "MongoDB, PostgreSQL, MySQL",
                "Git, GitHub, GitLab",
                "Docker, Kubernetes",
                "AWS, Azure, Heroku"
            ]
        }
    },

    /* ==========================================
       EDUCATION SECTION
       ========================================== */
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University Name",
            period: "2018 - 2022",
            description: "Focused on software engineering, algorithms, and data structures. Graduated with honors (GPA: 3.8/4.0).",
            achievements: [
                "Dean's List: 6 semesters",
                "Completed capstone project on machine learning applications",
                "President of Computer Science Society"
            ]
        },
        
        {
            degree: "Master of Science in Software Engineering",
            institution: "University Name",
            period: "2022 - 2024",
            description: "Advanced studies in distributed systems, cloud computing, and software architecture. Thesis on microservices optimization.",
            achievements: [
                "GPA: 3.9/4.0",
                "Research Assistant in Cloud Computing Lab",
                "Published 2 papers in IEEE conferences"
            ]
        }
    ],

    /* ==========================================
       CERTIFICATIONS
       ========================================== */
    certifications: [
        "AWS Certified Solutions Architect",
        "Google Cloud Professional Developer",
        "MongoDB Certified Developer",
        "Kubernetes Administrator (CKA)"
    ],

    /* ==========================================
       PROJECTS SECTION
       ========================================== */
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project"
        },
        
        {
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable reports.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project"
        },
        
        {
            title: "Task Management App",
            description: "Collaborative task management tool with drag-and-drop interface, real-time collaboration, and notification system.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
            technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project"
        },
        
        {
            title: "Social Media Analytics",
            description: "AI-powered social media analytics platform with sentiment analysis and engagement tracking.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
            technologies: ["Django", "TensorFlow", "Redis", "Celery"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project"
        },
        
        {
            title: "Weather Forecast App",
            description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
            technologies: ["Angular", "TypeScript", "OpenWeather API", "Leaflet"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project"
        },
        
        {
            title: "Fitness Tracking Platform",
            description: "Comprehensive fitness app with workout tracking, nutrition planning, and progress visualization.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
            technologies: ["React Native", "Express", "MongoDB", "Chart.js"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project"
        }
    ],

    /* ==========================================
       EXPERIENCE SECTION
       ========================================== */
    experience: [
        {
            position: "Senior Full Stack Developer",
            company: "Tech Company Inc.",
            period: "Jan 2024 - Present",
            description: "Leading development of enterprise-level web applications and mentoring junior developers. Architecting scalable microservices and implementing CI/CD pipelines.",
            achievements: [
                "Improved application performance by 40% through code optimization",
                "Led a team of 5 developers in building a customer portal used by 100K+ users",
                "Implemented automated testing reducing bugs in production by 60%",
                "Migrated legacy systems to cloud-native architecture"
            ],
            technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
        },
        
        {
            position: "Full Stack Developer",
            company: "Digital Solutions Ltd.",
            period: "Jun 2022 - Dec 2023",
            description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers to deliver high-quality solutions.",
            achievements: [
                "Built 15+ responsive web applications for various clients",
                "Reduced page load time by 50% through optimization techniques",
                "Integrated third-party APIs and payment gateways",
                "Conducted code reviews and established best practices"
            ],
            technologies: ["Vue.js", "Python", "MongoDB", "Redis"]
        },
        
        {
            position: "Junior Web Developer",
            company: "StartUp Innovations",
            period: "Aug 2021 - May 2022",
            description: "Started my professional journey building features for a growing SaaS platform. Learned agile methodologies and modern development practices.",
            achievements: [
                "Developed user-facing features using React and Redux",
                "Fixed 200+ bugs and improved code quality",
                "Collaborated with UX team to implement responsive designs",
                "Participated in sprint planning and daily standups"
            ],
            technologies: ["React", "JavaScript", "REST APIs", "Git"]
        },
        
        {
            position: "Software Development Intern",
            company: "Big Tech Corp",
            period: "Summer 2021",
            description: "Summer internship focused on web development and database management. Gained hands-on experience with enterprise-level codebases.",
            achievements: [
                "Contributed to internal tools used by 500+ employees",
                "Wrote comprehensive documentation for new features",
                "Participated in code reviews and learned best practices"
            ],
            technologies: ["Angular", "Java", "MySQL"]
        }
    ],

    /* ==========================================
       BACKGROUND IMAGES
       URLs for section backgrounds
       ========================================== */
    backgroundImages: {
        home: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
        about: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
        education: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop",
        projects: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop",
        experience: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&h=1080&fit=crop",
        contact: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
    },

    /* ==========================================
       COLOR THEME
       Customize your portfolio colors
       ========================================== */
    theme: {
        primaryColor: "#2c3e50",
        primaryLight: "#34495e",
        primaryDark: "#1a252f",
        accentColor: "#e74c3c",
        accentLight: "#ec7063",
        accentDark: "#c0392b"
    },

    /* ==========================================
       FONTS
       Google Fonts to use
       ========================================== */
    fonts: {
        heading: "Playfair Display",
        body: "Source Sans 3"
    }
};

/* ==========================================
   EXPORT FOR USE IN DYNAMIC VERSION
   
   If you want to make this portfolio dynamic:
   1. Use this data structure
   2. Create a JavaScript function to populate HTML
   3. Or use a framework like React/Vue
   ========================================== */

// For browser usage (if you make it dynamic)
if (typeof window !== 'undefined') {
    window.portfolioData = portfolioData;
}

// For Node.js/module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}

/* ==========================================
   QUICK EDIT CHECKLIST
   
   1. [ ] Update personal information (name, email, phone, social links)
   2. [ ] Write your about me introduction
   3. [ ] List all your technical skills
   4. [ ] Add your education history
   5. [ ] List your certifications
   6. [ ] Add your projects with images and links
   7. [ ] Document your work experience
   8. [ ] Customize colors in theme section
   9. [ ] Replace background images if desired
   10. [ ] Transfer data to index.html
   ========================================== */
