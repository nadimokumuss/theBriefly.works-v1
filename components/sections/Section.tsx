"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?:
    | "default"      // #012326 - En koyu deniz
    | "primary"      // #205459 - Koyu turkuaz
    | "secondary"    // #346C73 - Orta koyu turkuaz (alias for backward compat)
    | "accent"       // gradient ocean radial
    | "teal"         // #346C73 solid
    | "oceanDeep"    // Gradient: koyu -> orta
    | "oceanMid"     // Gradient: orta -> açık
    | "light"        // #F0F0F2 - Beyaz/açık gri
    | "grid";        // Grid pattern on dark
  transitionTo?: "light" | "dark" | "teal" | "primary" | "none";
}

// Animated Wave Component
function WaveTransition({ color }: { color: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 overflow-hidden pointer-events-none z-10">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background wave - slower */}
        <motion.path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z"
          fill={color}
          opacity={0.4}
          animate={{
            d: [
              "M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z",
              "M0,60 C360,20 720,80 1080,40 C1260,25 1350,75 1440,60 L1440,100 L0,100 Z",
              "M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Middle wave */}
        <motion.path
          d="M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,100 L0,100 Z"
          fill={color}
          opacity={0.6}
          animate={{
            d: [
              "M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,100 L0,100 Z",
              "M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z",
              "M0,60 C240,30 480,90 720,60 C960,30 1200,90 1440,60 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Front wave - faster */}
        <motion.path
          d="M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,90 1440,70 L1440,100 L0,100 Z"
          fill={color}
          animate={{
            d: [
              "M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,90 1440,70 L1440,100 L0,100 Z",
              "M0,65 C180,85 360,45 540,65 C720,85 900,45 1080,65 C1260,85 1350,45 1440,65 L1440,100 L0,100 Z",
              "M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,90 1440,70 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  transitionTo = "none",
}: SectionProps) {
  const bgClasses = {
    default: "bg-[#012326]",
    primary: "bg-[#205459]",
    secondary: "bg-[#205459]",
    teal: "bg-[#346C73]",
    accent: "gradient-ocean-radial",
    oceanDeep: "bg-gradient-to-b from-[#012326] to-[#205459]",
    oceanMid: "bg-gradient-to-b from-[#205459] to-[#346C73]",
    light: "bg-[#F0F0F2]",
    grid: "bg-[#012326] grid-pattern",
  };

  const transitionColors: Record<string, string> = {
    light: "#F0F0F2",
    dark: "#012326",
    teal: "#346C73",
    primary: "#205459",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32 relative overflow-hidden",
        bgClasses[background],
        className
      )}
    >
      <div className={cn("container mx-auto px-6 max-w-7xl relative z-[5]", containerClassName)}>
        {children}
      </div>

      {/* Animated Wave Transition */}
      {transitionTo !== "none" && transitionColors[transitionTo] && (
        <WaveTransition color={transitionColors[transitionTo]} />
      )}
    </section>
  );
}
