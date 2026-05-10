# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint checks
npx shadcn add <component>  # Add shadcn/ui components
```

## Architecture

**Next.js 16 App Router** portfolio site using React 19, Tailwind CSS v4, Framer Motion, and shadcn/ui. JavaScript (no TypeScript) with `@/*` path alias mapping to the project root.

### Routing & Pages
- `app/` — App Router pages (layout.jsx, page.jsx per route)
- Active routes (linked in nav): `/` (home), `/resume`, `/contact` — `/work` and `/services` pages exist but their nav links are commented out
- Root layout (`app/layout.jsx`) loads JetBrains Mono font, wraps everything in `TooltipProvider`, and mounts global components: `Header`, `StairTransition`, `PageTransition`, `SplashCursor`

### Component Organization
- `components/ui/` — shadcn/ui primitives (Button, Input, Tabs, etc.)
- `components/` — Feature/layout components: navigation, animations, modals, page sections
- `lib/utils.js` — Single `cn()` helper combining `clsx` + `tailwind-merge`

### Styling
- Tailwind CSS v4 configured via PostCSS (`@tailwindcss/postcss`)
- CSS variables for theming defined in `app/globals.css` (OkLCH color space); the site is always dark — `<body>` hardcodes `class="dark"`, no light/dark toggle
- Key brand color: `--accent: #00ddff` (cyan), used pervasively via `text-accent`, `bg-accent`, `border-accent`
- shadcn config in `components.json`: New York style, slate base color, RSC enabled, no TypeScript (`.jsx` files)
- Custom breakpoints: sm(640px), md(786px), lg(960px), xl(1200px)
- Typography utilities `.h1`, `.h2`, `.h3` and `.font-primary` (JetBrains Mono) are defined in `globals.css` `@layer base`

### Animation Patterns
- **Framer Motion** for all animations: page transitions, entrance animations, stair effects, modals
- `PageTransition.jsx` and `StairTransition.jsx`/`Stairs.jsx` wrap pages for route-change animations
- `AnimatePresence` used in layout for route transitions
- `SplashCursor.jsx` — large WebGL/Three.js custom cursor component

### Key Patterns
- Pages are "use client" when they include animations or interactivity
- Modals (`ProjectModal.jsx`, `ServiceModal.jsx`) receive data as props and handle their own animation state
- Stats use `react-countup` for number entrance animations
- React Compiler is enabled (`reactCompiler: true` in `next.config.mjs`)
- All content (resume experience/education/skills, stats numbers, social links) is hardcoded as JS objects at the top of each component file — there is no CMS or separate data layer
- Resume PDF lives at `public/assets/resume/resume-of-mohiuddin-ahmed.pdf`; a v2 variant exists at the same path with `-v2` suffix
