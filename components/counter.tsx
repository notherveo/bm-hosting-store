"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

function formatValue(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
}

export function Counter({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    const decimals = Number.isInteger(value) ? 0 : 1;

    if (reducedMotion) {
      node.textContent = formatValue(value, decimals);
      return;
    }

    const duration = 1500;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = formatValue(value * eased, decimals);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reducedMotion]);

  return <span ref={ref} className={className} />;
}
