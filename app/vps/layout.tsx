import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "VPS Hosting | BlacMilk",
  description: "Powerful VPS plans for developers and businesses.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
