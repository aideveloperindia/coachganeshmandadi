"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { coach } from "@/data/coach";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello Ganesh, I\'d like to book a discovery call.');
    window.open(`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
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
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Build Deeper, Healthier
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>Relationships</span>
          </motion.h1>

          {/* Subtitle with Experience */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-2 max-w-3xl mx-auto px-4">
              {coach.title}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-accent font-semibold px-4">
              ✨ {coach.tagline}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-12 text-primary px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-bold">8+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-bold">200+</div>
              <div className="text-xs sm:text-sm text-gray-600">Couples Coached</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-bold">4.8★</div>
              <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="accent"
              size="lg"
              onClick={handleWhatsAppClick}
              className="group w-full sm:w-auto"
            >
              <span className="text-sm sm:text-base">Book a Free Discovery Call</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("free-guide")}
              className="group w-full sm:w-auto"
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

