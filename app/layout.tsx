import type { Metadata, Viewport } from "next";
import "./globals.css";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `${coach.name} - ${coach.title}`,
  description: `${coach.brief} Book a free discovery call.`,
  keywords: ["relationship coach", "couples therapy", "communication", "conflict resolution", "relationship counseling"],
  authors: [{ name: coach.name }],
  openGraph: {
    title: `${coach.name} - ${coach.title}`,
    description: coach.brief,
    type: "website",
    locale: "en_US",
    siteName: coach.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${coach.name} - ${coach.title}`,
    description: coach.brief,
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











