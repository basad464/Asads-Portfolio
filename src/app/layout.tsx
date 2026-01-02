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
  title: "Asad Butt | AI Software Engineer",
  description: "AI Software Engineer specializing in Machine Learning, NLP & Data-Driven Automations. 5+ years of experience building intelligent solutions.",
  keywords: ["AI Engineer", "Machine Learning", "NLP", "Software Engineer", "Automation", "LLM", "Chatbots"],
  authors: [{ name: "Asad Butt" }],
  openGraph: {
    title: "Asad Butt | AI Software Engineer",
    description: "AI Software Engineer specializing in Machine Learning, NLP & Data-Driven Automations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
