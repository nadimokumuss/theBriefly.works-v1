# Product Requirements Document (PRD)
## The Briefly

**Last Updated:** 2025-12-30
**Document Owner:** Product Team
**Project Phase:** Phase 1 - Sales-Led Growth

---

## 1. Executive Summary

### Product Overview
- **Product Name:** The Briefly
- **Domain:** thebriefly.works
- **Type:** Managed B2B Creative Services Marketplace (Productized Service)
- **Current Phase:** Phase 1 - Public Facing & Sales Affiliate Recruitment

### Vision Statement
"The Briefly" is a **Managed Marketplace** and **Productized Service** platform designed to standardize creative agency services (Video, Design, Social Media). Our goal is to transform the chaotic agency process into a predictable "Digital Assembly Line," offering businesses consistent quality with the speed of a platform.

---

## 2. Problem & Purpose

### Problem Statement
Traditional creative service models suffer from three critical pain points:
- **Agencies:** Expensive, slow, lack transparency
- **Freelancers:** Risky, inconsistent quality, coordination chaos
- **Hybrid Approach Issues:** Every project requires different people, creating management overhead

### Solution
The Briefly provides a standardized, transparent platform that combines agency quality with platform speed through:
- Fixed pricing tiers with clear deliverables
- Vetted team ensuring consistent quality
- Single platform for all creative needs
- Predictable timelines and transparent processes

---

## 3. Strategic Approach: Sales-Led Growth (Phase 1)

Instead of building a massive freelance network first, we are adopting a **"Sales-First" strategy**:

### Supply Side
Initial order fulfillment using a core internal team (manual fulfillment) to ensure quality control.

### Demand Side
Immediate priority is to build a robust **Sales Affiliate Network**. We will recruit sales agents, provide them with leads, and generate cash flow before scaling the freelance marketplace.

---

## 4. Target Audience

### Primary User Segments

#### B2B Clients
- **Profile:** SMEs, Startups, E-commerce brands
- **Pain Points:** Tired of expensive agencies and risky freelancers
- **Needs:** Predictable pricing, consistent quality, fast turnaround

#### Sales Affiliates
- **Profile:** Individuals seeking passive income via B2B sales
- **Motivation:** High-commission sales opportunities
- **Role:** Our growth engine in Phase 1

#### Service Providers (Future - Phase 3)
- **Profile:** Vetted freelancers
- **Value Proposition:** Guaranteed work without handling sales/admin

---

## 5. Features & Functionality

### A. Public Interface (Visitor & Client Acquisition)

#### Modular Package Architecture
Instead of a single fixed price, the system must support tiered pricing:
- Starter Package
- Pro Package
- Enterprise Package

#### Dynamic Custom Builder
A "Build Your Own Squad" calculator where clients:
- Select specific add-ons (e.g., "I need 2 Reels + 5 Posts")
- See estimated monthly price instantly
- Customize their creative team composition

#### Affiliate Recruitment Funnel
A dedicated, high-conversion landing page for sales agents featuring:
- Income simulators
- Application forms
- Commission structure transparency

#### Trust Signals
- Dynamic portfolios
- "How it Works" process visualization
- Client testimonials and social proof

### B. Sales Dashboard (MVP - The Engine)

#### Lead Management
A CRM-like interface where Affiliates:
- View leads assigned by Admin
- Track lead status and progress
- Update communication history

#### Status Tracking
Simple toggle/dropdowns for leads:
- "New"
- "Contacted"
- "Offer Sent"
- "Sold"

#### Commission Wallet
- View earned commissions based on closed sales
- Track payment history
- See commission structure

#### Resource Hub
A section providing:
- Sales scripts
- Contracts and legal documents
- Marketing assets
- Training materials

### C. Core Infrastructure (Backend Foundation for Phase 2)

#### Waterflow Logic (State Machine)
Architecture must support dependency-based workflow:
- Example: *Editor cannot start until Cameraman uploads footage*
- Status transitions based on role completion

#### Role-Based Access Control (RBAC)
Strict separation of views:
- Admin
- Sales
- Client
- Freelancers (Future)

#### Asset Management
Secure file delivery system (Client Portal) where clients:
- Review work
- Approve deliverables
- Request revisions
- Download final assets

---

## 6. Success Metrics

