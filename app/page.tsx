"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";
import LogoModal from "@/components/LogoModal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { coach } from "@/data/coach";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Initialize Google Analytics
  useEffect(() => {
    // Google Analytics script can be added here
    // Example: gtag('config', 'G-XXXXXXXXXX');
  }, []);

  return (
    <>
      <LogoModal />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Homepage Sections - Only Hero and Brand Story */}
        <Hero />
        <BrandStory />

        {/* Quick Links Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Explore Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we can help you build stronger relationships
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all cursor-pointer h-full"
                >
                  <div className="text-4xl mb-4">👤</div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">About</h3>
                  <p className="text-gray-600 text-sm">Learn about our approach</p>
                </motion.div>
              </Link>
              <Link href="/programs">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all cursor-pointer h-full"
                >
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">Programs</h3>
                  <p className="text-gray-600 text-sm">View our coaching programs</p>
                </motion.div>
              </Link>
              <Link href="/testimonials">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all cursor-pointer h-full"
                >
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">Testimonials</h3>
                  <p className="text-gray-600 text-sm">Read client success stories</p>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border-2 border-gray-100 hover:border-accent transition-all cursor-pointer h-full"
                >
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">Contact</h3>
                  <p className="text-gray-600 text-sm">Get in touch with us</p>
                </motion.div>
              </Link>
            </div>
            <div className="text-center mt-12">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

