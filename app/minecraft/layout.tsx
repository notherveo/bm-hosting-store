import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Minecraft Hosting | BlacMilk",
  description:
    "Low-latency Minecraft server hosting — Vanilla, Paper, Fabric, Forge and modpacks, on NVMe.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
