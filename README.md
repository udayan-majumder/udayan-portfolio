# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a clean design, dark/light mode toggle, smooth animations, and is fully customizable.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach, works perfectly on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **SEO Optimized**: Proper meta tags, structured data, and performance optimized
- **TypeScript**: Full type safety throughout the application
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with live demos and source code links
- **Skills Visualization**: Interactive skills section with progress bars
- **Experience Timeline**: Beautiful timeline layout for work experience
- **Social Integration**: Easy integration with social media platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### 1. Personal Information

Edit `src/data/portfolio.ts` to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  bio: "Your bio description...",
  avatar: "/avatar.jpg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
    facebook: "https://facebook.com/yourprofile",
  },
};
```

### 2. Experience

Update your work experience in the same file:

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Your Job Title",
    company: "Company Name",
    location: "Location",
    startDate: "2023-01",
    endDate: "",
    current: true,
    description: ["Your responsibilities and achievements..."],
    technologies: ["React", "Node.js", "TypeScript"],
  },
];
```

### 3. Projects

Add your projects to showcase your work:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    description: "Project description...",
    image: "/projects/project.jpg",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project.vercel.app",
    category: "fullstack",
  },
];
```

### 4. Skills

Update your skills and proficiency levels:

```typescript
export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", icon: "react" },
  { name: "TypeScript", level: 88, category: "frontend", icon: "typescript" },
];
```

### 5. Styling

Customize colors and styling in `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
    },
  },
};
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Experience.tsx   # Experience section
│       ├── Projects.tsx     # Projects section
│       ├── Skills.tsx       # Skills section
│       └── Contact.tsx      # Contact section
├── data/
│   └── portfolio.ts         # Portfolio data
├── lib/
│   ├── theme.tsx            # Theme context
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript interfaces
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
```

### SEO Configuration

Update the metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your portfolio description...",
  // ... other metadata
};
```

## 📱 Performance

The portfolio is optimized for performance with:

- Next.js Image optimization
- Lazy loading animations
- Optimized bundle size
- Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:

- Open an issue on GitHub
- Contact me at your.email@example.com

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
