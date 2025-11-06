'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Helper function to get correct link for hash anchors
  const getHashLink = (hash: string) => {
    if (isHomePage) {
      return hash;
    }
    return `/${hash}`;
  };

  // Handle smooth scroll for hash links
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // If not on home page, the Link will navigate to /#hash which will work
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
          : 'bg-black/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center"
          >
            <span className="text-gradient">MCP4</span>
            <span className="text-electric-blue">.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link 
              href={getHashLink('#about')} 
              onClick={(e) => handleHashClick(e, '#about')}
              className="px-4 py-2 text-sm font-medium text-mcp-gray hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              About
            </Link>
            <Link 
              href={getHashLink('#technologies')} 
              onClick={(e) => handleHashClick(e, '#technologies')}
              className="px-4 py-2 text-sm font-medium text-mcp-gray hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Technologies
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                pathname === '/blog' 
                  ? 'text-electric-blue bg-electric-blue/10' 
                  : 'text-mcp-gray hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </Link>
            <Link 
              href={getHashLink('#documentation')} 
              onClick={(e) => handleHashClick(e, '#documentation')}
              className="px-4 py-2 text-sm font-medium text-mcp-gray hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Documentation
            </Link>
            <Link 
              href={getHashLink('#contact')} 
              onClick={(e) => handleHashClick(e, '#contact')}
              className="px-4 py-2 text-sm font-medium text-mcp-gray hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href={getHashLink('#technologies')}
            onClick={(e) => handleHashClick(e, '#technologies')}
            className="hidden lg:flex items-center px-5 py-2.5 bg-electric-blue text-black rounded-lg hover:bg-white transition-all duration-300 font-semibold text-sm shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-105"
          >
            Explore Products
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href={getHashLink('#about')} 
                onClick={(e) => handleHashClick(e, '#about')}
                className="text-base text-mcp-gray hover:text-white transition-colors font-medium py-2"
              >
                About
              </Link>
              <Link 
                href={getHashLink('#technologies')} 
                onClick={(e) => handleHashClick(e, '#technologies')}
                className="text-base text-mcp-gray hover:text-white transition-colors font-medium py-2"
              >
                Technologies
              </Link>
              <Link 
                href="/blog" 
                className={`text-base transition-colors font-medium py-2 ${
                  pathname === '/blog' ? 'text-electric-blue' : 'text-mcp-gray hover:text-white'
                }`}
              >
                Blog
              </Link>
              <Link 
                href={getHashLink('#documentation')} 
                onClick={(e) => handleHashClick(e, '#documentation')}
                className="text-base text-mcp-gray hover:text-white transition-colors font-medium py-2"
              >
                Documentation
              </Link>
              <Link 
                href={getHashLink('#contact')} 
                onClick={(e) => handleHashClick(e, '#contact')}
                className="text-base text-mcp-gray hover:text-white transition-colors font-medium py-2"
              >
                Contact
              </Link>
              <Link
                href={getHashLink('#technologies')}
                onClick={(e) => handleHashClick(e, '#technologies')}
                className="mt-4 px-6 py-3 bg-electric-blue text-black rounded-lg hover:bg-white transition-all duration-300 font-semibold text-center"
              >
                Explore Products
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

