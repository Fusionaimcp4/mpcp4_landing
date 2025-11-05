import Link from 'next/link';

export default function PolicyHub() {
  const policyCategories = [
    {
      title: 'ISO 27001 - Information Security',
      description: 'Information Security Management System (ISMS) policies and procedures',
      color: 'electric-blue',
      policies: [
        { name: 'Information Security Policy', slug: 'information-security', type: 'Policy' },
        { name: 'Access Control Policy', slug: 'access-control', type: 'Policy' },
        { name: 'Data Classification & Handling', slug: 'data-classification', type: 'Policy' },
        { name: 'Encryption Policy', slug: 'encryption', type: 'Policy' },
        { name: 'Backup & Recovery Policy', slug: 'backup-recovery', type: 'Policy' },
        { name: 'Acceptable Use Policy', slug: 'acceptable-use', type: 'Policy' },
        { name: 'Incident Response Procedure', slug: 'incident-response', type: 'Procedure' },
        { name: 'Change Management Procedure', slug: 'change-management', type: 'Procedure' },
      ],
    },
    {
      title: 'ISO 27701 - Privacy Management',
      description: 'Privacy Information Management System (PIMS) policies',
      color: 'mcp-purple',
      policies: [
        { name: 'Privacy Policy', slug: 'privacy-policy', type: 'Policy' },
        { name: 'Data Protection Policy', slug: 'data-protection', type: 'Policy' },
        { name: 'Cookie & Tracking Policy', slug: 'cookie-tracking', type: 'Policy' },
        { name: 'Data Subject Rights Procedure', slug: 'data-subject-rights', type: 'Procedure' },
        { name: 'Data Retention & Deletion', slug: 'data-retention', type: 'Procedure' },
        { name: 'Third-Party Processor Review', slug: 'third-party-review', type: 'Procedure' },
      ],
    },
    {
      title: 'ISO 27018 - Cloud Privacy',
      description: 'Cloud data protection for SaaS providers',
      color: 'mcp-teal',
      policies: [
        { name: 'Cloud Data Protection Policy', slug: 'cloud-data-protection', type: 'Policy' },
        { name: 'Customer Data Ownership', slug: 'data-ownership', type: 'Policy' },
        { name: 'Data Deletion Verification', slug: 'data-deletion-verification', type: 'Procedure' },
        { name: 'Sub-Processor List', slug: 'sub-processors', type: 'Record' },
      ],
    },
    {
      title: 'ISO 42001 - AI Management',
      description: 'AI Management System (AIMS) policies and ethics',
      color: 'electric-blue',
      policies: [
        { name: 'AI Ethics & Transparency Policy', slug: 'ai-ethics', type: 'Policy' },
        { name: 'AI Risk Management Policy', slug: 'ai-risk-management', type: 'Policy' },
        { name: 'Model Evaluation Procedure', slug: 'model-evaluation', type: 'Procedure' },
        { name: 'AI Incident Response', slug: 'ai-incident-response', type: 'Procedure' },
      ],
    },
    {
      title: 'General Compliance',
      description: 'Cross-standard company-wide policies',
      color: 'mcp-gray',
      policies: [
        { name: 'Code of Conduct', slug: 'code-of-conduct', type: 'Policy' },
        { name: 'Vendor Management Policy', slug: 'vendor-management', type: 'Policy' },
        { name: 'Business Continuity & Disaster Recovery', slug: 'business-continuity', type: 'Plan' },
        { name: 'Onboarding/Offboarding Procedure', slug: 'onboarding-offboarding', type: 'Procedure' },
        { name: 'Remote Work Security', slug: 'remote-work-security', type: 'Procedure' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-20">
          <Link href="/" className="text-electric-blue hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Compliance & Policy Hub</span>
          </h1>
          <p className="text-xl text-mcp-gray max-w-3xl">
            ISO-compliant policies, procedures, and documentation for information security, 
            privacy, cloud services, and AI management
          </p>
        </div>
      </div>

      {/* Policy Categories */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {policyCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category Header */}
              <div className="border-l-4 border-electric-blue pl-6">
                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                <p className="text-mcp-gray">{category.description}</p>
              </div>

              {/* Policy Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.policies.map((policy) => (
                  <Link
                    key={policy.slug}
                    href={`/docs/Policy/${policy.slug}`}
                    className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs px-2 py-1 bg-${category.color}/10 text-${category.color} rounded-full`}>
                        {policy.type}
                      </span>
                      <svg className="w-5 h-5 text-mcp-gray group-hover:text-electric-blue group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-electric-blue transition-colors">
                      {policy.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-electric-blue/10 via-mcp-purple/10 to-mcp-teal/10 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">About Our Compliance Program</h3>
            <p className="text-mcp-gray mb-6 leading-relaxed">
              MCP4 is committed to maintaining the highest standards of data security, privacy, and AI ethics. 
              Our compliance framework is built on internationally recognized standards including ISO 27001, 27701, 
              27018, and 42001.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-electric-blue mb-2">ISO 27001</div>
                <div className="text-sm text-mcp-gray">Information Security</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mcp-purple mb-2">ISO 27701</div>
                <div className="text-sm text-mcp-gray">Privacy Management</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mcp-teal mb-2">ISO 27018</div>
                <div className="text-sm text-mcp-gray">Cloud Privacy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric-blue mb-2">ISO 42001</div>
                <div className="text-sm text-mcp-gray">AI Management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-mcp-gray mb-4">
            Questions about our policies or compliance program?
          </p>
          <a
            href="mailto:compliance@mcp4.ai"
            className="inline-flex items-center gap-2 text-electric-blue hover:underline font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            compliance@mcp4.ai
          </a>
        </div>
      </div>
    </div>
  );
}

