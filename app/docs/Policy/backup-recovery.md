# Backup and Recovery Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / Founder  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or after major infrastructure changes  

---

## 1. Purpose
The purpose of this Backup and Recovery Policy is to ensure that all critical data, applications, and configurations across MCP4.ai are regularly backed up, securely stored, and recoverable in the event of system failure, data corruption, ransomware, or disaster.  

This policy supports compliance with **ISO 27001 A.12.3 (Backup)** and **ISO 27018 Cloud Privacy Controls**.

---

## 2. Scope
This policy applies to:
- All production and staging systems for **Fusion**, **Voxe**, and **NeuroSwitch**.  
- All databases, file repositories, codebases, configurations, and essential infrastructure data.  
- All environments managed by MCP4 or hosted through trusted third parties (DigitalOcean, Vercel, BTCPayServer, LNbits, etc.).  

---

## 3. Objectives
1. Guarantee data integrity, availability, and recoverability.  
2. Minimize downtime and business disruption following an incident.  
3. Protect backed-up data from unauthorized access or tampering.  
4. Meet retention and compliance requirements under ISO and privacy laws.

---

## 4. Backup Strategy
| Component | Backup Type | Frequency | Retention | Location |
|------------|--------------|------------|------------|-----------|
| **PostgreSQL Databases** | Full backup + WAL (write-ahead log) | Daily full / Hourly incremental | 30 days | Encrypted cloud storage (DigitalOcean Spaces or AWS S3) |
| **Application Files (Next.js builds, Docker configs)** | Snapshot | Daily | 14 days | Encrypted local + remote |
| **Configuration Files / Environment Variables** | Exported via automation | Weekly | 30 days | Encrypted vault backup |
| **User Uploads / Docs** | Mirrored storage | Continuous | 30 days | Object storage with redundancy |
| **GitHub Repositories (source code)** | Git remote + nightly mirror | Daily | 60 days | Private mirror repo (read-only) |

---

## 5. Backup Requirements
- All backups must be **encrypted with AES-256** before transfer or storage.  
- Backups stored in **geographically separate regions** for disaster recovery.  
- Backup metadata (time, checksum, size, location) logged automatically.  
- Access restricted to authorized administrators only (MFA required).  
- Backup data classified as **Confidential** under the Data Classification Policy.  

---

## 6. Backup Automation and Monitoring
- Automated backup jobs managed via cron tasks or containerized schedulers.  
- Monitoring systems verify backup completion and integrity.  
- Failed backup alerts automatically sent to DevOps and logged in the **Backup Log Register**.  
- Monthly review ensures all scheduled backups completed successfully.

---

## 7. Retention and Disposal
- Retention periods set according to business and legal requirements (see table above).  
- Expired backups automatically purged using secure deletion methods.  
- Backup retention policies reviewed annually or upon data-classification changes.  

---

## 8. Testing and Verification
- **Quarterly restore tests** performed to verify backup integrity and speed of recovery.  
- **Annual full disaster-recovery drill** simulating system or database loss.  
- Restoration logs documented, including time taken and success status.  
- Failed recovery tests trigger corrective actions and documentation updates.

---

## 9. Recovery Procedures
### 9.1 Recovery Objectives
| Metric | Target |
|---------|---------|
| **Recovery Point Objective (RPO)** | ≤ 24 hours data loss |
| **Recovery Time Objective (RTO)** | ≤ 8 hours system recovery |

### 9.2 General Recovery Steps
1. Identify affected systems and confirm scope of incident.  
2. Retrieve latest verified backup from encrypted storage.  
3. Validate backup integrity via checksum.  
4. Restore database(s) and application stack using documented automation scripts.  
5. Re-deploy containers via Docker Compose / CI pipeline.  
6. Verify service availability and perform integrity checks.  
7. Document incident and lessons learned in **Recovery Log**.

---

## 10. Disaster Recovery Integration
This policy complements the **Business Continuity & Disaster Recovery Plan (BCP/DRP)** located at `/docs/policy/governance/business-continuity-policy.md`, which defines broader continuity procedures and communication responsibilities.

---

## 11. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **CISO / Founder** | Approves backup strategy, reviews test reports, and ensures compliance. |
| **System Administrators / DevOps** | Configure and monitor backups, perform restores, maintain logs. |
| **Developers** | Ensure application-level data persistence supports backup cycles. |
| **Compliance Officer** | Verifies documentation and audit readiness. |

---

## 12. Security and Access Control
- All backup media encrypted (AES-256) and stored in restricted, access-controlled storage.  
- Backup credentials (API keys, vault tokens) stored separately from backup data.  
- Transmission secured with **TLS 1.2+**.  
- Access logs retained for ≥ 90 days.  

---

## 13. Policy Compliance
Violations, skipped backups, or unauthorized data restoration attempts are treated as **security incidents** under the **Incident Response Policy**.  
Non-compliance may result in disciplinary measures or contractor termination.

---

## 14. Review and Maintenance
This policy is reviewed annually or after major infrastructure, hosting, or application changes.  
All updates are logged in the **Policy Change Register**.

---

## 15. References
- ISO 27001 A.12.3 – Backup  
- ISO 27018 §11.1 – Protection of Customer Data  
- NIST SP 800-34 – Contingency Planning Guide  
- MCP4 Information Security Policy  
- MCP4 Encryption Policy  
- MCP4 Business Continuity Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
