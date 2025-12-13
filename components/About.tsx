"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { coach } from "@/data/coach";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About {coach.name}
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative -mt-8 space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/ganesh-main-photo.png"
                  alt={coach.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="/ganesh-main-photo-2.png"
                  alt={`${coach.name} - Professional Photo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {coach.brief}
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With <strong className="text-primary">years of experience</strong> helping couples and professionals navigate relationship challenges, 
                I bring a practical, compassionate approach to coaching. My methods are grounded in proven 
                frameworks that create measurable change.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Specializing in <strong className="text-primary">Couples Communication, Conflict Resolution, Relationship Building,</strong>{" "}
                and <strong className="text-primary">Trust Restoration</strong>, my sessions combine evidence-based techniques with 
                personalized support to help you reconnect, communicate effectively, and build lasting relationships.
              </p>

              {/* Mission */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-accent/20 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">🌱 Mission</h4>
                  <p className="text-gray-700 italic">
                    "{coach.tagline}"
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    To help couples and professionals reconnect, restore trust, and build relationships that thrive.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl text-center border border-accent/20">
                  <div className="text-2xl mb-1">🧠</div>
                  <div className="text-3xl font-bold font-heading text-primary mb-1"><Counter end={8} /></div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl text-center border border-accent/20">
                  <div className="text-2xl mb-1">👥</div>
                  <div className="text-3xl font-bold font-heading text-primary mb-1"><Counter end={200} /></div>
                  <div className="text-xs text-gray-600 font-medium">Couples Coached</div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl text-center border border-accent/20">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="text-3xl font-bold font-heading text-primary mb-1">4.8</div>
                  <div className="text-xs text-gray-600 font-medium">Avg Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

