# Medical Wellness Website Design Style Guide
## Inspired by Aria Integrative Health

---

## Overview

This design style guide captures the sophisticated, professional aesthetic of premium medical wellness websites. The approach balances clinical credibility with approachable warmth, creating trust while maintaining accessibility.

**Core Philosophy**: Professional excellence meets human-centered care. Every design element should communicate expertise, safety, and personalized attention.

---

## Color Palette

### Primary Colors
- **Deep Navy/Charcoal**: `#1a2332` - `#2d3e50`
  - Use for: Headers, main navigation, footer backgrounds
  - Conveys: Authority, trustworthiness, professionalism
  
- **Soft White/Cream**: `#ffffff` - `#fafaf8`
  - Use for: Main backgrounds, content areas, cards
  - Conveys: Cleanliness, clarity, spaciousness

### Secondary Colors
- **Warm Gold/Brass**: `#c9a961` - `#b8975a`
  - Use for: Accent elements, buttons (hover states), subtle highlights
  - Conveys: Premium quality, warmth, personal touch

- **Soft Sage/Mint**: `#a8c5b8` - `#b5d4c6`
  - Use for: Secondary CTAs, subtle backgrounds, section dividers
  - Conveys: Health, wellness, natural healing

### Neutral Tones
- **Light Gray**: `#f5f5f5` - `#e8e8e8`
  - Use for: Alternate section backgrounds, borders, subtle separators
  
- **Medium Gray**: `#6a7380` - `#8a94a0`
  - Use for: Secondary text, captions, metadata

### Accent Colors (Use Sparingly)
- **Success Green**: `#4caf50`
  - For: Positive indicators, success messages
  
- **Attention Blue**: `#2196f3`
  - For: Links, informational highlights

**Color Application Rules**:
- Never use more than 3 colors in a single section
- Maintain 4.5:1 contrast ratio minimum for accessibility
- Use the 60-30-10 rule: 60% neutral, 30% primary, 10% accent

---

## Typography

### Font Families

**Primary Font (Headings & Display)**:
- **Preferred**: Montserrat, Poppins, or Inter
- **Characteristics**: Clean, modern sans-serif with excellent readability
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Secondary Font (Body Text)**:
- **Preferred**: Open Sans, Source Sans Pro, or system-ui
- **Characteristics**: Highly readable, professional, versatile
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold)

### Type Scale

```
Hero Headline: 48-64px (3rem-4rem)
H1: 36-42px (2.25rem-2.625rem)
H2: 28-32px (1.75rem-2rem)
H3: 22-26px (1.375rem-1.625rem)
H4: 18-20px (1.125rem-1.25rem)
Body Large: 18px (1.125rem)
Body Regular: 16px (1rem)
Body Small: 14px (0.875rem)
Caption: 12-13px (0.75rem-0.8125rem)
```

### Typography Guidelines

**Headings**:
- Use sentence case or title case consistently
- Letter-spacing: -0.5px to -1px for large headings
- Line-height: 1.2-1.3
- Font-weight: 600-700
- Color: Deep navy or charcoal

