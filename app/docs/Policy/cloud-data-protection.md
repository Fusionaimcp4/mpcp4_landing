# Cloud Data Protection Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / Data Protection Officer (DPO)  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or after major infrastructure or vendor change  

---

## 1. Purpose
The purpose of this policy is to establish MCP4.ai’s framework for protecting personal, confidential, and operational data processed or stored in public and hybrid cloud environments.  
It ensures compliance with **ISO 27018**, **ISO 27001**, and global privacy laws such as **GDPR**, **CCPA**, **LGPD**, and **POPIA**, while maintaining trust, security, and transparency across **Fusion**, **Voxe**, and **NeuroSwitch** platforms.

---

## 2. Scope
Applies to:
- All cloud-based environments operated by MCP4.ai, including:  
  - **Vercel**, **DigitalOcean**, and **AWS** (hosting)  
  - **Stripe** (billing)  
  - **Chatwoot** (support)  
  - **CookieYes** (consent)  
  - **BTCPayServer / LNbits** (Bitcoin payments)  
- All employees, contractors, and partners managing or accessing data within these services.  
- All categories of information: user, customer, system, AI interaction, and analytics data.  

---

## 3. Objectives
1. Protect cloud-stored and cloud-processed data from unauthorized access, loss, or disclosure.  
2. Ensure encryption, segregation, and access control across multi-tenant environments.  
3. Provide transparency to users about where and how their data is processed.  
4. Maintain contractual and technical safeguards with all cloud providers.  
5. Support auditability and accountability for all data-handling operations.  

---

## 4. Governance and Accountability
- The **CISO** is responsible for implementing technical and security controls.  
- The **DPO** oversees privacy compliance and maintains cloud data registers.  
- Cloud providers are engaged under **Data Processing Agreements (DPAs)** defining data-handling obligations, breach notifications, and deletion timelines.  
- MCP4.ai ensures each provider aligns with **ISO 27001**, **ISO 27018**, or equivalent certifications.

---

## 5. Data Classification and Ownership
All data stored or processed in the cloud is classified per the **Data Classification Policy**:  
| Classification | Description | Access Level |
|----------------|-------------|---------------|
| **Public** | Non-sensitive, freely shareable (e.g., public docs, marketing). | Open |
| **Internal** | Operational data for internal use. | Restricted to staff |
| **Confidential** | User and business data requiring protection. | Authorized roles only |
| **Restricted** | PII, payment, or cryptographic data. | Strictly controlled (MFA + encryption) |

Each dataset has a **Data Owner** responsible for ensuring correct classification and protection.

---

## 6. Cloud Security Controls
To meet ISO 27018 and 27001 A.12/A.13 controls, MCP4.ai enforces the following:

### 6.1 Encryption
- **At Rest:** AES-256 encryption for all stored data.  
- **In Transit:** TLS 1.2+ enforced for all endpoints.  
- **Key Management:** Encryption keys stored separately in secure vaults (KMS or encrypted .env).  
- **Database Encryption:** PostgreSQL TDE and volume-level encryption enabled.

### 6.2 Access Control
- Role-Based Access Control (RBAC) with least-privilege principle.  
- Multi-Factor Authentication (MFA) required for admin and production accounts.  
- Segregated roles for development, staging, and production.  
- Immediate revocation of access upon employee offboarding.

### 6.3 Network and Infrastructure Security
- Firewalls and VPC segregation between front-end, back-end, and database layers.  
- SSH and API access restricted to authorized IPs.  
- Continuous vulnerability scanning and patching of Docker images.  
- Automated monitoring for anomalies and intrusion attempts.

### 6.4 Logging and Monitoring
- Centralized logging for all containers and services (via Elastic or Loki stack).  
- Log retention: 90 days.  
- Alerts configured for failed logins, privilege escalations, and data access anomalies.  
- Logs anonymized to remove personal identifiers before analysis.

---

## 7. Data Segregation and Multi-Tenancy
- Each tenant’s data logically isolated in the database via unique tenant IDs.  
- No shared schema for sensitive data across customers.  
- API-level access controls prevent data cross-contamination.  
- Cross-tenant data aggregation occurs only on anonymized or aggregated datasets.  

---

## 8. Backup, Retention, and Recovery
- Daily encrypted backups stored in separate regions.  
- Backup retention period: **30 days** (rolling).  
- Periodic restore tests conducted quarterly per the **Backup & Recovery Policy**.  
- Backup access restricted to CISO and designated DevOps personnel.

---

## 9. Privacy and Regulatory Compliance
- All cloud providers must comply with GDPR-equivalent privacy frameworks.  
- **Data Processing Agreements (DPAs)** executed with each provider.  
- Cloud vendors must notify MCP4.ai of any data breach within **72 hours**.  
- Cross-border transfers rely on **Standard Contractual Clauses (SCCs)** or **adequacy decisions**.  
- Data-subject requests handled per **Data Subject Rights Policy**.  

---

## 10. Data Minimization and Retention
- Only necessary data collected and processed.  
- Data retention periods defined in the **Data Retention Policy**.  
- Expired data automatically purged or anonymized via scheduled tasks.  
- No indefinite storage of PII, even in backups.  

---

## 11. Incident Management
- Cloud-related incidents follow the **Incident Response Procedure**.  
- Incidents logged in the **Cloud Incident Register** including timestamps, impact level, and corrective action.  
- Post-incident analysis required within 5 business days.  

---

## 12. Vendor Management
- All cloud vendors undergo privacy and security assessments per the **Third-Party and Sub-Processor Review Policy**.  
- Annual review of vendor certifications (ISO 27001, SOC 2, etc.).  
- Sub-processor list publicly available at:  
  **https://mcp4.ai/legal/subprocessors**

---

## 13. Data Deletion and Exit Strategy
- Upon contract termination or project closure:  
  1. Cloud provider deletes customer data within 30 days (certified destruction).  
  2. Confirmation of deletion stored in the **Data Disposal Log**.  
  3. Encryption keys associated with deleted datasets are destroyed.  
- Data migrated securely if transferred to a new provider.

---

## 14. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **CISO** | Implements and audits cloud security measures. |
| **DPO** | Ensures compliance with ISO 27018 and privacy regulations. |
| **DevOps** | Manages infrastructure, encryption, and access controls. |
| **Compliance Officer** | Monitors vendor compliance and DPA renewals. |
| **Developers** | Build privacy-by-design features for cloud applications. |

---

## 15. Documentation and Records
MCP4.ai maintains:
- Cloud Data Inventory  
- Data Flow Maps  
- Encryption Key Logs  
- Backup and Recovery Logs  
- Cloud Incident Register  
- Vendor Risk Assessments  

All records retained for **minimum 3 years** and available for ISO audits.

---

## 16. Review and Continuous Improvement
- Policy reviewed annually or after any new cloud integration or breach.  
- Lessons from incidents feed into design, code, and vendor updates.  
- Continuous improvement tracked via the **Information Security Improvement Log**.

---

## 17. References
- ISO 27018:2019 – Cloud Privacy Controls  
- ISO 27001:2022 – A.12 & A.18 Operational Security  
- ISO 27701:2019 – Privacy Information Management  
- GDPR (EU 2016/679)  
- CCPA / CPRA (California)  
- LGPD (Brazil)  
- POPIA (South Africa)  
- MCP4 Information Security Policy  
- MCP4 Backup & Recovery Policy  
- MCP4 Third-Party & Sub-Processor Review Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
