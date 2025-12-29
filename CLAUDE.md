# Claude Code Project Context
## The Briefly - Managed B2B Creative Services Marketplace

**Last Updated:** 2025-12-30
**Phase:** Phase 1 - Sales-Led Growth (Public Facing Focus)

---

## WHAT: Tech Stack & Architecture

### Framework & Language
- **Next.js 15+** (App Router) - Server Side Rendering (SSR) prioritized for SEO
- **TypeScript** (Strict mode enabled; **no `any` types allowed**)
- **React 18+** with Server Components where applicable

### Validation & Type Safety
- **Zod** - Runtime type validation for:
  - Forms
  - API responses
  - User input
  - Configuration files

### Styling & UI
- **Tailwind CSS + CSS Variables Hybrid**
  - Tailwind utilities for layout/spacing/responsive design
  - CSS Variables for brand-specific colors and design tokens
  - Ensures rapid development AND unique "Digital Assembly Line" branding
- **Shadcn/UI** - Component library (MANDATORY for systematic SaaS look)
  - Clean grids
  - Consistent components
  - Professional enterprise feel

### Icons & Animation
- **Icons:** Lucide React
- **Animation:** Framer Motion
  - Bold geometric/mechanical animations for industrial tech vibe
  - Not just subtle fades - emphasize systematic, assembly-line feel
  - Current animation philosophy: "Calm & Deliberate" (800ms ease-out)

### Content
- **Language:** Turkish (all user-facing content)

---

## WHY: Project Purpose & Strategy

### Core Vision
"The Briefly" transforms chaotic creative agency processes into a predictable "Digital Assembly Line" - a **Managed Marketplace** offering businesses agency-quality creative services with platform speed.

### Strategic Approach: Sales-Led Growth
**Phase 1 Focus:** Instead of building a massive freelance network first, we prioritize:
1. **Demand Side:** Build robust Sales Affiliate Network (recruitment, lead generation, cash flow)
2. **Supply Side:** Fulfill orders with core internal team (manual fulfillment for quality control)

### Multi-Role Platform Future
This is **NOT** just a landing page. The architecture must support future expansion:
- **Client Dashboard** - Project tracking, asset review, approvals
- **Sales Dashboard** - CRM for affiliates, lead management, commission tracking
- **Admin Dashboard** - Operations, team coordination, analytics
- **Vendor Dashboard** (Phase 3) - Freelancer workflow, task assignments

---

## HOW: Development Approach

### Project Structure (Route Groups)

```
app/
├── (public)/           # Visitor-facing pages (unauthenticated)
│   ├── page.tsx        # Homepage
│   ├── paketler/       # Pricing page (CRITICAL)
│   ├── nasil-calisir/  # Process explanation
│   ├── portfolyo/      # Portfolio showcase
│   ├── satis-ortakligi/ # Sales affiliate recruitment
│   ├── uzman-basvurusu/ # Freelancer waitlist
│   └── ...
├── (auth)/             # Shared Login/Register screens
│   ├── giris/          # Login
│   └── kayit/          # Register
└── (dashboard)/        # Protected application shell
    ├── client/         # Customer view (Phase 2)
    ├── sales/          # Affiliate view (Phase 2)
    └── admin/          # Super-admin view (Phase 2)

components/
├── ui/                 # Shadcn/UI components
├── layout/             # Header, Footer, Navigation
└── sections/           # Reusable homepage sections

config/
└── pricing.ts          # Centralized pricing configuration (NO hard-coding!)

lib/
├── animations.ts       # Framer Motion variants
└── utils.ts            # Helper functions
```

### Commands

```bash
# Development
npm run dev             # Start dev server (http://localhost:3000)

# Build & Production
npm run build           # Production build
npm run start           # Start production server

# Code Quality
npm run lint            # ESLint check
npm run type-check      # TypeScript type checking (if configured)

# Git Workflow
git status              # Check current changes
git add -A              # Stage all changes
git commit -m "message" # Commit with message
git push origin master  # Push to GitHub
```

### Code Style & Conventions

#### TypeScript Rules (STRICT)
```typescript
// ✅ CORRECT
const price: number = 15000;
const config: PricingTier = { id: "starter", ... };

// ❌ WRONG - Never use 'any'
const data: any = fetchData();
```

#### No Hard-Coding Rule
```typescript
// ❌ WRONG - Hard-coded prices in components
<span>15,000 TL</span>

// ✅ CORRECT - Use centralized config
import { pricingTiers } from "@/config/pricing";
<span>{formatPrice(pricingTiers[0].monthlyPrice)}</span>
```

#### Component Architecture
- **Reusable:** Build modular components that can be used across roles
- **Typed Props:** Always define TypeScript interfaces for component props
- **Server vs Client:** Use `"use client"` directive only when necessary (animations, state, events)

