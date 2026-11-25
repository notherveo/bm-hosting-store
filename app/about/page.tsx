import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Server, Globe, Zap, Layers } from "lucide-react";
import { GlassCard } from "@/components/glass-card";

const features = [
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "Redundant networks, DDoS protection, and 99.9% uptime guarantees.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description:
      "Deploy your VPS or Minecraft server in under 60 seconds.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Servers located in multiple regions for low-latency connections.",
  },
  {
    icon: Layers,
    title: "Flexible Scaling",
    description:
      "Upgrade resources on the fly without downtime or migration.",
  },
];

export const metadata = {
  title: "About Us | BlacMilk",
  description: "Learn about our hosting philosophy and infrastructure.",
};

export default function AboutPage() {
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
              Built for developers, loved by businesses
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Our Philosophy
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              We build hosting solutions that are powerful, reliable, and easy
              to use.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/vps"
                className="rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Explore Plans
              </Link>
              <Link
                href="/faq"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                FAQ
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
              What Makes Us Different
            </h2>
            <p className="mt-4 text-muted-foreground">
              We focus on the things that matter most to you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} className="p-6">
                <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers and businesses already using our
              hosting solutions.
            </p>
            <div className="mt-8">
              <Link
                href="/vps"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Explore Plans
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
