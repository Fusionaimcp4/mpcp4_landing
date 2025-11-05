'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Hero Content */}
      <div className="container mx-auto text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block mb-2">The Core of</span>
            <span className="text-gradient glow-blue">Decentralized Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-mcp-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            MCP4 unifies intelligent systems across AI orchestration, automation, and communication.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://fusion.mcp4.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-electric-blue/50 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Fusion
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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

