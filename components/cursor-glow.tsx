"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const updatePosition = (event: MouseEvent) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, [reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="size-24 rounded-full bg-emerald-500/20 blur-3xl transition-opacity duration-300"
        style={{ opacity: 0.5 }}
      />
    </div>
  );
}
