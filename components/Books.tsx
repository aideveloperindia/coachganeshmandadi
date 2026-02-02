"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const books = [
  {
    id: "book1",
    title: "Modern Couples, Ancient Wisdom",
    subtitle: "Blueprint to Heal Conflicts, Deepen Intimacy & Create Emotionally Thriving Marriages",
    image: "/book2.png",
    description: "Timeless insights and practical tools to heal conflicts, deepen intimacy, and build soulful partnerships.",
    amazonUrl: "https://www.amazon.in/Modern-Couples-Ancient-Wisdom-Emotionally/dp/9367078943",
  },
  {
    id: "book2",
    title: "Your Life Graduation",
    subtitle: "Make Heaven Out of Your Living Hells",
    image: "/Life graduationbook.png",
    description: "\"Step into a life of clarity, balance, and unstoppable purpose.\" A guide to mastering productivity, emotional balance, and purpose-driven living.",
    amazonUrl: "https://www.amazon.in/Your-Life-Graduation-Fulfillment-Empires/dp/9394437258",
  },
];

export default function Books() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="books" className="section-padding bg-gradient-to-br from-ivory-white to-soft-blush/20" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-magenta/20 to-golden-amber/20 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-royal-indigo" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-royal-indigo mb-4 px-4">
            Published Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-warm-charcoal max-w-3xl mx-auto px-4">
            Explore Coach Ganesh Mandadi's books on relationship coaching and personal growth
          </p>
          <motion.div
            className="w-24 h-1 bg-warm-charcoal mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Books Grid - equal height cards, buttons aligned at bottom */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group h-full flex"
            >
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex flex-col"
              >
                <div className="bg-ivory-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-royal-indigo/10 hover:border-royal-indigo/50 cursor-pointer flex flex-col h-full">
                  {/* Book Cover - shorter height */}
                  <div className="relative aspect-[1/1] max-h-[280px] flex-shrink-0 bg-gradient-to-br from-soft-blush/20 to-ivory-white">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>

                  {/* Book Info - grows to fill, button at bottom */}
                  <div className="px-4 pt-3 pb-4 flex flex-col flex-1 min-h-0">
                    <h3 className="text-lg font-heading font-bold text-royal-indigo mb-0.5 group-hover:text-magenta transition-colors">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-xs text-warm-charcoal/70 mb-2 italic leading-snug">
                        {book.subtitle}
                      </p>
                    )}
                    <p className="text-warm-charcoal mb-3 leading-snug text-sm flex-1 min-h-0">
                      {book.description}
                    </p>
                    <div className="flex items-center gap-2 text-magenta font-semibold hover:gap-3 transition-all group/btn text-sm mt-auto">
                      Buy on Amazon
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

