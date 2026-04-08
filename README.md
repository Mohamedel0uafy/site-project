# BCGC S.A.R.L — Portfolio Website

Modern, animated portfolio website for BCGC S.A.R.L, a technical control bureau specializing in civil engineering and structural analysis.

## Features

- **Smooth scroll animations** with Framer Motion
- **Responsive design** — mobile, tablet, desktop
- **Modular component architecture** — easy to maintain
- **Dark theme** with gold accents
- **Parallax effects** and micro-interactions
- **SEO-friendly** structure

## Tech Stack

- React 18
- Vite (build tool)
- Framer Motion (animations)
- Lucide React (icons)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                    # Fixed navigation with scroll effects
│   ├── Hero.jsx                      # Landing section with parallax
│   ├── Services/
│   │   ├── index.jsx                 # Services section shell
│   │   ├── ServiceCard.jsx           # Individual service card
│   │   └── servicesData.js           # Service content & animations
│   ├── ChiefEngineer/
│   │   ├── index.jsx                 # Chief Engineer section shell
│   │   ├── StatCard.jsx              # Stats display component
│   │   ├── Badge.jsx                 # Expertise badge
│   │   ├── CertCard.jsx              # Certification card
│   │   ├── AchievementItem.jsx       # Achievement list item
│   │   └── engineerData.js           # Engineer profile data
│   └── Contact/
│       ├── index.jsx                 # Contact section shell
│       └── InfoItem.jsx              # Contact info item
├── App.jsx                           # Main app component
├── main.jsx                          # React entry point
└── index.css                         # Global styles

```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Customization

### Update Engineer Info
Edit `src/components/ChiefEngineer/engineerData.js`:
- Name, title, bureau
- Photo URL
- Experience, stats
- Certifications, expertise
- Achievements

### Update Services
Edit `src/components/Services/servicesData.js`:
- Add/remove services
- Update descriptions, tags, icons

### Update Contact Info
Edit `src/components/Contact/index.jsx`:
- Email address
- Physical address
- Business hours

### Color Scheme
The gold accent color (`#c9a84c`) is used throughout. To change:
1. Search for `#c9a84c` in all files
2. Replace with your brand color
3. Update gradient variations accordingly

## Sections

1. **Navbar** — Fixed navigation with smooth scroll
2. **Hero** — Full-screen landing with animated background
3. **Services** — 8 service cards with hover effects
4. **Chief Engineer** — Split layout profile section
5. **Contact** — Contact form and location info

## Performance

- Lazy animations (trigger on scroll)
- Optimized images (use WebP when possible)
- Code splitting by component folders
- Minimal bundle size

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 BCGC S.A.R.L — All rights reserved
