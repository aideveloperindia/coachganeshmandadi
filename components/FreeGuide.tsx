"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Gift } from "lucide-react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { coach } from "@/data/coach";

export default function FreeGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const generatePDF = async (name: string) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      const { width, height } = page.getSize();
      
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      const timesRomanBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Title
      page.drawText('7 Simple Practices to Reconnect', {
        x: 50,
        y: height - 80,
        size: 32,
        font: timesRomanBoldFont,
        color: rgb(0.04, 0.15, 0.25), // Primary color
      });

      // Personalized greeting
      page.drawText(`Prepared for: ${name}`, {
        x: 50,
        y: height - 120,
        size: 16,
        font: helveticaFont,
        color: rgb(0.83, 0.69, 0.22), // Accent color
      });

      // Content - Relationship Practices
      const content = [
        { title: '1. The 10-Minute Daily Check-In', text: 'Set aside 10 minutes each day to connect with your partner. Ask one open-ended question like "How are you feeling today?" or "What\'s on your mind?" Listen without interrupting or offering solutions. This creates space for emotional intimacy.' },
        { title: '2. The Pause & Reflect Method', text: 'When conflict arises, pause before responding. Take three deep breaths and ask yourself: "What am I really feeling?" and "What does my partner need right now?" This prevents reactive responses and opens space for understanding.' },
        { title: '3. The 2-Rule Conversation', text: 'Rule 1: One person speaks at a time. Rule 2: The listener repeats back what they heard before responding. This simple structure transforms arguments into productive discussions.' },
        { title: '4. The Safe Word', text: 'Agree on a word or phrase that either partner can use to pause a conversation when emotions are too high. When the safe word is used, both commit to taking a 20-minute break before continuing.' },
        { title: '5. The Gratitude Night', text: 'Once a week, share three things you appreciate about your partner. Be specific: "I appreciate how you made time to listen when I was stressed about work." This builds positive connection.' },
        { title: '6. Intentional Listening', text: 'When your partner is speaking, put away distractions. Make eye contact. Ask follow-up questions. Show you\'re truly present. This simple act of attention is a powerful gift.' },
        { title: '7. Weekly Relationship Review', text: 'Set aside 30 minutes each week to discuss: What went well? What needs attention? What would you like more of? This creates a regular space for connection and growth.' },
      ];

      let yPosition = height - 180;

      content.forEach((item, index) => {
        // Title
        page.drawText(item.title, {
          x: 50,
          y: yPosition,
          size: 14,
          font: timesRomanBoldFont,
          color: rgb(0.04, 0.15, 0.25),
        });

        yPosition -= 25;

        // Text (wrapped)
        const words = item.text.split(' ');
        let line = '';
        const maxWidth = 500;

        words.forEach((word) => {
          const testLine = line + word + ' ';
          const textWidth = helveticaFont.widthOfTextAtSize(testLine, 11);
          
          if (textWidth > maxWidth && line !== '') {
            page.drawText(line, {
              x: 50,
              y: yPosition,
              size: 11,
              font: helveticaFont,
              color: rgb(0.3, 0.3, 0.3),
            });
            yPosition -= 18;
            line = word + ' ';
          } else {
            line = testLine;
          }
        });

        if (line) {
          page.drawText(line, {
            x: 50,
            y: yPosition,
            size: 11,
            font: helveticaFont,
            color: rgb(0.3, 0.3, 0.3),
          });
        }

        yPosition -= 35;
      });

      // Footer
      page.drawText(`© ${new Date().getFullYear()} ${coach.name}`, {
        x: 50,
        y: 50,
        size: 10,
        font: helveticaFont,
        color: rgb(0.5, 0.5, 0.5),
      });

      page.drawText(`Contact: ${coach.phone} | ${coach.email}`, {
        x: 50,
        y: 35,
        size: 10,
        font: helveticaFont,
        color: rgb(0.5, 0.5, 0.5),
      });

      const pdfBytes = await pdfDoc.save();
      return pdfBytes;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save lead to database
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          source: 'Free Guide',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('Failed to save lead');
      }

      // Generate and download PDF
      const pdfBytes = await generatePDF(formData.name);
      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Reconnect_Guide_${formData.name.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsSuccess(true);
      setFormData({ name: "", email: "" });

      // Optional: Redirect to WhatsApp
      setTimeout(() => {
        const message = encodeURIComponent('Hello Ganesh, I just downloaded the free guide and would like to book a discovery call.');
        window.open(`https://wa.me/${coach.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
      }, 1000);

    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="free-guide" className="section-padding bg-gradient-to-br from-accent/5 via-white to-primary/5 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 px-4">
              7 Simple Practices to Reconnect Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Get your free personalized guide with actionable practices to improve your relationships
            </p>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                What You'll Discover:
              </h3>

              {[
                'The 10-Minute Daily Check-In',
                'The Pause & Reflect Method',
                'The 2-Rule Conversation',
                'The Safe Word',
                'The Gratitude Night',
                'Intentional Listening',
                'Weekly Relationship Review',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {!isSuccess ? (
                <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-accent/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="guide-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="guide-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="guide-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="guide-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Generating Your Guide..."
                      ) : (
                        <>
                          Download Free Guide
                          <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Your personalized PDF will download instantly. No spam, ever.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Success!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your personalized Reconnect Guide is downloading now.
                  </p>
                  <p className="text-sm text-gray-600">
                    We're redirecting you to WhatsApp to book your discovery call...
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSuccess(false)}
                  >
                    Download Another Copy
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

