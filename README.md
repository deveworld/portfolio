# Deveworld Portfolio

Modern minimalist portfolio website built with Next.js 15.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Language**: TypeScript

## Features

- 🌙 Charcoal black minimalist design
- ✨ Ambient glow effects & dot pattern background
- 🎯 Bento grid layout for projects
- 🔦 Mouse-tracking spotlight cards
- 📱 Fully responsive
- ⚡ Optimized with Turbopack

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles & Tailwind config
├── components/
│   ├── sections/       # Page sections (Hero, About, Projects...)
│   └── ui/             # Reusable UI components
└── data/
    └── content.ts      # Portfolio content data
```

## Deployment

Recommended: [Vercel](https://vercel.com)

```bash
npm run build
```

## License

MIT © Deveworld
