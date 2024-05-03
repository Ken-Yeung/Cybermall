// only allow the necessary NextUI components to be render on the site that user currently viewing
"use client";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
