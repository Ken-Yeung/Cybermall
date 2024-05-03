// Client Side Providers
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function CLIProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
