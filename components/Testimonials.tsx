"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials as testimonialsData } from "@/data/testimonials";

// Distinct emojis for females and males - assigned in order
const femaleEmojis = ["👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍💼", "👩‍🎓", "👩‍⚕️", "👩‍🔬"];
const maleEmojis = ["👨‍🦰", "👨‍🦱", "👨‍💼", "👨‍🎓", "👨‍⚕️"];

// Transform testimonials data to match component structure
let femaleCount = 0;
let maleCount = 0;

const testimonials = testimonialsData.map((testimonial) => {
  const isFemale = testimonial.gender === "female";
  let emoji;
  
  if (isFemale) {
    emoji = femaleEmojis[femaleCount % femaleEmojis.length];
    femaleCount++;
  } else {
    emoji = maleEmojis[maleCount % maleEmojis.length];
    maleCount++;
  }
  
  return {
    id: testimonial.id,
    name: testimonial.author,
    position: testimonial.meta,
    title: testimonial.title || "",
    company: "",
    rating: Math.round(testimonial.rating),
    text: testimonial.text,
    gender: testimonial.gender || "male",
    emoji: emoji,
  };
});


export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];


  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-ivory-white to-soft-blush/20 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-magenta rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-royal-indigo rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-magenta/20 to-golden-amber/20 rounded-full mb-6">
            <Quote className="w-8 h-8 text-royal-indigo" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-royal-indigo mb-4 px-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-warm-charcoal max-w-3xl mx-auto px-4">
            Real stories from couples and professionals who transformed their relationships
          </p>
          <motion.div
            className="w-24 h-1 bg-warm-charcoal mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Testimonial Slider */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-ivory-white to-soft-blush/10 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-royal-indigo/10"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-magenta to-golden-amber rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title/Heading */}
              {currentTestimonial.title && (
                <div className="text-center mb-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-royal-indigo">
                    {currentTestimonial.title}
                  </h3>
                </div>
              )}

              {/* Rating - Golden Shining Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-7 h-7 fill-bright-marigold text-bright-marigold" 
                    style={{ 
                      filter: 'drop-shadow(0 0 6px rgba(255, 181, 51, 1)) drop-shadow(0 0 12px rgba(255, 181, 51, 0.6))',
                      animation: `pulse 2s ease-in-out infinite ${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-warm-charcoal text-center mb-4 leading-relaxed italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-royal-indigo/10 to-soft-blush/30 rounded-full flex items-center justify-center text-4xl border-2 border-royal-indigo/20">
                  {currentTestimonial.emoji}
                </div>
                <div className="text-left">
                  {currentTestimonial.title && (
                    <div className="text-magenta font-semibold text-sm mb-1">
                      {currentTestimonial.title}
                    </div>
                  )}
                  <div className="font-bold text-royal-indigo text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-warm-charcoal/70 text-sm">
                    {currentTestimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-ivory-white border-2 border-royal-indigo rounded-full flex items-center justify-center hover:bg-royal-indigo hover:text-ivory-white transition-all shadow-lg hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-magenta to-golden-amber w-8"
                      : "bg-warm-charcoal/30 hover:bg-warm-charcoal/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-ivory-white border-2 border-royal-indigo rounded-full flex items-center justify-center hover:bg-royal-indigo hover:text-ivory-white transition-all shadow-lg hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

