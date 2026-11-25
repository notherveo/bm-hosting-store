import { type LucideIcon } from "lucide-react";

export type Plan = {
  id: string;
  name: string;
  price: number;
  description: string;
  specs: { label: string; value: string }[];
  icon?: LucideIcon;
  popular?: boolean;
};

export const vpsPlans: Plan[] = [
  {
    id: "vps-2gb",
    name: "Starter",
    price: 19,
    description: "Perfect for small projects and development environments.",
    specs: [
      { label: "RAM", value: "2 GB" },
      { label: "CPU", value: "2 vCPU" },
      { label: "Storage", value: "50 GB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
  },
  {
    id: "vps-4gb",
    name: "Professional",
    price: 39,
    description: "Ideal for production workloads and small teams.",
    specs: [
      { label: "RAM", value: "4 GB" },
      { label: "CPU", value: "4 vCPU" },
      { label: "Storage", value: "100 GB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
    popular: true,
  },
  {
    id: "vps-8gb",
    name: "Business",
    price: 79,
    description: "For growing businesses and high-traffic applications.",
    specs: [
      { label: "RAM", value: "8 GB" },
      { label: "CPU", value: "8 vCPU" },
      { label: "Storage", value: "200 GB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
  },
  {
    id: "vps-16gb",
    name: "Enterprise",
    price: 149,
    description: "Maximum performance for demanding enterprise workloads.",
    specs: [
      { label: "RAM", value: "16 GB" },
      { label: "CPU", value: "16 vCPU" },
      { label: "Storage", value: "500 GB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
  },
  {
    id: "vps-32gb",
    name: "Ultra",
    price: 299,
    description: "For large-scale applications and data-intensive workloads.",
    specs: [
      { label: "RAM", value: "32 GB" },
      { label: "CPU", value: "32 vCPU" },
      { label: "Storage", value: "1 TB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
  },
  {
    id: "vps-64gb",
    name: "Mega",
    price: 599,
    description: "Extreme performance for the most demanding enterprise needs.",
    specs: [
      { label: "RAM", value: "64 GB" },
      { label: "CPU", value: "64 vCPU" },
      { label: "Storage", value: "2 TB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
  },
  {
    id: "vps-96gb",
    name: "Titan",
    price: 999,
    description: "Maximum resources for mission-critical enterprise infrastructure.",
    specs: [
      { label: "RAM", value: "96 GB" },
      { label: "CPU", value: "96 vCPU" },
      { label: "Storage", value: "4 TB NVMe" },
      { label: "Network", value: "1 Gbps" },
      { label: "Bandwidth", value: "Unlimited" },
    ],
  },
];

export const minecraftPlans: Plan[] = [
  {
    id: "mc-100",
    name: "Survival Starter",
    price: 9.99,
    description: "Perfect for small survival servers and private communities.",
    specs: [
      { label: "RAM", value: "4 GB" },
      { label: "CPU", value: "2 vCPU" },
      { label: "Storage", value: "50 GB NVMe" },
      { label: "Players", value: "100" },
      { label: "Software", value: "Vanilla / Paper" },
    ],
  },
  {
    id: "mc-200",
    name: "Survival Pro",
    price: 19.99,
    description: "Ideal for growing communities and public servers.",
    specs: [
      { label: "RAM", value: "8 GB" },
      { label: "CPU", value: "4 vCPU" },
      { label: "Storage", value: "100 GB NVMe" },
      { label: "Players", value: "200" },
      { label: "Software", value: "Vanilla / Paper / Fabric" },
    ],
    popular: true,
  },
  {
    id: "mc-300",
    name: "Survival Elite",
    price: 39.99,
    description: "For large communities and competitive multiplayer servers.",
    specs: [
      { label: "RAM", value: "16 GB" },
      { label: "CPU", value: "8 vCPU" },
      { label: "Storage", value: "200 GB NVMe" },
      { label: "Players", value: "300" },
      { label: "Software", value: "Vanilla / Paper / Fabric / Forge" },
    ],
  },
  {
    id: "mc-400",
    name: "Survival Ultimate",
    price: 79.99,
    description: "Maximum performance for massive multiplayer experiences.",
    specs: [
      { label: "RAM", value: "32 GB" },
      { label: "CPU", value: "16 vCPU" },
      { label: "Storage", value: "500 GB NVMe" },
      { label: "Players", value: "400" },
      { label: "Software", value: "Vanilla / Paper / Fabric / Forge / Modpacks" },
    ],
  },
  {
    id: "mc-500",
    name: "Survival Enterprise",
    price: 149.99,
    description: "Enterprise-grade performance for mission-critical multiplayer.",
    specs: [
      { label: "RAM", value: "64 GB" },
      { label: "CPU", value: "32 vCPU" },
      { label: "Storage", value: "1 TB NVMe" },
      { label: "Players", value: "500" },
      { label: "Software", value: "All supported software" },
    ],
  },
];
