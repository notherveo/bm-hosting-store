"use client";

import { motion } from "motion/react";
import { DISCORD_INVITE } from "@/lib/config";

export function DiscordCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 text-center"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold">
          Ready to get started?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Join our Discord community to order your VPS or Minecraft server.
        </p>
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-xl bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
        >
          Join Discord
        </a>
      </div>
    </motion.div>
  );
}
