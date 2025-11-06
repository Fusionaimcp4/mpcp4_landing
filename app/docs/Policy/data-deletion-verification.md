# Data Deletion & Verification Policy  
**Version:** 1.0  
**Owner:** Data Protection Officer (DPO) / Chief Information Security Officer (CISO)  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or after any infrastructure, vendor, or regulation change  

---

## 1. Purpose
The purpose of this policy is to ensure that all personal, customer, and confidential data managed by MCP4.ai — including through **Fusion**, **Voxe**, and **NeuroSwitch** — is securely and verifiably deleted once its retention period expires or upon a customer’s request.  
This ensures compliance with **ISO 27701**, **ISO 27018**, and privacy regulations requiring accountability in data lifecycle management.

---

## 2. Scope
This policy applies to:
- All MCP4.ai systems (cloud, local, and backup).  
- All categories of data, including customer, user, employee, and operational records.  
- All environments: production, staging, development, and backups.  
- All sub-processors and vendors who process data on behalf of MCP4.ai.  

---

## 3. Objectives
1. Define standardized methods for data deletion, destruction, and verification.  
2. Prevent residual or unauthorized copies of deleted data.  
3. Maintain auditable evidence that deletion has occurred.  
4. Ensure vendors and sub-processors comply with equivalent deletion obligations.  
5. Enable data-subject rights under **Right to Erasure** laws.

---

## 4. Deletion Principles
MCP4.ai follows these foundational principles for data deletion:
- **Complete Erasure:** All data and backups fully removed or anonymized.  
- **Secure Methods:** Use of cryptographically secure overwrite and purge mechanisms.  
- **Verification:** Post-deletion checks and logs confirming data removal.  
- **Timeliness:** Completion within regulatory timeframes (typically ≤30 days).  
- **Auditability:** Retain proof of deletion for compliance validation.  

---

## 5. Triggers for Data Deletion
Data deletion may occur under any of the following conditions:
1. **Customer Request:** Account closure, termination, or deletion request.  
2. **Retention Expiry:** Automatic purge upon reaching defined retention limits (see [Data Retention Policy](/docs/policy/iso27701/data-retention-policy.md)).  
3. **Regulatory Requirement:** Legal obligation to delete specific datasets.  
4. **Incident Response:** Compromised or redundant data identified during security events.  
5. **Sub-Processor Termination:** Vendor off-boarding or data migration.  

---

## 6. Approved Deletion Methods
### 6.1 Electronic Data
- **Database Deletion:** SQL-level secure purge (DELETE + VACUUM + overwrite).  
- **File Systems:** Use of secure deletion tools (`srm`, `shred`, or platform equivalent).  
- **Cloud Storage:** Provider-level secure delete API with object versioning disabled post-deletion.  
- **Backups:** Automatic rotation ensuring 30-day rolling retention before overwrite.  

### 6.2 Physical Media
- Hardware sanitization in accordance with **NIST SP 800-88 Rev.1**.  
- For decommissioned drives: certified destruction via vendor or physical shredding.  

### 6.3 Anonymization (Alternative)
- Where full deletion would compromise system integrity, data is anonymized (removal of all identifiers).  
- Anonymized data retains no traceable link to individuals or customers.

---

## 7. Verification and Evidence
Each deletion event must be logged and verified using the following process:

| Step | Activity | Verification Method | Responsible |
|------|-----------|---------------------|-------------|
| 1 | Identify dataset or record marked for deletion | Data inventory / system logs | Data Owner |
| 2 | Execute deletion per approved method | Deletion script / API / CLI command | DevOps / Engineering |
| 3 | Confirm data is no longer retrievable | Query verification / hash mismatch | DPO / Security Analyst |
| 4 | Generate deletion certificate | Automatic log + manual sign-off | Compliance Officer |
| 5 | Store record in **Data Deletion Register** | Retain for 3 years | DPO |

Verification includes checks across **primary databases**, **replicas**, and **backups** to ensure completeness.

---

## 8. Data Deletion Register
A centralized **Data Deletion Register** is maintained by the DPO including:
- Deletion ID and timestamp  
- Data category and system location  
- Method used  
- Responsible personnel  
- Verification results  
- Evidence location (logs, screenshots, certificates)  
- Vendor confirmations (if applicable)  

Reviewed quarterly as part of ISO 27701 audit preparation.

---

## 9. Vendor and Sub-Processor Deletion Compliance
- All vendors must follow equivalent deletion and verification practices.  
- DPAs include mandatory deletion or anonymization clauses within **30 days** of contract end.  
- Vendors must provide **written confirmation or deletion certificate** after completion.  
- MCP4.ai verifies compliance via annual third-party audits and documentation requests.  

---

## 10. Deletion Confirmation to Customers
When a customer requests deletion:
1. DPO acknowledges the request within 3 business days.  
2. Data deleted within 30 days (or sooner).  
3. Customer receives confirmation email with summary of deleted datasets.  
4. Confirmation recorded in the **Data Subject Request Register** and **Data Deletion Register**.  

---

## 11. Automation and Logging
- Automated deletion jobs scheduled for expired records (e.g., via Prisma or PostgreSQL cron tasks).  
- Logs stored securely in the **Audit Log Repository** for ≥3 years.  
- Notifications triggered for failed deletion jobs or anomalies.  

---

## 12. Exception Handling
Deletion may be delayed or restricted when:
- Required for ongoing legal, tax, or fraud-prevention purposes.  
- Data needed to resolve open disputes or contractual obligations.  
- Backup data pending automated overwrite cycle.  

In such cases, records are **frozen with deletion flag** and logged for transparency.

---

## 13. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **DPO / CISO** | Approves deletion procedures, ensures verification, maintains registers. |
| **Compliance Officer** | Audits deletion evidence, ensures regulatory alignment. |
| **DevOps / Engineering** | Execute deletions and confirm via log review. |
| **Data Owners** | Identify expired datasets and initiate deletion workflows. |
| **Vendors / Sub-Processors** | Execute and confirm deletions per contract and DPA. |

---

## 14. Enforcement
Failure to execute or verify deletion in accordance with this policy constitutes a **security and compliance violation**.  
Disciplinary measures or vendor contract suspension may apply depending on the severity.

---

## 15. Review and Continuous Improvement
- Reviewed annually or upon new system integration, regulatory change, or incident.  
- Lessons learned from deletion failures inform updates to automation scripts and controls.  
- Verified deletion metrics included in **Quarterly Compliance Reports**.

---

## 16. References
- ISO 27701:2019 – Privacy Information Management System  
- ISO 27018:2019 – Cloud Data Protection  
- ISO 27001:2022 – A.12.3 (Backup), A.18.1 (Compliance)  
- GDPR Articles 5 & 17 – Right to Erasure  
- NIST SP 800-88 Rev.1 – Media Sanitization  
- CCPA / CPRA (California)  
- LGPD (Brazil)  
- POPIA (South Africa)  
- MCP4 Data Retention Policy  
- MCP4 Data Protection Policy  
- MCP4 Third-Party & Sub-Processor Review Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
