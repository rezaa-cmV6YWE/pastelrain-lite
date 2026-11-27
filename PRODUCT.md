# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: friends and people from re:'s circles — rhythm-game players, Discord and Steam contacts — who land on the page to see who re: is, what they are playing and listening to right now, and to grab a link to reach them. Hiring or client evaluation is not the primary job; the dev skills and projects are there as part of who re: is, not as a pitch.

## Product Purpose

pastelrain-lite (re.pastelrain.com) is re:'s personal profile card: a fast, single-glance page with identity, skills, tools, links, a few projects, and live status from Spotify, maimai, and CHUNITHM. Success is a visitor knowing who re: is and what they're into within a few seconds, and finding the link they came for.

## Positioning

It is the companion to the flagship pastelrain.com, the scroll-through paper-cut story site in `../pastelrain`. Lite is the no-story version: everything about re: in one place, quickly. What no generic link hub can copy is the live, real rhythm-game identity — the actual maimai and CHUNITHM profiles and ratings pulled from SEGA's player data — next to what re: is listening to right now.

## Operating Context

- Visited from links shared on Discord, Steam, GitHub, and among rhythm-game friends, on phones as often as desktops.
- Live data refreshes in the background: Spotify now-playing polls every 30 s; maimai and CHUNITHM data come from `https://performai.pastelrain.com/v1`, edge-cached (ISG, 1 h).
- SEGA services have scheduled maintenance windows (maimai 01:00–02:00 JST, longer on some days; CHUNITHM 02:00–06:00 JST). During them the page shows a maintenance state instead of profile data; this is a normal, recurring state, not an error.

## Capabilities and Constraints

- Single route `/`; unknown paths redirect to `/`.
- Sections today: title (パステルレイン), who-am-i (avatar, intro, Main Skills, Want to Learn, Tools, Links), Projects, Listening to (Spotify), maimai profile card, CHUNITHM profile, footer.
- Data layer already exposes the rating breakdown for both games (`useMaimaiQuery`, `useChunithmQuery`): total rating plus new and old rating-song lists, each song with jacket, difficulty, level and internal level, score (maimai achievement and DX score; CHUNITHM score), rating contribution, and combo plus sync (maimai) or chain (CHUNITHM) badges. No UI uses them yet.
- **Planned:** a new page showcasing the maimai and CHUNITHM ratings with the songs that make them up.
- Every live section has loading, error, empty (nothing playing), and maintenance states; all must stay real.
- Stack: TanStack Start + React 19 on Cloudflare Workers, Tailwind v4, Motion. Tooling, config, and naming stay consistent with `../pastelrain`.
- Secrets (Spotify client/refresh token, SEGA ID/password) live in Workers secrets / `.dev.vars`, never in client code.

## Brand Commitments

- Name: re: (lowercase, with the colon). Site title パステルレイン / Pastel Rain.
- Voice: lowercase, casual, first person ("hi, i'm re:", "i'm a software developer.").
- Avatar artwork is by えってる (https://www.pixiv.net/en/artworks/138023835); the credit stays on the page wherever the avatar is used.

## Evidence on Hand

- Avatar: `public/avatar.jpg` (third-party art, credited).
- Projects: Elix Mobile, Elix Server, and the retired `me` portfolio, all linked to GitHub under `rezaageng`.
- Live data: Spotify now-playing; maimai and CHUNITHM profiles plus their new and old rating-song lists, including SEGA-hosted images (frames, nameplates, icons, jackets, rank and badge art).
- No testimonials, clients, employment history, metrics, or press exist. Never mock or fabricate Spotify, maimai, or CHUNITHM data, scores, or ratings.

## Product Principles

1. Glanceable first: who re: is and what they're into should land in seconds; depth (like the rating page) is opt-in.
2. Live means live: show the real state, including nothing playing and SEGA maintenance, honestly and without drama.
3. Personal, not corporate: re:'s voice and interests lead; skills and projects support the picture rather than sell it.
4. The companion stays light: fast to load and simpler than the flagship story site, never a duplicate of it.
5. Game data respects its source: SEGA's own art and terms (difficulties, ranks, badges) are shown as the games present them.
