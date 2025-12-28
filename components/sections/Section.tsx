import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "secondary" | "accent" | "grid";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    secondary: "bg-secondary",
    accent: "bg-accent/5",
    grid: "bg-background grid-pattern",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        bgClasses[background],
        className
      )}
    >
      <div className={cn("container mx-auto px-6 max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
