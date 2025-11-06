import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Configure marked options for better rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Enable dynamic params
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

// Map slugs to actual filenames in the Policy directory
const SLUG_TO_FILE: Record<string, string> = {
  // ISO 27001 - Information Security
  'information-security': 'information-security-policy.md',
  'access-control': 'access-control-policy.md',
  'data-classification': 'data-classification.md',
  'encryption': 'Encryption Policy.md',
  'backup-recovery': 'backup-recovery.md',
  'acceptable-use': 'acceptable-use.md',
  'incident-response': 'Incident Response Procedure.md',
  'change-management': 'change-management.md',
  
  // ISO 27701 - Privacy Management
  'privacy-policy': 'privacy-policy.md',
  'data-protection': 'data-protection.md',
  'cookie-tracking': 'Cookie & Tracking Policy.md',
  'data-subject-rights': 'data-subject-rights.md',
  'data-retention': 'data-retention.md',
  'third-party-review': 'third-party-review.md',
  
  // ISO 27018 - Cloud Privacy
  'cloud-data-protection': 'cloud-data-protection.md',
  'data-ownership': 'data-ownership.md',
  'data-deletion-verification': 'data-deletion-verification.md',
  'sub-processors': 'sub-processors.md',
  
  // ISO 42001 - AI Management
  'ai-ethics': 'ai-ethics.md',
  'ai-risk-management': 'risk-management-policy.md',
  'model-evaluation': 'model-evaluation-procedure.md',
  'ai-incident-response': 'ai-incident-response.md',
  
  // General Compliance
  'code-of-conduct': 'code-of-conduct.md',
  'vendor-management': 'vendor-management.md',
  'business-continuity': 'business-continuity.md',
  'onboarding-offboarding': 'onboarding-offboarding.md',
  'remote-work-security': 'remote-work-security.md',
};

// Extract policy metadata from markdown content
interface PolicyMetadata {
  version?: string;
  owner?: string;
  effectiveDate?: string;
  reviewCycle?: string;
}

function extractMetadata(content: string): PolicyMetadata {
  const lines = content.split('\n');
  const metadata: PolicyMetadata = {};

  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const line = lines[i];
    if (line.includes('**Version:**')) {
      metadata.version = line.replace(/.*\*\*Version:\*\*\s*/, '').trim();
    } else if (line.includes('**Owner:**')) {
      metadata.owner = line.replace(/.*\*\*Owner:\*\*\s*/, '').trim();
    } else if (line.includes('**Effective Date:**')) {
      metadata.effectiveDate = line.replace(/.*\*\*Effective Date:\*\*\s*/, '').trim();
    } else if (line.includes('**Review Cycle:**')) {
      metadata.reviewCycle = line.replace(/.*\*\*Review Cycle:\*\*\s*/, '').trim();
    }
  }

  return metadata;
}

// TEMPORARILY COMMENTED OUT FOR TESTING
// export async function generateStaticParams() {
//   return Object.keys(SLUG_TO_FILE).map((slug) => ({
//     slug,
//   }));
// }

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filename = SLUG_TO_FILE[params.slug];
  if (!filename) {
    return {
      title: 'Policy Not Found | MCP4.ai',
    };
  }

  // Extract title from slug
  const title = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | MCP4.ai Policy Hub`,
    description: `MCP4.ai ${title} - ISO compliance documentation for information security, privacy, and AI management.`,
  };
}

export default async function PolicyPage({ params }: { params: { slug: string } }) {
  // Simple, direct parameter access
  const slug = params.slug;
  const filename = SLUG_TO_FILE[slug];

  // If no file mapping exists, show 404
  if (!filename) {
    notFound();
  }

  const policyDir = path.join(process.cwd(), 'app', 'docs', 'Policy');
  const filePath = path.join(policyDir, filename);

  // Debug logging
  console.log('🔍 Debug Info:');
  console.log('  Slug:', slug);
  console.log('  Filename:', filename);
  console.log('  Policy Dir:', policyDir);
  console.log('  Full Path:', filePath);
  console.log('  File Exists:', fs.existsSync(filePath));
  if (fs.existsSync(policyDir)) {
    console.log('  Dir Contents:', fs.readdirSync(policyDir));
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    // Return placeholder content for policies not yet created
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="border-b border-white/10">
          <div className="container mx-auto px-6 py-12">
            <Link href="/docs/Policy" className="text-electric-blue hover:underline mb-4 inline-block">
              ← Back to Policy Hub
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="bg-gradient-to-br from-mcp-purple/10 to-transparent border border-white/10 rounded-2xl p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-6 text-mcp-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="text-3xl font-bold mb-4">Policy Document In Progress</h1>
            <p className="text-mcp-gray mb-6 max-w-2xl mx-auto">
              This policy document is currently being drafted as part of MCP4's comprehensive ISO compliance program.
            </p>
            <Link
              href="/docs/Policy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue text-black rounded-lg font-semibold hover:bg-white transition-all"
            >
              View Available Policies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Read and parse the markdown file
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  // Extract metadata from content
  const metadata = extractMetadata(content);

  // Convert markdown to HTML
  const htmlContent = await marked(content);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <Link href="/docs/Policy" className="text-electric-blue hover:underline mb-4 inline-block">
            ← Back to Policy Hub
          </Link>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Policy Card */}
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12">
          {/* Metadata Bar */}
          {(metadata.version || metadata.owner || metadata.effectiveDate) && (
            <div className="grid md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
              {metadata.version && (
                <div>
                  <div className="text-xs text-mcp-gray uppercase tracking-wider mb-1">Version</div>
                  <div className="text-sm font-medium">{metadata.version}</div>
                </div>
              )}
              {metadata.effectiveDate && (
                <div>
                  <div className="text-xs text-mcp-gray uppercase tracking-wider mb-1">Effective Date</div>
                  <div className="text-sm font-medium">{metadata.effectiveDate}</div>
                </div>
              )}
              {metadata.reviewCycle && (
                <div>
                  <div className="text-xs text-mcp-gray uppercase tracking-wider mb-1">Review Cycle</div>
                  <div className="text-sm font-medium">{metadata.reviewCycle}</div>
                </div>
              )}
            </div>
          )}

          {/* Markdown Content */}
          <article
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:bg-gradient-to-r prose-h1:from-electric-blue prose-h1:via-mcp-purple prose-h1:to-mcp-teal prose-h1:bg-clip-text prose-h1:text-transparent
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-electric-blue
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-mcp-gray prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-mcp-gray prose-ul:my-4
              prose-ol:text-mcp-gray prose-ol:my-4
              prose-li:my-2
              prose-code:text-electric-blue prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
              prose-blockquote:border-l-4 prose-blockquote:border-electric-blue prose-blockquote:pl-4 prose-blockquote:italic
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-white/5 prose-th:border prose-th:border-white/10 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-2
              prose-hr:border-white/10 prose-hr:my-8"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/docs/Policy"
            className="inline-flex items-center gap-2 text-mcp-gray hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            View All Policies
          </Link>

          <a
            href="mailto:compliance@mcp4.ai"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue/10 to-mcp-purple/10 border border-white/10 rounded-lg hover:border-electric-blue/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Questions? Contact Compliance
          </a>
        </div>
      </div>
    </div>
  );
}
