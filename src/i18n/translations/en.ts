/** Traduções em inglês (en-US). Mantenha paridade com `pt.ts`. */
import type { Translations } from "../types";

export const en: Translations = {
  meta: {
    title: "Gabriel D. Monteiro | Software Engineer",
    description:
      "Gabriel D. Monteiro — Senior Software Engineer specializing in Backend, Full-Stack, APIs, and Cloud.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    title: "Senior Software Engineer",
    subtitle: "Backend · Full-Stack · APIs · Cloud",
    summary:
      "Senior Software Engineer with over 10 years of experience delivering robust, scalable, and business-driven systems. Specialist in Backend and Full-Stack development, with a proven track record building high-performance REST APIs, microservices architecture, and cloud integrations. Recognized for translating complex requirements into high-quality technical deliverables, collaborating with cross-functional teams, and adding real product value — from design to production.",
    ctaContact: "Get in touch",
    ctaExperience: "View experience",
    location: "São Paulo, Brazil",
    logoAlt: "Gabriel D. Monteiro logo",
  },
  about: {
    title: "About",
    highlights: "Highlights",
    items: [
      "10+ years of software engineering experience",
      "Specialist in REST APIs and microservices",
      "ML and generative AI integration in products",
      "Technical reference and architecture decisions",
    ],
  },
  skills: {
    title: "Technical Skills",
    groups: [
      {
        category: "Languages",
        items: ["C#", "Python", "JavaScript", "TypeScript", "Go", "Java", "Kotlin", "Bash/PowerShell"],
      },
      {
        category: "Frameworks & Platforms",
        items: [".NET", "ASP.NET Core", "WPF", "Windows Forms", "Node.js", "React", "Angular", "Django", "FastAPI"],
      },
      {
        category: "Databases",
        items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      },
      {
        category: "Cloud & DevOps",
        items: [
          "Azure",
          "AWS",
          "GCP",
          "Docker",
          "Kubernetes",
          "Terraform",
          "Ansible",
          "Jenkins",
          "Azure DevOps",
          "GitHub Actions",
          "CI/CD",
          "Infrastructure as Code",
        ],
      },
      {
        category: "Observability & Security",
        items: ["Prometheus", "Grafana", "Datadog", "DevSecOps", "Zero Trust Architecture"],
      },
      {
        category: "Architecture",
        items: [
          "REST APIs",
          "GraphQL",
          "Microservices",
          "Event-Driven",
          "Serverless",
          "Scalable System Design",
          "RabbitMQ",
          "Kafka",
        ],
      },
      {
        category: "AI & Data",
        items: [
          "Machine Learning",
          "Generative AI",
          "Prompt Engineering",
          "LangChain",
          "NLP",
          "LLMs",
          "Big Data",
          "Data Pipelines",
          "Recommendation Systems",
        ],
      },
      {
        category: "Practices",
        items: ["Unit Testing", "TDD", "Code Review", "Technical Documentation", "Agile/Scrum", "Git/GitHub"],
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    current: "Current",
    jobs: [
      {
        company: "Kantar IBOPE Media",
        role: "Senior Software Developer",
        period: "Jan/2024 – Mar/2026",
        highlights: [
          "Development and maintenance of critical desktop systems with WPF and Windows Forms, ensuring high performance, stability, and consistent user experience.",
          "Creation and maintenance of REST APIs with .NET and SQL Server for integrating multiple internal systems, focused on reliability and low latency.",
          "Creation and maintenance of front-end interfaces using Angular, focused on performance, usability, and efficient REST API integration.",
          "Responsible for technical design, coding, unit testing, and complete technical documentation of solutions.",
          "Technical reference for the team, driving architecture decisions and ensuring continuous alignment between technology and business needs.",
        ],
      },
      {
        company: "IBM",
        role: "Senior Application Developer",
        period: "Mar/2021 – Dec/2023",
        highlights: [
          "Translation of complex client requirements into functional and technical designs, components, and high-quality code, reducing rework and accelerating delivery.",
          "Development of customized information systems for enterprise clients, with full artifact coverage: code, unit tests, and technical documentation.",
          "Development of interactive dashboards with Python + React stack, focused on data analysis and visualization.",
          "Work on large-scale projects in agile environments (Scrum), collaborating with multidisciplinary and multicultural teams distributed globally.",
          "Integration of Machine Learning algorithms and recommendation systems into corporate solutions.",
        ],
      },
      {
        company: "Consiglog Tecnologia e Soluções",
        role: "Software Developer",
        period: "Jan/2020 – Feb/2021",
        highlights: [
          "Specialization in REST API development with C# and .NET, from design through implementation, testing, and documentation.",
          "Modeling and optimization of SQL Server databases for high-availability applications.",
          "Full development cycle delivery: analysis, development, QA, and technical documentation.",
        ],
      },
      {
        company: "Digital Monk — Startup",
        role: "Web Developer",
        period: "Apr/2017 – Jan/2020",
        highlights: [
          "Development of automation scripts and data extraction routines.",
          "Development of internal applications with graphical interfaces using C# and .NET.",
          "Data analysis and creation of charts and reports using R.",
          "Web development (plugin and page creation).",
        ],
      },
      {
        company: "Workana / 99Freelas / Upwork",
        role: "Freelancer — Web Developer + Media",
        period: "Feb/2014 – Apr/2017",
        highlights: [
          "Creation of responsive and optimized landing pages (HTML, CSS, JavaScript, jQuery).",
          "Video and image editing and optimization for better performance and engagement.",
          "On-demand digital solutions for different clients and segments.",
        ],
      },
    ],
  },
  education: {
    title: "Education & Certifications",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    languagesLabel: "Languages",
    items: [
      {
        degree: "Postgraduate — Machine Learning Engineering",
        institution: "FIAP",
        period: "— In progress",
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "Universidade Anhembi Morumbi",
        period: "2017 — Completed",
      },
      {
        degree: "Technologist — Big Data & Analytics Intelligence",
        institution: "Universidade Anhembi Morumbi",
        period: "2026 — Completed",
      },
      {
        degree: "Technologist — Digital Games",
        institution: "Universidade Anhembi Morumbi",
        period: "2026 — Completed",
      },
    ],
    certifications: [
      "Technical certifications in progress — Azure (AZ-900), AWS Certified Developer, and Google Cloud Professional Developer planned for 2026.",
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      {
        name: "English",
        level: "Upper-intermediate (B2+)",
        note: "Strong written communication and oral fluency in development contexts",
      },
      {
        name: "Spanish",
        level: "Upper-intermediate (B2+)",
        note: "Strong written communication and oral fluency in development contexts",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Interested in collaborating on challenging projects? Get in touch — I'm open to opportunities and conversations about technology.",
  },
  projects: {
    backHome: "Back to home",
    eyebrow: "Portfolio",
    title: "Projects",
    description:
      "A selection of personal and experimental projects — from responsive front-end to APIs, automation, and tools across diverse stacks.",
    loadError: "Could not load projects.",
    liveDemo: "Live demo",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with React + TypeScript + Tailwind CSS",
  },
  language: {   
    switchToPt: "Mudar para Português",
    switchToEn: "Switch to English",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description: "The address you visited does not exist or has been moved.",
    backHome: "Back to home",
  },
};
