'use client';

import { useState, useEffect } from 'react';

const HERO_OPTIONS = [
  {
    headline: 'The Core of Intelligent Systems',
    subheadline: 'MCP4 unifies AI orchestration, automation, and communication—empowering businesses to build, manage, and evolve their own intelligent infrastructure.',
  },
  {
    headline: 'Building the Operating System for Intelligent Automation',
    subheadline: 'MCP4 connects orchestration, conversation, and decision engines into one cohesive AI framework—secure, scalable, and ready for the next era of work.',
  },
  {
    headline: 'One Platform for All Your AI Systems',
    subheadline: 'From orchestration to automation to communication—MCP4 brings every layer of your AI stack together under one unified architecture.',
  },
  {
    headline: 'Unified Intelligence for the Modern Enterprise',
    subheadline: 'MCP4 integrates advanced AI orchestration, automation, and communication tools into a single, secure control layer—built for scale and compliance.',
  },
  {
    headline: 'Intelligence. Unified.',
    subheadline: 'MCP4 powers the connection between AI orchestration, automation, and communication—simplifying complexity across every intelligent system.',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % HERO_OPTIONS.length);
        setFade(true);
      }, 500); // Wait for fade out before changing content
    }, 60000); // Change every 60 seconds (1 minute)

    return () => clearInterval(interval);
  }, []);

  const currentHero = HERO_OPTIONS[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Hero Content */}
      <div className="container mx-auto text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-gradient glow-blue">{currentHero.headline}</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl text-mcp-gray mb-12 max-w-3xl mx-auto leading-relaxed transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {currentHero.subheadline}
          </p>

          {/* Progress Indicators */}
          <div className="flex gap-2 justify-center mb-8">
            {HERO_OPTIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setFade(true);
                  }, 300);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-electric-blue' 
                    : 'w-6 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`View option ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://fusion.mcp4.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-electric-blue/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Fusion
              </span>
            </a>
            
            <a
              href="https://voxe.mcp4.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-transparent border-2 border-mcp-purple text-mcp-purple rounded-lg font-semibold hover:bg-mcp-purple hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Voxe
                
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

