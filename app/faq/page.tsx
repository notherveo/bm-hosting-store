import { motion } from "motion/react";

import { AccordionItem } from "@/components/accordion";

const faqs = [
  {
    title: "What is VPS hosting?",
    content:
      "A Virtual Private Server (VPS) is a virtualized server that provides dedicated resources (CPU, RAM, storage) for your applications. Unlike shared hosting, you have full root access and can install any software you need.",
  },
  {
    title: "What is Minecraft hosting?",
    content:
      "Minecraft hosting provides optimized servers for running Minecraft game servers. We offer pre-configured servers with support for Vanilla, Paper, Fabric, Forge, and modpacks, with automatic backups and DDoS protection.",
  },
  {
    title: "How do I order a VPS or Minecraft server?",
    content:
      "Simply browse our plans and click 'Order Now' on the plan you want. You'll be redirected to our Discord server where our support team will help you complete the ordering process.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept various payment methods including credit cards, PayPal, and cryptocurrency. Payment details are handled securely through our payment processor.",
  },
  {
    title: "How long does it take to deploy?",
    content:
      "VPS servers typically deploy within 60 seconds, while Minecraft servers take about 2-3 minutes. Our automated deployment system ensures quick and reliable setup.",
  },
  {
    title: "What is your uptime guarantee?",
    content:
      "We offer a 99.9% uptime guarantee on all our VPS and Minecraft hosting plans. This means your server will be available 99.9% of the time, with only about 43 minutes of downtime per year.",
  },
  {
    title: "Can I upgrade my plan later?",
    content:
      "Yes! You can upgrade or downgrade your plan at any time. The changes will take effect immediately, and you'll only be charged for the plan you're currently using.",
  },
  {
    title: "Do you offer refunds?",
    content:
      "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our service, simply contact our support team within 30 days of your purchase for a full refund.",
  },
];

export const metadata = {
  title: "FAQ | BlacMilk",
  description: "Frequently asked questions about our hosting services.",
};

export default function FAQPage() {
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
              Everything you need to know
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              FAQ
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              Quick answers to your most common questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="flex-1 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem title={faq.title}>
                  {faq.content}
                </AccordionItem>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
