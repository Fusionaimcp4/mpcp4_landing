export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About MCP4</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue via-mcp-purple to-mcp-teal mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-mcp-gray leading-relaxed">
              MCP4 builds the next generation of AI infrastructure — uniting orchestration, 
              communication, and automation technologies into one decentralized ecosystem.
            </p>
            <p className="text-lg text-mcp-gray leading-relaxed">
              Our mission is to empower organizations with autonomous intelligence that adapts, 
              learns, and scales effortlessly. We're at the forefront of AI system integration, 
              delivering solutions that are both powerful and accessible.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-electric-blue">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Innovation First</span>
              </div>
              <div className="flex items-center gap-2 text-mcp-purple">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Autonomous Systems</span>
              </div>
              <div className="flex items-center gap-2 text-mcp-teal">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Open Frameworks</span>
              </div>
            </div>
          </div>

          {/* Stats/Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/50 transition-all">
              <div className="text-4xl font-bold text-electric-blue mb-2">3+</div>
              <div className="text-sm text-mcp-gray">Core Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-mcp-purple/10 to-transparent border border-mcp-purple/20 rounded-xl p-6 hover:border-mcp-purple/50 transition-all">
              <div className="text-4xl font-bold text-mcp-purple mb-2">100%</div>
              <div className="text-sm text-mcp-gray">Open Source</div>
            </div>
            <div className="bg-gradient-to-br from-mcp-teal/10 to-transparent border border-mcp-teal/20 rounded-xl p-6 hover:border-mcp-teal/50 transition-all">
              <div className="text-4xl font-bold text-mcp-teal mb-2">∞</div>
              <div className="text-sm text-mcp-gray">Scalability</div>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/50 transition-all">
              <div className="text-4xl font-bold text-electric-blue mb-2">24/7</div>
              <div className="text-sm text-mcp-gray">Autonomous</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

