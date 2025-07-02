#  **Product Requirements Document (PRD)**

### **Project Name: AHP Mod 2.0 Reseller Landing Page**

### **Version: 1.0**

### **Owner: Vic Sicard**

### **Last Updated: July 1, 2025**

---

## **📌 1\. Overview**

The AHP Mod 2.0 Reseller Landing Page is a standalone marketing and conversion page designed to **educate, motivate, and onboard new resellers** into the AHP ecosystem. The goal is to explain the value of reselling the AHP Mod 2.0 service, show how easy it is, and **convert traffic into verified resellers via the onboarding form.**

---

## **🎯 2\. Objectives**

* Clearly explain the **problem** AHP Mod 2.0 solves (AI visibility gap)

* Highlight the **ease of reselling** the product

* Emphasize **zero fulfillment/support burden**

* Convert interested users into resellers via a form submission

* Set up a **branded portal** automatically (via backend trigger)

---

## **👥 3\. Target Audience**

* **Digital marketing agencies**

* **SEO consultants**

* **Telecom resellers**

* **Directory owners**

* Anyone with a network of SMB clients needing AI search visibility

They are **non-technical, revenue-driven**, and looking for a **low-lift add-on** to offer their clients.

---

## **🛠️ 4\. Features & Requirements**

### **4.1 Page Sections (Hard Requirements)**

| Section | Purpose |
| ----- | ----- |
| **Hero Section** | Grab attention, introduce reseller revenue opportunity |
| **Problem Section** | Explain why traditional SEO fails in AI search |
| **Solution Section** | Introduce AHP Mod 2.0 as the lightweight fix |
| **Reseller Benefits** | Show how easy/residual/responsibility-free it is |
| **How It Works** | Explain 3-step setup process |
| **Client Value** | Highlight what their customers get |
| **Use Cases** | Optional but helps paint real-world picture |
| **FAQs** | Handle top objections clearly |
| **Final CTA** | Urge immediate onboarding with a strong message |

### **4.2 CTA Requirements**

* All CTAs must point to the **reseller onboarding form**

* Onboarding form should dynamically trigger **branded subdomain creation**

* **Analytics and conversion tracking** required via GTM

### **4.3 Branding Requirements (from Style Guide)**

* Fonts: `'Inter'` and `'Montserrat'`

* Primary Color: `#8b5cf6`

* Gradient: `linear-gradient(135deg, #a78bfa, #7c3aed)`

* Button styling, card layout, and spacing must follow provided visual system

* Hero imagery should have a **subtle purple-blue overlay**

* Avoid emojis, stick to **clean, professional design**

---

## **🧭 5\. User Journey**

1. **Arrives via cold email, referral, or internal site link**

2. Reads through compelling sections (most likely skimming)

3. Clicks **"Become a Reseller"** CTA

4. Completes **onboarding form**

5. System:

   * Creates reseller account

   * Creates branded subdomain (e.g. `yourbrand.ahandshake.org`)

   * Sends confirmation email

   * Flags master admin for new account tracking

---

## **🧪 6\. Success Metrics (KPIs)**

| Metric | Goal |
| ----- | ----- |
| Conversion Rate | ≥ 8% form completion |
| Time on Page | ≥ 90 seconds average |
| Bounce Rate | ≤ 35% |
| Reseller Activation | ≥ 70% install their mod within 3 days |
| Support Tickets | \< 5% of resellers requiring onboarding help |

---

## **⏳ 7\. Timeline**

| Milestone | Date |
| ----- | ----- |
| IDE \+ PRD Finalized | July 1 |
| Page Build | July 1–3 |
| Internal QA | July 4 |
| Live Launch | July 5 |
| Analytics Review | July 10 |

---

## **🧩 8\. Dependencies**

* **Form Logic:** Connect onboarding form → backend → portal setup automation

* **Stripe Integration:** For reseller payout tracking

* **Admin Dashboard:** Needs new reseller accounts flagged and viewable

* **Client Install Tracker:** Optional, but useful to add post-launch

