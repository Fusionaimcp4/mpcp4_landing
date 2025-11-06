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
              MCP4 builds AI infrastructure for modern businesses. We make two products:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-electric-blue pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Fusion AI</h3>
                <p className="text-mcp-gray leading-relaxed">
                  A multi-provider AI orchestration platform that automatically routes your tasks to the best AI model 
                  (OpenAI, Claude, Gemini, or local models) based on performance and cost. It's the AI brain for teams 
                  managing multiple AI providers.
                </p>
              </div>

              <div className="border-l-4 border-mcp-purple pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Voxe</h3>
                <p className="text-mcp-gray leading-relaxed">
                  An all-in-one AI customer support platform that provides 24/7 automated service across SMS, web chat, 
                  WhatsApp, and email. No per-seat fees. Reduces support costs by 60-80% while maintaining high satisfaction rates.
                </p>
              </div>
            </div>

            <p className="text-sm text-mcp-gray/80 italic pt-2">
              Both platforms help businesses reduce costs, automate workflows, and scale without adding headcount.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/50 transition-all">
              <div className="text-4xl font-bold text-electric-blue mb-2">3+</div>
              <div className="text-sm text-mcp-gray">Integrated AI Systems</div>
            </div>
            <div className="bg-gradient-to-br from-mcp-purple/10 to-transparent border border-mcp-purple/20 rounded-xl p-6 hover:border-mcp-purple/50 transition-all">
              <div className="text-4xl font-bold text-mcp-purple mb-2">∞</div>
              <div className="text-sm text-mcp-gray">Scalability by Design</div>
            </div>
            <div className="bg-gradient-to-br from-mcp-teal/10 to-transparent border border-mcp-teal/20 rounded-xl p-6 hover:border-mcp-teal/50 transition-all">
              <div className="text-4xl font-bold text-mcp-teal mb-2">24/7</div>
              <div className="text-sm text-mcp-gray">Autonomous Operation</div>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/50 transition-all">
              <div className="text-4xl font-bold text-electric-blue mb-2">ISO</div>
              <div className="text-sm text-mcp-gray">Compliance Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

