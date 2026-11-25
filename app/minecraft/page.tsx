import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Cpu, Globe, Users } from "lucide-react";

import { PlanCard } from "@/components/plan-card";
import { DISCORD_INVITE } from "@/lib/config";
import { minecraftPlans } from "@/lib/plans";

export const metadata = {
  title: "Minecraft Hosting | BlacMilk",
  description:
    "Low-latency Minecraft server hosting — Vanilla, Paper, Fabric, Forge and modpacks, on NVMe.",
};

const SOFTWARE = [
  "Vanilla",
  "Paper",
  "Purpur",
  "Fabric",
  "Forge",
  "NeoForge",
  "Modpacks",
  "Bedrock",
];

const STEPS = [
  {
    icon: Cpu,
    title: "Pick a plan",
    body: "Choose the RAM and player capacity that fits your community.",
  },
  {
    icon: Globe,
    title: "Order in Discord",
    body: "Open a ticket, pick your region, and we provision the node.",
  },
  {
    icon: Users,
    title: "Invite your players",
    body: "You get the IP instantly — online in under 60 seconds.",
  },
];

export default function MinecraftPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden px-4 py-24 md:px-6 md:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-xl">
              <span className="size-2 rounded-full bg-emerald-500" />
              Built for serious communities
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Minecraft Hosting
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              High-clock-speed nodes, NVMe storage and one-click modpack installs.
              Every plan, every version, no compromises.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Order in Discord
              </Link>
              <Link
                href="/faq"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Read the FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Software chips */}
      <section className="border-y border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {SOFTWARE.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Choose your server
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From a private survival world to a packed public network — start
              small and scale any time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {minecraftPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                link="/minecraft"
                className="hover:border-emerald-500/30 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">How it works</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <s.icon className="size-6 text-emerald-500" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to launch?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Ordering happens entirely inside Discord — open a ticket and we&apos;ll
              get you online in minutes.
            </p>
            <Link
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Join the Discord <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
