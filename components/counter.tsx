"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    ref.current.textContent = value.toLocaleString();
  }, [inView, value]);

  return <span ref={ref} className={className} />;
}
