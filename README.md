# Yijian Huang Portfolio

Personal website for Yijian Huang, deployed at [yijianhuang.site](https://yijianhuang.site) and [www.yijianhuang.site](https://www.yijianhuang.site).

The site is a bilingual Next.js portfolio covering economics, policy research, professional experience, AI projects, campus activities, photography, and contact information.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

Useful commands:

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/app/                 Route pages for the public site
src/components/          Shared UI and context components
src/data/                Shared bilingual content and navigation data
src/hooks/               Shared client-side interaction hooks
src/types/               Shared TypeScript types
src/utils/               Small shared helpers
public/avatar.jpg        Profile image used across the site
public/gallery/          Photo and project image assets
```

Key edit locations:

- `src/app/page.tsx` for the home page hero, stats, and featured skills.
- `src/data/home.ts` for home page hero copy, stats, and featured skill details.
- `src/app/about/page.tsx` for education, languages, and detailed skills.
- `src/data/about.ts` for about page cards, education entries, languages, and skill details.
- `src/app/experience/page.tsx` for internships and work experience.
- `src/data/experience.ts` for experience entries and modal details.
- `src/app/research/page.tsx` for research projects.
- `src/data/research.ts` for research project entries and modal details.
- `src/app/ai/page.tsx` for AI tools and AI project writeups.
- `src/data/ai.ts` for AI tools, project cards, and detailed writeups.
- `src/data/campus.ts` for campus activity cards and modal content.
- `src/data/contact.ts` for contact methods and bilingual labels.
- `src/data/photos.ts` for the gallery image list and captions.
- `src/components/Navbar.tsx` for navigation rendering.
- `src/components/ImageCarousel.tsx` for modal image galleries.
- `src/data/navigation.ts` for navigation labels and dropdown links.
- `src/types/language.ts` for the shared `en` / `cn` language type.
- `src/utils/publicImage.ts` for URL-safe public image paths, including Chinese filenames.

## Deployment

Production is hosted on Vercel.

- Vercel project: `portfolio`
- Production domains: `yijianhuang.site`, `www.yijianhuang.site`
- Source repository: `wonghenry800-bit/desktop-tutorial`
- Production branch: `main`

Deployments are triggered from commits pushed to `main`.

## Maintenance Notes

- Keep user-facing content bilingual when adding new sections.
- Prefer moving large page-level content arrays into `src/data/` as pages grow.
- Reuse shared components for repeated patterns such as image carousels, modals, list rows, and section headers.
- Add new images under `public/gallery/` and reference them with root-relative paths like `/gallery/example.jpg`.
- Avoid renaming public image files in bulk unless all references are updated in the same change.
