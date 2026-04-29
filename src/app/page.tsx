import Link from "next/link";
import { courses, totalLessonsCount } from "@/lib/curriculum";
import { HomeStreakCard } from "@/components/home-streak-card";
import { VoiceDemoButton } from "@/components/voice-demo-button";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Voice-first · PWA · Offline-ready
              </span>
            </div>
            <h1 className="mt-5 serif text-[44px] leading-[1.05] text-ink md:text-[64px]">
              Talk to the world,<br />
              <span className="marker">five minutes</span> at a time.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              VoiceLearn Buddy is a pocket-sized language tutor that <em>listens</em>.
              Tap, speak, and a generative buddy answers back in Spanish, French,
              Italian or Japanese. Tiny lessons, real conversations,
              streaks that survive the subway.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/learn" className="btn-primary">
                Pick a language
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/conversation" className="btn-ghost">
                Try a conversation
              </Link>
              <VoiceDemoButton />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat n={totalLessonsCount.toString()} label="bite-sized lessons" />
              <Stat n="4" label="languages, more soon" />
              <Stat n="5 min" label="daily, anywhere" />
            </div>
          </div>

          {/* Right: streak + ambient buddy card */}
          <div className="md:col-span-5">
            <HomeStreakCard />
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="pb-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Section 01</p>
            <h2 className="serif text-3xl text-ink md:text-4xl">Pick a language</h2>
            <p className="mt-1 text-sm text-ink-soft">Hand-picked, hand-curated, friendly to begin.</p>
          </div>
          <Link href="/learn" className="hidden text-sm text-ink-soft hover:text-ink md:inline-flex linky">All courses</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <Link
              key={c.code}
              href={`/learn/${c.code}`}
              className="card group flex flex-col gap-4 p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{c.flag}</span>
                <span className="chip" style={{ borderColor: c.hue, color: c.hue }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.hue }} />
                  Buddy ready
                </span>
              </div>
              <div>
                <p className="serif text-2xl text-ink">{c.native}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{c.name}</p>
              </div>
              <p className="text-sm text-ink-soft">{c.tagline}</p>
              <div className="hairline" />
              <div className="flex items-center justify-between text-xs text-muted">
                <span>{c.lessons.length} lessons · {c.lessons.reduce((a, l) => a + l.minutes, 0)} min total</span>
                <span className="text-ink group-hover:text-accent-deep">Begin →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="pb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Section 02</p>
          <h2 className="serif text-3xl text-ink md:text-4xl">A new way to practice</h2>
          <p className="mt-1 max-w-xl text-sm text-ink-soft">
            Built for the times you have — the bus, the queue, the kitchen.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Step
            n="01"
            title="Listen"
            body="Buddy speaks the phrase out loud in a native accent, with a phonetic guide so your tongue knows what to do."
          />
          <Step
            n="02"
            title="Speak"
            body="Tap once, talk back. We compare what you said to the phrase and celebrate your hits."
          />
          <Step
            n="03"
            title="Reply"
            body="Move into a real conversation — Buddy answers, asks questions, and keeps you talking."
          />
        </div>
      </section>

      {/* Why voice section */}
      <section className="pb-16">
        <div className="card relative overflow-hidden p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">A philosophy</p>
              <h3 className="serif mt-2 text-3xl leading-[1.1] text-ink md:text-[40px]">
                Languages live in your <em>mouth</em>, not your eyes.
              </h3>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                Reading flashcards alone won&apos;t make you fluent. You learn by saying things —
                with your throat, your breath, your nerves. We made VoiceLearn around that
                truth: a buddy that listens patiently, replies generously, and brings you back
                tomorrow with a streak that says <em>you&apos;re doing it</em>.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                <Bullet>Bite-sized — pause anytime, no progress lost.</Bullet>
                <Bullet>Generative — each conversation is a little different.</Bullet>
                <Bullet>Gamified gently — XP, streaks, badges, no nagging.</Bullet>
                <Bullet>Offline by design — your subway is now a classroom.</Bullet>
              </ul>
            </div>
            <div className="md:col-span-6">
              <Companion />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / quotes */}
      <section className="pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.who} className="card p-6">
              <blockquote className="serif text-[22px] leading-snug text-ink">
                <span className="text-accent">“</span>
                {t.text}
                <span className="text-accent">”</span>
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-bg-soft text-sm">{t.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-ink">{t.who}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="serif text-[28px] leading-none text-ink">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{label}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="card p-6">
      <p className="font-mono text-xs tracking-wider text-accent">{n}</p>
      <h3 className="mt-2 serif text-2xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      <span>{children}</span>
    </li>
  );
}

const testimonials = [
  {
    text: "I finally stopped freezing in cafés in Madrid. The voice prompts feel like a friend nudging me along.",
    who: "Marisol",
    role: "self-taught — Spanish",
    emoji: "☕",
  },
  {
    text: "Five minutes after my morning espresso. That's it. And I can hold a real chat with my host family.",
    who: "Theo",
    role: "exchange student — Italian",
    emoji: "🎒",
  },
  {
    text: "It works on the underground! No signal, no problem. The streak keeps me honest.",
    who: "Aiko",
    role: "designer — French",
    emoji: "🚇",
  },
];

function Companion() {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl bg-bg-soft p-6">
      {/* Decorative speech blooms */}
      <div aria-hidden className="absolute -right-10 -top-12 h-44 w-44 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(255,107,74,0.18), transparent)" }} />
      <div aria-hidden className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(91,61,122,0.14), transparent)" }} />
      <div className="relative flex flex-col gap-3">
        <Bubble side="left" lang="es-ES">
          <span className="serif text-lg">¡Hola! ¿Cómo estás hoy?</span>
          <span className="block text-xs text-muted">Hi! How are you today?</span>
        </Bubble>
        <Bubble side="right" lang="">
          <span className="serif text-lg">Estoy bien, gracias.</span>
          <span className="block text-xs text-muted">— you, smiling on the train</span>
        </Bubble>
        <Bubble side="left" lang="es-ES">
          <span className="serif text-lg">¡Perfecto! ¿De dónde eres?</span>
          <span className="block text-xs text-muted">Perfect! Where are you from?</span>
        </Bubble>
        <Bubble side="right" lang="">
          <span className="inline-flex items-center gap-1 text-ink-soft">
            <span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" />
          </span>
        </Bubble>
      </div>
    </div>
  );
}

function Bubble({ side, children, lang: _lang }: { side: "left" | "right"; children: React.ReactNode; lang: string }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl border px-4 py-3 ${
          side === "right"
            ? "rounded-br-md bg-paper border-line"
            : "rounded-bl-md bg-ink text-paper border-ink"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
