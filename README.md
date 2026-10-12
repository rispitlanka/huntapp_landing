# Hunt — landing page (Next.js)

The warm paper landing page for Hunt, built with **Next.js 16 (App Router)**, **React 19** and **TypeScript**.
There are no UI libraries: all animation is plain CSS plus a few small React hooks.

## Run it locally
Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com: **Add New → Project** and import the repo.
3. Vercel detects Next.js automatically, so just click **Deploy**.

Or from the command line:
```bash
npm i -g vercel
vercel           # preview link
vercel --prod    # live
```

## Before you go live
Everything you need to change is in **`lib/site.ts`**:
- `appStoreUrl` and `playStoreUrl`: your store links (used on all download buttons)
- `email`: used by "List your place" and the Questions section
- `privacyUrl` and `termsUrl`: footer links
- `url`: your live domain, used for social previews

Then:
- **Photos**: replace the files in `public/images/`. The current ones are cut from app screenshots and are low resolution. Keep the same names, or update the paths in the components and in `lib/content.ts`.
- **Share image**: add a 1200×630 image and point `openGraph.images` in `app/layout.tsx` at it.

## Where things live
```
app/
  layout.tsx        fonts (next/font), page title, social preview settings
  page.tsx          puts the sections together
  globals.css       all styles; colours and fonts are at the top
  loading.tsx       skeleton screen for route loading
  not-found.tsx     404 page
  icon.svg          favicon
components/
  ReadyProvider.tsx loading screen; holds animations until fonts and photos are ready
  Skeleton.tsx      the page-shaped shimmer placeholder
  Reveal.tsx        fade/slide/zoom in on scroll
  Doodle.tsx        hand-drawn sketches that float, with optional parallax
  Photo.tsx         next/image with a shimmer until loaded
  Faq.tsx           accordion, one answer open at a time
  Nav.tsx, StoreButtons.tsx, Icon.tsx
  sections/         Hero, Band, HowItWorks, Features, WalletSection,
                    Creators, Business, Questions, FinalCta, Footer
lib/
  site.ts           links and settings
  content.ts        page text: steps, features, FAQ and more
```

## Editing text
Most copy is in `lib/content.ts`, for example the steps, features, FAQ and business points. Headlines live in each file in `components/sections/`.

## Motion
- **Loading screen**: a skeleton of the page shimmers until fonts and the page are ready, then fades out. It never waits longer than 3 seconds.
- **Hero**: the text rises in, the orange pen circle draws itself around "Snap it.", the phone floats, the "+10 pts" stamp pops and the code ticket slides in.
- **On scroll**: sections and cards fade up in a stagger, and the points rulers fill up.
- **Ongoing**: the Explore · Capture · Earn strip scrolls (and pauses on hover). The doodles drift, and a few move with the scroll.
- **Hover**: buttons press down, cards lift and the polaroids straighten.
- **FAQ**: opens and closes smoothly.

Everything switches off for people who have "reduce motion" turned on in their device settings.

To add a reveal to anything:
```tsx
<Reveal variant="left" delay={120}>…</Reveal>   // variants: up (default), left, right, zoom
```
To add a doodle:
```tsx
<Doodle shape="heart" size={30} tone="orange" at={{ top: 40, right: '5%' }} rotate={10} parallax={0.05} />
```
