import {Inter, Bebas_Neue} from "next/font/google";

import Footer from "@/components/shared/shell/Footer";
import Header from "@/components/shared/shell/Header";

import type React from "react";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

/**
 * Root layout component for the app.
 * @param {{ children: import('react').ReactNode }} root0 - The props object.
 * @param {import('react').ReactNode} root0.children - The child nodes to render.
 * @returns {import('react').ReactElement} The root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${bebasNeue.variable}
          antialiased
        `}
      >
        <div
          className={`
            container mx-auto flex min-h-screen flex-1 flex-col items-center
            justify-items-center gap-16 p-4
            font-[family-name:var(--font-inter)]
          `}
        >
          <Header />
          <main
            className={`
              row-start-2 flex w-full flex-1 flex-col items-start justify-center
              gap-[32px]
              sm:items-start
            `}
            id="main-content"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
