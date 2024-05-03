import type { Metadata } from "next";
import { Provider } from "./providers";
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
      <body className={`${inter.className} dark`}>
        {/*wrap with Provider importing from the './providers.tsx'*/}
        <Provider>
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
            {children}
          </main>
          <footer></footer>
        </Provider>
      </body>
    </html>
  );
}
