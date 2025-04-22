"use client";

import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Valtech</span>
        </div> */}
        <Image src={'/valtech.png'} alt='valtech' width={150} height={200}></Image>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Tutorials</DropdownMenuItem>
              <DropdownMenuItem>API</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a> */}
          {/* <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a> */}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
        <Link href={'/dashboard'} prefetch passHref>
              <Button variant="outline" className="font-medium">
                Sign In
              </Button>
              </Link>
              <Link href={'/dashboard'} prefetch passHref>
              <Button className="font-medium">
                Get Started
              </Button>
              </Link>;
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
            <Link href={'/dashboard'} prefetch passHref>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              </Link>
              <Link href={'/dashboard'} prefetch passHref>
              <Button className="w-full">
                Get Started
              </Button>
              </Link>;
              
            </div>
          </div>
        </div>
      )}
    </header>
  );
}