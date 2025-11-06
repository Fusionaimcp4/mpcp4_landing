# Remote Work & Telecommuting Security Policy  
**Version:** 1.0  
**Owner:** Chief Information Security Officer (CISO) / HR Manager  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or after any significant operational or legal change  

---

## 1. Purpose
This policy defines security and privacy requirements for **remote and hybrid work** arrangements at **MCP4.ai**.  
Its purpose is to protect company and customer data when employees, contractors, or partners work outside of MCP4.ai offices or secure facilities.  
The policy ensures compliance with **ISO 27001 A.6.2**, **ISO 27701**, and **ISO 27018** standards for data protection and cloud security.

---

## 2. Scope
Applies to:
- All employees, contractors, and vendors working remotely on behalf of MCP4.ai.  
- All company systems and platforms accessed remotely, including:
  - Cloud services (Vercel, DigitalOcean, AWS)  
  - Databases (PostgreSQL, Redis)  
  - Communication tools (Slack, Chatwoot, email)  
  - AI systems (Fusion, Voxe, NeuroSwitch)  
- Personal and company-issued devices used for remote work.  

---

## 3. Objectives
1. Secure remote access to MCP4.ai’s systems and data.  
2. Prevent unauthorized disclosure, loss, or modification of information.  
3. Ensure compliance with privacy, regulatory, and contractual requirements.  
4. Promote employee awareness of secure remote work practices.  

---

## 4. Principles
- Remote work is a **privilege**, not an entitlement, and is subject to compliance with this policy.  
- All personnel must maintain the same level of security at home or offsite as in company offices.  
- Access to confidential data must occur only through approved, secure connections and devices.  

---

## 5. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **CISO / IT Security** | Establishes secure remote access systems (VPN, SSO, MFA) and monitors compliance. |
| **HR / Managers** | Ensure employees understand and sign this policy before remote access begins. |
| **Employees / Contractors** | Follow all remote work security rules and report incidents immediately. |
| **DPO / Compliance Officer** | Ensures data processing aligns with privacy laws (GDPR, ISO 27701). |

---

## 6. Authorized Devices and Access
1. Only **approved, managed, and encrypted devices** may access MCP4.ai systems.  
2. All devices must:
   - Use full-disk encryption (e.g., BitLocker, FileVault).  
   - Have updated antivirus and endpoint protection software.  
   - Be password-protected and locked when unattended.  
3. Remote connections must use:
   - **VPN** or **Zero Trust Access Gateway** with multi-factor authentication (MFA).  
   - **SSH or HTTPS (TLS 1.2+)** for secure communications.  
4. Personal devices may be used only with prior CISO approval and installation of MCP4.ai security agents.

---

## 7. Network Security
- Connect only through **trusted, private, and encrypted networks**.  
- Public Wi-Fi (cafés, airports, hotels) is prohibited unless using company VPN.  
- Wi-Fi routers must use WPA3 encryption and strong passwords.  
- Employees should avoid connecting IoT or unsecured personal devices to work networks.

---

## 8. Data Handling
- Store sensitive files **only** in approved cloud repositories (GitHub, internal drives, or encrypted DBs).  
- **No local storage** of confidential or customer data on personal devices.  
- When offline storage is necessary, data must be encrypted with AES-256.  
- Printing sensitive information outside company premises is **prohibited** unless authorized.  
- Data sharing must occur only through company-approved collaboration tools.

---

## 9. Access Control
- Role-based access (RBAC) enforced for all systems.  
- Access automatically expires for inactive users after 90 days.  
- MFA mandatory for all production, cloud, and admin accounts.  
- Accounts reviewed quarterly per the **Access Control Policy**.  

---

## 10. Physical Security
- Workspaces must be **private and secure** from unauthorized viewing or access.  
- Employees should lock screens when away from devices.  
- Sensitive conversations (video calls or voice assistants) should occur in private areas.  
- Company devices must not be left in vehicles or unattended public spaces.  
- Lost or stolen equipment must be reported immediately to **security@mcp4.ai**.

---

## 11. Incident Reporting
All suspected or confirmed security incidents while working remotely must be reported **immediately** to:
- **security@mcp4.ai** (primary contact)  
- **Incident Hotline:** internal Slack or secure reporting form  

Examples include:
- Device loss or theft  
- Unauthorized access or suspicious login alerts  
- Accidental exposure or sharing of sensitive data  
- Malware or phishing attempts  

Incidents handled under the **Incident Response Procedure** and documented in the **Security Incident Register**.

---

## 12. Privacy and Compliance
- Remote work activities must comply with **GDPR**, **CCPA/CPRA**, **LGPD**, **POPIA**, and other privacy laws.  
- Personal data processed remotely must follow the **Data Protection** and **Data Classification Policies**.  
- Access to AI logs or user conversations (Fusion, Voxe) must occur only through approved interfaces with data masking enabled.

---

## 13. Equipment Return and Termination
Upon contract termination or offboarding:
1. Employee must return all company-issued devices and accessories.  
2. IT will verify data erasure and revoke remote access credentials.  
3. Returned equipment sanitized, re-imaged, and logged in **Asset Register**.  
4. Any personal devices used for work must undergo **data wipe verification** before final clearance.

---

## 14. Monitoring and Audit
- Remote access logs, VPN sessions, and device compliance status monitored continuously.  
- Regular audits performed by the CISO to ensure endpoint and network security.  
- Non-compliance reported to HR and may result in disciplinary action or contract termination.  

---

## 15. Enforcement
Violation of this policy — including using unauthorized devices, networks, or sharing company data — may result in immediate access suspension, disciplinary action, or legal consequences.  
Repeated violations are grounds for termination or contract cancellation.

---

## 16. Continuous Improvement
- This policy reviewed annually or following any major incident, regulatory update, or technology change.  
- Lessons learned from incidents integrated into new security awareness training.  

---

## 17. References
- ISO 27001:2022 – A.6.2 Remote Working  
- ISO 27701:2019 – Privacy Information Management  
- ISO 27018:2019 – Cloud Data Protection  
- NIST SP 800-46 Rev.2 – Telework Security  
- GDPR, CCPA/CPRA, LGPD, POPIA, FADP  
- MCP4 Information Security Policy  
- MCP4 Access Control Policy  
- MCP4 Incident Response Procedure  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
