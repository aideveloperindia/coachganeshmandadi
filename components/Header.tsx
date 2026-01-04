"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, BookOpen, MessageSquare, Image as ImageIcon, Mail as MailIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { coach } from "@/data/coach";

const navigation = [
  { name: "Home", href: "#", anchor: "", icon: Home },
  { name: "About", href: "#about", anchor: "about", icon: User },
  { name: "Programs", href: "#programs", anchor: "programs", icon: BookOpen },
  { name: "Testimonials", href: "#testimonials", anchor: "testimonials", icon: MessageSquare },
  { name: "Gallery", href: "#gallery", anchor: "gallery", icon: ImageIcon },
  { name: "Contact", href: "#contact", anchor: "contact", icon: MailIcon },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Smooth scroll to section
  const scrollToSection = (anchor: string) => {
    if (anchor === "" || anchor === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(anchor);
    if (element) {
      const headerHeight = 112; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigation
        .filter(item => item.anchor)
        .map(item => item.anchor);
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const headerHeight = 112;
          return rect.top <= headerHeight + 100 && rect.bottom >= headerHeight;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Navigation - Fixed Position */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm overflow-visible"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 px-4 sm:px-6">
            {/* Logo - Centered Vertically */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("");
              }}
              className="flex items-center justify-center group h-full cursor-pointer"
            >
              <motion.div
                className="relative flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ height: '100%' }}
              >
                <div className="h-[120%] sm:h-[130%] md:h-[140%] w-auto relative flex items-center justify-center" style={{ maxHeight: '100%' }}>
                  <img
                    src="/ganesh-logo.png"
                    alt={`${coach.name} Logo`}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: '100%', width: 'auto' }}
                  />
                </div>
              </motion.div>
            </a>

            {/* Desktop Navigation & CTA - Right Side Together */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Navigation Links */}
              <nav className="flex items-center gap-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.anchor || (item.anchor === "" && typeof window !== 'undefined' && window.scrollY < 100);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.anchor);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive 
                          ? 'text-royal-indigo bg-soft-blush/30' 
                          : 'text-warm-charcoal hover:text-royal-indigo hover:bg-soft-blush/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Book Session Button */}
              <Button 
                variant="accent" 
                size="sm" 
                className="group"
                onClick={() => {
                  window.open('https://rer6xajw.paperform.co/', "_blank");
                }}
              >
                Book Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-royal-indigo" />
              ) : (
                <Menu className="w-6 h-6 text-royal-indigo" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-32 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <nav className="container-custom px-6 py-8">
                <div className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = activeSection === item.anchor || (item.anchor === "" && typeof window !== 'undefined' && window.scrollY < 100);
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a 
                          href={item.href} 
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.anchor);
                          }}
                        >
                          <div className={`block px-6 py-4 rounded-xl font-medium text-lg transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-royal-indigo via-magenta to-golden-amber text-white shadow-lg"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}>
                            {item.name}
                          </div>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Button 
                    variant="outline" 
                    size="lg" 
                      className="w-full border-royal-indigo text-royal-indigo hover:bg-royal-indigo hover:text-ivory-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    Know More
                  </Button>
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.open('https://rer6xajw.paperform.co/', "_blank");
                    }}
                  >
                    Book Session
                  </Button>
                </div>

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

          {/* Spacer to prevent content from going under fixed header */}
          <div className="h-20 sm:h-24 md:h-28" />
    </>
  );
}

