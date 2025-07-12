## Quick Installation

1. npm install
2. create .env file & set value for NEXT_PUBLIC_PEXELS_API_KEY
3. npm run dev

## Changes

A chronological list of significant changes or updates to the project.

### Dependency Updates & Security Fixes

1.  **Where**: `package.json`, `package-lock.json`
2.  **What**: Performed `npm audit fix --force`.
3.  **Why**: To resolve two reported vulnerabilities. --force flag should be avoided in production or if needed should be performed cautionally:
    * Low severity: `brace-expansion` updated from `2.0.0` to `2.0.1`.
    * Critical severity: `next` updated from `<=14.2.29` to `14.2.30`.
4.  **Reference**: [Vercel Next.js Security Advisories](https://github.com/vercel/next.js/security/advisories)

---

### Component & Asset Updates

1.  **Where**: `app/components/Hero.tsx`
2.  **What**: Corrected the video file name in the Hero component from `2.mp4` to `7670835-uhd_3840_2160_30fps.mp4 and reduced the size of video from ~60mb to ~16mb with minimal visible difference in quality`.
3.  **Why**: To fix a 404 error caused by an incorrect file name & optimise the page speed.

---

### Performance Improvements

1.  **Where**: `app/components/BlogPostCard.tsx`, `app/components/Gallery.tsx`, `app/components/GeneratedImage.tsx`, `app/gallery/page.tsx`
2.  **What**: Use of native next Image component in place of native html img tag.
3.  **Why**: To significantly improve page performance with built-in lazy loading images.

---

1.  **Where**: `public/1.webp`, `public/2.webp`, `public/3.webp`, `public/4.webp`, `public/5.webp`, `public/6.webp`, `public/7.webp`, `public/8.webp`, `public/9.webp`, `public/10.webp`, `public/11.webp`
2.  **What**: Replaced the extremely affecting png images to modern optimised webp images.
3.  **Why**: To significantly improve page performance using modern image format as webp.

---

### Font System Migration

1.  **Where**: `app/layout.tsx`, `app/components/FontShowcase.tsx`
2.  **What**: Migrated font loading from custom Google Fonts links to `next/font/google`.
    * `app/layout.tsx` now only imports and applies the `Inter` font globally.
    * `app/components/FontShowcase.tsx` imports and uses specific Google Fonts for demonstration purposes, leveraging CSS variables.
3.  **Why**: To optimize font loading, improve performance, and leverage Next.js's built-in font optimization features (e.g., automatic self-hosting, preventing layout shifts).
4.  **Reference**: [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

### Missing page fix (404)

1.  **Where**: `app/contact/page.tsx`
2.  **What**: Created page for contact form.
3.  **Why**: To fix the route error 404 while visiting contact page.

---

### Blog card ui fix

1.  **Where**: `app/components/BlogPostCard.tsx`
2.  **What**: Show blog details properly on the card.
3.  **Why**: To fix the invisiblity of blog details on the card.

---

### Header ui fix while scroll

1.  **Where**: `app/components/AppBar.tsx`
2.  **What**: Show the glass background of header nav while scrolling.
3.  **Why**: To fix the invisiblity of header navigation while scrolling and getting blended into the crossing sections.

---

### Consent

This document has been audited manually by @author Bishwajeet Kumar and finetuned using GTP o4-mini.