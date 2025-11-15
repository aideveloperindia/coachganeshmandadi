"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-8 md:py-12 flex items-start justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* Content */}
      <div className="relative z-10 container-custom pt-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming Potential
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">into Performance</span>
          </motion.h1>

          {/* Subtitle with Experience */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-2 max-w-3xl mx-auto">
              Corporate Trainer | Executive & Sales Coach | OD Consultant
            </p>
            <p className="text-lg text-accent font-semibold">
              ✨ Transforming Lives Since 1996
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-4xl font-heading font-bold">29</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold">45,000+</div>
              <div className="text-sm text-gray-600">Participants Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold">470+</div>
              <div className="text-sm text-gray-600">Sessions Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="accent"
              size="lg"
              onClick={() => window.open("https://wa.me/919666722233", "_blank")}
              className="group"
            >
              Book a Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("free-guide")}
              className="group"
            >
              Get Free Guide
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

