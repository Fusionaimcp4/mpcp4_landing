# Employee Onboarding & Offboarding Policy  
**Version:** 1.0  
**Owner:** Human Resources (HR) / Chief Information Security Officer (CISO)  
**Effective Date:** 2025-11-05  
**Review Cycle:** Annual or upon change in employment practices  

---

## 1. Purpose
This policy defines the procedures for securely onboarding, managing, and offboarding employees, contractors, and third-party personnel at **MCP4.ai**.  
It ensures that all personnel understand their responsibilities, receive appropriate access and training, and that access is promptly revoked when no longer required.  
The policy supports compliance with **ISO 27001 A.6**, **ISO 27701**, and **ISO 27018** by protecting company and customer data throughout the employment lifecycle.

---

## 2. Scope
Applies to:
- All full-time, part-time, and temporary employees.  
- Contractors, consultants, and third-party service providers with access to MCP4.ai systems.  
- All systems, tools, data, and environments across **Fusion**, **Voxe**, and **NeuroSwitch**.

---

## 3. Objectives
1. Ensure new personnel are appropriately vetted and trained.  
2. Grant access rights based on least-privilege principles.  
3. Maintain accurate records of access provisioning and revocation.  
4. Protect confidential information before, during, and after employment.  
5. Prevent unauthorized data access following termination or role change.

---

## 4. Roles and Responsibilities
| Role | Responsibility |
|------|----------------|
| **HR Manager** | Oversees onboarding/offboarding process, ensures forms and NDAs completed. |
| **CISO / IT Security** | Manages system access provisioning and revocation. |
| **Department Heads** | Approve access based on job role and function. |
| **Compliance Officer / DPO** | Ensures privacy and regulatory compliance during transitions. |
| **Employee / Contractor** | Follows company policies and secures all information assets. |

---

## 5. Pre-Employment and Vetting
Before onboarding, HR must:
1. Verify candidate’s identity and employment eligibility.  
2. Conduct background checks (where legally permissible).  
3. Verify references and prior work experience.  
4. Confirm understanding of confidentiality and compliance expectations.  
5. Issue **Offer Letter** and **Confidentiality Agreement (NDA)**.  

All documents stored securely in the **Employee Compliance Folder**.

---

## 6. Onboarding Procedure
### 6.1 Required Steps
1. **Welcome and Documentation**
   - Complete employment contracts and NDAs.
   - Assign employee ID and company email.

2. **Policy Acknowledgment**
   - Employee must review and sign acknowledgment for:
     - Code of Conduct & Compliance Policy  
     - Information Security Policy  
     - Acceptable Use Policy  
     - Data Protection and Privacy Policy  
     - AI Ethics & Transparency Policy (if applicable)  

3. **Training**
   - Mandatory security and privacy awareness training within the first week.
   - Role-based ISO training (for technical, compliance, or AI-related positions).
   - Completion recorded in the **Training Register**.

4. **Access Provisioning**
   - Access granted based on **Role-Based Access Control (RBAC)** principles.
   - Create accounts for required systems only (GitHub, Slack, Jira, VPN, databases).
   - MFA (Multi-Factor Authentication) enabled on all systems.
   - CISO approves all privileged or production access.

5. **Equipment & Tools**
   - Assign company laptop and peripherals, configured with endpoint protection.
   - Ensure encryption, automatic locking, and remote-wipe capability.
   - Record serial numbers and handover date in the **Asset Register**.

6. **Orientation**
   - HR provides company overview, reporting structure, and security best practices.
   - Assign mentor or manager for first 30 days.

---

## 7. Access Management During Employment
- Access levels reviewed quarterly by department heads.  
- Temporary or project-based accounts expire automatically after 90 days.  
- Shared credentials prohibited; individual logins required.  
- All role or department changes trigger **Access Review** before reassignment.

---

## 8. Offboarding Procedure
When an employee, contractor, or vendor departs:

### 8.1 Notification
- HR notifies IT and Compliance immediately upon resignation, termination, or contract expiration.  
- Offboarding checklist initiated within 24 hours of notice.

### 8.2 Access Revocation
Within one business day:
- Disable user accounts (email, GitHub, VPN, databases, admin panels).  
- Revoke OAuth, SSH, API, and third-party credentials.  
- Remove MFA tokens and access keys.  
- Update **Access Control Log** with revocation confirmation.

### 8.3 Asset Recovery
- Collect all company property:
  - Laptop, devices, security tokens, keys, and ID cards.  
- Verify equipment condition and record in **Asset Register**.  
- Wipe and reimage returned devices.

### 8.4 Exit Checklist and Data Handling
- HR conducts exit interview and confirms:
  - NDA and confidentiality obligations reaffirmed.  
  - No company data retained on personal devices or storage.  
  - Access logs reviewed for recent downloads or transfers.  
  - All pending projects or credentials transferred to manager.

### 8.5 Communication
- Remove name and email from internal directories, communication platforms, and project channels.  
- Notify relevant teams and clients if applicable.

---

## 9. Third-Party Offboarding
- Contractors and vendors follow identical offboarding steps.  
- Access must be deactivated immediately upon contract completion.  
- Confirmation of deletion or data return from vendor required per **Vendor Management Policy**.

---

## 10. Documentation and Audit Trail
All onboarding/offboarding actions recorded in the following logs:
- **Access Control Log** (creation, modification, deactivation)  
- **Training Register** (completed awareness training)  
- **Asset Register** (equipment handover and return)  
- **Employee Compliance Folder** (signed acknowledgments and NDAs)  

Records retained for **3 years** per **Data Retention Policy**.

---

## 11. Enforcement
Failure to follow onboarding/offboarding procedures constitutes a security violation and may result in disciplinary action, including access suspension or termination.  
Vendors or partners failing to comply may face contract penalties or termination.

---

## 12. Continuous Improvement
- Annual review of onboarding/offboarding process by HR and CISO.  
- Feedback from exit interviews used to improve procedures.  
- New security technologies (SSO, IAM automation) integrated as available.

---

## 13. References
- ISO 27001:2022 – A.6 Human Resource Security  
- ISO 27701:2019 – Privacy Information Management  
- ISO 27018:2019 – Cloud Data Protection  
- ISO 42001:2023 – AI Management (for AI engineers)  
- MCP4 Access Control Policy  
- MCP4 Data Protection Policy  
- MCP4 Acceptable Use Policy  
- MCP4 Vendor Management Policy  

---

**Approved by:** __________________________  
**Date:** __________________________  
**Next Review:** 2026-11-05
