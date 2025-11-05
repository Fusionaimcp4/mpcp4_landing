import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PolicyContent {
  title: string;
  category: string;
  type: string;
  effectiveDate: string;
  version: string;
  owner: string;
  reviewCycle: string;
  content: {
    purpose?: string;
    scope?: string;
    sections: Array<{
      title: string;
      content: string | string[];
    }>;
  };
}

const policies: Record<string, PolicyContent> = {
  'information-security': {
    title: 'Information Security Policy',
    category: 'ISO 27001',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '1.0',
    owner: 'Chief Information Security Officer',
    reviewCycle: 'Annual',
    content: {
      purpose: 'To establish a comprehensive framework for protecting MCP4\'s information assets, maintaining confidentiality, integrity, and availability of data across all systems and services.',
      scope: 'This policy applies to all MCP4 employees, contractors, partners, and third parties with access to MCP4 systems, data, or facilities.',
      sections: [
        {
          title: '1. Security Objectives',
          content: [
            'Protect customer and company data from unauthorized access, disclosure, modification, or destruction',
            'Ensure business continuity and minimize impact of security incidents',
            'Comply with applicable legal, regulatory, and contractual requirements',
            'Maintain trust and confidence of customers, partners, and stakeholders'
          ]
        },
        {
          title: '2. Information Security Governance',
          content: [
            '**Security Leadership**: The CISO is responsible for overall information security strategy',
            '**Security Committee**: Quarterly reviews of security posture and risk assessments',
            '**Roles & Responsibilities**: Clearly defined security responsibilities for all personnel',
            '**Compliance Monitoring**: Regular audits and assessments of security controls'
          ]
        },
        {
          title: '3. Risk Management',
          content: 'MCP4 conducts regular risk assessments to identify, analyze, and treat information security risks. Risk treatment options include acceptance, mitigation, transfer, or avoidance based on risk severity and business impact.'
        },
        {
          title: '4. Asset Management',
          content: [
            'Maintain inventory of all information assets (hardware, software, data)',
            'Classify assets based on sensitivity and business criticality',
            'Assign ownership and custodianship for each asset',
            'Implement appropriate controls based on asset classification'
          ]
        },
        {
          title: '5. Access Control',
          content: 'Access to MCP4 systems and data is granted based on business need and least privilege principles. All access must be approved, documented, and regularly reviewed. Multi-factor authentication (MFA) is required for all privileged accounts.'
        },
        {
          title: '6. Cryptography',
          content: [
            '**Data in Transit**: TLS 1.2 or higher for all data transmission',
            '**Data at Rest**: AES-256 encryption for sensitive data storage',
            '**Key Management**: Secure key generation, storage, rotation, and destruction',
            '**Hashing**: SHA-256 or stronger for password storage'
          ]
        },
        {
          title: '7. Physical Security',
          content: 'Physical access to facilities and equipment is controlled through badge systems, visitor logs, and security personnel. Data centers utilize multi-layer security including biometric access controls.'
        },
        {
          title: '8. Operations Security',
          content: [
            'Change management procedures for all system modifications',
            'Capacity monitoring and planning to ensure system availability',
            'Regular backups with tested restoration procedures',
            'Malware protection on all endpoints and servers',
            'Secure configuration baselines for all systems'
          ]
        },
        {
          title: '9. Communications Security',
          content: 'Network security controls include firewalls, intrusion detection/prevention systems, network segmentation, and secure wireless access. All remote access requires VPN with MFA.'
        },
        {
          title: '10. Incident Management',
          content: 'Security incidents are detected, reported, investigated, and resolved following documented incident response procedures. All incidents are logged, and significant incidents are reported to management and authorities as required.'
        },
        {
          title: '11. Business Continuity',
          content: 'MCP4 maintains business continuity and disaster recovery plans to ensure critical business functions can continue during disruptions. Plans are tested annually and updated as needed.'
        },
        {
          title: '12. Compliance',
          content: 'MCP4 complies with applicable laws, regulations, and contractual requirements including GDPR, CCPA, SOC 2, and industry-specific regulations. Compliance is monitored through regular audits and assessments.'
        },
        {
          title: '13. Policy Violations',
          content: 'Violations of this policy may result in disciplinary action up to and including termination of employment or contract. Criminal violations may be referred to law enforcement.'
        }
      ]
    }
  },

  'privacy-policy': {
    title: 'Privacy Policy',
    category: 'ISO 27701',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '2.0',
    owner: 'Data Protection Officer',
    reviewCycle: 'Annual',
    content: {
      purpose: 'To inform individuals about how MCP4 collects, uses, stores, and protects personal data, and to comply with applicable privacy laws including GDPR and CCPA.',
      scope: 'This policy applies to all personal data processed by MCP4 through our Fusion AI, Voxe, and NeuroSwitch services.',
      sections: [
        {
          title: '1. Data Controller Information',
          content: [
            '**Company**: MCP4 AI Technologies',
            '**Address**: 5900 Balcones Dr, Suite 100, Austin, TX 78731',
            '**Contact**: privacy@mcp4.ai',
            '**DPO**: contact@mcp4.ai'
          ]
        },
        {
          title: '2. Personal Data We Collect',
          content: [
            '**Account Data**: Name, email, company, password (hashed)',
            '**Usage Data**: API requests, timestamps, IP addresses, user agents',
            '**Payment Data**: Processed by Stripe (we do not store full card numbers)',
            '**Communication Data**: Support tickets, chat logs, email correspondence',
            '**Technical Data**: Cookies, device information, browser type'
          ]
        },
        {
          title: '3. Legal Basis for Processing',
          content: [
            '**Contract Performance**: Processing necessary to provide our services',
            '**Legitimate Interest**: Security, fraud prevention, service improvement',
            '**Consent**: Marketing communications, optional cookies',
            '**Legal Obligation**: Compliance with legal requirements'
          ]
        },
        {
          title: '4. How We Use Your Data',
          content: [
            'Provide and improve our AI services',
            'Process payments and maintain billing records',
            'Send service-related notifications',
            'Respond to support requests',
            'Detect and prevent fraud or abuse',
            'Comply with legal obligations',
            'Send marketing communications (with consent)'
          ]
        },
        {
          title: '5. Data Sharing and Disclosure',
          content: [
            '**Service Providers**: Cloud hosting (Vercel), payments (Stripe), email (SendGrid), analytics',
            '**AI Providers**: OpenAI, Anthropic, Google for model inference (with BYOAPI options)',
            '**Legal Requirements**: When required by law or to protect rights',
            '**Business Transfers**: In connection with merger, acquisition, or asset sale',
            'We never sell personal data to third parties'
          ]
        },
        {
          title: '6. Data Retention',
          content: [
            '**Account Data**: Retained while account is active + 90 days after deletion',
            '**API Logs**: 90 days for free tier, 1 year for paid plans',
            '**Billing Records**: 7 years for tax compliance',
            '**Support Data**: 3 years after ticket closure',
            '**Consent Logs**: Retained for proof of compliance'
          ]
        },
        {
          title: '7. Your Rights',
          content: [
            '**Access**: Request a copy of your personal data',
            '**Rectification**: Correct inaccurate data',
            '**Erasure**: Request deletion of your data',
            '**Portability**: Receive your data in machine-readable format',
            '**Restrict Processing**: Limit how we use your data',
            '**Object**: Object to processing based on legitimate interests',
            '**Withdraw Consent**: Opt-out of marketing at any time',
            'Contact privacy@mcp4.ai to exercise your rights'
          ]
        },
        {
          title: '8. International Transfers',
          content: 'Data may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards through Standard Contractual Clauses (SCCs) and adequacy decisions where applicable.'
        },
        {
          title: '9. Security',
          content: 'We implement industry-standard security measures including encryption (TLS 1.2+, AES-256), access controls, regular security audits, and incident response procedures to protect your data.'
        },
        {
          title: '10. Cookies and Tracking',
          content: 'We use essential cookies for functionality, analytics cookies (with consent) for service improvement, and marketing cookies (with consent). See our Cookie Policy for details. You can manage preferences via our cookie banner.'
        },
        {
          title: '11. Children\'s Privacy',
          content: 'Our services are not directed to individuals under 16. We do not knowingly collect personal data from children. If we learn we have collected such data, we will delete it promptly.'
        },
        {
          title: '12. Changes to This Policy',
          content: 'We may update this policy periodically. Material changes will be notified via email or service notification. Continued use after changes constitutes acceptance.'
        },
        {
          title: '13. Contact & Complaints',
          content: 'For privacy questions or complaints, contact privacy@mcp4.ai. EU residents may lodge complaints with their local supervisory authority.'
        }
      ]
    }
  },

  'ai-ethics': {
    title: 'AI Ethics & Transparency Policy',
    category: 'ISO 42001',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '1.0',
    owner: 'Chief AI Officer',
    reviewCycle: 'Semi-Annual',
    content: {
      purpose: 'To establish ethical principles and transparency requirements for the development, deployment, and operation of AI systems within MCP4\'s products.',
      scope: 'This policy applies to all AI models, algorithms, and systems deployed in Fusion, Voxe, and NeuroSwitch services.',
      sections: [
        {
          title: '1. Core Principles',
          content: [
            '**Transparency**: Clear disclosure about AI use and limitations',
            '**Fairness**: Prevention of bias and discrimination',
            '**Accountability**: Human oversight and responsibility',
            '**Privacy**: Protection of personal data in AI processing',
            '**Safety**: Risk mitigation and harm prevention',
            '**Reliability**: Consistent and accurate performance'
          ]
        },
        {
          title: '2. Transparency Requirements',
          content: [
            'Clearly identify when users are interacting with AI systems',
            'Disclose AI providers and models used in NeuroSwitch routing',
            'Provide model selection reasoning when requested',
            'Document known limitations and potential failure modes',
            'Maintain public transparency reports on AI performance'
          ]
        },
        {
          title: '3. Fairness and Bias Prevention',
          content: [
            'Regular audits for demographic bias in AI outputs',
            'Diverse training data and testing datasets',
            'Bias detection in model evaluation procedures',
            'Prompt engineering to prevent harmful stereotypes',
            'User feedback mechanisms to report biased outputs',
            'Continuous monitoring of model performance across user groups'
          ]
        },
        {
          title: '4. Human Oversight',
          content: 'All AI systems operate under human supervision. Critical decisions require human review. Users can always request human intervention. AI outputs are clearly labeled and include confidence scores where applicable.'
        },
        {
          title: '5. Data Privacy in AI',
          content: [
            'No training on customer data without explicit consent',
            'Anonymization of data used for model evaluation',
            'BYOAPI option allows direct provider communication',
            'Clear data retention policies for AI interactions',
            'Right to request AI processing history'
          ]
        },
        {
          title: '6. Safety and Risk Management',
          content: [
            'Pre-deployment risk assessments for new AI features',
            'Content filtering to prevent harmful outputs',
            'Rate limiting to prevent misuse',
            'Monitoring for adversarial attacks',
            'Emergency shutdown procedures for safety incidents',
            'Regular penetration testing of AI systems'
          ]
        },
        {
          title: '7. Model Evaluation',
          content: 'All AI models undergo evaluation for accuracy, fairness, robustness, and safety before deployment. Evaluation includes adversarial testing, bias assessment, and performance benchmarking. Results are documented and reviewed by AI governance committee.'
        },
        {
          title: '8. Explainability',
          content: [
            'Provide reasoning for NeuroSwitch routing decisions',
            'Document model capabilities and limitations',
            'Explain confidence scores and uncertainty',
            'Offer alternative models when requested',
            'Maintain audit trails of AI decisions'
          ]
        },
        {
          title: '9. Prohibited Uses',
          content: [
            'Surveillance or tracking without consent',
            'Discrimination or harm to protected groups',
            'Deception or manipulation',
            'Illegal activities or harmful content generation',
            'Unauthorized use of copyrighted or personal data',
            'Weapons development or military applications'
          ]
        },
        {
          title: '10. Incident Response',
          content: 'AI-related incidents (bias, harmful outputs, privacy breaches) are reported, investigated, and remediated through documented procedures. Significant incidents are disclosed to affected parties and regulators as required.'
        },
        {
          title: '11. Third-Party AI Providers',
          content: 'We vet all AI providers for ethical practices, security, and compliance. Provider agreements include requirements for fairness, transparency, and responsible AI use. We regularly review provider performance and policies.'
        },
        {
          title: '12. Continuous Improvement',
          content: 'We actively research AI safety, collect user feedback, participate in industry initiatives, and update our practices based on emerging best practices and regulations.'
        }
      ]
    }
  },

  'access-control': {
    title: 'Access Control Policy',
    category: 'ISO 27001',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '1.0',
    owner: 'Chief Information Security Officer',
    reviewCycle: 'Annual',
    content: {
      purpose: 'To ensure that access to MCP4 systems and data is properly controlled, authorized, and monitored to prevent unauthorized access and maintain system integrity.',
      scope: 'This policy applies to all users accessing MCP4 systems, including employees, contractors, partners, and customers.',
      sections: [
        {
          title: '1. Access Control Principles',
          content: [
            '**Least Privilege**: Users granted minimum access necessary for job function',
            '**Need-to-Know**: Access based on business requirement',
            '**Separation of Duties**: Critical functions require multiple approvals',
            '**Deny by Default**: Access explicitly granted, not assumed'
          ]
        },
        {
          title: '2. User Roles',
          content: [
            '**USER**: Standard customer account with API access',
            '**ADMIN**: Organization administrator with billing and team management',
            '**SUPER_ADMIN**: MCP4 staff with elevated privileges',
            '**SERVICE_ACCOUNT**: Automated system accounts for integrations'
          ]
        },
        {
          title: '3. Authentication Requirements',
          content: [
            '**Password Policy**: Minimum 12 characters, complexity requirements',
            '**MFA Required**: Mandatory for all privileged accounts (ADMIN, SUPER_ADMIN)',
            '**MFA Recommended**: Strongly encouraged for all user accounts',
            '**Session Management**: 30-day sessions with automatic timeout',
            '**Password Storage**: Bcrypt hashing with salt'
          ]
        },
        {
          title: '4. Authorization',
          content: 'Access permissions are role-based and regularly reviewed. All access requests require manager approval. Temporary elevated access is logged and time-limited. API keys are scoped to specific operations and rate-limited.'
        },
        {
          title: '5. Access Provisioning',
          content: [
            'New user access requested through formal process',
            'Approval required from manager and system owner',
            'Access granted within 24 hours of approval',
            'User acknowledgment of acceptable use policy',
            'Documented in access control log'
          ]
        },
        {
          title: '6. Access Reviews',
          content: 'Quarterly reviews of all user access. Inactive accounts disabled after 90 days. Annual recertification by managers. Immediate revocation upon termination or role change.'
        },
        {
          title: '7. Privileged Access Management',
          content: [
            'Separate privileged accounts (no shared credentials)',
            'Just-in-time access elevation for temporary needs',
            'All privileged actions logged and monitored',
            'Monthly audit of privileged account activity',
            'Break-glass procedures for emergency access'
          ]
        },
        {
          title: '8. Remote Access',
          content: 'Remote access to production systems requires VPN with MFA. All remote sessions encrypted and logged. Geographic restrictions may apply. Personal devices require MDM enrollment.'
        },
        {
          title: '9. API Access Control',
          content: [
            'API keys unique per user/organization',
            'Scoped permissions (read, write, admin)',
            'Rate limiting based on plan tier',
            'IP whitelisting option available',
            'Key rotation every 90 days recommended'
          ]
        },
        {
          title: '10. Monitoring and Logging',
          content: 'All authentication attempts logged. Failed login alerts after 5 attempts. Anomalous access patterns trigger security review. Logs retained for 90 days minimum.'
        }
      ]
    }
  },

  'data-protection': {
    title: 'Data Protection Policy',
    category: 'ISO 27701',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '1.0',
    owner: 'Data Protection Officer',
    reviewCycle: 'Annual',
    content: {
      purpose: 'To establish controls and procedures for protecting personal data throughout its lifecycle, ensuring compliance with GDPR, CCPA, and other privacy regulations.',
      scope: 'This policy applies to all personal data processed by MCP4, including customer data, employee data, and third-party data.',
      sections: [
        {
          title: '1. Data Protection Principles',
          content: [
            '**Lawfulness**: Process data only on valid legal basis',
            '**Purpose Limitation**: Collect for specified, explicit purposes only',
            '**Data Minimization**: Collect only necessary data',
            '**Accuracy**: Keep data accurate and up-to-date',
            '**Storage Limitation**: Retain only as long as necessary',
            '**Integrity & Confidentiality**: Secure against unauthorized access',
            '**Accountability**: Demonstrate compliance with principles'
          ]
        },
        {
          title: '2. Data Categories',
          content: [
            '**Public**: Non-sensitive, publicly available data',
            '**Internal**: Company-internal, non-personal data',
            '**Confidential**: Personal data, business secrets, financial info',
            '**Restricted**: Highly sensitive data requiring special protection'
          ]
        },
        {
          title: '3. Lawful Basis for Processing',
          content: 'Personal data processed based on: Contract (service provision), Legitimate Interest (security, analytics), Consent (marketing), or Legal Obligation (compliance). Basis documented for each processing activity.'
        },
        {
          title: '4. Data Subject Rights',
          content: [
            '**Right to Access**: Provide copy of personal data',
            '**Right to Rectification**: Correct inaccurate data',
            '**Right to Erasure**: Delete data when no longer needed',
            '**Right to Data Portability**: Provide data in machine-readable format',
            '**Right to Restrict Processing**: Limit how data is used',
            '**Right to Object**: Object to processing based on legitimate interest',
            'Response timeframe: 30 days maximum'
          ]
        },
        {
          title: '5. Data Protection by Design',
          content: 'Privacy considerations integrated into system design. Default settings maximize privacy. Regular privacy impact assessments. Data protection built into development lifecycle.'
        },
        {
          title: '6. Data Retention',
          content: [
            'Account data: Active period + 90 days',
            'API logs: 90 days (free), 1 year (paid)',
            'Billing records: 7 years (legal requirement)',
            'Support tickets: 3 years',
            'Marketing consent: Until withdrawn',
            'Automated deletion processes in place'
          ]
        },
        {
          title: '7. Data Security Measures',
          content: [
            'Encryption: TLS 1.2+ (transit), AES-256 (rest)',
            'Access controls: Role-based with MFA',
            'Network security: Firewalls, IDS/IPS, segmentation',
            'Monitoring: 24/7 security operations',
            'Incident response: <72 hour notification',
            'Regular security audits and penetration testing'
          ]
        },
        {
          title: '8. International Transfers',
          content: 'Data transferred outside origin country only with adequate safeguards: Standard Contractual Clauses, Adequacy Decisions, or explicit consent. Transfer impact assessments conducted.'
        },
        {
          title: '9. Third-Party Processors',
          content: 'All processors vetted for security and privacy compliance. Data Processing Agreements (DPAs) in place. Annual processor reviews. Sub-processor disclosure and approval process.'
        },
        {
          title: '10. Breach Notification',
          content: 'Data breaches assessed within 24 hours. Notification to supervisory authority within 72 hours if required. Affected individuals notified without undue delay. Incident documentation maintained.'
        },
        {
          title: '11. Employee Training',
          content: 'Mandatory privacy training for all employees upon hire and annually. Role-specific training for data handlers. Regular security awareness campaigns. Training records maintained.'
        },
        {
          title: '12. Accountability and Governance',
          content: 'Data Protection Officer appointed. Privacy governance committee meets quarterly. Regular audits of processing activities. Documentation of compliance measures maintained.'
        }
      ]
    }
  },

  'cloud-data-protection': {
    title: 'Cloud Data Protection Policy',
    category: 'ISO 27018',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '1.0',
    owner: 'Chief Information Security Officer',
    reviewCycle: 'Annual',
    content: {
      purpose: 'To establish controls specific to protecting customer data in cloud environments, ensuring transparency, security, and compliance with cloud privacy standards.',
      scope: 'This policy applies to all cloud services and infrastructure used by MCP4 to store, process, or transmit customer data.',
      sections: [
        {
          title: '1. Customer Data Ownership',
          content: 'Customers retain full ownership and control of their data. MCP4 acts as data processor, not owner. Customer instructions govern data processing. Data returned or deleted upon service termination.'
        },
        {
          title: '2. Transparency Commitments',
          content: [
            'Clear disclosure of data processing activities',
            'Sub-processor list publicly available',
            'Data location transparency',
            'Security incident notification',
            'Regular transparency reports published'
          ]
        },
        {
          title: '3. Multi-Tenant Isolation',
          content: 'Logical separation between customer environments. Database-level isolation using tenant IDs. Network segmentation per organization. No cross-tenant data access. Regular isolation testing.'
        },
        {
          title: '4. Cloud Infrastructure Security',
          content: [
            '**Hosting**: Vercel (US/EU regions)',
            '**Database**: Neon Postgres (encrypted)',
            '**Storage**: S3-compatible with encryption',
            '**CDN**: Cloudflare with DDoS protection',
            'All services ISO 27001 certified'
          ]
        },
        {
          title: '5. Data Location and Residency',
          content: [
            'Primary: US East (default)',
            'EU region available upon request',
            'Data residency configurable',
            'No unauthorized cross-border transfers',
            'Compliance with local data laws'
          ]
        },
        {
          title: '6. Sub-Processors',
          content: 'Current sub-processors: Vercel (hosting), Neon (database), Stripe (payments), SendGrid (email), OpenAI/Anthropic/Google (AI inference). All have DPAs in place. 30-day notice for changes.'
        },
        {
          title: '7. BYOAPI Privacy',
          content: 'Bring-Your-Own-API allows direct communication with AI providers. MCP4 does not store BYOAPI keys. Requests logged metadata only (no content). Customer maintains provider relationship and data control.'
        },
        {
          title: '8. Data Encryption',
          content: [
            'In-transit: TLS 1.3 for all connections',
            'At-rest: AES-256 for databases and storage',
            'Key management: AWS KMS / GCP Cloud KMS',
            'Encryption for backups and archives',
            'No customer data stored unencrypted'
          ]
        },
        {
          title: '9. Access Controls',
          content: 'MCP4 staff access to customer data only for support/troubleshooting with authorization. All access logged and audited. No access to customer API keys or model content. Regular access reviews.'
        },
        {
          title: '10. Audit and Compliance',
          content: 'SOC 2 Type II audited annually. ISO 27001/27701/27018 compliance. Regular penetration testing. Third-party security assessments. Audit reports available under NDA.'
        },
        {
          title: '11. Service Termination',
          content: 'Upon termination: Data export available (30 days), Data deletion after retention period, Deletion certificates provided, No data retention except legal requirements.'
        },
        {
          title: '12. Customer Responsibilities',
          content: 'Customers responsible for: Access management within their account, Appropriate use of services, Prompt reporting of security issues, Compliance with their legal obligations.'
        }
      ]
    }
  },

  'ai-risk-management': {
    title: 'AI Risk Management Policy',
    category: 'ISO 42001',
    type: 'Policy',
    effectiveDate: 'January 1, 2025',
    version: '1.0',
    owner: 'Chief AI Officer',
    reviewCycle: 'Semi-Annual',
    content: {
      purpose: 'To identify, assess, and mitigate risks associated with AI systems used in MCP4 products, ensuring safe and responsible AI deployment.',
      scope: 'This policy applies to all AI models and systems used in Fusion, Voxe, and NeuroSwitch services.',
      sections: [
        {
          title: '1. AI Risk Categories',
          content: [
            '**Safety Risks**: Harmful outputs, incorrect decisions, unintended consequences',
            '**Security Risks**: Adversarial attacks, model poisoning, data leakage',
            '**Privacy Risks**: Personal data exposure, re-identification, unauthorized profiling',
            '**Fairness Risks**: Bias, discrimination, inequitable outcomes',
            '**Reliability Risks**: Model failures, performance degradation, hallucinations',
            '**Transparency Risks**: Unexplainable decisions, hidden biases'
          ]
        },
        {
          title: '2. Risk Assessment Process',
          content: [
            'Pre-deployment risk assessment for new AI features',
            'Ongoing monitoring of deployed AI systems',
            'Quarterly risk register reviews',
            'Impact and likelihood scoring (1-5 scale)',
            'Risk treatment plans for medium/high risks',
            'Executive approval for high-risk deployments'
          ]
        },
        {
          title: '3. AI Safety Controls',
          content: [
            'Content filtering for harmful outputs',
            'Input validation and sanitization',
            'Output monitoring and anomaly detection',
            'Rate limiting and abuse prevention',
            'Human-in-the-loop for critical decisions',
            'Emergency shutdown capabilities'
          ]
        },
        {
          title: '4. Model Governance',
          content: 'All AI models evaluated before deployment. Performance benchmarking against baselines. Bias testing with diverse datasets. Documentation of model limitations. Version control and rollback procedures.'
        },
        {
          title: '5. Third-Party AI Risk Management',
          content: [
            'Vendor due diligence for AI providers',
            'Contractual requirements for responsible AI',
            'Regular review of provider practices',
            'Incident notification requirements',
            'Alternative provider contingency plans'
          ]
        },
        {
          title: '6. NeuroSwitch Routing Risks',
          content: [
            'Risk of inappropriate model selection',
            'Mitigation: Continuous routing algorithm validation',
            'Risk of provider outages affecting availability',
            'Mitigation: Multi-provider fallback system',
            'Risk of inconsistent outputs across models',
            'Mitigation: Output consistency monitoring'
          ]
        },
        {
          title: '7. Bias and Fairness Testing',
          content: 'Pre-deployment testing for demographic bias. Regular audits of model outputs. Diverse testing datasets. User feedback collection on bias. Bias incident response procedures. Continuous model improvement.'
        },
        {
          title: '8. AI Incident Management',
          content: [
            'AI incident classification and severity levels',
            'Reporting procedures for staff and users',
            'Investigation and root cause analysis',
            'Remediation and corrective actions',
            'Post-incident reviews and lessons learned',
            'Regulatory notification when required'
          ]
        },
        {
          title: '9. Adversarial Risk Mitigation',
          content: 'Input validation to detect adversarial prompts. Prompt injection attack prevention. Model robustness testing. Rate limiting and anomaly detection. Regular security assessments. Red team testing of AI systems.'
        },
        {
          title: '10. Privacy-Preserving AI',
          content: [
            'No training on customer data without consent',
            'Anonymization of evaluation datasets',
            'Differential privacy techniques where applicable',
            'Data minimization in AI processing',
            'Transparent data usage policies'
          ]
        },
        {
          title: '11. Continuous Monitoring',
          content: 'Real-time performance metrics. Drift detection and alerts. Quality assurance sampling. User satisfaction tracking. Incident and anomaly logging. Monthly risk dashboard reviews.'
        },
        {
          title: '12. Risk Communication',
          content: 'AI limitations disclosed to users. Known risks documented in transparency reports. Stakeholder briefings on high risks. Public disclosure of significant incidents. Regular updates to risk register.'
        }
      ]
    }
  },
};

