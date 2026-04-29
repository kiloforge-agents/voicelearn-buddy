import Link from "next/link";
import { notFound } from "next/navigation";
import { findCourse, courses } from "@/lib/curriculum";
import { CourseProgress } from "@/components/course-progress";

export function generateStaticParams() {
  return courses.map((c) => ({ lang: c.code }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const course = findCourse(lang);
  if (!course) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-10 pb-8 md:pt-14">
        <Link href="/learn" className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5" /><path d="M11 6l-6 6 6 6" />
          </svg>
          All courses
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="text-5xl md:text-6xl">{course.flag}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{course.name}</p>
                <h1 className="serif text-4xl text-ink md:text-5xl">{course.native}</h1>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-[16px] text-ink-soft">{course.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: course.hue }} />
                {course.lessons.length} lessons
              </span>
              <span className="chip">~{course.lessons.reduce((a, l) => a + l.minutes, 0)} minutes total</span>
              <span className="chip">Buddy in {course.bcp47}</span>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <Link href={`/learn/${course.code}/lesson/${course.lessons[0].id}`} className="btn-primary">
                Begin first lesson
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href={`/conversation?lang=${course.code}`} className="btn-ghost">
                Free conversation
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <CourseProgress courseCode={course.code} lessonIds={course.lessons.map((l) => l.id)} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Lessons</p>
        <h2 className="serif text-3xl text-ink md:text-4xl">A gentle path</h2>

        <ol className="mt-6 space-y-3">
          {course.lessons.map((l, i) => (
            <li key={l.id}>
              <Link
                href={`/learn/${course.code}/lesson/${l.id}`}
                className="card group flex flex-col gap-3 p-5 transition-transform hover:-translate-y-0.5 md:flex-row md:items-center"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-bg-soft font-mono text-sm text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="serif text-2xl text-ink">{l.title}</h3>
                    <span className="chip">{l.category}</span>
                    <span className="chip">{l.level}</span>
                  </div>
                  <p className="mt-1 max-w-2xl text-sm text-ink-soft">{l.subtitle}</p>
                </div>
                <div className="flex items-center justify-between gap-3 md:flex-col md:items-end">
                  <span className="text-xs text-muted">{l.minutes} min · {l.phrases.length} phrases</span>
                  <span className="text-sm text-ink group-hover:text-accent-deep">Open →</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
