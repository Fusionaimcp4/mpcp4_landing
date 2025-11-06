# Sub-Processor Management Policy  
**Version:** 1.0  
**Owner:** Data Protection Officer (DPO) / Chief Information Security Officer (CISO)  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon addition of any new sub-processor  

---

## 1. Purpose
This policy defines MCP4.ai’s procedures for selecting, approving, managing, and auditing all **sub-processors**—third-party vendors that process customer or company data on MCP4.ai’s behalf.  
It ensures that every sub-processor implements privacy and security controls equivalent to MCP4.ai’s obligations under **ISO 27701**, **ISO 27018**, and applicable data-protection laws.

---

## 2. Scope
Applies to all sub-processors engaged for:
- Hosting and infrastructure (e.g., Vercel, DigitalOcean, AWS)  
- Payment and billing (Stripe)  
- Customer communication (Chatwoot, SendGrid)  
- Consent management (CookieYes)  
- Analytics and monitoring (Plausible, Umami)  
- Backup and storage providers  
- Any entity with logical or physical access to customer or system data  

---

## 3. Objectives
1. Maintain a complete, publicly available registry of sub-processors.  
2. Ensure all sub-processors sign legally binding Data Processing Agreements (DPAs).  
3. Validate each vendor’s security certifications and privacy compliance.  
4. Provide transparent notifications to customers before onboarding new sub-processors.  
5. Monitor sub-processor performance and incident response capabilities continuously.  

---

## 4. Definitions
| Term | Definition |
|------|-------------|
| **Sub-Processor** | A third party contracted by MCP4.ai to process personal data for service delivery. |
| **Controller** | MCP4.ai’s customers who determine the purpose and means of processing. |
| **Processor** | MCP4.ai, when processing data on behalf of controllers. |
| **DPA** | Data Processing Agreement specifying obligations for privacy and security compliance. |

---

## 5. Sub-Processor Approval Process
1. **Identification:** Business owner submits a Sub-Processor Request Form to DPO.  
2. **Risk Assessment:** DPO and CISO evaluate data categories handled, regions of processing, and certifications.  
3. **Due Diligence:** Collect and review vendor’s ISO 27001/27701 or SOC 2 Type II report, privacy policy, and DPA.  
4. **Approval:** CISO and Legal sign off before any data transfer occurs.  
5. **Registry Update:** Add approved vendor to the Sub-Processor Register and publish on https://mcp4.ai/legal/subprocessors.  

---

## 6. Contractual Requirements
All sub-processors must agree to a DPA including:
- Confidentiality and non-disclosure obligations  
- Use of data only for contracted purposes  
- Encryption at rest and in transit  
- Breach notification within 72 hours of discovery  
- Right of audit by MCP4.ai or independent auditors  
- Data return or deletion within 30 days of contract termination  
- Prior approval for any further sub-processing  

---

## 7. Registry and Notification
MCP4.ai maintains a **Sub-Processor Registry** with:
- Vendor name and legal entity  
- Purpose of processing  
- Data types and categories  
- Processing region and storage location  
- Certification status (ISO 27001, SOC 2, etc.)  
- Date of onboarding and last review  

### Customer Notification
- Customers are notified **at least 30 days** before adding or replacing a sub-processor.  
- Objections handled per MCP4.ai’s contractual dispute resolution clauses.  

---

## 8. Ongoing Monitoring and Audit
- Annual re-assessment of each sub-processor’s controls and certifications.  
- Quarterly security review for critical or high-risk vendors.  
- Monitoring of public breach disclosures and compliance status.  
- Sub-processor performance and incident history documented in the Vendor Audit Log.  

---

## 9. Incident Response and Breach Handling
If a sub-processor experiences a data breach:
1. Immediate notification to MCP4.ai within 72 hours.  
2. Cooperation in investigation and remediation.  
3. Joint communication plan with affected customers and regulators.  
4. Post-incident review to update controls and contract terms.  

All breaches recorded in the **Sub-Processor Incident Register**.  

---

## 10. Termination and Off-Boarding
Upon contract end or vendor replacement:
1. Sub-processor must delete or return all customer data within 30 days.  
2. Provide written confirmation or certificate of deletion.  
3. Revoke all credentials and API tokens.  
4. CISO verifies completion and updates Sub-Processor Register.  

---

## 11. Documentation and Records
MCP4.ai maintains:
- Sub-Processor Register  
- Vendor Risk Assessments (VRAs)  
- Signed DPAs and contracts  
- Audit and review reports  
- Deletion certificates and incident logs  

Records retained for **minimum 3 years** for ISO audit evidence.  

---

## 12. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **DPO / CISO** | Approve and review sub-processors, ensure compliance with ISO and legal standards. |
| **Compliance Officer** | Maintain registers and track DPA renewals. |
| **Legal Team** | Negotiate and enforce contractual terms. |
| **Engineering / DevOps** | Integrate vendors securely and apply least-privilege access. |
| **Procurement** | Verify only approved sub-processors receive payment or API access. |

---

## 13. Enforcement
Use of unapproved sub-processors or failure to follow this policy is considered a **security incident** under the Incident Response Procedure.  
Violations may lead to disciplinary actions or vendor contract termination.  

---

## 14. Review and Continuous Improvement
- This policy reviewed annually or upon integration of any new critical vendor.  
- Audit findings and lessons learned inform vendor onboarding checklists and contract templates.  

---

## 15. References
- ISO 27701:2019 – Privacy Information Management  
- ISO 27018:2019 – Public Cloud PII Protection  
- ISO 27001:2022 A.15 – Supplier Relationships  
- GDPR Articles 28–30  
- CCPA / CPRA (California)  
- LGPD (Brazil)  
- POPIA (South Africa)  
- MCP4 Third-Party and Vendor Review Policy  
- MCP4 Data Protection Policy  
- MCP4 Incident Response Procedure  

---

**Approved by:** __________________
