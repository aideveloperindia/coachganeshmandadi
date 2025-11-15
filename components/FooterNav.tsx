"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Heart, Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function FooterNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Clients", href: "/clients" },
    { name: "Certifications", href: "/certifications" },
  ];

  const moreLinks = [
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-primary via-primary to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container-custom section-padding">
        {/* Top Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">
                Gopikrishna Sarvepalli
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Empowering individuals and organizations to unlock their full potential through
                transformative training programs and business coaching since 1996.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-3xl mb-1">🧠</div>
                  <div className="text-4xl md:text-5xl font-bold font-heading mb-2">29</div>
                  <div className="text-white/70 text-sm">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">👥</div>
                  <div className="text-3xl md:text-4xl font-bold font-heading mb-2">45K+</div>
                  <div className="text-white/70 text-sm">Participants Trained</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">⭐</div>
                  <div className="text-3xl md:text-4xl font-bold font-heading mb-2">4.8★</div>
                  <div className="text-white/70 text-sm">Average Rating</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/gopikrishna-sarvepalli-420691a/", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/venkatagopikrishna/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61560060908547", label: "Facebook" },
                  { icon: Youtube, href: "https://www.youtube.com/@Yourcoachandmentor", label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-bold mb-4 mt-6">More</h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="tel:+919666722233"
                className="flex items-start space-x-3 text-white/80 hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <div>
                  <div className="text-sm text-white/60">Phone</div>
                  <div>+91 96667 22233</div>
                </div>
              </a>
              <a
                href="mailto:coach@gopisarvepalli.com"
                className="flex items-start space-x-3 text-white/80 hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div>coach@gopisarvepalli.com</div>
                </div>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/60">Location</div>
                  <div>Hyderabad, India</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          className="border-t border-white/10 pt-12 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-heading italic text-white/90 mb-4">
              "Success is not final, failure is not fatal: it is the courage to continue that counts."
            </p>
            <footer className="text-accent font-medium">— Winston Churchill</footer>
          </blockquote>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Gopikrishna Sarvepalli. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-white/60 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>by</span>
            <a
              href="https://beyondx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Beyondx Informatics Analytics
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

