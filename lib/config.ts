export const SITE = {
  name: "BlacMilk VPS",
  description: "Premium VPS & Minecraft hosting. Enterprise infrastructure, developer-friendly tooling, and dedicated support.",
  url: "https://example.com",
  discord: "https://discord.gg/blacmilk",
} as const;

/**
 * Discord invite for ordering. Change this in one place — it is imported by
 * every page that links to Discord.
 */
export const DISCORD_INVITE = "https://discord.gg/blacmilk";

export const NAV = [
  { label: "VPS", href: "/vps" },
  { label: "Minecraft", href: "/minecraft" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const FEATURES = [
  {
    icon: "server",
    title: "Enterprise-grade infrastructure",
    body: "Redundant networks, DDoS protection, and 99.9% uptime guarantees.",
  },
  {
    icon: "zap",
    title: "Instant provisioning",
    body: "Deploy a new VPS or Minecraft server in under 60 seconds.",
  },
  {
    icon: "shield-check",
    title: "24/7 expert support",
    body: "Real engineers, not chatbots. Available whenever you need help.",
  },
  {
    icon: "layers",
    title: "Flexible scaling",
    body: "Upgrade resources on the fly without downtime or migration.",
  },
];
