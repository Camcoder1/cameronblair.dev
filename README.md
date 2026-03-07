# Portfolio Site Template

A modern, responsive portfolio site template built with Next.js and Tailwind CSS. Designed for IT professionals, engineers, and technical leaders to showcase their experience, skills, and projects.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Features

- Responsive single-page layout with dark theme
- Animated sections with scroll-triggered transitions
- Interactive skill filtering by category
- Project showcase cards
- System architecture diagrams
- Contact section with email and social links
- Static export — no server required

## Quick Start

```bash
git clone <repo-url>
cd <repo-name>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Make It Yours

All site content is in a single file: **`src/data/content.ts`**

Update these fields to personalize the site:

- `siteConfig` — your name, title, tagline, email, GitHub, and LinkedIn
- `about` — your bio
- `experiences` — your work history (role, company, highlights)
- `skillCategories` — your technical skills grouped by category
- `projects` — project cards with descriptions and tags
- `futureThemes` / `futureManifesto` — your professional vision

No need to touch any component files unless you want to change the layout or styling.

## Project Structure

```
src/
  app/            # Next.js app router (layout, page, global styles)
  components/     # UI components (Hero, About, Skills, Projects, etc.)
  data/           # Site content and configuration — edit this
public/           # Static assets (SVGs, favicon)
```

## Building for Production

```bash
npm run build
```

Generates a static site in the `out/` directory, ready to deploy anywhere that serves static files.

## Deployment

Since this is a static export, you can host it on any platform:

- **AWS (S3 + CloudFront)** — upload `out/` to an S3 bucket behind CloudFront
- **Vercel** — connect your GitHub repo for automatic deploys
- **Netlify** — drag and drop the `out/` folder or connect your repo
- **GitHub Pages** — push the `out/` contents to a `gh-pages` branch

### Example: AWS S3 + CloudFront

```bash
npm run build
aws s3 sync out/ s3://YOUR_BUCKET_NAME --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## License

MIT
