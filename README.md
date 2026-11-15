# ronil.cv

Portfolio for Ronil Ghoghari — full-stack developer, Toronto.

A scroll-driven WebGL scene that starts inside the Niagara gorge and pulls back
across Lake Ontario until the Toronto skyline resolves out of the haze. No photos,
no textures, no model files: every surface is procedural geometry and GLSL.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · React Three Fiber 9 · Three.js

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Deploy

Push to GitHub, import the repo on Vercel, accept the defaults. No env vars needed.

## How the scene works

`CameraRig` interpolates between five keyframes using scroll position with
smoothstep easing, then lerps toward the result so the motion has weight.

Scroll progress lives in a **ref, never in state**. Putting it in state would
re-render the tree on every scroll tick, which is the usual reason R3F sites
stutter.

The falls are 17 planes swept along an arc, running fbm noise at two scales and
speeds. Alpha thins at each panel's edges so the seams vanish and the sheet
reads as one curved face. The speed difference matters — real falls don't move
as a single sheet.

The lake uses three-wave vertex displacement plus a narrow specular track down
the middle, because dusk lands on water as a band rather than a wash.

The skyline is one `instancedMesh` draw call for 74 buildings.

## Performance

`detectQuality()` reads viewport width and `hardwareConcurrency`, then scales
particle count, mesh segments and device pixel ratio across three tiers.
`prefers-reduced-motion` forces the low tier and disables pointer parallax.

An error boundary catches WebGL failures and falls back to a CSS gradient —
corporate laptops block WebGL more often than you'd expect, and a gradient is
a fine outcome where a blank rectangle is not.

## Structure

```
app/          layout, page, global CSS
components/   Scene (Canvas), SceneLoader (client boundary), Content, ErrorBoundary
components/scene/  Sky, Gorge, Falls, Mist, Lake, City, CameraRig
lib/          palette + quality tiers, GLSL, scroll ref + seeded PRNG
```
