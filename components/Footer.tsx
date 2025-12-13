"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { coach } from "@/data/coach";

const socialLinks = [
  { icon: Linkedin, url: coach.social.linkedin || "#", label: "LinkedIn" },
  { icon: Youtube, url: coach.social.youtube || "#", label: "YouTube" },
  { icon: Instagram, url: coach.social.instagram || "#", label: "Instagram" },
].filter(link => link.url !== "#");

export default function Footer() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Ganesh, I\'d like to book a discovery call.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showWhatsApp ? 1 : 0, opacity: showWhatsApp ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
        
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        
        {/* Tooltip */}
        <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary to-primary/95 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        {/* Top Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container-custom section-padding relative z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                {coach.name}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {coach.brief}
              </p>
              <div className="space-y-3">
                <a href={`tel:${coach.phone}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  {coach.phone}
                </a>
                <a href={`mailto:${coach.email}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  {coach.email}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Programs", href: "#programs" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Free Guide", href: "#free-guide" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/80 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-2 text-white/80">
                <li>Couples Communication Mastery</li>
                <li>Conflict Resolution Intensive</li>
                <li>Private Coaching</li>
                <li>Corporate Workshops</li>
                <li>Couple Retreats</li>
                <li>Online Sessions</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Quote */}
            <div className="text-center md:text-left">
              <p className="text-accent font-serif text-lg italic mb-2">
                "{coach.tagline}"
              </p>
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} {coach.name}. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
              <span>Built by</span>
              <a
                href="https://aideveloperindia.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors group"
              >
                <div className="w-4 h-4 relative group-hover:scale-110 transition-transform">
                  <Image
                    src="/ai-developer-logo.png"
                    alt="AI Developer Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>AI Developer India</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

