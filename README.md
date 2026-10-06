# Tulas International School Homepage

A responsive, single-page homepage concept for Tulas International School (TIS). The interface combines an editorial-style layout, school-focused content, a deep-blue and warm-ivory palette, terracotta accents, and clear links to the official admissions portal.

> This repository contains a frontend website concept. It does not include a CMS, admissions processing, authentication, or a project-owned API or database.

## Project links

- **Repository:** [github.com/Kishore-83096/netpuppy](https://github.com/Kishore-83096/netpuppy)
- **School website:** [tis.edu.in](https://tis.edu.in/)
- **Admissions portal:** [admission.tis.edu.in](https://admission.tis.edu.in)
- **Live demo:** Not currently specified.

## User interface

The homepage is composed in this order:

1. **Sticky navigation** — the school logo, links to page sections, a responsive menu, a theme switch, and an admissions call to action.
2. **Hero** — introductory message, links to admissions and the About section, school image, and animated feature cards.
3. **About** — a short description of the school's approach to education.
4. **Academics** — three visual cards describing academic excellence, holistic development, and future readiness.
5. **Facilities** — cards for classrooms, sports, and technology, with supporting images.
6. **Student experience** — a Discover, Connect, and Grow overview.
7. **Admissions** — a call to action linking to the official admissions portal.
8. **Footer** — school identity and links to the page sections.

### Visual design and interaction

- Inter is used for headings and body text. It is loaded through Next.js `next/font`.
- Shared CSS variables define the palette, typography, spacing, borders, shadows, and corner radii.
- Light theme is the default. The header's theme button switches between light and dark appearances; the selection is stored in the browser's `localStorage` under `tis-theme`.
- Motion provides entrance reveals, the scroll-progress bar, and subtle movement in selected hero and admissions elements.
- The custom pointer and click ring are enabled only for mouse-like pointers. They are not used on touch-first devices.
- Layout breakpoints in the global stylesheet adapt the page for tablet, mobile, and small-phone widths.
- Keyboard focus styles and the `prefers-reduced-motion` setting are supported.
- The navigation and hero links scroll to page sections. The admissions calls to action lead to `https://admission.tis.edu.in`.

## Technology

- **Framework:** Next.js 16 App Router
- **UI:** React 19 and TypeScript
- **Styling:** Global CSS (Tailwind CSS is present in the PostCSS toolchain, but the page's component styling is authored in `app/globals.css`)
- **Animation:** Motion for React, imported from `motion/react`
- **Font:** Inter via `next/font`
- **Package manager:** npm, using the committed `package-lock.json`

## Download and install

### Requirements

- Git, if cloning the repository
- Node.js **20.9.0 or newer**
- npm (included with Node.js)

### Clone from GitHub

Run these commands in a terminal:

```bash
git clone https://github.com/Kishore-83096/netpuppy.git
cd netpuppy
npm ci
```

`npm ci` installs the exact dependency versions recorded in `package-lock.json`.

Alternatively, download the repository as a ZIP from the GitHub page, extract it, open a terminal in the extracted project root (the folder containing `package.json`), and run `npm ci`.

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to application files are picked up by the Next.js development server.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint checks. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build; run `npm run build` first. |

There is no test script configured in `package.json` at this time.

## Application structure

```text
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
components/
  animation/
    CustomCursor.tsx
    Reveal.tsx
    ScrollProgress.tsx
  layout/
    Footer.tsx
    Navbar.tsx
  sections/
    About.tsx
    Academics.tsx
    Admissions.tsx
    Facilities.tsx
    Hero.tsx
    StudentExperience.tsx
  ui/
    Button.tsx
    SectionHeading.tsx
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next.config.ts
next-env.d.ts
package.json
package-lock.json
postcss.config.mjs
tsconfig.json
README.md
```

### Application and component files

| File or folder | Context and reason |
| --- | --- |
| `app/layout.tsx` | Defines the root HTML layout, page metadata, Inter font setup, and global stylesheet import. |
| `app/page.tsx` | Assembles the homepage from the shared animation, layout, and section components. Change this file to reorder or add homepage sections. |
| `app/globals.css` | Holds the global reset, design tokens, component styles, light/dark theme colors, responsive layouts, and reduced-motion rules. The CSS variables keep the appearance consistent across sections. |
| `app/favicon.ico` | Browser tab and bookmark icon served by the App Router. |
| `components/animation/Reveal.tsx` | Reusable Motion wrapper that fades and moves content into view once it enters the viewport. |
| `components/animation/ScrollProgress.tsx` | Renders the fixed progress indicator linked to the page's scroll position. |
| `components/animation/CustomCursor.tsx` | Adds the decorative mouse pointer and click ring on devices with a fine pointer; disables that behavior for touch pointers. |
| `components/layout/Navbar.tsx` | Owns the sticky header, section navigation, mobile-menu state, and light/dark theme control and persistence. |
| `components/layout/Footer.tsx` | Renders the school identity, footer navigation, and copyright line. |
| `components/sections/Hero.tsx` | Renders the headline, introductory copy, hero calls to action, and animated visual. |
| `components/sections/About.tsx` | Presents the school's introductory statement and learning approach. |
| `components/sections/Academics.tsx` | Defines and renders the three academic feature cards. |
| `components/sections/Facilities.tsx` | Defines and renders the three campus/facility cards and their images. |
| `components/sections/StudentExperience.tsx` | Defines and renders the Discover, Connect, and Grow items. |
| `components/sections/Admissions.tsx` | Presents the admissions message and links to the official application portal. |
| `components/ui/Button.tsx` | Shared link styled as a button, with optional styling and click behavior. |
| `components/ui/SectionHeading.tsx` | Shared eyebrow-and-title heading used by content sections. |
| `public/` | Static files served from the site root. Its SVGs are the default Next.js starter icons and are not currently referenced by the homepage components. |

### Project configuration and support files

| File | Context and reason |
| --- | --- |
| `package.json` | Declares project dependencies and the `dev`, `lint`, `build`, and `start` scripts. |
| `package-lock.json` | Locks npm dependency versions so installs are repeatable. |
| `next.config.ts` | Configures Next.js, including the remote image host used for Unsplash images. |
| `tsconfig.json` | Configures TypeScript, strict checks, JSX handling, and the `@/*` import alias. |
| `postcss.config.mjs` | Connects Tailwind CSS 4 to the PostCSS pipeline. |
| `eslint.config.mjs` | Enables the Next.js Core Web Vitals and TypeScript ESLint rules. |
| `.gitignore` | Excludes dependencies, build output, local environment files, and generated artifacts from Git. |
| `next-env.d.ts` | Next.js-generated TypeScript declarations; do not edit by hand. |
| `AGENTS.md` | Provides repository-specific instructions for coding agents working with this Next.js version. |
| `CLAUDE.md` | Points to the shared agent instructions in `AGENTS.md`. |

## Images and external services

The school logo and several school images are loaded from `tis.edu.in`; facility photos are loaded from Unsplash. The application does not bundle these remote images, so an internet connection is needed to display them. Remote URLs can change or become unavailable independently of this repository. Check image availability and usage rights before publishing.

The web font is fetched/handled through Next.js font tooling. A network connection may be required when setting up or building in a clean environment, depending on the font cache.

## Deployment

This is a standard Next.js application and can be deployed to Vercel or another host that supports the Next.js production runtime.

For a local production check:

```bash
npm run build
npm run start
```

For Vercel, import the GitHub repository and use the detected Next.js settings. After deployment, verify the responsive navigation, theme switch, external images, section links, and admissions destination.
