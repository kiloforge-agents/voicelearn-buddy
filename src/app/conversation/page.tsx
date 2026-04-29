import { courses } from "@/lib/curriculum";
import { ConversationRunner } from "@/components/conversation-runner";

export const metadata = {
  title: "Conversation — VoiceLearn Buddy",
};

export default async function ConversationPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const sp = await searchParams;
  const initialCode = (sp.lang && courses.some((c) => c.code === sp.lang)) ? sp.lang : courses[0].code;
  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8">
      <section className="pt-12 pb-8 md:pt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Free conversation</p>
        <h1 className="serif mt-2 text-4xl text-ink md:text-5xl">Just talk. Buddy listens.</h1>
        <p className="mt-3 max-w-2xl text-ink-soft">
          No syllabus, no pressure. Pick a language and chat — Buddy will keep the
          conversation going with friendly questions and gentle replies.
          Each finished session earns +15 XP and feeds your streak.
        </p>
      </section>
      <ConversationRunner initialCode={initialCode} />
    </div>
  );
}
