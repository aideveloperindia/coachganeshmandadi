import type { Metadata, Viewport } from "next";
import "./globals.css";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: "Ganesh Mandadi – Leading Relationship & Life Balance Coach",
  description: "TEDx and Josh Talks speaker, author, and Certified Relationship & Life Balance Coach with 23+ years of experience. Founder of SoulSync Relationships™. Helping couples rebuild trust, improve communication, and create meaningful partnerships. Book a free discovery call.",
  keywords: ["relationship coach", "life balance coach", "couples therapy", "relationship counseling", "Ganesh Mandadi", "SoulSync Relationships", "TEDx speaker", "NLP practitioner", "marriage counseling", "relationship healing"],
  authors: [{ name: "Ganesh Mandadi" }],
  openGraph: {
    title: "Ganesh Mandadi – Leading Relationship & Life Balance Coach",
    description: "TEDx and Josh Talks speaker, author, and Certified Relationship & Life Balance Coach with 23+ years of experience. Founder of SoulSync Relationships™. Helping couples rebuild trust, improve communication, and create meaningful partnerships.",
    type: "website",
    locale: "en_US",
    siteName: "Ganesh Mandadi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Mandadi – Leading Relationship & Life Balance Coach",
    description: "TEDx and Josh Talks speaker, author, and Certified Relationship & Life Balance Coach with 23+ years of experience. Founder of SoulSync Relationships™.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}











