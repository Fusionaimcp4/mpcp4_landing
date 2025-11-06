import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <Link href="/" className="text-electric-blue hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Terms of Service</span>
            </h1>
            <p className="text-mcp-gray">
              Last Updated: November 5, 2025
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12">
            <article className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:font-extrabold prose-h1:bg-gradient-to-r prose-h1:from-electric-blue prose-h1:via-mcp-purple prose-h1:to-mcp-teal prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-electric-blue prose-h2:font-bold prose-h2:leading-tight prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-white prose-h3:font-semibold
              prose-p:text-mcp-gray prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:font-normal
              prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-mcp-gray prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-ol:text-mcp-gray prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
              prose-li:text-mcp-gray prose-li:my-2 prose-li:leading-relaxed">
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using MCP4.ai services, including Fusion, Voxe, and NeuroSwitch (collectively, the "Services"), 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                MCP4.ai provides AI infrastructure and orchestration services:
              </p>
              <ul>
                <li><strong>Fusion</strong> — Multi-provider AI orchestration platform that routes tasks to optimal AI models</li>
                <li><strong>Voxe</strong> — AI-powered customer support and automation platform</li>
                <li><strong>NeuroSwitch</strong> — Intelligent routing engine for multi-AI environments</li>
              </ul>

              <h2>3. Account Registration</h2>
              <p>
                To use certain Services, you must create an account. You agree to:
              </p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your account credentials secure</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2>4. Acceptable Use</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful code, viruses, or malware</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Use the Services to generate harmful, abusive, or illegal content</li>
                <li>Resell or redistribute the Services without authorization</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Services are owned by MCP4.ai and are protected by international 
                copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, 
                sell, or lease any part of our Services without our written permission.
              </p>

              <h2>6. User Content</h2>
              <p>
                You retain ownership of any content you submit through the Services. By submitting content, you grant MCP4.ai a 
                worldwide, non-exclusive, royalty-free license to use, reproduce, and process your content solely to provide and 
                improve the Services.
              </p>

              <h2>7. Payment Terms</h2>
              <p>
                Some Services require payment. You agree to:
              </p>
              <ul>
                <li>Pay all fees as described in the applicable pricing plan</li>
                <li>Provide accurate payment information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Pay all applicable taxes</li>
              </ul>
              <p>
                Fees are non-refundable unless required by law or as specified in your plan. We reserve the right to change 
                pricing with 30 days' notice.
              </p>

              <h2>8. Service Availability</h2>
              <p>
                We strive to maintain high availability but do not guarantee uninterrupted access. Services may be temporarily 
                unavailable due to maintenance, updates, or circumstances beyond our control. We are not liable for any downtime 
                or service interruptions.
              </p>

              <h2>9. Data Protection</h2>
              <p>
                Your use of the Services is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>, which explains 
                how we collect, use, and protect your information. By using the Services, you consent to the collection and use 
                of information as described in our Privacy Policy.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MCP4.AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
                OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>

              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless MCP4.ai, its officers, directors, employees, and agents from any claims, 
                damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services or violation 
                of these Terms.
              </p>

              <h2>12. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Services immediately, without prior notice, for any 
                breach of these Terms. Upon termination, your right to use the Services will cease immediately. You may terminate 
                your account at any time by contacting us.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes via email or 
                through the Services. Your continued use of the Services after changes become effective constitutes acceptance 
                of the modified Terms.
              </p>

              <h2>14. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the 
                courts of Travis County, Texas.
              </p>

              <h2>15. Contact Information</h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:legal@mcp4.ai">legal@mcp4.ai</a></li>
                <li><strong>Address:</strong> 5900 Balcones Dr, Suite 100, Austin, TX 78731</li>
                <li><strong>Phone:</strong> <a href="tel:+14692699057">(469) 269-9057</a></li>
              </ul>

              <h2>16. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or 
                eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>

              <h2>17. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and MCP4.ai regarding 
                the use of the Services and supersede all prior agreements and understandings.
              </p>
            </article>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-mcp-gray hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue/10 to-mcp-purple/10 border border-white/10 rounded-lg hover:border-electric-blue/50 transition-all"
              >
                Privacy Policy
              </Link>
              <Link
                href="/docs/Policy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue/10 to-mcp-purple/10 border border-white/10 rounded-lg hover:border-electric-blue/50 transition-all"
              >
                Compliance Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

