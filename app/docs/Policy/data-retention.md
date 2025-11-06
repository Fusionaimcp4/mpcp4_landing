# Data Retention and Disposal Policy  
**Version:** 1.0  
**Owner:** Data Protection Officer (DPO) / CISO  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or after any system or regulatory change  

---

## 1. Purpose
This policy defines MCP4.ai’s framework for retaining, archiving, and securely disposing of data to comply with **ISO 27701**, **GDPR**, **CCPA/CPRA**, **LGPD**, **POPIA**, and **FADP**.  
It ensures data is stored only as long as necessary for its intended purpose and securely destroyed when no longer required.

---

## 2. Scope
Applies to all:
- MCP4.ai entities and platforms — **Fusion**, **Voxe**, and **NeuroSwitch**.  
- Data handled by employees, contractors, and third-party service providers.  
- Personal, confidential, operational, and system data (electronic and physical).  

Includes data processed across:
- Production and staging environments  
- Cloud infrastructure (Vercel, DigitalOcean, LNbits, BTCPayServer)  
- Integrated services (Stripe, Chatwoot, CookieYes)

---

## 3. Policy Objectives
1. Limit data storage to the minimum necessary.  
2. Ensure consistent retention periods based on legal, contractual, and operational requirements.  
3. Securely delete or anonymize data once retention expires.  
4. Maintain documented records of retention and disposal actions.  
5. Demonstrate compliance with ISO and data-protection standards.

---

## 4. Retention Principles
1. **Purpose Limitation:** Data stored only for the purpose it was collected.  
2. **Minimization:** Retain only what is strictly needed for business or legal use.  
3. **Accuracy:** Periodically review and update stored data.  
4. **Storage Limitation:** Define maximum retention periods for all data categories.  
5. **Security:** Apply encryption, access control, and secure disposal.  
6. **Accountability:** Maintain an auditable Retention Schedule.

---

## 5. Data Retention Schedule
| Data Category | Example Data Types | Retention Period | Legal / Business Basis | Disposal Method |
|----------------|--------------------|------------------|------------------------|-----------------|
| **User Accounts** | Name, email, login, preferences | Active use + 2 years post-deletion | Contractual relationship | Secure deletion of records from databases |
| **Billing & Payment Data** | Invoices, transaction IDs, receipts | 7 years | Legal obligation (tax/audit) | Encrypted archive then deletion |
| **Logs / Access Data** | IP, session tokens, timestamps | 90 days | Security monitoring | Automated log purge |
| **Support & Chat Data** | Messages, ticket IDs | 12 months | Service improvement / Consent | Purge via Chatwoot API |
| **Analytics Data** | Aggregated site metrics | 12–24 months | Legitimate interest / Consent | Anonymization or deletion |
| **AI Interaction Data** | Prompts, model outputs | 30 days (non-anonymized); indefinite if anonymized | Consent / Legitimate interest | Secure wipe or anonymization |
| **Backup Data** | System and DB snapshots | 30 days rolling | Business continuity | Auto-expiry and encrypted overwrite |
| **Employee / HR Data** | Contracts, payroll | Employment + 7 years | Legal requirement | Secure shredding / erasure |
| **Vendor Contracts & DPAs** | Service agreements, audit docs | Contract term + 5 years | Legal & compliance | Secure destruction |
| **Marketing Data** | Email opt-ins, campaign metrics | Until consent withdrawn or 24 months max | Consent | Permanent deletion from mailing systems |

All retention periods are reviewed annually and adjusted if laws or regulations change.

---

## 6. Data Review and Deletion Process
1. **Quarterly Review:**  
   - Each data owner reviews datasets for expired records.  
   - Automated cleanup scripts verify timestamped retention.  
2. **Secure Deletion:**  
   - Electronic data: Deleted using secure overwrite or provider-level purge (`shred`, `srm`, or API deletion).  
   - Physical data: Shredded or destroyed by certified vendors.  
3. **Anonymization:**  
   - Non-essential identifiers (names, emails, IPs) replaced with hashes or tokens.  
   - Anonymized datasets retained for analytics or AI model improvement.  
4. **Audit Trail:**  
   - Every deletion logged in the **Data Disposal Log** with timestamp, responsible party, and method used.

---

## 7. Backup and Archive Management
- Backups maintained as per **Backup & Recovery Policy** with 30-day rolling retention.  
- Archived data encrypted (AES-256) and stored separately.  
- Backups excluded from analytics and deletion cycles until expiry.  
- Upon restoration, backups re-verified for compliance before reintegration.

---

## 8. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **DPO / CISO** | Approves retention schedule, ensures compliance with ISO and legal standards. |
| **Engineering / DevOps** | Implements automated deletion and backup cycles. |
| **Data Owners** | Maintain classification, retention, and deletion of datasets. |
| **Compliance Officer** | Conducts quarterly verification of deletion logs. |
| **All Employees** | Follow disposal protocols for data they handle. |

---

## 9. Vendor and Third-Party Retention
- Vendors and processors must follow equivalent retention and disposal terms as MCP4.ai.  
- DPAs include explicit clauses defining retention periods and post-contract deletion guarantees.  
- Annual vendor audits confirm compliance.

---

## 10. Documentation and Audit
MCP4.ai maintains:
- **Data Retention Schedule** (this document)  
- **Data Disposal Log** (date, dataset, deletion method, responsible person)  
- **Backup Retention Logs**  
- **Quarterly Retention Review Reports**  

All records retained for **at least 3 years** for audit and certification purposes.

---

## 11. Policy Enforcement
Violations of this policy — such as retaining expired data or failing to delete as scheduled — are treated as compliance incidents under the **Incident Response Procedure**.  
Repeated non-compliance may lead to disciplinary or contractual action.

---

## 12. Policy Review
This policy is reviewed annually or after major operational, legal, or infrastructure changes.  
Revisions approved by the DPO and communicated to all relevant stakeholders.

---

## 13. References
- ISO 27701:2019 – Privacy Information Management  
- ISO 27001 A.12.3 – Backup and Data Retention  
- GDPR Articles 5 & 17 – Storage Limitation / Right to Erasure  
- CCPA / CPRA (California)  
- LGPD (Brazil)  
- POPIA (South Africa)  
- MCP4 Data Protection Policy  
- MCP4 Backup & Recovery Policy  
- MCP4 Information Security Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
