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

  const handleDiscoveryCallClick = () => {
    window.open('https://rer6xajw.paperform.co/', "_blank");
  };

  return (
    <section className="relative py-8 md:py-12 flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/herosection background.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text visibility - using color palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-indigo/85 via-royal-indigo/80 to-royal-indigo/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-indigo/60 via-transparent to-royal-indigo/60" />
        {/* Additional overlay for better contrast */}
        <div className="absolute inset-0 bg-warm-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight px-4 text-ivory-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Build Deeper, Healthier
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-bright-marigold via-golden-amber to-bright-marigold bg-clip-text text-transparent drop-shadow-2xl" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite', textShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>Relationships</span>
          </motion.h1>

          {/* Subtitle with Experience */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-ivory-white mb-2 max-w-3xl mx-auto px-4 drop-shadow-2xl font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
              {coach.title}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-bright-marigold font-semibold px-4 drop-shadow-2xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
              ✨ {coach.tagline}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-ivory-white drop-shadow-2xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>23+</div>
              <div className="text-xs sm:text-sm text-ivory-white drop-shadow-lg" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>Years Experience</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-ivory-white drop-shadow-2xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>1000+</div>
              <div className="text-xs sm:text-sm text-ivory-white drop-shadow-lg" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>Couples Coached</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-ivory-white drop-shadow-2xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>4.8★</div>
              <div className="text-xs sm:text-sm text-ivory-white drop-shadow-lg" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>Average Rating</div>
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
              onClick={handleDiscoveryCallClick}
              className="group w-full sm:w-auto"
            >
              <span className="text-sm sm:text-base">Book Your Discovery Call</span>
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

