"use client";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { coach } from "@/data/coach";
import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PDFGenerator } from "@/lib/pdfGenerator";
import { useState } from "react";

export default function ResourcesPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (type: string, name: string = "Reader") => {
    setDownloading(type);
    try {
      let pdfBytes: Uint8Array;
      
      switch (type) {
        case 'leadership':
          pdfBytes = await PDFGenerator.generateLeadershipGuide(name);
          break;
        case 'time-management':
          pdfBytes = await PDFGenerator.generateTimeManagementGuide(name);
          break;
        case 'goal-setting':
          pdfBytes = await PDFGenerator.generateGoalSettingGuide(name);
          break;
        case 'stress-management':
          pdfBytes = await PDFGenerator.generateStressManagementGuide(name);
          break;
        default:
          throw new Error('Invalid guide type');
      }

      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${type.replace('-', '-')}-guide-${name.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-slate-900 to-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 px-4">
                Resources & Insights
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
                Free guides, articles, and resources for relationship coaching and personal growth
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked content to help you transform your potential into performance
              </p>
            </motion.div>

            {/* Resources Grid - Keep structure, show placeholder holders */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* TODO: Add Ganesh Mandadi's resources here */}
              {[].length > 0 ? (
                [].map((resource: any, index: number) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <CardHeader>
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${resource.color} mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-accent font-semibold mb-2">{resource.type}</div>
                        <CardTitle className="font-heading group-hover:text-accent transition-colors">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                          onClick={() => {
                            if (resource.downloadType === 'video') {
                              window.open('https://wa.me/919666722233?text=Hi, I would like to access the video training series!', '_blank');
                            } else {
                              handleDownload(resource.downloadType);
                            }
                          }}
                          disabled={downloading === resource.downloadType}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {downloading === resource.downloadType ? "Generating..." : "Download Free"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
                })
              ) : (
                // Show placeholder resource holders
                Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={`placeholder-resource-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 mb-4">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-gray-400 font-semibold mb-2">Resource</div>
                        <CardTitle className="font-heading text-gray-400">
                          Resource {index + 1}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          Description will appear here
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-300 text-gray-400"
                          disabled
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-heading font-bold text-primary mb-4 px-4">
                Latest Insights
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Expert perspectives on relationship coaching and personal growth
              </p>
            </motion.div>

            {/* Articles Grid - Keep structure, show placeholder holders */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* TODO: Add Ganesh Mandadi's articles here */}
              {[].length > 0 ? (
                [].map((article: any, index: number) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <CardTitle className="font-heading group-hover:text-accent transition-colors mb-3">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="ghost" 
                        className="group-hover:text-accent"
                        onClick={() => {
                          // For now, open WhatsApp for full article access
                          window.open('https://wa.me/919666722233?text=Hi, I would like to read the full article: ' + article.title, '_blank');
                        }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
                ))
              ) : (
                // Show placeholder article holders
                Array.from({ length: 4 }).map((_, index) => (
                  <motion.div
                    key={`placeholder-article-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                          <span>Date</span>
                          <span>•</span>
                          <span>Read time</span>
                        </div>
                        <CardTitle className="font-heading text-gray-400 mb-3">
                          Article {index + 1}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          Article excerpt will appear here
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="ghost" 
                          className="text-gray-400"
                          disabled
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-slate-900 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 px-4">
                Want More Personalized Guidance?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto px-4">
                Get customized relationship coaching resources tailored to your specific needs
              </p>
              <Button
                variant="accent"
                size="lg"
                className="group"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

