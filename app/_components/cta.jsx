"use client";

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Cta() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <div className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
              <path fill="currentColor" d="M42.8,-68.1C55.7,-62.4,66.5,-50.6,73.3,-36.9C80.1,-23.2,83,-7.5,79.7,7C76.4,21.5,66.8,34.9,55,44.7C43.1,54.5,28.9,60.7,14.7,65.1C0.5,69.5,-13.7,72.1,-28.6,69.5C-43.5,66.9,-59.2,59.1,-67,46.3C-74.8,33.5,-74.7,15.7,-72.2,0C-69.7,-15.7,-64.8,-29.4,-56.1,-40.7C-47.4,-52,-35,-60.9,-22,-66.6C-8.9,-72.4,4.7,-75.1,18.8,-74.5C32.9,-73.9,47.5,-70.1,57.7,-62.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Course Creation Process?
            </h2>
            
            <p className="text-xl opacity-90 mb-8">
              Join educators worldwide who are creating engaging, comprehensive courses in minutes instead of weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 h-12"
              />
              <Button className="bg-white text-primary hover:bg-white/90 h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="mt-4 text-sm opacity-80">
              No credit card required. Start with our free plan today.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}