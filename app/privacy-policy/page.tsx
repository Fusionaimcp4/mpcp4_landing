import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function PrivacyPolicyPage() {
  // Read the privacy policy from the compliance folder
  const policyPath = path.join(process.cwd(), 'app', 'docs', 'Policy', 'privacy-policy.md');
  const fileContent = fs.readFileSync(policyPath, 'utf-8');
  const { content, data } = matter(fileContent);
  
  // Remove section 17 (References) and approval fields
  let cleanedContent = content;
  
  // Remove compliance metadata at the top (Version, Owner, Effective Date, Review Cycle)
  cleanedContent = cleanedContent.replace(/^\*\*Version:\*\*.*$/m, '');
  cleanedContent = cleanedContent.replace(/^\*\*Owner:\*\*.*$/m, '');
  cleanedContent = cleanedContent.replace(/^\*\*Effective Date:\*\*.*$/m, '');
  cleanedContent = cleanedContent.replace(/^\*\*Review Cycle:\*\*.*$/m, '');
  cleanedContent = cleanedContent.replace(/^---$/m, ''); // Remove separator lines
  
  // Remove "decentralized" word (handles "a decentralized" -> "an" or "the decentralized" -> "the")
  cleanedContent = cleanedContent.replace(/\ba\s+decentralized\s+/gi, 'an ');
  cleanedContent = cleanedContent.replace(/\bthe\s+decentralized\s+/gi, 'the ');
  cleanedContent = cleanedContent.replace(/\bdecentralized\s+/gi, '');
  
  // Remove section 17 and everything after it
  const section17Index = cleanedContent.indexOf('## 17. References');
  if (section17Index !== -1) {
    cleanedContent = cleanedContent.substring(0, section17Index).trim();
  }
  
  // Remove any approval fields at the end
  cleanedContent = cleanedContent.replace(/\*\*Approved by:\*\*.*$/m, '');
  cleanedContent = cleanedContent.replace(/\*\*Date:\*\*.*$/m, '');
  cleanedContent = cleanedContent.replace(/\*\*Next Review:\*\*.*$/m, '');
  
  // Clean up extra whitespace
  cleanedContent = cleanedContent.replace(/\n{3,}/g, '\n\n').trim();
  
  const htmlContent = marked(cleanedContent);

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
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="text-mcp-gray">
              Last Updated: {data.effectiveDate 
                ? new Date(data.effectiveDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })
                : 'November 5, 2025'}
            </p>
          </div>

          {/* Policy Content */}
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12">
            <article
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:font-extrabold prose-h1:bg-gradient-to-r prose-h1:from-electric-blue prose-h1:via-mcp-purple prose-h1:to-mcp-teal prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-electric-blue prose-h2:font-bold prose-h2:leading-tight prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
                prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-white prose-h3:font-semibold
                prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6 prose-h4:text-white prose-h4:font-semibold
                prose-p:text-mcp-gray prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:font-normal
                prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-white prose-strong:font-bold prose-strong:font-semibold
                prose-ul:text-mcp-gray prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                prose-ol:text-mcp-gray prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                prose-li:text-mcp-gray prose-li:my-2 prose-li:leading-relaxed
                prose-code:text-electric-blue prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:p-4
                prose-blockquote:border-l-4 prose-blockquote:border-electric-blue prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-mcp-gray prose-blockquote:my-6
                prose-img:rounded-lg prose-img:my-8
                prose-hr:border-white/10 prose-hr:my-8
                prose-table:w-full prose-table:border-collapse prose-table:my-6
                prose-th:bg-white/10 prose-th:border prose-th:border-white/20 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-white
                prose-td:border prose-td:border-white/20 prose-td:px-4 prose-td:py-3 prose-td:text-mcp-gray"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
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
                href="/terms-of-service"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue/10 to-mcp-purple/10 border border-white/10 rounded-lg hover:border-electric-blue/50 transition-all"
              >
                Terms of Service
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

