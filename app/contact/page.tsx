import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";

export const metadata: Metadata = {
  title: `Contact | ${coach.name}`,
  description: `Ready to transform your relationships? Contact ${coach.name} today to book a free discovery call and discuss your relationship goals.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

