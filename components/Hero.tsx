"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { coach } from "@/data/coach";
import { useState, useEffect } from "react";

// Typing animation component
function TypingText({ text, delay = 0, speed = 50, className = "", style = {} }: { 
  text: string; 
  delay?: number; 
  speed?: number; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    
    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [text, delay, speed]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
}

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
          className="w-full h-full object-cover object-top blur-sm"
        />
        {/* Overlay for text visibility - using color palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-indigo/8 via-royal-indigo/8 to-royal-indigo/8" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-indigo/6 via-transparent to-royal-indigo/6" />
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
              className="font-normal bg-gradient-to-r from-royal-indigo via-magenta to-golden-amber bg-clip-text text-transparent block whitespace-pre-line"
              style={{ 
                WebkitTextFillColor: 'transparent',
                textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, 0 -1px 0 white, 0 1px 0 white, -1px 0 0 white, 1px 0 0 white'
              }}
            >
              <TypingText 
                text={'Build Deeper, Healthier\nRelationships'} 
                delay={500}
                speed={80}
              />
            </span>
          </motion.h1>

          {/* Subtitle with Experience */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 max-w-3xl mx-auto px-4 font-heading font-normal tracking-wide text-white">
              <TypingText 
                text={coach.title} 
                delay={3500}
                speed={60}
              />
            </p>
            <p className="text-sm sm:text-base md:text-lg font-heading font-normal tracking-wide px-4 text-white">
              <TypingText 
                text={`✨ ${coach.tagline}`} 
                delay={5000}
                speed={50}
              />
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
              <div className="text-3xl sm:text-4xl font-heading font-normal tracking-wide text-white">
                <TypingText text="23+" delay={6500} speed={100} />
              </div>
              <div className="text-xs sm:text-sm font-heading font-normal tracking-wide text-white">
                <TypingText text="Years Experience" delay={6800} speed={40} />
              </div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-normal tracking-wide text-white">
                <TypingText text="1000+" delay={7500} speed={100} />
              </div>
              <div className="text-xs sm:text-sm font-heading font-normal tracking-wide text-white">
                <TypingText text="Couples Coached" delay={7800} speed={40} />
              </div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-heading font-normal tracking-wide text-white">
                <TypingText text="4.8★" delay={8500} speed={100} />
              </div>
              <div className="text-xs sm:text-sm font-heading font-normal tracking-wide text-white">
                <TypingText text="Average Rating" delay={8800} speed={40} />
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
              <span className="text-sm sm:text-base font-heading font-normal tracking-wide text-white">
                <TypingText text="Book Your Discovery Call" delay={9500} speed={50} />
              </span>
              <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("books")}
              className="group w-full sm:w-auto border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <span className="text-sm sm:text-base font-heading font-normal tracking-wide text-white">
                <TypingText text="Explore Books" delay={11000} speed={50} />
              </span>
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform text-white" />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

