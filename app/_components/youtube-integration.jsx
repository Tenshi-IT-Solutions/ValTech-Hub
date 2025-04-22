"use client";

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion';
import { Youtube, Search, CheckCircle, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function YoutubeIntegration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 pb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Youtube className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">YouTube Integration</h3>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Search className="h-5 w-5 text-white/70" />
                  <div className="flex-grow text-white">Machine Learning Fundamentals</div>
                </div>
              </div>
              
              <div className="bg-card p-6 -mt-4 rounded-t-xl border border-border">
                <h4 className="font-medium mb-4">Suggested Videos for "Neural Networks"</h4>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Neural Networks Explained",
                      channel: "Tech Learning",
                      views: "1.2M views",
                      duration: "15:42"
                    },
                    {
                      title: "How Neural Networks Work - Simple Explanation",
                      channel: "Simple Science",
                      views: "845K views",
                      duration: "8:27"
                    },
                    {
                      title: "Practical Neural Networks in Python",
                      channel: "Code With Me",
                      views: "567K views",
                      duration: "22:15"
                    }
                  ].map((video, index) => (
                    <div 
                      key={index} 
                      className="flex gap-3 p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="w-32 h-18 bg-muted flex-shrink-0 rounded flex items-center justify-center relative">
                        <Youtube className="h-8 w-8 text-red-500" />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h5 className="font-medium text-sm line-clamp-2">{video.title}</h5>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span className="flex items-center">
                            {video.channel} <CheckCircle className="h-3 w-3 ml-1" />
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{video.views}</span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" /> 98%
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="h-8 flex-shrink-0 self-start">
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Courses with YouTube Content
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6">
              Our AI doesn't just create course content—it finds the best educational videos to complement your lessons.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                  <Youtube className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Video Selection</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes YouTube content to find videos that perfectly match your course topics and learning objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Filtering</h3>
                  <p className="text-muted-foreground">
                    Videos are ranked by quality metrics like engagement, educational value, and production quality to ensure the best learning experience.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Perfect Integration</h3>
                  <p className="text-muted-foreground">
                    Selected videos are seamlessly integrated into your course structure, with timestamps for specific concepts when relevant.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8" size="lg">
              Try YouTube Integration
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}