export async function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({
    slug,
  }));
}

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policy = policies[params.slug];

  if (!policy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <Link href="/docs/policy" className="text-electric-blue hover:underline mb-4 inline-block">
            ← Back to Policy Hub
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full">
              {policy.type}
            </span>
            <span className="text-sm text-mcp-gray">{policy.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{policy.title}</span>
          </h1>

          {/* Metadata Grid */}
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-mcp-gray mb-1">Effective Date</div>
              <div className="font-semibold">{policy.effectiveDate}</div>
            </div>
            <div>
              <div className="text-mcp-gray mb-1">Version</div>
              <div className="font-semibold">{policy.version}</div>
            </div>
            <div>
              <div className="text-mcp-gray mb-1">Policy Owner</div>
              <div className="font-semibold">{policy.owner}</div>
            </div>
            <div>
              <div className="text-mcp-gray mb-1">Review Cycle</div>
              <div className="font-semibold">{policy.reviewCycle}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Purpose & Scope */}
          {policy.content.purpose && (
            <div className="mb-12 bg-gradient-to-br from-electric-blue/10 to-transparent border border-electric-blue/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-electric-blue">Purpose</h2>
              <p className="text-mcp-gray leading-relaxed">{policy.content.purpose}</p>
            </div>
          )}

          {policy.content.scope && (
            <div className="mb-12 bg-gradient-to-br from-mcp-purple/10 to-transparent border border-mcp-purple/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-mcp-purple">Scope</h2>
              <p className="text-mcp-gray leading-relaxed">{policy.content.scope}</p>
            </div>
          )}

          {/* Policy Sections */}
          <div className="space-y-12">
            {policy.content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-white/10 pl-6">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {typeof section.content === 'string' ? (
                  <p className="text-mcp-gray leading-relaxed whitespace-pre-line">{section.content}</p>
                ) : (
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-mcp-gray leading-relaxed">
                        <span className="text-electric-blue mt-1.5">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-mcp-gray">
              <div>
                Last Updated: {policy.effectiveDate} | Version {policy.version}
              </div>
              <div className="flex gap-4">
                <a href="/docs/policy" className="text-electric-blue hover:underline">
                  All Policies
                </a>
                <a href="mailto:compliance@mcp4.ai" className="text-electric-blue hover:underline">
                  Contact Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

