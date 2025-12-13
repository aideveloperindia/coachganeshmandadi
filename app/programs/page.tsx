import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `Programs & Workshops | ${coach.name}`,
  description: `Explore ${coach.name}'s relationship coaching programs, couples workshops, and private sessions designed to help you reconnect and thrive.`,
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Programs />
      </main>
      <Footer />
    </>
  );
}