```typescript
// Example: Typed component
interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function Hero({ title, subtitle, ctaLabel, ctaHref }: HeroProps) {
  // ...
}
```

#### Import Organization
```typescript
// 1. External dependencies
import { useState } from "react";
import { motion } from "framer-motion";

// 2. Internal components
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/Hero";

// 3. Utils and config
import { formatPrice } from "@/lib/utils";
import { pricingTiers } from "@/config/pricing";

// 4. Types
import type { PricingTier } from "@/config/pricing";
```

---

## CRITICAL INSTRUCTIONS

### 🚨 Always Remember

#### 1. Multi-Role Platform Mindset
Even though Phase 1 only builds public pages, **always architect with future dashboards in mind**:
- Keep components role-agnostic when possible
- Use route groups to separate concerns
- Plan for RBAC (Role-Based Access Control) in data structures

#### 2. Configuration Over Hard-Coding
**NEVER** hard-code business logic deep in components:
- Prices → `config/pricing.ts`
- Package details → `config/pricing.ts`
- Feature lists → Configuration files
- This allows non-technical team members to update prices without touching code

#### 3. Custom Builder is Critical
When working on the Pricing page (`/paketler`):
- It must show tiered package cards (Starter, Pro, Enterprise)
- It must include a prominent teaser/link to "Custom Squad Builder"
- The builder is a key differentiator - treat it as a first-class feature

#### 4. SEO Priority
All public pages require:
- Server-Side Rendering (SSR)
- Proper meta tags (title, description, og:image)
- Semantic HTML structure
- Fast page loads (<3s)

#### 5. Design System Consistency
Follow "Soft Industrial (Sage)" design system:
- **Colors:** Warm Slate (#4A4644) + Muted Sage (#6B9B7A)
- **Animations:** Calm & Deliberate (800ms ease-out cubic-bezier)
- **Shadows:** Warm shadows (use `.shadow-warm` utility)
- **Grid Pattern:** Subtle grid backgrounds (use `.grid-pattern` utility)

#### 6. Modular Development
Code must be:
- **Modular:** Easy to move/reuse components
- **Reusable:** Don't duplicate logic
- **Strictly Typed:** TypeScript strict mode catches errors early
- **Flexible:** Requirements WILL change - avoid tight coupling

---

## PHASE 1 SITEMAP (Current Focus)

### Priority Pages
1. **/** - Homepage (high-conversion landing)
2. **/paketler** - Pricing (tiered packages + custom builder teaser) **← CRITICAL**
3. **/nasil-calisir** - Process explanation
4. **/satis-ortakligi** - Sales affiliate recruitment **← HIGH PRIORITY**
5. **/portfolyo** - Portfolio showcase
6. **/uzman-basvurusu** - Freelancer waitlist
7. Supporting pages: **/hakkimizda**, **/iletisim**, **/sss**, **/yasal**

---

## Design Philosophy

### Brand Vibe
- **"The Digital Assembly Line"**
- Structured, Industrial Tech, Clean, Grid-based
- Trustworthy SaaS feel
- Functional platform, not just a pretty website

### UX Principles
- Transparency (pricing, process, timeline)
- Predictability (systematic workflows)
- Professional (enterprise-grade interface)

---

## Development Workflow

### Agile Approach
- **Flexibility is Key:** Requirements will change
- Build incrementally, test frequently
- Focus on Phase 1 deliverables, but keep Phase 2+ in mind architecturally

### Quality Standards
- TypeScript strict mode (no `any`)
- Component-based architecture
- Config-driven features
- Responsive design (mobile-first)
- Accessibility (semantic HTML, ARIA where needed)

---

## Quick Reference

### Key Files to Know
- `PRD.md` - Product requirements (what we're building, why, for whom)
- `DESIGN_SYSTEM.md` - Visual design specifications
- `HOMEPAGE_PLAN.md` - Homepage structure decisions
- `config/pricing.ts` - Pricing tiers and add-ons
- `lib/animations.ts` - Reusable Framer Motion variants
- `app/globals.css` - Design system CSS variables

### Common Patterns

**Pricing Display:**
```typescript
import { formatPrice } from "@/config/pricing";
<span>{formatPrice(35000)}</span> // Output: ₺35.000
```

**Animation Usage:**
```typescript
import { fadeInUp } from "@/lib/animations";
<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content
</motion.div>
```

**Section Wrapper:**
```typescript
import { Section } from "@/components/sections/Section";
<Section background="grid">
  <YourContent />
</Section>
```

---

## Remember
This project is a **platform**, not a website. Every decision should consider scalability, maintainability, and the multi-role future while delivering immediate value in Phase 1.