### Phase 1 Goals
- **Sales Affiliate Recruitment:** Target number of active sales agents
- **Lead Generation:** Qualified B2B leads through affiliate network
- **Conversion Rate:** Percentage of leads converting to paying clients
- **Cash Flow:** Revenue from initial sales to fund Phase 2 development

### Future Metrics (Phase 2+)
- Customer retention rate
- Average project turnaround time
- Client satisfaction scores
- Freelancer network size

---

## 7. User Sitemap (Phase 1 - Public Pages)

### Public Pages Priority
1. **/** (Home) - High-conversion landing highlighting flexibility and "Custom Squad" concept
2. **/paketler** (Pricing) - **CRITICAL PAGE** showing tiered cards AND teaser/link to "Create Custom Package"
3. **/nasil-calisir** - Step-by-step process explanation
4. **/satis-ortakligi** - Recruitment for Sales Affiliates
5. **/portfolyo** - Showcasing work
6. **/uzman-basvurusu** - Waitlist for Freelancers
7. **/hakkimizda**, **/iletisim**, **/sss** - Standard informational pages
8. **/yasal** - Legal docs hub

---

## 8. Design Philosophy

### Brand Identity
- **Brand Name:** The Briefly
- **Tagline Concept:** "The Digital Assembly Line"

### Visual Language
- **Aesthetic:** Structured, Industrial Tech, Clean, Grid-based
- **Vibe:** Trustworthy SaaS feel
- **Approach:** Not just a "pretty website," but a functional platform

### User Experience Principles
- Transparency in pricing and process
- Predictable, systematic workflows
- Professional enterprise-grade interface

---

## 9. Development Strategy (Agile)

### Phase 1 (Current)
**Timeline:** Q1 2025
**Scope:** Public-facing pages + Sales Affiliate recruitment pages
**Goal:** Get Leads & Sales Agents

**Deliverables:**
- Homepage with clear value proposition
- Pricing page with tiered packages and custom builder teaser
- Sales affiliate recruitment funnel
- Portfolio showcase
- Process explanation pages

### Phase 2 (Future)
**Scope:** Client & Sales Dashboards
**Features:**
- Sales CRM for affiliate lead management
- Client portal for project tracking
- Admin panel for operations management

### Phase 3 (Future)
**Scope:** Freelancer Marketplace & Automation
**Features:**
- Freelancer onboarding and vetting
- Automated workflow orchestration
- Advanced project matching algorithms

### Flexibility Principle
Requirements will change. The architecture must support:
- Modular, reusable components
- Strictly typed code (TypeScript) for safe refactoring
- Configuration-driven features (no hard-coding)

---

## 10. Technical Requirements

### Platform Requirements
- **SEO Optimization:** Server-Side Rendering (SSR) for all public pages
- **Performance:** Fast page loads, optimized images
- **Responsive Design:** Mobile-first approach
- **Accessibility:** WCAG 2.1 AA compliance

### Data Requirements
- **Pricing Configuration:** Centralized config file for easy price updates
- **Content Management:** Turkish language content throughout
- **Analytics:** Track user behavior and conversion funnels

### Security Requirements
- Role-based access control (RBAC)
- Secure file upload/download
- Data encryption for sensitive information

---

## 11. Dependencies & Constraints

### Critical Dependencies
- **No Hard-Coding:** Prices and package details must be in config files (e.g., `config/pricing.ts`)
- **Multi-Role Architecture:** All development must consider future Client/Sales/Admin/Vendor roles
- **Custom Builder:** Pricing section must acknowledge calculator/builder as key feature

### Technical Constraints
- Must use TypeScript in strict mode (no `any` types)
- Must follow component-based architecture for reusability
- Must support incremental feature additions without breaking changes

---

## 12. Open Questions & Future Considerations

### Phase 1 Questions
- Specific commission structure percentages for affiliates?
- Minimum viable portfolio size for launch?
- Target number of sales affiliates for Phase 1 completion?

### Future Considerations
- Payment gateway integration timeline
- Customer support infrastructure
- Freelancer vetting process details
- Automated workflow engine specifications

---

## Appendix

### Document History
- **2025-12-28:** Initial PROJECT_DETAILS.md created
- **2025-12-30:** Restructured into formal PRD format

### Related Documents
- CLAUDE.md - Technical implementation guide for AI assistants
- DESIGN_SYSTEM.md - Visual design specifications
- HOMEPAGE_PLAN.md - Homepage structure and content plan
