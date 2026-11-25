import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Server, Zap, ShieldCheck, Layers } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { InfraStats } from "@/components/infra-stats";
import { DiscordCTA } from "@/components/discord-cta";
import { FEATURES } from "@/lib/config";
import { vpsPlans, minecraftPlans } from "@/lib/plans";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden px-4 py-24 md:px-6 md:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-xl">
              <span className="size-2 rounded-full bg-emerald-500" />
              Now accepting new customers
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Premium VPS &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Minecraft
              </span>{" "}
              Hosting
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              Enterprise-grade infrastructure with developer-friendly tooling.
              Deploy in seconds, scale on demand.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/vps"
                className="rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Explore VPS Plans
              </Link>
              <Link
                href="/minecraft"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Minecraft Hosting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Built for developers, optimized for performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => (
              <GlassCard key={feature.title} className="p-6">
                <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <InfraStats />

      {/* Featured Plans */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Featured Plans
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start small, scale when you need to.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-6">VPS Plans</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {vpsPlans.slice(0, 3).map((plan) => (
                  <Link
                    key={plan.id}
                    href="/vps"
                    className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-sm text-emerald-500">
                        ${plan.price}/mo
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Minecraft Plans</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {minecraftPlans.slice(0, 3).map((plan) => (
                  <Link
                    key={plan.id}
                    href="/minecraft"
                    className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-sm text-emerald-500">
                        ${plan.price}/mo
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <DiscordCTA />
    </div>
  );
}
