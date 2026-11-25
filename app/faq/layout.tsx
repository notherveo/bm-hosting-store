import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "FAQ | BlacMilk",
  description: "Frequently asked questions about our hosting services.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
