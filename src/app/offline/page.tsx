import Link from "next/link";

export const metadata = { title: "Offline — VoiceLearn Buddy" };

export default function Offline() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Offline</p>
      <h1 className="serif mt-3 text-5xl text-ink">No signal? No problem.</h1>
      <p className="mt-4 text-ink-soft">
        Buddy is patient. Cached lessons are still available — try one of these.
        Your streak survives this tunnel.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/learn" className="btn-primary">Open lessons</Link>
        <Link href="/conversation" className="btn-ghost">Start a chat</Link>
        <Link href="/" className="btn-ghost">Home</Link>
      </div>
      <p className="mt-12 text-sm text-muted">When you reconnect, your progress will already be where you left it.</p>
    </div>
  );
}
