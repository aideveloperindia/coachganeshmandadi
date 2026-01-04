# 🎯 Gopikrishna Sarvepalli - Personal Branding Website

Premium, full-scale personal branding website for **Mr. Gopikrishna Sarvepalli**, Corporate Trainer and Motivational Coach, developed by **Beyondx Informatics Analytics Pvt. Ltd.**

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-ff0055)

---

## ✨ Features

### 🎨 **Premium UX/UI Design**
- Modern corporate minimalism with warmth
- Spacious layout with bold typography and ambient gradients
- Smooth Framer Motion animations and micro-interactions
- Fully responsive design optimized for all devices

### 🧩 **Complete Sections**
- **Hero Section** - Dynamic background with animated stats and CTAs
- **About Section** - Profile with animated counters
- **Brand Story** - Mission statement in elegant quote format
- **Programs & Workshops** - 6 training programs with hover effects
- **Clientele** - Grid of trusted organizations
- **Certificates & Recognitions** - Modal viewer with verified badges
- **Testimonials** - Auto-rotating slider with client quotes
- **Gallery** - YouTube video embeds with modal playback
- **Free Guide Download** - Personalized PDF generation with lead capture
- **Contact Form** - WhatsApp integration for instant connection
- **Footer** - Social links and floating WhatsApp button

### ⚡ **Technical Highlights**
- **Next.js 14** with App Router for optimal performance
- **Tailwind CSS** for responsive, modern styling
- **Framer Motion** for smooth animations and transitions
- **MongoDB Atlas** integration for lead management
- **pdf-lib** for client-side personalized PDF generation
- **shadcn/ui** components for consistent design system
- SEO optimized with meta tags and Open Graph support
- Scroll progress indicator
- Floating WhatsApp button with pulse animation

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (for lead capture)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd C:\Users\DELL\coachgk
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Edit `.env.local` and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/coachgk?retryWrites=true&w=majority
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
coachgk/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts          # Lead capture API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page with all sections
├── components/
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── dialog.tsx
│   ├── About.tsx                 # About section
│   ├── BrandStory.tsx            # Mission/Purpose section
│   ├── Certificates.tsx          # Certificates with modal viewer
│   ├── Clients.tsx               # Client organizations grid
│   ├── Contact.tsx               # Contact form
│   ├── Footer.tsx                # Footer with social links
│   ├── FreeGuide.tsx             # PDF generation section
│   ├── Gallery.tsx               # YouTube videos
│   ├── Hero.tsx                  # Hero section
│   ├── Programs.tsx              # Training programs
│   └── Testimonials.tsx          # Client testimonials slider
├── lib/
│   ├── mongodb.ts                # MongoDB connection
│   └── utils.ts                  # Utility functions
├── public/
│   ├── certificates/             # Certificate images
│   ├── logos/                    # Client logos
│   ├── main photo.png            # Profile photo
│   └── main photo 1.jpg          # Additional photo
├── .env.local                    # Environment variables
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

---

## 🎨 Design System

### Color Palette
- **Primary**: `#0A2540` (Deep Navy)
- **Accent**: `#D4AF37` (Gold)
- **Text**: `#1E1E1E` (Dark Gray)
- **Background**: `#FFFFFF` (White)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations
- Fade-in-up on scroll
- Hover effects with scale and shadow
- Smooth page transitions
- Auto-rotating testimonials
- Pulse animation on WhatsApp button

---

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get your connection string
3. Add the connection string to `.env.local`
4. The database will automatically create a `leads` collection

### Customization

#### Update Profile Photo
Replace `/public/main photo.png` with your photo

#### Add Certificates
Add certificate images to `/public/certificates/` and update the `certificates` array in `components/Certificates.tsx`

#### Add Client Logos
Add logo files to `/public/logos/` and update the `clients` array in `components/Clients.tsx`

#### Update Social Links
Edit the `socialLinks` array in `components/Footer.tsx`

#### Change YouTube Videos
Replace the `videoId` values in `components/Gallery.tsx` with your YouTube video IDs

#### Modify Contact Details
Update phone number and email in:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

---

## 📱 Features in Detail

### Lead Capture System
- Form submissions are saved to MongoDB
- Backup success response even if database fails
- Lead data includes name, email, source, and timestamp

### PDF Generation
- Client-side generation using pdf-lib
- Personalized with user's name
- Contains 8 life lessons with professional formatting
- Instant download without server processing

### WhatsApp Integration
- Multiple CTAs throughout the site
- Floating button appears after scroll
- Pre-filled messages for context
- Opens in new tab

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly tap targets
- Optimized images with Next.js Image component

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

### Build for Production
```bash
npm run build
npm run start
```

---

## 📊 Analytics

Google Analytics is integrated and ready to use. Add your GA tracking ID to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🛠️ Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🤝 Support

For technical support or customization requests, contact:

**Beyondx Informatics Analytics Pvt. Ltd.**
- Email: contact@beyondx.in
- Phone: +91 96667 22233

---

## 📄 License

© 2025 Beyondx Informatics Analytics Pvt. Ltd. All rights reserved.

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [MongoDB](https://www.mongodb.com/)
- [pdf-lib](https://pdf-lib.js.org/)

---

**Developed by Beyondx Informatics Analytics Pvt. Ltd.**

*Transforming digital presence through elegant design and cutting-edge technology.*













