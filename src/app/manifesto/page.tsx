export const metadata = {
  title: "Manifesto — VoiceLearn Buddy",
};

export default function Manifesto() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Manifesto</p>
      <h1 className="serif mt-3 text-5xl leading-[1.05] text-ink md:text-6xl">
        We believe a language is a living, <em>spoken</em> thing.
      </h1>

      <div className="prose-like mt-10 space-y-6 text-[18px] leading-relaxed text-ink-soft">
        <p>
          The world is full of brilliant apps to <em>see</em> a language. Vocabulary lists,
          conjugation charts, flashcards. They&apos;re wonderful — and incomplete. A
          language doesn&apos;t live on a screen. It lives on a tongue, in a breath, in a
          tiny mistake at a counter that turns into a smile.
        </p>
        <p>
          VoiceLearn Buddy was built around a small idea: <strong>you learn faster when
          you talk.</strong> When the phrase leaves your mouth, your nervous system commits.
          Repetition becomes muscle memory. Awkwardness becomes ease.
        </p>

        <h2 className="serif mt-12 text-3xl text-ink">A buddy, not a teacher.</h2>
        <p>
          Buddy is patient. Buddy nods, replies, asks again. Buddy doesn&apos;t mark you
          wrong — it celebrates the bit you got right and gently shows the rest.
          You&apos;re here to talk, not to take a test.
        </p>

        <h2 className="serif mt-12 text-3xl text-ink">Five minutes, every day.</h2>
        <p>
          Lessons are deliberately tiny. We&apos;d rather you practice five days for five
          minutes than once for an hour. The streak isn&apos;t a punishment — it&apos;s a
          handshake with your future self.
        </p>

        <h2 className="serif mt-12 text-3xl text-ink">Pocketable. Offline. Yours.</h2>
        <p>
          VoiceLearn is a PWA, which means: no app store, no account, no servers
          watching you. Your progress lives on your device. Subway, mountains,
          airplanes — Buddy goes wherever you do.
        </p>
      </div>

      <p className="serif mt-16 text-3xl italic text-ink">
        — Now go say it out loud.
      </p>
    </article>
  );
}
