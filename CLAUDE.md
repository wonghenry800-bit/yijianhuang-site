# yijianhuang.site — management handbook

This file is the running record for managing Yijian (Henry) Huang's personal website.
Claude reads it automatically when it opens this repository, so any account or session
can pick up where the last one stopped. Keep it up to date after every change
(see "Change log" at the bottom).

## 1. The site at a glance

| Item | Value |
|---|---|
| Live URL | https://yijianhuang.site |
| GitHub repo | https://github.com/wonghenry800-bit/yijianhuang-site (branch `main`) |
| GitHub owner account | `wonghenry800-bit` (email wonghenry800@gmail.com) |
| Hosting | Vercel, team scope `wonghenry800-bits-projects` |
| Vercel projects | `portfolio` (the live site) and `desktop-tutorial` (a leftover tutorial project that also builds from this repo; can be deleted in Vercel) |
| Deploys | Automatic: every push to `main` triggers a Vercel build (~1–2 min) |
| Stack | Next.js 16 (App Router), React 19, TypeScript, framer-motion, plain CSS in `src/app/globals.css` |
| Languages | Every page is bilingual. Default English; the navbar button switches to Chinese (`lang` = `en` / `cn`) |

## 2. Giving Claude access (new account or new session)

1. **GitHub**: in Claude on the web (claude.ai), Settings → Connectors, connect GitHub.
   Then on github.com: avatar → Settings → Applications → **Installed GitHub Apps** → Claude →
   Configure → Repository access → add `yijianhuang-site` (or All repositories) → Save.
   Without this step pushes fail with `403 Resource not accessible by integration`.
2. **Vercel (optional)**: only needed to read deploy logs or settings. The Vercel connector
   needs team access approved for `wonghenry800-bits-projects` before it can list projects.
   Deploy status can also be checked without Vercel, from the commit's status checks on GitHub
   (`gh api repos/wonghenry800-bit/yijianhuang-site/commits/<sha>/status`).
3. Start a session with this repo attached, and say what to change.

## 3. Where content lives

Almost all text is data, not page code. Edit the data file; each one has `en` and `cn` blocks
that must be changed together.

| What | File |
|---|---|
| Top navigation bar and its dropdown menus | `src/data/navigation.ts` |
| Homepage hero (经济学 / 政策 / 影响力), stats bar, focus areas, featured work, skills | `src/data/home.ts` |
| About page: six "personal system" cards and their pop-up articles; languages; skills | `src/data/about.ts` (`aboutCards`, `langs`, `skillsDetailed`) |
| Education page (5 schools) | `src/data/about.ts` (`eduData`), page in `src/app/education/page.tsx` |
| Experience page (8 internships, newest first) | `src/data/experience.ts` |
| Research page | `src/data/research.ts` |
| Campus, Portfolio, AI, Photos, Contact | `src/data/campus.ts`, `portfolio.ts`, `ai.ts`, `photos.ts`, `contact.ts` |
| Page layouts | `src/app/<page>/page.tsx` |
| Shared components (navbar, page shell, carousel) | `src/components/` |
| Images and logos | `public/gallery/` (referenced as `/gallery/<file>`) |
| Downloadable CV | `public/resume-yijian-huang.pdf` |

Navigation order (top bar): 关于 About · 教育 Education · 经历 Experience · 科研 Research ·
校园 Campus · 作品集 Portfolio · AI · 相册 Photos · 联系 Contact.

Dropdown links of the form `/experience?i=N` or `/education?i=N` open the N-th card (0-based).
**When an entry is added, removed or reordered, update those indices in `navigation.ts`.**

## 4. How to make common changes

- **Add an internship**: add one object at the top of both `expData.en` and `expData.cn` in
  `src/data/experience.ts` (fields: `org, role, loc, period, present, tags, img, abbr, color, url, detail`),
  put the logo in `public/gallery/`, then shift the `/experience?i=` indices in `navigation.ts`.
  Logos whose file name contains `logo` are shown on white with `contain` fit.
