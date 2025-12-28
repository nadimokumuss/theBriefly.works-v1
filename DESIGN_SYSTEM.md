# The Briefly - Design System Documentation

**Last Updated:** 2025-12-28
**Status:** In Progress - Testing Phase
**Brand Identity:** "Digital Assembly Line" - Industrial Tech, Systematic, Clean

---

## Design Philosophy

The Briefly's design system embodies the concept of a "Digital Assembly Line" - where creative work flows through a predictable, systematic process. The visual language should reflect:

- **Structure over Chaos:** Grid-based layouts, clear hierarchy
- **Industrial Precision:** Mechanical animations, deliberate movements
- **Tech-Forward:** Modern SaaS aesthetic, not "flashy startup"
- **Trust & Reliability:** Professional, systematic, predictable

---

## 1. Color Palette

### Current Selection: [TO BE DECIDED]

**Options Tested:**
- **Option 1: Industrial Blue** (Mevcut)
  - Primary: `hsl(222, 47%, 11%)` - Deep Industrial Blue-Black
  - Accent: `hsl(217, 91%, 60%)` - Electric Blue
  - Vibe: Modern SaaS, tech-forward

- **Option 2: Steel Gray**
  - Primary: `hsl(210, 10%, 23%)` - Metallic Gray
  - Accent: `hsl(25, 95%, 53%)` - Industrial Orange
  - Vibe: Heavy machinery, industrial equipment

- **Option 3: Charcoal + Cyan**
  - Primary: `hsl(200, 7%, 16%)` - Dark Charcoal
  - Accent: `hsl(180, 100%, 50%)` - Neon Cyan
  - Vibe: Futuristic, digital-first

### Decision:
```
[Kullanıcı ile birlikte karar verilecek]
Seçilen: Option __
Rationale: [Neden bu renk paleti seçildi]
```

### Color Usage Guidelines:
- **Primary:** Main navigation, headings, CTAs
- **Accent:** Interactive elements, hover states, highlights
- **Secondary:** Backgrounds, cards, containers
- **Muted:** Helper text, labels, disabled states

---

## 2. Typography

### Font Family
- **Primary:** Inter (Google Fonts)
- **Monospace:** System monospace for code/data display

### Type Scale
- **H1:** `text-6xl` (60px) - Hero headings
- **H2:** `text-4xl` (36px) - Section headings
- **H3:** `text-3xl` (30px) - Card titles
- **H4:** `text-2xl` (24px) - Subsection headings
- **Body Large:** `text-lg` (18px) - Intro paragraphs, important text
- **Body Default:** `text-base` (16px) - Standard body text
- **Body Small:** `text-sm` (14px) - Helper text, captions
- **Labels/Code:** `text-xs` (12px) - Tags, badges, metadata

### Font Weight Usage
- **Bold (700):** H1, H2, primary CTAs
- **Semibold (600):** H3, H4, button text
- **Regular (400):** Body text, descriptions

---

## 3. Animation Principles

### Selected Animation Style: [TO BE DECIDED]

**Options Tested:**
1. **Smooth Slide:** Spring-based, soft easing
2. **Mechanical Pop:** Sharp rotation + scale, industrial feel
3. **Assembly Ease:** Cubic-bezier easing, deliberate movement

### Decision:
```
[Kullanıcı ile birlikte karar verilecek]
Seçilen: __________
Timing: ____ ms
Easing: cubic-bezier(____) veya spring(stiffness: ____)
```

### Animation Guidelines:
- **Entrance Animations:** Used for hero sections, card reveals
- **Hover States:** Subtle scale/color transitions (200ms)
- **Page Transitions:** [TBD]
- **Avoid:** Overly playful bounces, distracting movements

---

## 4. Components

### Button Styles

**Decision:**
```
[Varsayılan Shadcn button'ları kullanacak mıyız, yoksa custom stiller mi?]

Primary CTA Style: [Default / Custom]
Secondary Button Style: [Outline / Ghost / Custom]
Button Sizes: [Varsayılan / Adjusted]
```

### Card Styles

**Decision:**
```
Border: [Default subtle / Thick accent borders / No border]
Shadow: [Default / Elevated / Flat]
Padding: [Varsayılan / Adjusted]
```

### Form Elements

**Input Style:** [TO BE DECIDED]
**Dropdown/Select Style:** [TO BE DECIDED]

---

## 5. Layout & Spacing

### Grid System
- **Container Max Width:** `1400px` (2xl breakpoint)
- **Padding:** `2rem` default container padding
- **Column Gaps:** `gap-6` (24px) for cards, `gap-4` (16px) for form elements

### Spacing Scale (Tailwind Defaults)
- `space-y-2` (8px) - Tight vertical spacing
- `space-y-4` (16px) - Default spacing
- `space-y-6` (24px) - Section spacing
- `space-y-12` (48px) - Major section breaks

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Wide:** > 1400px

---

## 6. Iconography

- **Library:** Lucide React
- **Size Guidelines:**
  - Small icons: `16px` (form elements, inline)
  - Default icons: `24px` (buttons, cards)
  - Large icons: `32px+` (feature sections)

---

## 7. Background Patterns

### Grid Pattern Usage: [TO BE DECIDED]

**Options:**
1. Use `.grid-pattern` class for backgrounds (subtle industrial feel)
2. Use `.assembly-line-gradient` for hero sections
3. Plain solid backgrounds only

**Decision:**
```
[Kullanıcı ile birlikte karar verilecek]
Grid Pattern: [Yes / No / Conditional]
Where to use: [Hero sections / All backgrounds / Never]
```

---

## 8. Special Effects & Micro-interactions

### Hover States
- Buttons: [Scale / Color shift / Underline / TBD]
- Cards: [Lift effect / Border highlight / None / TBD]

### Loading States
- Skeleton loaders: [Yes / Spinners / Progress bars]

---

## 9. Implementation Checklist

Once decisions are finalized:

- [ ] Update CSS Variables in `app/globals.css`
- [ ] Update Tailwind config with final colors
- [ ] Create reusable animation variants in Framer Motion
- [ ] Document component usage examples
- [ ] Create Figma/design file (optional)

---

## 10. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-12-28 | Created design test page | Need to visualize options before building |
| [TBD] | Color palette selected | [Will be filled after testing] |
| [TBD] | Animation style selected | [Will be filled after testing] |

---

## Resources

- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- Design Test Page: `/design-test`
