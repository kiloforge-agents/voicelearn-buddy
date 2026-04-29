import { ProgressDashboard } from "@/components/progress-dashboard";

export const metadata = {
  title: "Your progress — VoiceLearn Buddy",
};

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="pt-12 pb-8 md:pt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Your journey</p>
        <h1 className="serif mt-2 text-4xl text-ink md:text-5xl">Tiny steps, big distance.</h1>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Stored locally on your device. Private by default. Works perfectly without a signal —
          your buddy is in your pocket.
        </p>
      </section>
      <ProgressDashboard />
    </div>
  );
}
