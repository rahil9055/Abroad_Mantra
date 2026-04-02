import { useScrollReveal } from "@/hooks/useAnimations";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

const ScrollReveal = ({ children, delay = 0, direction = "up", className = "" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const transforms: Record<string, string> = {
    up: "translateY(60px)",
    down: "translateY(-60px)",
    left: "translateX(60px)",
    right: "translateX(-60px)",
    scale: "scale(0.85)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : transforms[direction],
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
