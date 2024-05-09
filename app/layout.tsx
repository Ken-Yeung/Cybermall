import type { Metadata } from "next";
import { Provider } from "./providers";
import { Inter } from "next/font/google";
import InfoBar from "./components/infoBar/infoBar";
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
      <body className={`${inter.className} dark`}>
        {/*wrap with Provider importing from the './providers.tsx'*/}
        <Provider>
          <header className=" bg-night3">
            <InfoBar />
          </header>
          <main className="h-full w-full overflow-y-auto overflow-x-hidden ">
            {children}
          </main>
          <footer></footer>
        </Provider>
      </body>
    </html>
  );
}