- **Change homepage numbers**: `homeStats` in `src/data/home.ts`.
- **Edit an About article**: `aboutCards` in `src/data/about.ts`; each card has `t` (title),
  `b` (short text on the card), `kicker`, `article` (sections of `h` + paragraphs `p`), optional `cta`.
- **Images**: prefer SVG for logos. The GitHub connector can only upload text files, so a PNG/JPG
  must be pushed with git from a cloned repo, or converted to SVG first.

Before pushing: run `npm ci`, then `npm run lint` and `npm run build`. Both must pass.
After pushing: confirm both Vercel checks show `success`, then ask Henry to refresh the site.

## 5. Content rules (agreed with Henry)

- Source of truth for facts is Henry's CV. Do not invent numbers, dates, employers or outcomes.
- The About articles are written in Henry's first-person voice from CV facts; opinions in them
  are drafts for Henry to review.
- Chinese homepage hero has **no full stops** (经济学 / 政策 / 影响力). English keeps "Economics. Policy. Impact."
- Keep English and Chinese versions in step.
- Commit messages describe the change; push to `main` only when Henry asks for changes to go live.

## 6. Key facts currently on the site

- Education: CUHK-Shenzhen, BSc Economics (Applied Economics), Philosophy minor, 2022–2026.
  CEIBS × ESCP dual-degree **Global Master in Management**, **Sep 2026 – Aug 2028 (expected)**,
  Shanghai → Paris / London / Zurich. Also UChicago Harris Data & Policy Summer Scholar (2024)
  and HKU CCGL9042 (summer 2023).
- Experience (newest first): ByteDance (Douyin) AI Research & Operations Intern, Guangzhou,
  Jun–Sep 2026 · IQVIA Business Technology Consulting · State Council DRC · HKU Centre for AI,
  Management and Organization · NetEase · UN Youth Training Program (Geneva) · UNDP China ·
  Guangdong Rongtai VC.
- ByteDance entry content: daily tracking of US foundation models, Chinese AI apps and competitors;
  youth user research + 6 case studies → 8 insight reports; 12 internal AI-community posts;
  4 AI events (sharing sessions, bootcamps, hackathon), 150+ participants; mapped AI use in
  3 business units using Anthropic's AI workflow patterns → 2 new team workflows.
- Homepage stats: 7+ internships · 5 research projects · 6 languages · 3+ countries.
- Languages: Cantonese and Mandarin (native), English and Japanese (proficient), German
  (intermediate), French (basic).
- Contact: wonghenry800@gmail.com, based in Shanghai.

## 7. Open items

- [ ] IQVIA card says "Mar 2026 – Present" / "2026年3月 – 至今", which clashes with ByteDance
      (Jun–Sep 2026). CV says Mar–May 2026. Waiting for Henry's confirmation to change it.
- [ ] Homepage "7+ 实习经历": with ByteDance there are 8 internships on the Experience page.
      Decide whether to change to 8+.
- [ ] Henry to review the six About articles for voice and accuracy.
- [ ] Check that `public/resume-yijian-huang.pdf` is the latest CV.
- [ ] Optional: delete the `desktop-tutorial` Vercel project.

## 8. Change log

- **2026-11-23** — Added ByteDance (Douyin) internship (EN/CN) with SVG logo
  `public/gallery/bytedance-logo.svg`. Removed full stops from the Chinese homepage hero.
  Replaced the "4 Policy briefs / 政策简报" stat with "5 Research projects / 研究项目". (`170f212`)
- **2026-11-23** — New Education page (`/education`) placed between About and Experience in the
  nav; education removed from About. The six About cards now open long-form pop-up articles
  (EN/CN). Fixed Experience dropdown indices after the ByteDance insert; `/about#skills` anchor. (`de70f26`)
- **2026-11-23** — CEIBS × ESCP programme matched to the CV: dual degree, Sep 2026 – Aug 2028
  (expected), Shanghai / Paris / London / Zurich; About intro card updated. (`4db91df`)
- **2026-11-25** — Added this handbook (`CLAUDE.md`).
