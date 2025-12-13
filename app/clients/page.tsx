import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `Our Clients & Partners | ${coach.name}`,
  description: `Trusted organizations and partners who have worked with ${coach.name} for relationship coaching and professional development.`,
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Clients />
      </main>
      <Footer />
    </>
  );
}

