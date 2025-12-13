"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const books = [
  {
    id: "book1",
    title: "Book 1",
    image: "/book1.jpg",
    description: "A comprehensive guide to building stronger relationships",
  },
  {
    id: "book2",
    title: "Book 2",
    image: "/book2.png",
    description: "Practical strategies for relationship transformation",
  },
];

export default function Books() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 px-4">
            Published Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore Coach Ganesh Mandadi's books on relationship coaching and personal growth
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-accent/50">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {book.description}
                  </p>
                  <button className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group/btn">
                    Learn More
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

