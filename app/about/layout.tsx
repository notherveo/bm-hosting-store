import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "About Us | BlacMilk",
  description: "Learn about our hosting philosophy and infrastructure.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
