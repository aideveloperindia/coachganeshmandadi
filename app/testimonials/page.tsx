import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `Client Testimonials | ${coach.name}`,
  description: `Read real stories from couples and professionals who transformed their relationships through ${coach.name}'s coaching programs.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

