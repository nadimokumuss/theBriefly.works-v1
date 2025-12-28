# theBriefly.works - Proje Detayları

# PROJECT SPECIFICATION: The Briefly Works
**Project Name:** The Briefly
**Domain:** thebriefly.works
**Type:** Managed B2B Creative Services Marketplace (Productized Service)
**Development Phase:** Phase 1 (Sales-Led Growth / Public Facing Focus)

### Core Vision
"The Briefly" is a **Managed Marketplace** and **Productized Service** platform designed to standardize creative agency services (Video, Design, Social Media). Our goal is to transform the chaotic agency process into a predictable "Digital Assembly Line," offering businesses consistent quality with the speed of a platform.

### Strategic Approach: Sales-Led Growth (Phase 1)
Instead of building a massive freelance network first, we are adopting a **"Sales-First" strategy**.
1.  **Supply Side:** We will initially fulfill orders using a core internal team (manual fulfillment) to ensure quality control.
2.  **Demand Side:** The immediate priority is to build a robust **Sales Affiliate Network**. We will recruit sales agents, provide them with leads, and generate cash flow before scaling the freelance marketplace.

### Target Audience
* **B2B Clients:** SMEs, Startups, and E-commerce brands tired of expensive agencies and risky freelancers.
* **Sales Affiliates:** Individuals seeking passive income via high-commission B2B sales (our growth engine).
* **Service Providers (Future):** Vetted freelancers who want guaranteed work without handling sales/admin.

# FEATURES & FUNCTIONALITIES

### A. Public Interface (Visitor & Client Acquisition)
* **Modular Package Architecture:** Instead of a single fixed price, the system must support tiered pricing (Starter, Pro, Enterprise).
* **Dynamic Custom Builder:** A "Build Your Own Squad" calculator where clients select specific add-ons (e.g., "I need 2 Reels + 5 Posts") and see an estimated monthly price instantly.
* **Affiliate Recruitment Funnel:** A dedicated, high-conversion landing page for sales agents, featuring income simulators and application forms.
* **Trust Signals:** Sections for dynamic portfolios, "How it Works" process visualization, and client testimonials.

### B. Sales Dashboard (MVP - The Engine)
* **Lead Management:** A CRM-like interface where Affiliates view leads assigned by the Admin.
* **Status Tracking:** Simple toggle/dropdowns for leads (e.g., "New," "Contacted," "Offer Sent," "Sold").
* **Commission Wallet:** A view showing earned commissions based on closed sales.
* **Resource Hub:** A section for sales scripts, contracts, and marketing assets.

### C. Core Infrastructure (Backend Foundation for Phase 2)
* **Waterflow Logic (State Machine):** The architecture must support a dependency-based workflow (e.g., *Editor cannot start until Cameraman uploads footage*).
* **Role-Based Access Control (RBAC):** Strict separation of views for Admin, Sales, Client, and (future) Freelancers.
* **Asset Management:** A secure file delivery system (Client Portal) where clients review and approve work.

### Directory Structure & Architecture

The folder structure must use **Route Groups** to prepare for the multi-role dashboard future:

* `app/(public)`: All visitor-facing pages (Landing, Pricing, Portfolio).
* `app/(auth)`: Shared Login/Register screens.
* `app/(dashboard)`: The protected application shell.
    * `app/(dashboard)/client`: Customer view.
    * `app/(dashboard)/sales`: Affiliate view.
    * `app/(dashboard)/admin`: Super-admin view.

## DEVELOPMENT STRATEGY (AGILE)
- **Phase 1 (Current):** Public-facing pages + Sales Affiliate recruitment pages. Goal: Get Leads & Sales Agents.
- **Phase 2 (Future):** Client & Sales Dashboards.
- **Phase 3 (Future):** Freelancer Marketplace & Automation.
- **Flexibility is Key:** Requirements will change. Code must be modular, reusable (components), and strictly typed (TypeScript) to allow safe refactoring.

## DESIGN PHILOSOPHY
- **Brand Name:** The Briefly
- **Vibe:** "The Digital Assembly Line." Structured, Industrial Tech, Clean, Grid-based.
- **UX:** Trustworthy SaaS feel. Not just a "pretty website," but a functional platform.

## SITEMAP (PHASE 1 - PUBLIC PAGES)
1.  **/** (Home): High-conversion landing. Highlights flexibility and "Custom Squad" concept.
2.  **/nasil-calisir**: Step-by-step process explanation.
3.  **/paketler** (Pricing): **CRITICAL PAGE.** Must show tiered cards AND a teaser/link to "Create Custom Package."
4.  **/portfolyo**: Showcasing work.
5.  **/satis-ortakligi**: Recruitment for Sales Affiliates.
6.  **/uzman-basvurusu**: Waitlist for Freelancers.
7.  **/hakkimizda**, **/iletisim**, **/sss**.
8.  **/yasal**: Legal docs hub.

## CRITICAL INSTRUCTIONS FOR AI
- **No Hard-Coding:** Do not hard-code prices or package details deep in the components. Use a config file (e.g., `config/pricing.ts`) or constants so we can change prices easily.
- **Backend Awareness:** Always keep in mind that this is a multi-role platform (Client, Sales, Admin, Vendor).
- **Custom Builder:** When building the Pricing section, acknowledge that a "Calculator" or "Custom Builder" will be a key feature.

## TECHNICAL SPECIFICATIONS

* **Framework:** Next.js 14+ (App Router) - Prioritizing Server Side Rendering (SSR) for SEO.
* **Language:** TypeScript (Strict mode enabled; no `any` types).
* **Styling:** Tailwind CSS.
* **UI Library:** **Shadcn/UI**. This is mandatory to achieve the "Systematic/SaaS" look (clean grids, consistent components).
* **Icons:** Lucide React.
* **Animation:** Framer Motion (Use subtly for entrance animations to signify "Flow").
- **Language:** TypeScript.
- **Content Language:** Turkish.

## Geliştirme Aşamaları

### Tamamlananlar
- [x] Git repository oluşturuldu
- [x] Remote origin eklendi

### Devam Edenler
-

### Planlananlar
-

## Fikirler ve Notlar
*Proje ile ilgili fikirler, öneriler ve hatırlanması gereken önemli notlar*

## Kaynaklar ve Referanslar
*Faydalı linkler, dökümanlar ve referanslar*

---
*Son güncelleme: 2025-12-28*
