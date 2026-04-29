import Link from "next/link";
import { courses } from "@/lib/curriculum";

export const metadata = {
  title: "Lessons — VoiceLearn Buddy",
};

export default function LearnIndex() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-12 pb-8 md:pt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Library</p>
        <h1 className="serif mt-2 text-4xl text-ink md:text-5xl">All courses, one buddy.</h1>
        <p className="mt-3 max-w-xl text-ink-soft">
          Choose a language to begin. Every course is structured into tiny lessons,
          ending with a free conversation with your AI buddy.
        </p>
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <Link
              key={c.code}
              href={`/learn/${c.code}`}
              className="card group relative overflow-hidden p-6 transition-transform hover:-translate-y-0.5"
            >
              <div aria-hidden className="absolute -right-12 -top-12 h-44 w-44 rounded-full" style={{ background: `radial-gradient(closest-side, ${c.hue}33, transparent)` }} />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{c.name}</p>
                  <h2 className="serif mt-1 text-3xl text-ink">{c.native}</h2>
                </div>
                <span className="text-4xl">{c.flag}</span>
              </div>
              <p className="mt-3 max-w-md text-sm text-ink-soft">{c.tagline}</p>
              <div className="hairline my-5" />
              <ul className="space-y-2 text-sm">
                {c.lessons.slice(0, 3).map((l) => (
                  <li key={l.id} className="flex items-center justify-between text-ink-soft">
                    <span className="line-clamp-1">{l.title}</span>
                    <span className="text-xs text-muted">{l.minutes} min · {l.level}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-muted">{c.lessons.length} lessons total</span>
                <span className="text-ink group-hover:text-accent-deep">Open course →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
