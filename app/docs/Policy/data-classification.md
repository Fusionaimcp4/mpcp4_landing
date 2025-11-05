# Data Classification and Handling Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / Founder  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon changes to data processing scope  

---

## 1. Purpose
The purpose of this policy is to ensure that all information handled by MCP4.ai is properly classified and protected in accordance with its sensitivity, business value, and regulatory requirements.  
This policy establishes consistent rules for labeling, handling, storing, transmitting, and disposing of data across **Fusion**, **Voxe**, and **NeuroSwitch** systems.

---

## 2. Scope
Applies to all:
- MCP4 employees, contractors, and partners.  
- Information assets in physical or electronic form.  
- Systems and databases used to store, process, or transmit company or customer data.  
- Third-party integrations (e.g., Chatwoot, Stripe, Vercel, DigitalOcean).

---

## 3. Classification Levels
| Level | Description | Examples | Typical Handling Requirements |
|-------|--------------|-----------|-------------------------------|
| **Public** | Information intended for public disclosure. No risk if shared broadly. | Marketing materials, published blog posts, open-source code, press releases. | May be freely shared; ensure content accuracy before release. |
| **Internal** | Non-public business data that would cause limited harm if disclosed. | Internal documentation, process manuals, non-sensitive emails, meeting notes. | Accessible to MCP4 staff; store in company-approved repositories; do not share externally. |
| **Confidential** | Sensitive operational or client data that could cause harm if disclosed. | Customer support transcripts, API usage logs, internal credentials, unreleased features. | Encryption in transit and at rest; restricted to authorized roles; sharing requires approval. |
| **Restricted** | Highly sensitive or legally regulated data whose loss or exposure would cause severe impact. | Personal data (GDPR/CCPA), financial records, authentication secrets, encryption keys, production databases. | Strong encryption (AES-256), MFA, minimal access, strict audit logging, DLP controls, secure deletion after retention. |

---

## 4. Data Labeling and Ownership
- Each data asset must have a designated **owner** responsible for its classification and protection.  
- Classification labels must be documented in the **Data Processing Register**.  
- Automated tagging should be used where possible (e.g., S3 bucket tags, database field encryption flags).

---

## 5. Data Handling Requirements
### 5.1 Storage
- Store all Confidential and Restricted data only in approved, encrypted databases or cloud storage with access logging enabled.  
- Public and Internal data may be stored in standard company repositories.

### 5.2 Transmission
- All data (except Public) must use **TLS 1.2+** for network transmission.  
- Sensitive attachments shared externally must be encrypted or shared via secure portals.

### 5.3 Processing
- Access granted on a least-privilege basis.  
- Ensure processing complies with lawful bases under GDPR/CCPA/LGPD.  
- Do not move data between jurisdictions without verifying compliance with transfer rules.

### 5.4 Backup and Retention
- Follow retention schedules in the **Data Retention Policy**.  
- Backups must maintain the same classification and encryption level as the source.

### 5.5 Disposal
- Secure deletion tools (e.g., `shred`, `srm`, or provider-level secure wipe) used for electronic data.  
- Physical media destroyed by shredding or certified destruction vendor.

---

## 6. Access and Sharing Controls
- Confidential and Restricted data require explicit approval for sharing outside MCP4.  
- All shared data must be governed by NDAs or data-processing agreements.  
- Internal sharing performed through company-managed tools (GitHub Enterprise, internal Slack, encrypted email).  
- Periodic access reviews confirm compliance.

---

## 7. Monitoring and Auditing
- Logs of access to Confidential and Restricted data retained for at least 90 days.  
- Quarterly review of data classification accuracy by Compliance Officer.  
- Findings documented in the **Information Asset Register** and remediated promptly.

---

## 8. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **CISO / Founder** | Oversees policy enforcement and approves classifications. |
| **Data Owners** | Assign and review classifications for their assets. |
| **Developers & Engineers** | Apply classification labels in code, configs, and infrastructure. |
| **All Personnel** | Handle data in line with its classification and report any violations. |

---

## 9. Policy Enforcement
Non-compliance may result in disciplinary action and revocation of access rights. Repeated or severe violations will trigger investigation under the **Incident Response Policy**.

---

## 10. Review and Updates
This policy is reviewed annually or whenever new data types, systems, or regulations emerge that affect classification requirements.

---

## 11. References
- ISO 27001 A.8: Asset Management  
- ISO 27018 §10: Protection of PII in Cloud Services  
- MCP4 Information Security Policy  
- MCP4 Data Protection Policy  
- MCP4 Data Retention Policy  

---

**Approved by:** ______________________  
**Date:** ______________________  
**Next Review:** 2026-11-05
