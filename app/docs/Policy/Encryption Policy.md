# Encryption Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / Founder  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon changes to cryptographic infrastructure  

---

## 1. Purpose
The purpose of this Encryption Policy is to define MCP4.ai’s standards and controls for protecting information through cryptographic techniques.  
It ensures that all sensitive data—whether stored, processed, or transmitted—is safeguarded against unauthorized disclosure, tampering, or loss, in line with **ISO 27001 A.10**, **ISO 27018**, and privacy regulations (GDPR, CCPA, LGPD).

---

## 2. Scope
This policy applies to:  
- All data classified as **Confidential** or **Restricted** under the Data Classification Policy.  
- All MCP4 systems (Fusion, Voxe, NeuroSwitch), databases, APIs, backups, and logs.  
- Any third-party service processing MCP4 data (Chatwoot, Stripe, Vercel, DigitalOcean, etc.).  

---

## 3. Objectives
1. Ensure strong, industry-standard encryption for data at rest and in transit.  
2. Protect cryptographic keys from unauthorized access or misuse.  
3. Maintain compliance with international standards and data-protection laws.  
4. Guarantee data confidentiality and integrity across all environments.  

---

## 4. Encryption Standards

### 4.1 Data in Transit
- All communications must use **TLS 1.2+** (preferably TLS 1.3).  
- HTTPS enforced across all web services with **HSTS** and **secure cookies**.  
- Email systems use **STARTTLS** or equivalent for SMTP.  
- Internal API calls between containers secured via reverse proxy and service tokens.  

### 4.2 Data at Rest
- Databases (PostgreSQL) encrypted at the storage level via AES-256 or provider-level encryption (DigitalOcean / Vercel).  
- Application secrets, tokens, and API keys encrypted via MCP4’s `EncryptionService` (AES-256-GCM).  
- File uploads and document storage encrypted server-side; access controlled by signed URLs.  
- Local backups and archives encrypted before transfer or storage.  

### 4.3 Hashing & Passwords
- Passwords hashed using **bcrypt** (minimum cost = 12) or **Argon2id**.  
- No reversible storage of passwords or private keys.  
- Hashing algorithms reviewed annually for cryptographic strength.  

---

## 5. Key Management
- All cryptographic keys and secrets stored in a dedicated **Key Vault / Environment Vault** (not in source control).  
- Keys rotated **annually** or upon staff departure / incident.  
- Access to keys limited to system administrators and logged.  
- Separate keys used for development, staging, and production.  
- Backup copies of master keys stored securely offline with dual-person access control.  

---

## 6. Certificate Management
- SSL/TLS certificates issued via trusted CAs (e.g., Let’s Encrypt, DigiCert).  
- Automated renewal monitored through CI/CD pipeline or system cron.  
- Certificate revocation and renewal procedures documented.  

---

## 7. Encryption for Cloud & Third-Party Services
- Verify all vendors hold ISO 27001 or SOC 2 Type II certification.  
- Require encryption at rest and in transit as part of Data Processing Agreements.  
- API integrations (e.g., Stripe, Chatwoot, BTCPayServer) must use HTTPS endpoints only.  
- Never transmit private keys or tokens via email or unsecured channels.  

---

## 8. AI and Model Data
- Training datasets anonymized and encrypted prior to storage.  
- Model checkpoints and embeddings stored in encrypted volumes.  
- Access to model weights restricted to authorized AI engineers only.  

---

## 9. Backup Encryption
- Backups encrypted using AES-256 prior to transfer or cloud upload.  
- Backup encryption keys managed separately from production keys.  
- Restore tests verify decryption integrity quarterly.  

---

## 10. Monitoring and Audit
- Automated monitoring for expired certificates and weak ciphers.  
- Quarterly audits verify encryption compliance and key rotation.  
- Encryption logs reviewed for anomalies and stored 90 days minimum.  

---

## 11. Incident Response
- Any suspected compromise of encrypted data or keys triggers the **Incident Response Procedure** within 24 hours.  
- Keys believed to be exposed must be revoked and re-issued immediately.  

---

## 12. Policy Enforcement
Violations of this policy may lead to disciplinary action, termination of access, or contractual penalties for third-party providers.

---

## 13. Review and Maintenance
This policy is reviewed annually or following major system or regulatory changes to ensure continued adequacy and effectiveness.

---

## 14. References
- ISO 27001 A.10 – Cryptography  
- ISO 27018 §10 – PII Protection in Cloud Services  
- NIST SP 800-57 / 800-131A  
- MCP4 Information Security Policy  
- MCP4 Data Classification Policy  
- MCP4 Incident Response Policy  

---

**Approved by:** ______________________  
**Date:** ______________________  
**Next Review:** 2026-11-05
