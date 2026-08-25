# Christopher Myers — Personal Profile

A minimal, single-page personal website built with Next.js, React, TypeScript, Tailwind CSS, and Lucide React.

## Edit personal content

All personal text, links, metadata, contact details, and image paths live in:

```text
content/site-content.ts
```

## Images

- The hero uses `public/images/backgroundimage.webp`.
- To add a portrait, place it at `public/images/portrait.jpg`, then change `about.portrait` in `content/site-content.ts` from `null` to:

```ts
{
  src: "/images/portrait.jpg",
  alt: "A descriptive portrait alt text",
  position: "center 35%",
}
```

Until then, the About section displays an intentional monogram placeholder.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate a production build

```bash
npm run typecheck
npm run lint
npm run build
```
