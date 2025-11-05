interface DocumentationProps {
  onContactClick: () => void;
}

export default function Documentation({ onContactClick }: DocumentationProps) {
  const docs = [
    {
      title: 'Fusion Documentation',
      description: 'Complete guide to setting up and using the Fusion orchestration platform',
      link: 'https://fusion.mcp4.ai/docs',
      external: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation for all endpoints, parameters, and responses',
      link: 'https://fusion.mcp4.ai/docs/api',
      external: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'NeuroSwitch Technology',
      description: 'Learn how our intelligent routing engine automatically selects the best AI models',
      link: 'https://fusion.mcp4.ai/docs/overview/neuroswitch',
      external: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Voxe Documentation',
      description: 'Learn how to integrate and customize the Voxe customer engagement platform',
      link: 'https://voxe.mcp4.ai/#',
      external: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="documentation" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Documentation</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue via-mcp-purple to-mcp-teal mx-auto mb-6"></div>
          <p className="text-xl text-mcp-gray max-w-3xl mx-auto">
            Comprehensive guides, API references, and technical documentation for all MCP4 technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc) => (
            <a
              key={doc.title}
              href={doc.link}
              target={doc.external ? "_blank" : undefined}
              rel={doc.external ? "noopener noreferrer" : undefined}
              className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-electric-blue mb-4 group-hover:scale-110 transition-transform">
                {doc.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-electric-blue transition-colors flex items-center gap-2">
                {doc.title}
                {doc.external && (
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </h3>
              <p className="text-sm text-mcp-gray leading-relaxed">
                {doc.description}
              </p>
              <div className="mt-4 flex items-center text-electric-blue text-sm font-medium">
                {doc.external ? 'Visit Docs' : 'Read More'}
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-electric-blue/10 via-mcp-purple/10 to-mcp-teal/10 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
            <p className="text-mcp-gray mb-6">
              Join our community, explore tutorials, or reach out to our support team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/cWGyXnJSA5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Community
              </a>
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 rounded-lg font-semibold hover:border-white/60 transition-all"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

