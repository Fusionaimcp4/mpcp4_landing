# Information Security Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / Founder  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon major infrastructure change  

---

## 1. Purpose
The purpose of this Information Security Policy is to establish MCP4.ai’s commitment to protecting the confidentiality, integrity, and availability of information assets across all company systems, including Fusion, Voxe, and NeuroSwitch.  
This policy defines the framework for our Information Security Management System (ISMS) in accordance with **ISO 27001** and related standards.

---

## 2. Scope
This policy applies to:  
- All MCP4 employees, contractors, and partners.  
- All systems, applications, servers, databases, APIs, and networks owned or managed by MCP4.  
- All personal and business data processed within our infrastructure (production, staging, and development).  

---

## 3. Information Security Objectives
1. **Protect Confidentiality** – Prevent unauthorized disclosure of customer, employee, and company data.  
2. **Maintain Integrity** – Safeguard systems and information from unauthorized modification or corruption.  
3. **Ensure Availability** – Guarantee information and services remain accessible to authorized users when required.  
4. **Comply with Legal and Contractual Requirements** – Adhere to ISO 27001, GDPR, CCPA, LGPD, and other relevant frameworks.  
5. **Promote Security Awareness** – Train personnel on secure handling of data, systems, and AI models.  

---

## 4. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **CISO / Founder** | Establish and maintain the ISMS; approve security policies; oversee risk management. |
| **System Administrators** | Implement access controls, backups, encryption, and monitoring. |
| **Developers** | Follow secure coding practices and report vulnerabilities. |
| **All Employees / Contractors** | Protect credentials, report incidents, and comply with policies. |
| **Compliance Officer / DPO** | Oversee data-protection obligations and audits. |

---

## 5. Core Security Principles
- **Least Privilege:** Access is granted only as necessary for job duties.  
- **Defense in Depth:** Layered technical and procedural controls protect systems.  
- **Segregation of Duties:** No individual has end-to-end control over critical assets.  
- **Security by Design:** Security is integrated throughout system development.  
- **Continuous Improvement:** Regular audits, reviews, and corrective actions.

---

## 6. Risk Management
- Risks are identified, analyzed, and documented in the **Risk Register**.  
- Each risk has an assigned owner, mitigation plan, and review date.  
- The register is reviewed quarterly and during major architectural changes.

---

## 7. Access Control
- Unique user accounts with strong authentication (password + 2FA).  
- Immediate revocation upon role change or termination.  
- Privileged access restricted to approved administrators.  
- Logs retained for access and activity monitoring (minimum 90 days).

---

## 8. Encryption & Data Protection
- **In Transit:** All communications use HTTPS / TLS 1.2+ with HSTS.  
- **At Rest:** Sensitive data and credentials encrypted using AES-256.  
- **Key Management:** Keys rotated annually and stored securely.  
- **Data Minimization:** Only essential data is collected and retained per the Data Protection Policy.

---

## 9. Backup & Recovery
- Daily encrypted database backups stored in separate regions.  
- Quarterly restore tests ensure data integrity.  
- Disaster Recovery Plan maintained in `/docs/policy/governance/business-continuity-policy.md`.

---

## 10. Incident Management
- All employees must report security incidents immediately to security@mcp4.ai.  
- Incidents logged in the **Security Incident Log** and investigated within 24 hours.  
- Notification to regulators/customers within 72 hours where legally required.  
- Post-incident reviews identify root causes and corrective measures.

---

## 11. Physical & Environmental Security
- Servers hosted in ISO 27001-certified data centers (DigitalOcean / Vercel).  
- Access restricted by authentication, logging, and surveillance.  
- Backups and keys stored in secure, access-controlled environments.

---

## 12. Compliance and Audit
- Internal ISMS audit conducted annually.  
- External audits or certifications performed as necessary.  
- Non-conformities tracked and remediated via Corrective Action Plans.

---

## 13. Awareness and Training
- Annual mandatory security and privacy training for all personnel.  
- New hires receive onboarding covering data handling, phishing prevention, and secure development.

---

## 14. Policy Review and Maintenance
This policy is reviewed annually by the CISO / Founder or when significant changes occur in technology, legal, or organizational structure.

---

## 15. References
- ISO 27001 : 2022 Information Security Management Systems  
- ISO 27701 : 2019 Privacy Information Management  
- NIST SP 800-53 Rev 5 Security Controls  
- MCP4 **Data Protection Policy**, **Access Control Policy**, **Incident Response Policy**

---

**Approved by:** ______________________  
**Date:** ______________________  
**Next Review:** 2026-11-05
