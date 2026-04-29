import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress-context";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PWARegister } from "@/components/pwa-register";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif-stack",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoiceLearn Buddy — say it. live it. learn it.",
  description:
    "A voice-first PWA for daily, bite-sized language practice. Speak with a friendly AI buddy, build streaks, and learn anywhere — even offline.",
  applicationName: "VoiceLearn Buddy",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "VoiceLearn",
  },
  openGraph: {
    title: "VoiceLearn Buddy",
    description:
      "Voice-first language practice. Bite-sized lessons. Streaks. Offline.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col">
        <ProgressProvider>
          <Nav />
          <main className="flex-1 relative z-[2]">{children}</main>
          <Footer />
        </ProgressProvider>
        <PWARegister />
      </body>
    </html>
  );
}
