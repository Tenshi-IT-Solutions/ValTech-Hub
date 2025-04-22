"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, BookOpen, Youtube } from 'lucide-react';
import { motion } from '@/lib/motion';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" /> AI-Powered Course Creation
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Create Engaging Courses with{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  AI
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                Transform your knowledge into professional courses with AI. Generate comprehensive course materials and find relevant YouTube content automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href={'/dashboard'} prefetch passHref>
                <Button size="lg" className="font-medium text-base">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                {/* <Button size="lg" variant="outline" className="font-medium text-base">
                  Watch Demo
                </Button> */}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-background flex items-center justify-center text-xs text-white font-medium">
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="ml-4 text-sm text-muted-foreground">
                    <span className="font-semibold">500+</span> educators already using Valtech
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600 shadow-xl">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-[85%] h-[85%] border border-white/20 shadow-xl relative overflow-hidden">
                      {/* Course creation UI mock */}
                      <div className="bg-background rounded-md h-12 flex items-center px-4 mb-4">
                        <BookOpen className="h-5 w-5 text-primary mr-2" />
                        <div className="font-medium">Course Generator</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 h-[calc(100%-3rem)]">
                        <div className="bg-card rounded-md p-3 overflow-hidden">
                          <div className="text-xs font-medium mb-2">Course Outline</div>
                          <div className="space-y-2">
                            {['Introduction to AI', 'Machine Learning Basics', 'Neural Networks', 'Practical Applications'].map((item, i) => (
                              <div key={i} className="bg-muted rounded px-2 py-1 text-xs">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-card rounded-md p-3 overflow-hidden">
                          <div className="text-xs font-medium mb-2">YouTube Integration</div>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="flex items-center bg-muted rounded px-2 py-1 text-xs gap-2">
                                <Youtube className="h-3 w-3 text-red-500" />
                                <span className="truncate">AI Tutorial {i}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-blue-500/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}