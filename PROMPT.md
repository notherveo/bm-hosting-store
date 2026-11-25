Build a complete, production-quality multi-page Next.js (App Router) website — a **premium VPS & Minecraft hosting store**. It should feel like an expensive infrastructure brand, NOT a generic hosting template.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/vps`, `/minecraft`, `/about`, `/faq`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else (glass card, plan card, accordion, counters, animated glow, cursor glow…) you MUST write yourself as a new file under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<Cpu className="size-4" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`.
3. Shared chrome (header/nav, footer, cursor glow) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. No photos needed — build visuals from CSS gradients, glass surfaces, inline SVG (network/server illustrations, sparklines) and animated shapes. If you use an image at all, plain `<img>` (never `next/image`) with alt. No empty src.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO".
8. Responsive mobile-first; never overflow horizontally.

## Design direction — dark premium glassmorphism
- Deep charcoal / near-black background.
- Frosted-glass surfaces: `bg-white/5 backdrop-blur-xl border border-white/10` with subtle inner highlights and elegant shadows; layered depth.
- Soft ambient lighting — large, blurred, low-opacity accent glows behind sections; restrained accent color (pick one vivid hue, e.g. emerald or violet).
- Premium type with strong hierarchy; smooth gradients used sparingly; generous clean spacing.

## Ordering system (IMPORTANT — no checkout exists)
- There is **NO payment gateway and no checkout**.
- Every plan has an **Order Now** button that opens our Discord invite in a new tab.
- Put the invite in ONE place: `lib/config.ts` exporting `export const DISCORD_INVITE = "https://discord.gg/blacmilk";` (a clearly-marked placeholder) and import it everywhere. Never hardcode the URL twice.
- Explain the Discord ordering flow on the pages (a short "How ordering works" section + Discord-badged CTAs).

## Centralized plan data
Create `lib/plans.ts` with typed arrays:
- `vpsPlans`: a sensible progression from **2 GB RAM up to 96 GB RAM** (e.g. 2/4/8/16/32/48/64/96 GB), each with cores, NVMe storage, network speed, bandwidth, and clearly-marked placeholder monthly price. Include a `popular` flag on one tier.
- `minecraftPlans`: multiple tiers with RAM, CPU, storage, editable placeholder player capacity, supported server software (Vanilla / Paper / Fabric / Forge / Modpacks), and price.
Plans must be rendered from this data (reusable `<PlanCard/>`), so plans are easy to edit.

## Motion language (premium and fluid, not excessive)
- **Page/route transitions** (a layout-level fade/translate wrapper using AnimatePresence with the pathname as key).
- **Animated hero typography** (staggered words/chars reveal).
- **Scroll-triggered reveals** (`whileInView`).
- **Floating glass elements** with gentle continuous motion.
- **Subtle glowing background effects** (blurred gradient blobs).
- **Hover animations on pricing cards** (lift, glow-border, accent sweep).
- **Animated borders / buttons** (conic/linear gradient border on hover).
- **Smooth accordion transitions** (FAQ + plan details).
- **Animated statistics** (count-up on view).
- **Parallax** on hero/infra sections.
- **Subtle mouse-follow glow** (a faint radial light following the cursor on the hero/section backgrounds — desktop only).

Write these components: `components/site-header.tsx`, `components/site-footer.tsx`, `components/page-transition.tsx`, `components/glass-card.tsx`, `components/plan-card.tsx`, `components/counter.tsx`, `components/accordion.tsx`, `components/glow.tsx`, `components/cursor-glow.tsx`, `components/infra-stats.tsx`, `components/discord-cta.tsx`.

## Content
- `/` — animated hero, short intro, VPS + Minecraft category showcases, featured plans, "Why choose us", performance/infrastructure highlights (bento), animated stats, FAQ teaser, strong Discord CTA.
- `/vps` — the full VPS plan grid (2→96 GB) with a comparison-friendly layout and per-plan specs.
- `/minecraft` — the Minecraft tiers with player capacity + supported software, plus a "how it works" strip.
- `/about` — hosting philosophy, infrastructure overview, what makes it different, brand story.
- `/faq` — interactive accordion covering hosting, payments, deployment, support, and Discord ordering.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, and every component you reference.
