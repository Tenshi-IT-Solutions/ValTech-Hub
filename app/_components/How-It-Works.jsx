"use client";

import { useEffect, useState } from 'react';
import { motion } from "motion/react"
import { BookOpen, Youtube, FileCheck, BookmarkCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Generate Course Outline",
    description: "Describe your course topic and our AI will generate a comprehensive outline with chapters and learning objectives.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <Youtube className="h-6 w-6" />,
    title: "Add YouTube Content",
    description: "The AI automatically finds and suggests relevant YouTube videos for each chapter of your course.",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Edit and Refine",
    description: "Review, edit, and refine the generated content to ensure it perfectly matches your teaching style.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: <BookmarkCheck className="h-6 w-6" />,
    title: "Publish Your Course",
    description: "Finalize and publish your course to share with your students or export to your preferred platform.",
    color: "from-emerald-500 to-green-600"
  }
];

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Auto-rotate through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Valtech Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Create professional courses in minutes with our simple 4-step process
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "flex items-start gap-4 p-6 rounded-xl transition-all duration-300",
                  activeStep === index 
                    ? "bg-card shadow-md" 
                    : "hover:bg-card/50 cursor-pointer"
                )}
                onClick={() => setActiveStep(index)}
              >
                <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white",
                  `bg-gradient-to-br ${step.color}`
                )}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0 max-w-lg"
          >
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-primary/50 to-primary shadow-xl p-1">
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="h-12 bg-muted flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="text-sm ml-2 text-muted-foreground">Course Creator</div>
                </div>
                <div className="p-6">
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Course Topic</h4>
                        <p className="text-sm text-muted-foreground">Introduction to Machine Learning</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Generated Outline</h4>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Chapter 1: What is Machine Learning?</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Chapter 2: Supervised Learning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Chapter 3: Unsupervised Learning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Chapter 4: Practical Applications</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="font-medium mb-2">YouTube Videos for Chapter 1</h4>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                            <div className="w-16 h-10 bg-primary/20 rounded flex items-center justify-center">
                              <Youtube className="h-5 w-5 text-red-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Introduction to ML - Part {i}</p>
                              <p className="text-xs text-muted-foreground">8:24 • 120K views</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="font-medium mb-2">Edit Course Content</h4>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Chapter Introduction</span>
                          <div className="flex gap-2">
                            <FileCheck className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="h-24 bg-card p-2 rounded border border-border text-sm">
                          Machine learning is a subfield of artificial intelligence that focuses on developing systems that learn from data...
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-8 bg-muted rounded"></div>
                        <div className="flex-1 h-8 bg-muted rounded"></div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="font-medium mb-2">Course Ready to Publish</h4>
                      <div className="bg-primary/10 text-primary p-4 rounded-lg text-center">
                        <BookmarkCheck className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-medium">Machine Learning Fundamentals</p>
                        <p className="text-sm">4 chapters • 12 videos • 5 quizzes</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-muted p-3 rounded-lg text-center">
                          <p className="text-sm font-medium">Export as PDF</p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg text-center">
                          <p className="text-sm font-medium">Share Link</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 h-24 w-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -z-10 -top-6 -left-6 h-24 w-24 bg-primary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}