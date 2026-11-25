"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/glass-card";
import { cn } from "@/lib/utils";
import type { Plan } from "@/lib/plans";
import { DISCORD_INVITE } from "@/lib/config";

export function PlanCard({
  plan,
  link,
  className,
}: {
  plan: Plan;
  link: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <GlassCard
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl",
          plan.popular && "border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]",
          className
        )}
      >
        {plan.popular && (
          <div className="absolute -right-4 -top-4 z-10">
            <Badge
              variant="secondary"
              className="rounded-full bg-emerald-500 text-white"
            >
              Most Popular
            </Badge>
          </div>
        )}

        <div className="relative z-10">
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {plan.description}
          </p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight">
              ${plan.price}
            </span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>

          <ul className="mt-6 space-y-3">
            {plan.specs.map((spec) => (
              <li key={spec.label} className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {spec.label}: {spec.value}
              </li>
            ))}
          </ul>

          <Link
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full rounded-xl bg-emerald-500 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-emerald-600"
          >
            Order Now
          </Link>
        </div>
      </GlassCard>
    </motion.div>
  );
}
