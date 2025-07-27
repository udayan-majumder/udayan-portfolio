# 🚀 Quick Setup Guide

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Steps

### 1. Update Personal Information

Edit `src/data/portfolio.ts` and update:

- Your name, title, and contact information
- Social media links
- Bio description

### 2. Add Your Experience

Replace the sample experience data with your real work history:

- Job titles and companies
- Dates and locations
- Responsibilities and achievements
- Technologies used

### 3. Showcase Your Projects

Add your projects to the projects array:

- Project names and descriptions
- Technologies used
- Links to live demos and GitHub repos
- Project images (optional)

### 4. Update Skills

Modify the skills section with:

- Your actual technical skills
- Proficiency levels (0-100)
- Skill categories (frontend, backend, database, devops)

### 5. Customize Styling

- Update colors in `tailwind.config.ts`
- Modify the theme in `src/lib/theme.tsx`
- Adjust animations in component files

## 📁 Key Files to Edit

- `src/data/portfolio.ts` - All your portfolio data
- `src/app/layout.tsx` - SEO metadata and site title
- `src/app/globals.css` - Global styles and custom CSS
- `tailwind.config.ts` - Color scheme and design tokens

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- Netlify: `npm run build` then deploy the `.next` folder
- Railway: Connect your GitHub repo
- DigitalOcean: Use their App Platform

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run resume:parse` - Generate sample portfolio data

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the component files in `src/components/` for customization
- Update the TypeScript interfaces in `src/types/` if needed

---

**Happy coding! 🎉**
