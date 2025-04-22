"use client";

import { useEffect, useState } from 'react';
import { Bot, Youtube, GitBranch, Sparkles, Send, FileEdit, KeyRound, Clock } from 'lucide-react';
import { motion } from '@/lib/motion';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI-Powered Content",
    description: "Generate comprehensive course content with our advanced AI models trained on educational material."
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    title: "YouTube Integration",
    description: "Automatically find and include relevant YouTube videos that complement your course content."
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Custom Learning Paths",
    description: "Create branching scenarios and personalized learning journeys based on student progress."
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Interactive Elements",
    description: "Add quizzes, assessments, and interactive exercises generated from your course material."
  },
  {
    icon: <FileEdit className="h-5 w-5" />,
    title: "Easy Editing",
    description: "Refine AI-generated content with our intuitive editing tools for perfect results."
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Access Control",
    description: "Manage who can view, edit and access your courses with flexible permission settings."
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Time-Saving",
    description: "Create complete courses in minutes instead of weeks with our AI-powered platform."
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: "One-Click Publishing",
    description: "Publish your courses to popular LMS platforms or export to various formats instantly."
  }
];

export default function Features() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray/10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Course Creators
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI-powered platform makes creating engaging courses simpler and faster than ever before.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card hover:bg-card/80 border border-border rounded-xl p-6 transition-all duration-200 hover:shadow-md group"
            >
              <div className={cn(
                "inline-flex items-center justify-center rounded-lg p-3 mb-4 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
              )}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}