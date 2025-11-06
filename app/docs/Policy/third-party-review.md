# Third-Party and Sub-Processor Review Policy  
**Version:** 1.0  
**Owner:** Data Protection Officer (DPO) / CISO  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon onboarding a new vendor  

---

## 1. Purpose
This policy establishes MCP4.ai’s framework for assessing, approving, and monitoring all external service providers and sub-processors that handle company or customer data.  
It ensures compliance with **ISO 27701**, **ISO 27001 A.15**, and global data-protection regulations by verifying that all vendors maintain equivalent security and privacy safeguards.

---

## 2. Scope
Applies to:  
- All external suppliers, partners, and contractors with logical or physical access to MCP4.ai systems or data.  
- All sub-processors used by MCP4.ai for **Fusion**, **Voxe**, and **NeuroSwitch** operations (e.g., hosting, payments, analytics, consent management).  
- Internal teams responsible for procurement, compliance, and engineering integration.  

---

## 3. Objectives
1. Identify and document all vendors and sub-processors.  
2. Assess each third party’s security, privacy, and compliance posture before engagement.  
3. Maintain Data Processing Agreements (DPAs) with contractual safeguards.  
4. Continuously monitor performance, incidents, and certifications.  
5. Ensure timely off-boarding and data deletion when contracts end.

---

## 4. Vendor Classification
Vendors are classified by risk level based on the **type of data processed** and **service criticality**:

| Risk Level | Description | Examples |
|-------------|--------------|-----------|
| **Low** | No access to personal or confidential data. | Design tool vendors, marketing assets |
| **Medium** | Limited access to pseudonymized or operational data. | Analytics, consent-management, CRM |
| **High** | Direct access to personal or financial data, or critical infrastructure. | Stripe, Vercel, DigitalOcean, Chatwoot |

All **High-risk vendors** must undergo a full due-diligence review before onboarding.

---

## 5. Due Diligence & Onboarding Process
### 5.1 Pre-Assessment
- Business owner identifies the need for a third-party service.  
- DPO reviews purpose and data categories involved.  
- Vendor submits evidence of controls (questionnaire or SOC2/ISO certification).  

### 5.2 Evaluation Checklist
Each vendor evaluated on:
- ISO 27001 / 27701 or equivalent certification  
- GDPR / CCPA / LGPD compliance statements  
- Encryption and access-control practices  
- Data-location and cross-border transfer safeguards  
- Incident-response and breach-notification processes  
- Sub-processor list and DPA availability  
- Termination and deletion clauses  

### 5.3 Approval
- **Low-risk:** Business owner approval.  
- **Medium-risk:** Compliance Officer review.  
- **High-risk:** DPO + CISO joint approval.  

A signed **Vendor Risk Assessment (VRA)** and **DPA** are required before processing begins.

---

## 6. Contractual Requirements
All vendor and sub-processor contracts must include:
1. **Confidentiality and Non-Disclosure Clauses**  
2. **Data Processing Agreement (DPA)** defining roles (controller vs. processor)  
3. **Security Obligations** (encryption, access control, incident response)  
4. **Audit Rights** for MCP4.ai or independent auditors  
5. **Sub-Processor Approval Clause** – vendor must obtain written consent before adding new sub-processors  
6. **Data Return / Deletion Clauses** upon contract termination  
7. **Breach Notification Window** – within 48–72 hours  

Contracts stored securely in the **Vendor Management Repository**.

---

## 7. Ongoing Monitoring
- **Quarterly Reviews:** Verify uptime, incident reports, and SLA compliance.  
- **Annual Re-Assessment:** Re-validate certifications, DPAs, and sub-processor lists.  
- **Automated Alerts:** Track policy or privacy-notice updates from key vendors.  
- **Incident Response Integration:** Vendors must notify MCP4.ai of any breach affecting shared data within 24 hours.  

Findings documented in the **Vendor Audit Log** and reported to the DPO.

---

## 8. Sub-Processor Registry
MCP4.ai maintains a public list of all sub-processors at  
**https://mcp4.ai/legal/subprocessors**  

Each entry includes:
- Company name  
- Purpose of processing  
- Data categories handled  
- Geographic region  
- Certification status  
- Contact / DPA link  

Updates trigger customer notification at least **30 days in advance**.

---

## 9. Termination & Off-Boarding
Upon contract end or vendor replacement:
1. Confirm all customer data deleted or returned within 30 days.  
2. Obtain written confirmation or deletion certificate.  
3. Disable all credentials, API tokens, and VPN access.  
4. Update the **Vendor and Sub-Processor Register**.  

---

## 10. Documentation & Records
MCP4.ai maintains the following artifacts for audit purposes:
- Vendor and Sub-Processor Register  
- Vendor Risk Assessments (VRAs)  
- Signed DPAs and contracts  
- Annual review logs and certifications  
- Audit findings and remediation reports  

Records retained for **minimum 3 years**.

---

## 11. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **DPO / CISO** | Approves vendors, maintains sub-processor registry, conducts audits. |
| **Compliance Officer** | Performs due diligence, tracks certifications, monitors contract renewals. |
| **Procurement / Finance** | Ensures only approved vendors receive payments. |
| **Engineering Leads** | Integrate vendors securely and apply least-privilege access. |
| **All Employees** | Report vendor issues or breaches immediately. |

---

## 12. Policy Enforcement
Non-compliance — such as using unapproved vendors or failing to execute a DPA — constitutes a **security incident** under the **Incident Response Procedure** and may result in disciplinary action or contract suspension.

---

## 13. Review and Continuous Improvement
- This policy reviewed annually or after onboarding new critical vendors.  
- Lessons from vendor incidents feed into risk and compliance reviews.  
- Improvements tracked in the **Third-Party Risk Register**.

---

## 14. References
- ISO 27701: 2019 – Privacy Information Management  
- ISO 27001 A.15 – Supplier Relationships  
- GDPR Articles 28–30 – Processor Obligations  
- CCPA / CPRA (California)  
- LGPD (Brazil)  
- POPIA (South Africa)  
- MCP4 Data Protection Policy  
- MCP4 Incident Response Procedure  
- MCP4 Risk Management Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
