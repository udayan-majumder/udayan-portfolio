import {
  PersonalInfo,
  Experience,
  Project,
  Skill,
  Education,
  BlogPost,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "UDAYAN MAJUMDER",
  title: "Full Stack Developer",
  email: "udayanmajumder1983@gmail.com",
  phone: "9875585239",
  location: "West Bengal",
  bio: "I am a B.Tech graduate in Computer Science and Engineering. I specialize in building full-stack web applications using the PERN stack and delivering efficient, user-centric solutions.",
  avatar: "/avatar.jpg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/udayan-majumder-73184a245/",
    github: "https://github.com/udayan-majumder",
    twitter: undefined,
    facebook: undefined,
  },
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Web Developer",
    company: "Bet phile",
    location: "West Bengal",
    startDate: "2025-03",
    endDate: "2025-03",
    current: false,
    description: [
      "Developed an SEO-optimized landing page using Next.js, Chakra UI, and Server-Side Rendering (SSR)",
      "Implemented accessibility best practices and responsive design for improved UX across devices",
      "Deployed via AWS Amplify with automated CI/CD",
    ],
    technologies: ["Next.js", "Chakra UI", "AWS Amplify", "CI/CD", "SSR"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AIDALERT - Emergency Response App",
    description:
      "Built Emergency Response App using PERN Stack (PostgreSQL, Express.js, React/Next.js, Node.js) with Chakra UI, featuring real-time weather APIs, air quality monitoring, and SOS location tracking via Ola Maps API. Developed Role-Based Authentication System with Admin/NGO panels, integrated live weather APIs for disaster monitoring. Features include extreme weather alerts, air quality tracking, UV index monitoring, and interactive maps with emergency services locations.",
    image: "/aidalert.png",
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React",
      "Next.js",
      "Node.js",
      "Chakra UI",
      "AWS EC2",
      "Nginx",
      "SSL",
      "AWS RDS",
      "Ola Maps API",
      "Weather API",
      "Air Quality API",
    ],
    githubUrl: "https://github.com/udayanmajumder/aidalert",
    liveUrl: "https://aid-alert.vercel.app",
    category: "fullstack",
  },
  {
    id: "2",
    title: "UDchat - Real Time Chat Application",
    description:
      "Developed a scalable real-time chat application with Firebase and Google OAuth, enabling seamless live messaging for 100+ users.",
    image: "/UDchat.png",
    technologies: ["Firebase", "Google OAuth", "React", "Real-time Messaging"],
    githubUrl: "https://github.com/udayanmajumder/udchat",
    liveUrl: "https://chat-system-blond.vercel.app/",
    category: "fullstack",
  },
  {
    id: "3",
    title: "AI-Powered Museum Ticket Booking Bot",
    description:
      "Built AI-Powered Museum Ticket Booking Bot reducing wait times and queue management issues through intelligent conversation flow and real-time ticket availability.",
    image: "/projects/museum-bot.jpg",
    technologies: ["AI", "Chatbot", "Node.js", "Express.js", "Real-time"],
    githubUrl: "https://github.com/udayanmajumder/museum-bot",
    liveUrl: "https://museum-bot.vercel.app",
    category: "fullstack",
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
  { name: "HTML", level: 95, category: "frontend", icon: "html5" },
  { name: "CSS", level: 90, category: "frontend", icon: "css3" },

  // Frameworks
  { name: "React.js", level: 88, category: "frontend", icon: "react" },
  { name: "Next.js", level: 85, category: "frontend", icon: "nextjs" },
  { name: "Node.js", level: 80, category: "backend", icon: "nodejs" },
  { name: "Express.js", level: 75, category: "backend", icon: "express" },

  // State Management
  { name: "Redux", level: 70, category: "frontend", icon: "redux" },
  { name: "Zustand", level: 75, category: "frontend", icon: "zustand" },

  // Databases
  { name: "PostgreSQL", level: 80, category: "database", icon: "postgresql" },
  { name: "Firebase", level: 75, category: "database", icon: "firebase" },
  { name: "NeonDB", level: 70, category: "database", icon: "neondb" },

  // Dev Tools
  { name: "Git", level: 85, category: "devops", icon: "git" },
  { name: "Postman", level: 80, category: "devops", icon: "postman" },
  { name: "VS Code", level: 90, category: "devops", icon: "vscode" },

  // Cloud/CI/CD
  { name: "AWS EC2", level: 70, category: "devops", icon: "aws" },
  { name: "AWS RDS", level: 65, category: "devops", icon: "aws" },
  { name: "Vercel", level: 80, category: "devops", icon: "vercel" },
  { name: "Firebase", level: 75, category: "devops", icon: "firebase" },
  { name: "Railway", level: 70, category: "devops", icon: "railway" },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Techno India University",
    location: "West Bengal",
    startDate: "2022-09",
    endDate: "2026-07",
    current: true,
    description: "Expected graduation in July 2026",
  },
  {
    id: "2",
    degree: "High School",
    institution: "Kendriya Vidyalaya",
    location: "West Bengal",
    startDate: "2010-09",
    endDate: "2022-05",
    current: false,
    description: "Completed high school education",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building AIDALERT: Emergency Response App with PERN Stack",
    excerpt:
      "Learn how to build a comprehensive emergency response application using PostgreSQL, Express.js, React, and Node.js with real-time weather and air quality monitoring.",
    content: "Full blog post content here...",
    publishedAt: "2024-01-15",
    image: "/blog/aidalert-pern-stack.jpg",
    tags: [
      "AIDALERT",
      "PERN Stack",
      "Emergency Response",
      "Weather API",
      "Air Quality",
      "React",
      "Node.js",
    ],
  },
  {
    id: "2",
    title: "Real-time Chat Applications with Firebase",
    excerpt:
      "A comprehensive guide to building real-time chat applications using Firebase and Google OAuth.",
    content: "Full blog post content here...",
    publishedAt: "2024-01-10",
    image: "/blog/firebase-chat.jpg",
    tags: ["Firebase", "Real-time", "Chat", "Google OAuth"],
  },
  {
    id: "3",
    title: "Deploying Applications on AWS EC2",
    excerpt:
      "Step-by-step guide to deploying your applications on AWS EC2 with Nginx and SSL configuration.",
    content: "Full blog post content here...",
    publishedAt: "2024-01-05",
    image: "/blog/aws-deployment.jpg",
    tags: ["AWS", "EC2", "Deployment", "Nginx", "SSL"],
  },
];
