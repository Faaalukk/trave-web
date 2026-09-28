# Vokrub — frontend

React + TypeScript + Vite. Ported from `../Vokrub Standalone.html`, which was a
single bundled page driven by a custom template runtime; this is the same product
as a normal React app with real routes.

## Run

```bash
bun install
bun run dev      # http://localhost:5173
bun run build
bun run typecheck
```

## Layout

```
src/
  data/        taxonomy, labels, TH/EN copy and the place catalogue (ported verbatim)
  lib/         i18n context, place filtering
  components/  Header, ImageSlot, ThailandMap, cards, icons
  screens/     Landing, Hub, Category, Location, Provinces, Results, Detail
  styles/      tokens.css (design system + fonts), app.css (app palette + components)
```

## Routes

| Route                       | Screen                                  |
| --------------------------- | --------------------------------------- |
| `/`                         | Landing                                 |
| `/hub`                      | Category hub                            |
| `/browse/:category`         | Options for type/activity/budget/…      |
| `/browse/location`          | Region map + transit lines              |
| `/browse/location/:region`  | Provinces in that region                |
| `/results/:kind/:key`       | Places matching one filter              |
| `/place/:id`                | Place detail                            |

The standalone build kept all of this in one component's `screen` state. Routing
it means back/forward and deep links work, and the backend can later serve the
same shapes per URL.

## Differences from the standalone build

- **Region map.** The original embedded `./thailand-map.html` in an iframe and
  listened for a `postMessage`; that file was never part of the bundle. Replaced
  with an inline SVG picker (`components/ThailandMap.tsx`) that shares the app's
  palette and language.
- **Images.** Only one photo existed in the bundle (Erawan Waterfall, used for
  the hero and the blurred page background). Every other slot renders a
  deterministic gradient plus its caption — swap in real photos by passing `src`
  to `ImageSlot`.
- **Fonts.** Caprasimo and Figtree are bundled as latin-only subsets, so Thai
  copy falls back to a Thai-capable system face. Same as the original.

## Backend

Not built yet. `vite.config.ts` already proxies `/api` to `http://localhost:3000`
for the Elysia service. `data/places.ts` and `lib/filter.ts` are the seam: when
the API lands, those two move behind a fetch and nothing else has to change.
