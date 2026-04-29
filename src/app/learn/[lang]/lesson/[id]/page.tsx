import Link from "next/link";
import { notFound } from "next/navigation";
import { findLesson, courses } from "@/lib/curriculum";
import { LessonRunner } from "@/components/lesson-runner";

export function generateStaticParams() {
  const out: { lang: string; id: string }[] = [];
  for (const c of courses) {
    for (const l of c.lessons) out.push({ lang: c.code, id: l.id });
  }
  return out;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const found = findLesson(lang, id);
  if (!found) notFound();
  const { course, lesson } = found;
  const idx = course.lessons.findIndex((l) => l.id === lesson.id);
  const next = course.lessons[idx + 1];

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8">
      <section className="pt-10 pb-8">
        <Link href={`/learn/${course.code}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5" /><path d="M11 6l-6 6 6 6" />
          </svg>
          Back to {course.native}
        </Link>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              {course.name} · Lesson {String(idx + 1).padStart(2, "0")} of {course.lessons.length}
            </p>
            <h1 className="serif mt-1 text-4xl text-ink md:text-5xl">{lesson.title}</h1>
            <p className="mt-2 max-w-xl text-ink-soft">{lesson.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="chip">{lesson.minutes} min</span>
            <span className="chip">{lesson.level}</span>
            <span className="chip">{lesson.category}</span>
          </div>
        </div>
      </section>

      <LessonRunner course={course} lesson={lesson} nextHref={next ? `/learn/${course.code}/lesson/${next.id}` : `/learn/${course.code}`} nextLabel={next ? `Next: ${next.title}` : `Course menu`} />
    </div>
  );
}
