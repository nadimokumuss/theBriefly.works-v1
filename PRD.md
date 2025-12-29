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

## 5. User Stories & Use Cases

### B2B Client Journey
**As a** marketing manager at an e-commerce startup
**I want** predictable, transparent creative services
**So that** I can plan my budget and content calendar without surprises

**Use Case:** Client discovers The Briefly → Reviews pricing tiers → Selects "Pro Package" → Signs up → Receives onboarding → Submits first brief → Receives deliverables within SLA

### Sales Affiliate Journey
**As a** freelance sales professional
**I want** to earn commission selling creative services
**So that** I can build passive income without handling fulfillment

**Use Case:** Affiliate applies → Gets approved → Receives training materials → Admin assigns leads → Affiliate pitches clients → Closes deal → Earns commission

### Admin/Operations Journey
**As an** operations admin
**I want** to assign projects and track progress
**So that** we deliver on time and maintain quality

**Use Case:** Client order comes in → Admin assigns to internal team → Tracks progress through workflow → Ensures QA → Delivers to client → Collects feedback

---

## 6. Features & Functionality

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

## 7. Acceptance Criteria

### Phase 1 Completion Criteria
The Phase 1 release is considered complete when:

#### Homepage
- [ ] Hero section loads in <2s
- [ ] All CTAs are functional and track analytics
- [ ] Mobile responsive on iOS/Android
- [ ] SEO meta tags generate proper social previews

#### Pricing Page
- [ ] All three tier cards display correctly
- [ ] Pricing data pulls from `config/pricing.ts`
- [ ] Custom Builder teaser links to future builder page
- [ ] Price formatting displays correctly in TRY

#### Sales Affiliate Page
- [ ] Application form validates and submits successfully
- [ ] Income simulator calculates commission accurately
- [ ] Page converts at >5% (target metric)

#### Technical Requirements
- [ ] Lighthouse score >90 for all pages
- [ ] No TypeScript `any` types in codebase
- [ ] All components have proper prop types
- [ ] Git repository has meaningful commit messages

---

## 8. Non-Functional Requirements

### Performance
- **Page Load Time:** <3s on 3G connection
- **Time to Interactive:** <5s
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

### Scalability
- **Phase 1:** Architecture supports 100 concurrent users
- **Phase 2:** Must scale to 1,000+ concurrent dashboard users
- **Database:** Prepared for relational data (future PostgreSQL/Supabase)

### Security
- **Data Protection:** HTTPS enforced, sensitive data encrypted
- **RBAC:** Role-based access control architecture ready
- **Input Validation:** All user inputs validated with Zod
- **File Upload:** Secure file handling with size/type restrictions

### Reliability
- **Uptime:** 99.5% target (allows ~3.6 hours downtime/month)
- **Error Handling:** Graceful degradation, user-friendly error messages
- **Monitoring:** Error tracking ready for integration (future Sentry)

### Accessibility
- **WCAG 2.1 AA Compliance**
- Semantic HTML throughout
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios meet standards

### Browser Compatibility
- **Supported Browsers:**
  - Chrome/Edge (last 2 versions)
  - Firefox (last 2 versions)
  - Safari (last 2 versions)
  - Mobile Safari/Chrome (iOS 14+, Android 10+)

---

## 9. Assumptions, Risks & Mitigation

### Assumptions
1. **Manual Fulfillment Viable:** Internal team can handle initial orders without automation
2. **Affiliate Sales Model:** Sales affiliates can effectively sell B2B services remotely
3. **Market Demand:** Target audience (SMEs, e-commerce) needs productized creative services
4. **Pricing Accuracy:** Tiered pricing (15k/35k/75k TRY) aligns with market willingness to pay

### Risks & Mitigation

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| Low affiliate signup | High | Medium | Create compelling income calculator, offer referral bonuses |
| Manual fulfillment bottleneck | High | Medium | Hire 1-2 additional team members before launch, document workflows |
| Price resistance | Medium | Medium | A/B test pricing, offer first-month discount |
| Technical debt | Medium | Low | Enforce TypeScript strict mode, code reviews, modular architecture |
| Competition from agencies | Low | High | Emphasize transparency and speed as differentiators |

---

## 10. Competitive Landscape

### Direct Competitors
- **Traditional Agencies:** Higher cost, less transparent, longer timelines
- **Freelance Marketplaces (Upwork, Fiverr):** Variable quality, coordination overhead
- **Productized Services (Design Pickle, Superside):** Primarily design-focused, less Turkish market presence

### Competitive Advantages
1. **Turkish Market Focus:** Localized content, payment, support
2. **Hybrid Model:** Combines marketplace flexibility with agency quality control
3. **Sales-Led Growth:** Affiliate network creates unique distribution channel
4. **Multi-Service:** Video + Design + Social Media in one platform

---

## 11. Go-to-Market Strategy

### Phase 1 Launch Plan

#### Pre-Launch (Week -4 to -1)
- Finalize website and sales materials
- Recruit 5-10 beta sales affiliates
- Create social media accounts and content calendar
- Prepare email sequences for affiliates

#### Launch Week
- Publish website and announce on LinkedIn/Instagram
- Activate affiliate outreach with assigned leads
- Run targeted ads to Turkish SME/e-commerce audience
- Send press releases to Turkish tech blogs

#### Post-Launch (Month 1-3)
- Weekly affiliate training sessions
- A/B test pricing page and CTAs
- Collect client testimonials from first customers
- Iterate based on conversion data

### Marketing Channels
- **LinkedIn:** B2B targeting for client acquisition
- **Instagram:** Visual portfolio showcase
- **Affiliate Network:** Primary customer acquisition engine
- **SEO:** Long-term organic traffic via blog content

---

## 12. Success Metrics

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

## 13. User Sitemap (Phase 1 - Public Pages)

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

## 14. Design Philosophy

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

## 15. Development Strategy (Agile)

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

## 16. Technical Requirements

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

## 17. Dependencies & Constraints

### Critical Dependencies
- **No Hard-Coding:** Prices and package details must be in config files (e.g., `config/pricing.ts`)
- **Multi-Role Architecture:** All development must consider future Client/Sales/Admin/Vendor roles
- **Custom Builder:** Pricing section must acknowledge calculator/builder as key feature

### Technical Constraints
- Must use TypeScript in strict mode (no `any` types)
- Must follow component-based architecture for reusability
- Must support incremental feature additions without breaking changes

---

## 18. Open Questions & Future Considerations

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

## 19. Appendix

### Document History
- **2025-12-28:** Initial PROJECT_DETAILS.md created
- **2025-12-30:** Restructured into formal PRD format
- **2025-12-30:** Enhanced with user stories, acceptance criteria, non-functional requirements, risk analysis, competitive landscape, and GTM strategy

### Related Documents
- CLAUDE.md - Technical implementation guide for AI assistants
- DESIGN_SYSTEM.md - Visual design specifications
- HOMEPAGE_PLAN.md - Homepage structure and content plan

### Research Sources
- [Product School - PRD Template](https://productschool.com/blog/product-strategy/product-template-requirements-document-prd)
- [Perforce - How to Write a PRD](https://www.perforce.com/blog/alm/how-write-product-requirements-document-prd)
- [Codelevate - Ultimate PRD Guide for B2B SaaS 2025](https://www.codelevate.com/blog/the-ultimate-prd-guide-for-your-b2b-saas-success-in-2025)
- [Fictiv - PRD Best Practices](https://www.fictiv.com/articles/prd-product-requirements-document)
