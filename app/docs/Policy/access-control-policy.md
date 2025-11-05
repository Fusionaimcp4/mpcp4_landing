# Access Control Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / Founder  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon system architecture changes  

---

## 1. Purpose
This Access Control Policy defines how MCP4.ai protects systems and data by granting, managing, and revoking access based on the principles of **least privilege**, **need-to-know**, and **role separation**.  
It supports compliance with ISO 27001 A.9 and ISO 27018 controls.

---

## 2. Scope
This policy applies to:
- All MCP4 employees, contractors, and third-party service providers.  
- All production and staging environments of Fusion, Voxe, and NeuroSwitch.  
- All databases, APIs, CI/CD systems, cloud platforms, and admin dashboards.  

---

## 3. Access Control Objectives
1. Ensure authorized users have appropriate access.  
2. Prevent unauthorized access, modification, or disclosure.  
3. Maintain auditability of all access events.  
4. Revoke access promptly when no longer required.  

---

## 4. Roles and Responsibilities
| Role | Responsibilities |
|------|------------------|
| **CISO / Founder** | Approves access policies and reviews high-privilege accounts quarterly. |
| **System Administrators** | Implement user provisioning/de-provisioning, manage roles, and maintain logs. |
| **Developers / Engineers** | Use individual accounts, secure credentials, and adhere to least-privilege principles. |
| **HR / Operations** | Notify IT of onboarding or offboarding events immediately. |
| **All Users** | Keep credentials private, use MFA, and report any suspicious access. |

---

## 5. Access Principles
- **Least Privilege:** Users receive only the permissions necessary for their duties.  
- **Need-to-Know:** Data access is limited to specific job functions.  
- **Role-Based Access Control (RBAC):** Roles such as `USER`, `ADMIN`, `SUPER_ADMIN` define privilege boundaries.  
- **Separation of Duties:** Critical tasks (e.g., code deployment + approval) require more than one individual.  

---

## 6. User Access Management
### 6.1 Account Creation  
- Access is granted only upon documented authorization from the CISO or delegated manager.  
- Unique user IDs are required for all accounts; shared accounts are prohibited.  

### 6.2 Authentication  
- Strong passwords (≥12 characters) or passphrases required.  
- MFA (e.g., TOTP, hardware key) mandatory for all administrative or production access.  
- OAuth 2.0 or JWT tokens used for service-to-service authentication.  

### 6.3 Privileged Accounts  
- Administrative accounts segregated from user accounts.  
- Privileged actions (deploy, db access) logged and reviewed monthly.  
- No root/“god” accounts used for daily operations.  

### 6.4 Review and Revocation  
- Access reviews conducted quarterly by system owners.  
- Access automatically revoked within 24 hours of offboarding.  
- Temporary or contractor accounts expire automatically after project end.  

---

## 7. System and Data Access Controls
| Area | Control |
|------|----------|
| **Source Code (Repos)** | GitHub access restricted by role; MFA enforced; branch-protection required. |
| **Cloud Infrastructure** | IAM roles used; least-privilege policies; access logs via Cloud Audit Trail. |
| **Databases** | Encrypted connections (TLS); read/write roles separated. |
| **Applications (Fusion/Voxe/NeuroSwitch)** | Role-based middleware enforces user permissions. |
| **Docker Hosts & CI/CD** | Only authorized admins; secrets stored via environment vault. |

---

## 8. Credential and Key Management
- API keys and tokens stored encrypted (using EncryptionService / Vault).  
- Keys rotated at least annually or upon staff departure.  
- SSH access uses key-pairs; password login disabled on servers.  
- Service accounts tracked in Credential Register with owners and expiration dates.  

---

## 9. Logging and Monitoring
- All authentication, authorization, and admin events logged with timestamps.  
- Logs retained ≥ 90 days for forensics and audit.  
- Alerts triggered for failed login attempts and unauthorized access.  

---

## 10. Remote and Third-Party Access
- VPN or secure SSH tunnel required for remote administration.  
- Third-party support access granted temporarily and monitored.  
- All external integrations (Chatwoot, Stripe, Vercel) use scoped API tokens.  

---

## 11. Physical Access
- Servers reside in ISO 27001-certified data centers (DigitalOcean / Vercel).  
- Only authorized operations staff can access data-center controls.  
- Physical access logs retained by the provider.  

---

## 12. Compliance and Audit
- Quarterly access reviews documented in Access Review Log.  
- Annual penetration test verifies access segregation and MFA enforcement.  
- Violations treated as security incidents per Incident Response Policy.  

---

## 13. Awareness and Enforcement
- Users must complete annual security training covering password management and phishing awareness.  
- Repeated violations may lead to disciplinary action or account termination.  

---

## 14. Policy Review
This policy is reviewed annually or after significant changes to infrastructure, tooling, or staffing.  

---

## 15. References
- ISO 27001 A.9 Access Control  
- ISO 27018 Cloud Privacy Controls  
- MCP4 Information Security Policy  
- MCP4 Incident Response Policy  
- MCP4 Encryption Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
