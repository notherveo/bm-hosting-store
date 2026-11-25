import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PlanCard } from "@/components/plan-card";
import { vpsPlans } from "@/lib/plans";

export const metadata = {
  title: "VPS Hosting | BlacMilk",
  description: "Powerful VPS plans for developers and businesses.",
};

export default function VPSPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden px-4 py-24 md:px-6 md:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-xl">
              <span className="size-2 rounded-full bg-emerald-500" />
              Enterprise-grade VPS hosting
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              VPS Hosting
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              Scalable virtual private servers for developers and businesses.
              Deploy in seconds, scale on demand.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/vps"
                className="rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-600"
              >
                View All Plans
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                How it works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {vpsPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                link="/vps"
                className="hover:border-emerald-500/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]"
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/vps"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400"
            >
              View all VPS plans
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
