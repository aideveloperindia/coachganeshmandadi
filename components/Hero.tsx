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
    <section className="relative py-4 md:py-6 flex items-start justify-center overflow-hidden">
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
      <div className="relative z-10 container-custom pt-16 md:pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span 
              className="text-ivory-white font-extrabold"
              style={{ 
                textShadow: '2px 2px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 0 3px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                WebkitTextFillColor: '#F3F6F1',
                fontWeight: '900'
              }}
            >
              Build Deeper, Healthier <span className="whitespace-nowrap">Relationships</span>
            </span>
          </motion.h1>

          {/* Subtitle with Experience */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-ivory-white mb-2 max-w-3xl mx-auto px-4 font-extrabold"
              style={{ 
                textShadow: '2px 2px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 0 3px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                WebkitTextFillColor: '#F3F6F1',
                fontWeight: '900'
              }}
            >
              {coach.title}
            </p>
            <p 
              className="text-sm sm:text-base md:text-lg text-ivory-white font-extrabold px-4"
              style={{ 
                textShadow: '2px 2px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 0 3px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                WebkitTextFillColor: '#F3F6F1',
                fontWeight: '900'
              }}
            >
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
              <div 
                className="text-3xl sm:text-4xl font-heading font-extrabold text-ivory-white"
                style={{ 
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 0 3px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                23+
              </div>
              <div 
                className="text-xs sm:text-sm text-ivory-white font-extrabold"
                style={{ 
                  textShadow: '1px 1px 0px rgba(0,0,0,0.8), -0.5px -0.5px 0px rgba(0,0,0,0.8), 0.5px -0.5px 0px rgba(0,0,0,0.8), -0.5px 0.5px 0px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)',
                  WebkitTextStroke: '0.8px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                Years Experience
              </div>
            </div>
            <div className="text-center min-w-[100px]">
              <div 
                className="text-3xl sm:text-4xl font-heading font-extrabold text-ivory-white"
                style={{ 
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 0 3px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                1000+
              </div>
              <div 
                className="text-xs sm:text-sm text-ivory-white font-extrabold"
                style={{ 
                  textShadow: '1px 1px 0px rgba(0,0,0,0.8), -0.5px -0.5px 0px rgba(0,0,0,0.8), 0.5px -0.5px 0px rgba(0,0,0,0.8), -0.5px 0.5px 0px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)',
                  WebkitTextStroke: '0.8px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                Couples Coached
              </div>
            </div>
            <div className="text-center min-w-[100px]">
              <div 
                className="text-3xl sm:text-4xl font-heading font-extrabold text-ivory-white"
                style={{ 
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8), -1px -1px 0px rgba(0,0,0,0.8), 1px -1px 0px rgba(0,0,0,0.8), -1px 1px 0px rgba(0,0,0,0.8), 0 3px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                4.8★
              </div>
              <div 
                className="text-xs sm:text-sm text-ivory-white font-extrabold"
                style={{ 
                  textShadow: '1px 1px 0px rgba(0,0,0,0.8), -0.5px -0.5px 0px rgba(0,0,0,0.8), 0.5px -0.5px 0px rgba(0,0,0,0.8), -0.5px 0.5px 0px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)',
                  WebkitTextStroke: '0.8px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                Average Rating
              </div>
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
              onClick={() => scrollToSection("books")}
              className="group w-full sm:w-auto border-2 border-ivory-white bg-ivory-white/10 backdrop-blur-sm hover:bg-ivory-white/20"
            >
              <span 
                className="text-sm sm:text-base font-extrabold text-ivory-white"
                style={{ 
                  textShadow: '1px 1px 0px rgba(0,0,0,0.8), -0.5px -0.5px 0px rgba(0,0,0,0.8), 0.5px -0.5px 0px rgba(0,0,0,0.8), -0.5px 0.5px 0px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)',
                  WebkitTextStroke: '0.8px rgba(0,0,0,0.8)',
                  WebkitTextFillColor: '#F3F6F1',
                  fontWeight: '900'
                }}
              >
                Explore Books
              </span>
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform text-ivory-white" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.8))' }} />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

