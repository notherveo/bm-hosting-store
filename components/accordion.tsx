"use client";

import * as React from "react";
import { motion } from "motion/react";

export function AccordionItem({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-medium">{title}</span>
        <span
          className={`size-5 rounded-full border border-white/20 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-sm text-muted-foreground">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
