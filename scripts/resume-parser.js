#!/usr/bin/env node

/**
 * Resume Parser Script
 *
 * This script helps convert resume data to the portfolio format.
 * You can use this to extract information from your resume and
 * format it for the portfolio website.
 */

const fs = require("fs");
const path = require("path");

// Sample resume data structure
const sampleResumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    bio: "I'm a passionate Full Stack Developer with expertise in modern web technologies...",
    socialLinks: {
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
      twitter: "https://twitter.com/yourhandle",
      facebook: "https://facebook.com/yourprofile",
    },
  },
  experience: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "Remote",
      startDate: "2023-01",
      endDate: "",
      current: true,
      description: [
        "Led development of multiple web applications using React, Node.js, and PostgreSQL",
        "Implemented CI/CD pipelines and automated testing strategies",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "AWS",
        "TypeScript",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/projects/ecommerce.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-platform.vercel.app",
      category: "fullstack",
    },
  ],
  skills: [
    { name: "React", level: 95, category: "frontend", icon: "react" },
    { name: "Next.js", level: 90, category: "frontend", icon: "nextjs" },
    { name: "TypeScript", level: 88, category: "frontend", icon: "typescript" },
    { name: "Node.js", level: 88, category: "backend", icon: "nodejs" },
    { name: "PostgreSQL", level: 80, category: "database", icon: "postgresql" },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Your City, Country",
      startDate: "2018-09",
      endDate: "2022-05",
      current: false,
      description:
        "Graduated with honors. Focused on software engineering, algorithms, and web development.",
    },
  ],
};

function generatePortfolioData() {
  const outputPath = path.join(__dirname, "..", "src", "data", "portfolio.ts");

  const portfolioData = `import { PersonalInfo, Experience, Project, Skill, Education, BlogPost } from '@/types';

export const personalInfo: PersonalInfo = ${JSON.stringify(
    sampleResumeData.personalInfo,
    null,
    2
  )};

export const experiences: Experience[] = ${JSON.stringify(
    sampleResumeData.experience,
    null,
    2
  )};

export const projects: Project[] = ${JSON.stringify(
    sampleResumeData.projects,
    null,
    2
  )};

export const skills: Skill[] = ${JSON.stringify(
    sampleResumeData.skills,
    null,
    2
  )};

export const education: Education[] = ${JSON.stringify(
    sampleResumeData.education,
    null,
    2
  )};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building scalable React applications with proper architecture and performance optimization.",
    content: "Full blog post content here...",
    publishedAt: "2024-01-15",
    image: "/blog/react-scalable.jpg",
    tags: ["React", "JavaScript", "Performance"]
  }
];
`;

  fs.writeFileSync(outputPath, portfolioData);
  console.log("✅ Portfolio data generated successfully!");
  console.log("📁 File saved to:", outputPath);
  console.log("\n📝 Next steps:");
  console.log("1. Update the personal information in src/data/portfolio.ts");
  console.log("2. Add your real experience, projects, and skills");
  console.log("3. Update social media links");
  console.log("4. Customize the styling and colors");
}

function showHelp() {
  console.log(`
📋 Resume Parser Script

Usage:
  node scripts/resume-parser.js [command]

Commands:
  generate    Generate sample portfolio data
  help        Show this help message

Examples:
  node scripts/resume-parser.js generate
  node scripts/resume-parser.js help

This script helps you convert your resume data to the portfolio format.
Update the sample data in this script with your actual information before running.
  `);
}

// Main execution
const command = process.argv[2];

switch (command) {
  case "generate":
    generatePortfolioData();
    break;
  case "help":
  case "--help":
  case "-h":
    showHelp();
    break;
  default:
    console.log('❌ Unknown command. Use "help" to see available commands.');
    process.exit(1);
}
