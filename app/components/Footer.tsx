import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-gradient">MCP4</span>
              <span className="text-2xl font-bold text-electric-blue">.ai</span>
            </div>
            <p className="text-mcp-gray mb-4 max-w-md">
              Engineering the future of autonomous intelligence through unified AI orchestration, 
              automation, and communication technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/cWGyXnJSA5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mcp-gray hover:text-electric-blue transition-colors"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Fusionaimcp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mcp-gray hover:text-electric-blue transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="text-mcp-gray hover:text-electric-blue transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-mcp-gray hover:text-electric-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-mcp-gray hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-mcp-gray hover:text-white transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-mcp-gray hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-mcp-gray hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/docs" className="text-mcp-gray hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="/docs/Policy" className="text-mcp-gray hover:text-white transition-colors">
                  Policies & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://fusion.mcp4.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mcp-gray hover:text-white transition-colors"
                >
                  Fusion
                </a>
              </li>
              <li>
                <a
                  href="https://voxe.mcp4.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mcp-gray hover:text-white transition-colors"
                >
                  Voxe
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Fusionaimcp4/neuroswitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mcp-gray hover:text-white transition-colors"
                >
                  NeuroSwitch
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Fusionaimcp4/n8n-nodes-fusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mcp-gray hover:text-white transition-colors"
                >
                  Fusion n8n Nodes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-4 text-mcp-gray">
              {/* Address */}
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm">
                  <p>5900 Balcones Dr</p>
                  <p>Suite 100</p>
                  <p>Austin, TX 78731</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+14692699057" className="text-sm hover:text-electric-blue transition-colors">
                  (469) 269-9057
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@mcp4.ai" className="text-sm hover:text-electric-blue transition-colors">
                  contact@mcp4.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-mcp-gray text-sm">
            © {new Date().getFullYear()} MCP4. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/docs/Policy/privacy-policy" className="text-mcp-gray hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/docs/Policy" className="text-mcp-gray hover:text-white transition-colors">
              Compliance
            </a>
            <a href="#contact" className="text-mcp-gray hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

