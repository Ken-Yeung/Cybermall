import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <main className="h-full w-full overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
