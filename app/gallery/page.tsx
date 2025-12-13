import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `Video Gallery | ${coach.name}`,
  description: `Watch videos of ${coach.name} in action - training sessions, workshops, and relationship coaching insights.`,
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

