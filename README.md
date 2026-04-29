# VoiceLearn Buddy

> Say it. Live it. Learn it.

A voice-first PWA for bite-sized language practice. Tap a mic, speak with a friendly
generative buddy, build a streak, and learn anywhere — even offline.

- **Voice-first** lessons in Spanish, French, Italian, and Japanese.
- **Generative conversations** with a patient AI Buddy (offline pattern-matching engine).
- **Gamified progress** — XP, levels, streaks, and craft-edged badges.
- **PWA** — installable, with a service worker that caches lessons for the subway.
- **Privacy-first** — your progress never leaves your device.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 (custom design system)
- Web Speech API (recognition + synthesis)
- Service Worker for offline caching

## Project shape

- `src/app/` – routes (home, lessons, conversation, progress, manifesto, offline)
- `src/components/` – UI building blocks
- `src/lib/curriculum.ts` – hand-curated bite-sized lessons
- `src/lib/conversation.ts` – Buddy's offline reply engine
- `src/lib/progress-context.tsx` – XP, streaks, badges (localStorage)
- `src/lib/use-voice.ts` – Web Speech API hooks
- `public/sw.js` – service worker for offline support
