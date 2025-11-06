import Image from 'next/image';

export default function Technologies() {
  const products = [
    {
      name: 'Fusion',
      tagline: 'Unified chat and API access for multiple AI models',
      description: 'Makes multiple language models work together as one. Switch between OpenAI, Claude, Gemini, or local models mid-conversation while maintaining complete context and continuity. Every model shares the same memory — making collaboration feel like a single, uninterrupted conversation.',
      link: 'https://fusion.mcp4.ai',
      color: 'electric-blue',
      logo: '/fution_logo.png',
    },
    {
      name: 'Voxe',
      tagline: 'All-in-one AI customer support platform',
      description: '24/7 automated customer service across SMS, web chat, WhatsApp, and email. Unified inbox, AI assistants, smart handoffs to live agents, and instant knowledge base creation. No per-seat fees. Reduces support costs by 60-80%.',
      link: 'https://voxe.mcp4.ai',
      color: 'mcp-purple',
      logo: '/voxe_logo.png',
    },
    {
      name: 'NeuroSwitch',
      tagline: 'Intelligent AI model routing engine',
      description: 'Automatically selects the best AI model for each task based on performance, cost, and context. Powers Fusion\'s smart routing to ensure you always get optimal results at the lowest cost.',
      link: 'https://github.com/Fusionaimcp4/n8n-nodes-fusion',
      color: 'mcp-teal',
      logo: '/neroswitch_logo.png',
    },
    
  ];

  return (
    <section id="technologies" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue via-mcp-purple to-mcp-teal mx-auto mb-6"></div>
          <p className="text-xl text-mcp-gray max-w-3xl mx-auto">
            A comprehensive ecosystem of AI tools designed to work seamlessly together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Logo */}
              <div className="mb-6 group-hover:scale-110 transition-transform">
                <div className="relative w-16 h-16">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
              <p className={`text-sm text-${product.color} mb-4 font-medium`}>{product.tagline}</p>
              <p className="text-mcp-gray mb-6 leading-relaxed">{product.description}</p>

              {/* CTA */}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-${product.color} font-semibold group-hover:gap-3 transition-all`}
              >
                {product.name === 'NeuroSwitch' ? 'View on GitHub' : 'Learn More'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${product.color}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

