'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-gradient">MCP4</span>
            <span className="text-electric-blue">.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-mcp-gray hover:text-white transition-colors">
              About
            </a>
            <a href="#technologies" className="text-mcp-gray hover:text-white transition-colors">
              Technologies
            </a>
            <a href="/blog" className="text-mcp-gray hover:text-white transition-colors">
              Blog
            </a>
            <a href="#documentation" className="text-mcp-gray hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#contact" className="text-mcp-gray hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-electric-blue/10 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-black transition-all duration-300 font-medium">
            Explore Products
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

