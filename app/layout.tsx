import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberMall",
  description: "A futuristic miscellaneous mall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">CyberMall</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="h-full w-full overflow-y-auto overflow-x-hidden ">
          {/*wrap with Provider importing from the './providers.tsx'*/}
          <NextUIProvider>{children}</NextUIProvider>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
