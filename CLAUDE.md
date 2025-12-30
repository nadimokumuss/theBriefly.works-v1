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
Follow "Istanbul Boğazı - Ocean Breeze" design system:
- **Colors:**
  - Background: #F0F0F2 (Ferah Açık Gri)
  - Primary: #012326 (Koyu Deniz Mavisi - Ana Metin)
  - Accent: #6A9BA6 (Orta Turkuaz - CTA, Vurgular)
  - Secondary: #A3C9D9 (Açık Mavi - Section Backgrounds)
  - Muted: #205459 (Koyu Turkuaz - İkincil Metin)
  - Border: #346C73 (Orta Koyu Turkuaz)
- **Fonts:**
  - Ana Font: Montserrat (body ve başlıklar)
  - Display Font: Playfair Display (italic, özel başlıklar için `font-display`)
- **Animations:** Calm & Deliberate (800ms ease-out cubic-bezier)
- **Shadows:** Ocean shadows (use `.shadow-warm` utility)
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

## Environment Setup

### Prerequisites
```bash
# Required versions
Node.js: 18.x or higher
npm: 9.x or higher
Git: Latest stable version
```

### Initial Setup
```bash
# 1. Clone repository
git clone https://github.com/nadimokumuss/theBriefly.works-v1
cd v1

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Environment Variables
Currently no `.env` file required for Phase 1 (static pages only).

**Future (Phase 2+):**
```bash
# .env.local
DATABASE_URL=          # PostgreSQL/Supabase connection
NEXTAUTH_SECRET=       # Auth secret
NEXTAUTH_URL=          # Auth callback URL
UPLOADTHING_SECRET=    # File upload service (if used)
STRIPE_SECRET_KEY=     # Payment gateway (Phase 3)
```

---

## Testing Strategy

### Current Approach (Phase 1)
Manual testing focused on:
- Visual regression (compare before/after screenshots)
- Mobile responsiveness (Chrome DevTools + real devices)
- Cross-browser compatibility (Chrome, Firefox, Safari)
- Performance (Lighthouse audits)

### Future Testing (Phase 2+)

#### Unit Tests
```typescript
// Example: Testing utility functions
import { formatPrice } from "@/config/pricing";

describe("formatPrice", () => {
  it("should format Turkish Lira correctly", () => {
    expect(formatPrice(15000)).toBe("₺15.000");
  });
});
```

#### Integration Tests
- Test full user flows (homepage → pricing → signup)
- API route testing (when APIs are built)
- Database interactions (Phase 2+)

#### E2E Tests (Playwright/Cypress)
- Critical user journeys
- Form submissions
- Dashboard workflows

---

## Performance Guidelines

### Image Optimization
```typescript
// ✅ CORRECT - Use Next.js Image component
import Image from "next/image";

<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority  // For above-the-fold images
/>

// ❌ WRONG - Regular img tag
<img src="/hero-image.jpg" alt="Description" />
```

### Code Splitting
```typescript
// Dynamic imports for heavy components
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <p>Loading...</p>
});
```

### Bundle Size Monitoring
```bash
# Analyze bundle size
npm run build

# Check output
# .next/analyze/client.html
# .next/analyze/server.html
```

**Targets:**
- Total bundle size: <200KB (gzipped)
- Individual component: <50KB

---

## Security Best Practices

### Input Validation
```typescript
// Always validate user input with Zod
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

// Validate before processing
const result = ContactFormSchema.safeParse(formData);
if (!result.success) {
  // Handle validation errors
}
```

### XSS Prevention
- Never use `dangerouslySetInnerHTML` unless absolutely necessary
- Sanitize all user-generated content
- Use proper HTML escaping

### CSRF Protection
- Next.js API routes include CSRF protection by default
- For forms, use POST requests (not GET) for mutations

### Authentication (Phase 2+)
- Use NextAuth.js for authentication
- Implement RBAC (Role-Based Access Control)
- Secure session management
- HTTP-only cookies for tokens

---

## Error Handling Patterns

### Component Error Boundaries
```typescript
// app/error.tsx (Next.js 15 convention)
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error-container">
      <h2>Bir şeyler yanlış gitti</h2>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
}
```

### Graceful Degradation
```typescript
// Always provide fallbacks
const pricing = pricingTiers.find(tier => tier.id === "pro") ?? pricingTiers[0];
```

### User-Friendly Error Messages
```typescript
// ❌ WRONG - Technical jargon
throw new Error("Failed to parse JSON response from /api/pricing");

// ✅ CORRECT - User-friendly message
return {
  error: "Fiyat bilgileri yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin."
};
```

---

## Troubleshooting & Common Issues

### Issue: Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: TypeScript errors after npm install
```bash
# Clear TypeScript cache
rm -rf .next
rm -rf node_modules/.cache

# Reinstall
npm install
```

### Issue: Styles not updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: Module not found errors
```bash
# Verify tsconfig.json paths
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Framer Motion hydration mismatch
```typescript
// Use useState + useEffect for mount state
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
```

---

## Deployment (Vercel)

### Automatic Deployment
Every push to `master` branch automatically deploys to production on Vercel.

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Build Optimization
```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};
```

### Environment Variables (Vercel)
1. Go to Project Settings → Environment Variables
2. Add variables for Production/Preview/Development
3. Redeploy after adding variables

---

## Git Workflow Best Practices

### Commit Message Format
```bash
# Good commit messages
git commit -m "Add pricing tier cards to homepage"
git commit -m "Fix mobile navigation menu overflow"
git commit -m "Update config: Adjust Pro package pricing"

# Bad commit messages (avoid)
git commit -m "fix"
git commit -m "wip"
git commit -m "asdasd"
```

### Branch Strategy (Future)
```bash
# Feature branches
git checkout -b feature/custom-builder
git checkout -b fix/mobile-nav-bug

# Always pull before starting work
git pull origin master

# Merge into master when complete
git checkout master
git merge feature/custom-builder
git push origin master
```

---

## Remember
This project is a **platform**, not a website. Every decision should consider scalability, maintainability, and the multi-role future while delivering immediate value in Phase 1.

---

## Document Updates

**Last Updated:** 2025-12-30
**Changes:** Enhanced with environment setup, testing strategy, performance guidelines, security best practices, error handling patterns, troubleshooting guide, deployment instructions, and git workflow best practices.

### Research Sources
- [Anthropic - Using CLAUDE.MD files](https://claude.com/blog/using-claude-md-files)
- [Apidog - CLAUDE.md Best Practices](https://apidog.com/blog/claude-md/)
- [HumanLayer - Writing a good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [GitHub - Full CLAUDE.md Sample](https://gist.github.com/scpedicini/179626cfb022452bb39eff10becb95fa)
- [GitHub - awesome-claude-md](https://github.com/josix/awesome-claude-md)