**Body Text**:
- Line-height: 1.6-1.8 (optimal reading comfort)
- Paragraph spacing: 1.5em
- Max-width: 65-75 characters per line (600-800px)
- Color: Dark gray (#2a2a2a) for optimal readability

**Emphasis Styles**:
- Bold: Use sparingly for key terms or important notices
- Italic: For subtle emphasis or technical terms
- Colored text: Only for links or specific UI elements

---

## Layout & Grid System

### Grid Structure

**Desktop (1200px+)**:
- 12-column grid
- Gutter: 24px
- Max container width: 1200-1400px
- Side margins: 40-60px

**Tablet (768-1199px)**:
- 8-column grid
- Gutter: 20px
- Side margins: 30-40px

**Mobile (< 768px)**:
- Single column or 4-column grid
- Gutter: 16px
- Side margins: 20px

### Spacing System

Use a consistent 8px base unit for all spacing:

```
4px   - Tiny (elements very close together)
8px   - Extra small (inline elements)
16px  - Small (related items)
24px  - Medium (component padding)
32px  - Large (section padding)
48px  - Extra large (major sections)
64px  - Huge (hero sections)
96px  - Massive (page sections)
```

### Section Layouts

**Hero Section**:
- Full-width or contained
- Height: 60-80vh minimum
- Overlay gradient on background images (opacity: 0.4-0.6)
- CTA placement: Center or left-aligned
- Padding: 80-120px vertical

**Content Sections**:
- Alternating white/light gray backgrounds
- Padding: 80-100px vertical, 40-60px horizontal
- Max-width: 1200px for text-heavy content

**Card Grid**:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Card padding: 24-32px
- Card gap: 24-32px
- Subtle shadow: `0 2px 8px rgba(0,0,0,0.08)`

---

## Component Design Patterns

### Buttons

**Primary Button**:
```css
background: Deep Navy (#1a2332)
color: White
padding: 14px 32px
border-radius: 4-6px
font-weight: 600
transition: all 0.3s ease
hover: Slight lift (translateY(-2px)), subtle shadow
```

**Secondary Button**:
```css
background: Transparent
border: 2px solid Deep Navy
color: Deep Navy
padding: 14px 32px
hover: background fills with Deep Navy, text turns white
```

**CTA Button (High Emphasis)**:
```css
background: Warm Gold (#c9a961)
color: Deep Navy
padding: 16px 40px
border-radius: 4-6px
font-weight: 600
box-shadow: 0 4px 12px rgba(201,169,97,0.2)
hover: Darken slightly, lift effect
```

### Cards

**Service/Treatment Cards**:
- White background
- Border: 1px solid #e8e8e8 or none (with shadow)
- Border-radius: 8-12px
- Padding: 24-32px
- Shadow: `0 2px 12px rgba(0,0,0,0.06)` (subtle)
- Hover: Lift effect with enhanced shadow

**Testimonial Cards**:
- Light background (#f5f5f5)
- Quotation marks (large, subtle)
- Star rating (if applicable)
- Client name/info at bottom
- Padding: 32px
- Border-radius: 8px

### Navigation

**Main Navigation**:
- Sticky/fixed on scroll
- Background: White with subtle shadow on scroll
- Height: 80-90px
- Logo: Left-aligned
- Menu items: Right-aligned, 16px font, 600 weight
- Hover: Underline or color change
- Mobile: Hamburger menu

### Forms

**Input Fields**:
```css
border: 1px solid #d0d0d0
border-radius: 4px
padding: 12px 16px
background: white
focus: border-color changes to primary, subtle box-shadow
```

**Labels**:
- Above inputs
- Font-size: 14px
- Font-weight: 600
- Margin-bottom: 8px

---

## Visual Elements

### Images

**Photo Style**:
- High-quality, professional photography
- Natural lighting preferred
- Authentic, not overly staged
- Include people (staff, patients) for human connection
- Avoid generic stock photos

**Image Treatment**:
- Aspect ratios: 16:9 (hero), 4:3 (content), 1:1 (team/testimonials)
- Subtle overlay on hero images for text readability
- Rounded corners: 8-12px for content images
- Always include alt text for accessibility

### Icons

**Style**: 
- Line icons (not filled) for consistency
- Stroke width: 2px
- Size: 24px-32px standard
- Color: Match section color scheme

**Usage**:
- Feature highlights (3-4 per row)
- Process steps (numbered or sequential)
- Service categories
- Contact information

### Dividers & Separators

- Use subtle 1px lines in light gray (#e8e8e8)
- Decorative dividers: Minimal, centered, 40-60px wide
- White space is preferred over visible dividers

---

## Content Presentation Patterns

### Hero Section Pattern

**Structure**:
```
[Background Image/Video with subtle overlay]
  - Headline (48-64px, bold)
  - Subheadline (18-20px, light)
  - Primary CTA Button
  - Optional: Secondary CTA or scroll indicator
```

**Best Practices**:
- Clear, benefit-focused headline
- One primary action
- Minimal text (max 2 sentences)
- High-quality, relevant imagery

### Service/Treatment Pages

**Page Structure**:
1. **Hero Section**: Treatment name, brief description, CTA
2. **Overview Section**: What is it? How does it work?
3. **Benefits Section**: 3-6 key benefits with icons
4. **Process Section**: Step-by-step breakdown
5. **FAQ Section**: Common questions answered
6. **CTA Section**: Schedule consultation
7. **Related Treatments**: 3-4 suggestions

**Content Style**:
- Patient-centered language (avoid excessive jargon)
- Short paragraphs (3-4 sentences max)
- Bullet points for easy scanning
- Mix text with imagery (60/40 ratio)

### Trust-Building Elements

**Include Throughout Site**:
- Professional credentials and certifications
- Years of experience
- Technology/equipment brands
- Patient testimonials (with photos if possible)
- Before/after photos (where appropriate)
- Awards and recognition
- "As Featured In" media logos

### Testimonials Display

**Layout Options**:
- Carousel/slider (3-5 testimonials)
- Grid layout (3 columns)
- Featured quote with photo

**Content**:
- Quote (2-4 sentences)
- Client name and initial
- Treatment received
- Optional: Photo, star rating

---

## Interaction Design

### Hover States

**Links**: 
- Underline appears
- Color shifts slightly darker
- Transition: 0.2s ease

**Buttons**:
- Slight lift (translateY(-2px))
- Shadow enhancement
- Background darkens 5-10%
- Transition: 0.3s ease

**Cards**:
- Lift effect (translateY(-4px))
- Shadow: `0 8px 24px rgba(0,0,0,0.1)`
- Transition: 0.3s ease

### Animations

**Page Load**:
- Fade in content (0.3s delay)
- Stagger animation for lists/grids (0.1s between items)

**Scroll Animations** (Use sparingly):
- Fade in on scroll
- Slide up on scroll
- Trigger point: 20% from bottom of viewport

**Micro-interactions**:
- Form field validation (checkmark animation)
- Button click (subtle scale)
- Success messages (slide in from right)

### Loading States

- Skeleton screens for content areas
- Spinner for forms/buttons
- Progressive image loading

---

## Page-Specific Guidelines

### Homepage

**Sections** (in order):
1. Hero with primary value proposition
2. Services overview (3-6 categories with icons)
3. About/Philosophy section
4. Featured treatments/technologies
5. Testimonials
6. Team introduction
7. CTA (Schedule consultation)
8. Blog/Resources preview

### About Page

**Focus**:
- Founder/team story
- Mission and values
- Qualifications and expertise
- Facility photos
- "Why choose us" differentiators

### Service Pages

**Consistency**:
- Use same template for all services
- Include: Description, benefits, what to expect, FAQs, pricing (if applicable), CTA

### Contact Page

**Elements**:
- Contact form (name, email, phone, message)
- Phone number (large, clickable)
- Address with embedded map
- Hours of operation
- Social media links
- Optional: Live chat widget

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Text: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- UI elements: Minimum 3:1 ratio

**Interactive Elements**:
- All buttons/links keyboard accessible
- Focus states clearly visible
- Minimum tap target: 44x44px (mobile)

**Content**:
- Semantic HTML (proper heading hierarchy)
- Alt text for all images
- Captions for videos
- ARIA labels where needed

**Navigation**:
- Skip to main content link
- Logical tab order
- Clear focus indicators

---

## Mobile Optimization

### Responsive Breakpoints

```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+
```

### Mobile-First Considerations

**Typography**:
- Reduce heading sizes by 20-30%
- Increase line-height to 1.6-1.8
- Minimum body text: 16px (prevents zoom on iOS)

**Touch Targets**:
- Minimum size: 44x44px
- Spacing between: 8px minimum

**Navigation**:
- Hamburger menu for mobile
- Full-screen menu overlay
- Clear close button

**Forms**:
- Stack labels above inputs
- Use appropriate input types (tel, email)
- Large, easy-to-tap buttons

**Images**:
- Serve optimized sizes
- Use lazy loading
- Maintain aspect ratios

---

## Performance Best Practices

### Loading Speed

**Image Optimization**:
- WebP format with fallbacks
- Responsive images (srcset)
- Lazy loading for below-fold images
- Maximum file size: 200KB for hero, 100KB for content

**Code Optimization**:
- Minify CSS/JS
- Critical CSS inline
- Defer non-critical JavaScript
- Use CDN for static assets

### Animation Performance

- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Keep animations under 0.3s for responsiveness

---

## Content Writing Guidelines

### Voice & Tone

**Voice Characteristics**:
- Professional but approachable
- Confident without being arrogant
- Educational but not condescending
- Warm and empathetic

**Tone Variations**:
- Homepage: Welcoming, inspiring
- Service pages: Informative, reassuring
- Blog: Educational, conversational
- Contact: Helpful, responsive

### Writing Style

**General Rules**:
- Use active voice
- Short sentences (15-20 words average)
- Short paragraphs (3-4 sentences)
- Avoid medical jargon unless necessary
- Explain technical terms when used

**Headline Formula**:
- Benefit + Solution + Modifier
- Example: "Advanced RF Microneedling for Lasting Skin Rejuvenation"

**Call-to-Action**:
- Use action verbs
- Create urgency (when appropriate)
- Be specific about what happens next
- Examples: "Schedule Your Consultation", "Begin Your Journey", "Learn More About Treatment"

### SEO Considerations

**On-Page SEO**:
- H1: One per page, includes primary keyword
- H2-H6: Logical hierarchy, secondary keywords
- Meta description: 150-160 characters
- URL structure: Clean, descriptive
- Image alt text: Descriptive, includes keywords naturally

---

## Common Pitfalls to Avoid

### Design Mistakes

❌ **Avoid**:
- Generic stock photos (especially cheesy "pointing at computer" images)
- Too many competing CTAs on one page
- Inconsistent spacing
- Thin, hard-to-read fonts
- Automatic sliders that move too fast
- Pop-ups that interrupt immediately
- Cluttered layouts
- Low contrast text
- Tiny fonts on mobile

### Content Mistakes

❌ **Avoid**:
- Overly technical language
- Walls of text without breaks
- Making unsupported medical claims
- Focusing on features instead of benefits
- Ignoring patient concerns/questions
- No clear next steps

### UX Mistakes

❌ **Avoid**:
- Hidden contact information
- Complicated forms
- Auto-playing videos with sound
- Unresponsive mobile design
- Slow loading times
- Broken links
- Confusing navigation

---

## Checklist for New Pages

### Design Checklist

- [ ] Consistent color palette applied
- [ ] Typography hierarchy clear
- [ ] Proper spacing system used
- [ ] Responsive across all breakpoints
- [ ] High-quality images optimized
- [ ] Hover states defined
- [ ] Loading states considered
- [ ] Accessible contrast ratios
- [ ] Clear visual focus for interactive elements

### Content Checklist

- [ ] Clear headline communicating value
- [ ] Benefit-focused copy
- [ ] Scannable content (headings, bullets)
- [ ] Clear CTA present
- [ ] Trust elements included
- [ ] SEO optimized (title, meta, headings)
- [ ] Alt text for images
- [ ] Proofreading complete

### UX Checklist

- [ ] Clear navigation path
- [ ] Mobile-friendly design
- [ ] Fast load time (< 3 seconds)
- [ ] Forms tested and functional
- [ ] Links working
- [ ] Contact info easily accessible
- [ ] Privacy/legal info linked
- [ ] Error states handled gracefully

---

## Tools & Resources

### Design Tools
- Figma / Adobe XD (UI design)
- Adobe Photoshop / Lightroom (Image editing)
- Coolors.co (Color palette generation)
- Google Fonts (Web fonts)

### Testing Tools
- Chrome DevTools (Responsive testing)
- WAVE (Accessibility checker)
- Google PageSpeed Insights (Performance)
- BrowserStack (Cross-browser testing)

### Inspiration Sources
- Medical/wellness websites in similar market
- Premium healthcare brands
- Modern SaaS product sites (for clean UI patterns)
- Award-winning agency portfolios

---

## Implementation Notes

When implementing this design system:

1. **Start with a style guide** - Document all colors, fonts, spacing as CSS variables
2. **Build component library** - Create reusable components (buttons, cards, forms)
3. **Design mobile-first** - Easier to scale up than down
4. **Test early and often** - Don't wait until the end to test responsiveness
5. **Get feedback** - Show designs to actual users in target demographic
6. **Iterate** - Refine based on real user behavior and feedback

---

## Final Thoughts

This design system creates a professional, trustworthy online presence for medical/wellness businesses. The key is consistency - once you establish these patterns, use them throughout your entire site.

Remember:
- **Trust** is built through professional design and clear information
- **Clarity** is more important than creativity in medical contexts
- **Simplicity** makes everything more accessible and effective
- **Patient focus** should guide every design decision

Adapt these guidelines to your specific brand personality, but maintain the core principles of professionalism, clarity, and user-centeredness.

---

**Version**: 1.0  
**Last Updated**: November 2025  
**Inspired By**: Aria Integrative Health and premium medical wellness web design best practices
