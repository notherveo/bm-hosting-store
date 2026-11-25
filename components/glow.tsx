"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Glow() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-1000"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
      }}
    />
  );
}
