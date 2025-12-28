/**
 * Framer Motion Animation Variants
 * Design System: "Calm & Deliberate"
 * Philosophy: Smooth, professional, no rush
 */

import { Variants } from "framer-motion";

/**
 * Core Easing Function
 * ease-out quad for gentle deceleration
 */
export const easeCalm = [0.25, 0.1, 0.25, 1];

/**
 * Hero Section Animation
 * Usage: Main landing page hero, major section headers
 * Duration: 800ms
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCalm,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: easeCalm,
    },
  },
};

/**
 * Card/Component Animation (Stagger Children)
 * Usage: Lists of cards, feature grids
 * Duration: 800ms with stagger
 */
export const fadeInUpStagger: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeInUpChild: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCalm,
    },
  },
};

/**
 * Modal/Dialog Animation
 * Usage: Popups, modals, dropdowns
 * Duration: 300ms (faster for overlays)
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeCalm,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: easeCalm,
    },
  },
};

/**
 * Page Transition Animation
 * Usage: Between page navigations
 * Duration: 400ms
 */
export const fadeInOut: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeCalm,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: easeCalm,
    },
  },
};

/**
 * Slide In from Right (Sidebar, Drawer)
 * Usage: Mobile menus, side panels
 * Duration: 400ms
 */
export const slideInRight: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: easeCalm,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: easeCalm,
    },
  },
};

/**
 * Hover Scale Animation
 * Usage: Interactive buttons, cards
 * Duration: 200ms
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: easeCalm,
    },
  },
  tap: {
    scale: 0.98,
  },
};

/**
 * Scroll-triggered Animation (for use with motion viewport)
 * Usage: Sections that animate on scroll into view
 */
export const scrollFadeIn: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCalm,
    },
  },
};

/**
 * Number Counter Animation
 * Usage: Stats, metrics, counters
 */
export const counterAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeCalm,
    },
  },
};

/**
 * Recommended Viewport Config for Scroll Animations
 * Use with whileInView prop
 */
export const viewportConfig = {
  once: true, // Only animate once
  margin: "-100px", // Trigger 100px before entering viewport
};
