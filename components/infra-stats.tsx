"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/counter";
import { FEATURES } from "@/lib/config";

const stats = [
  { value: 99.9, label: "Uptime" },
  { value: 5000, label: "Servers Hosted" },
  { value: 15000, label: "Happy Customers" },
  { value: 24, label: "Support Hours" },
];

export function InfraStats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.value * 0.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-tight">
                <Counter value={stat.value} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
