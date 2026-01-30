# Grownee Landing Page

A modern, responsive landing page for Grownee - a personal finance management application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful animations with Framer Motion
- ⚡ Fast performance with Next.js 14
- 🎯 TypeScript for type safety
- 🌈 Custom color scheme with Tailwind CSS
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** DM Sans & Space Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd grownee-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
grownee-landing/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── Features.tsx          # Features section
│   ├── HowItWorks.tsx        # How it works section
│   ├── LearnAnalyze.tsx      # Learn & Analyze section
│   ├── Learns.tsx            # Blog/Articles section
│   ├── FAQ.tsx               # FAQ section
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Main headline with mobile app preview
3. **Features** - Key features showcase
4. **How It Works** - Step-by-step guide
5. **Learn & Analyze** - Savings and investment cards
6. **Learns** - Blog articles section
7. **FAQ** - Frequently asked questions
8. **Footer** - Links and contact information

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#00C853",
    dark: "#00863A",
    light: "#69F0AE",
  },
  // ... more colors
}
```

### Fonts

Fonts are loaded from Google Fonts in `app/globals.css`. You can change them by updating the import URL and CSS variables.

### Content

Update content directly in each component file under the `components/` directory.

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then start the production server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

Alternatively, you can deploy to:
- Netlify
- Railway
- AWS
- Any platform that supports Node.js

## Performance

- Lighthouse Score: 95+
- Optimized images and fonts
- Code splitting with Next.js
- CSS optimization with Tailwind
- Efficient animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Support

For support, email support@grownee.com or join our community.

---

Built with ❤️ using Next.js
