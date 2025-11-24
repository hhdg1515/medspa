# Medical Aesthetics Clinic Website

A high-end, compliant medical aesthetics website for a clinic specializing in face slimming, weight management, and anti-aging injectables.

## Features 
- ✨ **Elementis-inspired Design** - Full-screen immersive experience with scroll storytelling
- 🌐 **Bilingual Support** - Seamless Chinese/English language switching
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚖️ **California Compliant** - All content follows CA medical advertising regulations
- 🎨 **Modern Tech Stack** - Next.js 15, React 18, TypeScript, Tailwind CSS
- ♿ **Accessible** - WCAG compliant components
- 🚀 **Performance Optimized** - Fast loading with optimized images and code splitting

## Tech Stack 
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Animation**: Framer Motion (optional, included)
- **State Management**: React Context API for i18n

### Prerequisites 
- Node.js 20.x or higher
- npm or yarn

### Installation 
1. Clone the repository:
```bash
git clone <repository-url>
cd medspa-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production 

```bash
npm run build
npm start
```

## Project Structure 
```
medspa-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles & Tailwind
│   └── treatments/
│       └── face-slimming/       # Treatment detail page
│           └── page.tsx
├── components/                   # React components
│   ├── Button.tsx               # Reusable button component
│   ├── Header.tsx               # Site header with navigation
│   ├── Footer.tsx               # Site footer
│   └── sections/                # Page sections
│       ├── HeroSection.tsx
│       ├── FeaturedTreatments.tsx
│       ├── WhyUs.tsx
│       ├── HowItWorks.tsx
│       └── ContactForm.tsx
├── lib/                          # Utilities & helpers
│   ├── translations.ts          # Bilingual content
│   └── LanguageContext.tsx      # Language switching logic
├── public/                       # Static assets
│   ├── images/                  # Images
│   └── videos/                  # Background videos
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.ts               # Next.js configuration
```

## Customization 
### Update Clinic Information 

1. Replace `[Clinic Name]` throughout the codebase with your actual clinic name
2. Update contact information in:
   - `components/Header.tsx` (phone number)
   - `components/Footer.tsx` (address, phone, email)
3. Update metadata in `app/layout.tsx`

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: {
    main: "#F7F3ED",    // Main background
    dark: "#EFE4DB",    // Darker background
  },
  text: {
    primary: "#272221",   // Primary text
    secondary: "#6F645E", // Secondary text
  },
  border: "#D8CCC2",      // Borders
  accent: "#C9A27C",      // Accent/highlights
}
```

### Add/Edit Content 

- **Bilingual Text**: Edit `lib/translations.ts`
- **Homepage Sections**: Edit files in `components/sections/`
- **Treatment Pages**: Create new pages in `app/treatments/[treatment-name]/page.tsx`

### Add Images & Videos 
1. Place images in `public/images/`
2. Place videos in `public/videos/`
3. Update components to reference your assets:

```tsx
// Example: Add hero background video
<video autoPlay muted loop playsInline>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

## Compliance Notes / 合规注意事项

⚠️ **Important**: This website is designed for California medical practices and includes compliance considerations:

- All treatment claims include "results may vary" disclaimers
- Before/after images require consent and disclaimers
- No exaggerated claims ("best", "guaranteed results", etc.)
- Medical director/physician information must be displayed
- Pricing transparency (no bait pricing)

**Please consult with a healthcare attorney to ensure full compliance with:**
- California Medical Board regulations
- Medical advertising laws
- HIPAA privacy requirements

## Pages 

- ✅ **Home Page** (`/`) - Hero, Treatments, Why Us, How It Works, Contact Form
- ✅ **Face Slimming** (`/treatments/face-slimming`) - Complete treatment details page
- 🚧 **Weight Management** - To be created (similar structure)
- 🚧 **Providers** - To be created
- 🚧 **Results** - To be created (with compliance disclaimers)
- 🚧 **About** - To be created
- 🚧 **Blog** - To be created
- 🚧 **FAQ** - To be created

## Next Steps 

1. **Add Real Content**:
   - Replace placeholder images with professional photos
   - Add actual doctor/provider information
   - Update phone numbers and addresses

2. **Additional Pages**:
   - Create weight management treatment page
   - Build providers/about pages
   - Add results gallery with proper disclaimers

3. **Functionality**:
   - Integrate with booking system (e.g., Acuity, Calendly)
   - Connect contact form to email/CRM
   - Add analytics (Google Analytics, etc.)

4. **SEO Optimization**:
   - Add meta descriptions for all pages
   - Create sitemap.xml
   - Add schema markup for local business

5. **Performance**:
   - Optimize images (WebP format)
   - Add lazy loading for images
   - Implement ISR (Incremental Static Regeneration) if needed

## Support

For questions or issues, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is created for . All rights reserved.

---

Built with ❤️ for safe, professional medical aesthetics in Los Angeles.

