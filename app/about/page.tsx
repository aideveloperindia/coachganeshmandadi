import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `About ${coach.name} | ${coach.title}`,
  description: `Learn about ${coach.name}'s experience in relationship coaching, helping couples and professionals restore connection and build lasting trust.`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <About />
      </main>
      <Footer />
    </>
  );
}

