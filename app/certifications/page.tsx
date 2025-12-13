import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `Certifications & Recognitions | ${coach.name}`,
  description: `View ${coach.name}'s certifications and recognitions in relationship coaching and professional development.`,
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Certificates />
      </main>
      <Footer />
    </>
  );
}

