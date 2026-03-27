import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mesmam مسمام — Revolutionizing the Scorpion Venom Industry",
  description:
    "Mesmam is a Tunisian deep-tech startup building AI-powered robotics for ethical scorpion venom extraction, connecting rural communities to the $39M/gallon bio-pharmaceutical supply chain.",
  keywords: [
    "scorpion venom",
    "biotech startup",
    "Tunisia",
    "AI robotics",
    "venom extraction",
    "pharmaceutical",
    "deep tech",
  ],
  openGraph: {
    title: "Mesmam مسمام — The Future of Scorpion Venom",
    description:
      "AI-powered robotics for ethical, scalable scorpion venom extraction. From Tunisia to the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
