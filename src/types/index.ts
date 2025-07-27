export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "web" | "mobile" | "fullstack" | "other";
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "database" | "devops" | "other";
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  image?: string;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
