"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { coach } from "@/data/coach";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Clients", href: "/clients" },
  { name: "Certifications", href: "/certifications" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 px-4 sm:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center group h-full">
              <motion.div
                className="relative h-full flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="h-[90%] sm:h-[95%] md:h-[100%] w-auto relative flex items-center max-h-[80px] sm:max-h-[90px] md:max-h-[110px]">
                  <img
                    src="/ganesh-logo.png"
                    alt={`${coach.name} Logo`}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: '100%', width: 'auto' }}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                  >
                    <motion.div
                      className={`relative px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                          layoutId="activeNav"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Know More
                </Button>
              </Link>
              <Button 
                variant="accent" 
                size="sm" 
                className="group"
                onClick={() => {
                  const message = encodeURIComponent('Hello Ganesh, I\'d like to book a discovery call.');
                  window.open(`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
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
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
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
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                          <div className={`block px-6 py-4 rounded-xl font-medium text-lg transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}>
                            {item.name}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Know More
                    </Button>
                  </Link>
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const message = encodeURIComponent('Hello Ganesh, I\'d like to book a discovery call.');
                      window.open(`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
                    }}
                  >
                    Book a Session
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

