# Tied Studio Website

A modern Hebrew landing page for "Tied Studio" - a premium wedding branding service. Built with Next.js 14, TypeScript, and Framer Motion with full RTL (right-to-left) support for Hebrew content.

## ✨ Features

- **Modern Design**: Elegant, premium aesthetic targeting middle to high-class couples
- **Full RTL Support**: Complete Hebrew language support with proper text direction
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Mobile-first approach with perfect desktop scaling
- **Form Validation**: Contact form with Hebrew error messages and validation
- **SEO Optimized**: Hebrew meta tags, Open Graph, and structured data
- **Performance Optimized**: Next.js optimizations for fast loading
- **Vercel Ready**: Configured for seamless Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tied-studio-website.git
   cd tied-studio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css        # Global styles & RTL configuration
│   │   ├── layout.tsx         # Root layout with Hebrew meta tags
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx       # Hero section with animations
│   │   │   ├── About.tsx      # About section
│   │   │   ├── Services.tsx   # Services section
│   │   │   └── Portfolio.tsx  # Gallery with hover effects
│   │   └── ui/               # Reusable UI components
│   └── lib/
│       ├── animations.ts     # Framer Motion animation variants
│       └── validations.ts    # Zod form validation schemas
├── public/                   # Static assets
├── vercel.json              # Vercel deployment configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: `#355923` (Forest green)
- **Secondary**: `#F5F0E8` (Warm cream)  
- **Navy**: `#111111` (Deep black)
- **Background**: `#F5F0E8` (Warm cream)
- **Foreground**: `#111111` (Deep black)

### Typography
- **Primary Font**: Heebo (Hebrew optimized)
- **Font Weights**: 100 (Thin), 300, 400, 500, 700
- **Font Loading**: Google Fonts with display=swap

### Sections Overview

1. **Hero Section**: Company branding with logo and descriptive subtitle
2. **About Section**: Company story and personal approach
3. **Services Section**: 2 main services (weddings & bachelorette parties) with 5-step process timeline
4. **Portfolio Section**: 2 album categories with Instagram and WhatsApp integration
5. **Footer**: Company branding and Hebrew tagline

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🌍 RTL (Right-to-Left) Support

This project includes comprehensive RTL support for Hebrew:

- HTML `dir="rtl"` attribute
- CSS logical properties for spacing and positioning
- Tailwind CSS RTL utilities (`space-x-reverse`, etc.)
- Hebrew fonts optimized for web display
- Proper text alignment and reading flow

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

3. **Custom Domain:**
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

### Environment Variables

For production deployment, set these environment variables:

```bash
# Optional: Contact form endpoint
NEXT_PUBLIC_CONTACT_FORM_URL=your_form_endpoint

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Code Quality

This project includes:
- ESLint configuration for Next.js
- TypeScript strict mode
- Automatic code formatting
- Import sorting and organization

## 📄 License

This project is proprietary software developed for Tied Studio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions about this project, please contact the development team.

---

Made with ❤️ for Tied Studio
