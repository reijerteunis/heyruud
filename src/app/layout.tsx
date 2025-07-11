import Script from "next/script";

import Analytics from "@/components/shared/Analytics";
import Footer from "@/components/shared/shell/Footer";
import Header from "@/components/shared/shell/Header";
import {mulish, bebasNeue} from "@/lib/fonts";
import websiteSchema from "@/lib/websiteSchema";

import type React from "react";

import "./globals.css";

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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3YV8W4E093"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3YV8W4E093');
            `,
          }}
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Favicon and icon meta tags */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Android Chrome icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional meta tags for better icon support */}
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
      </head>
      <body
        className={`
          ${mulish.variable}
          ${bebasNeue.variable}
          antialiased
        `}
      >
        <div
          className={`
            container mx-auto flex min-h-screen flex-1 flex-col items-center
            justify-items-center gap-16 p-4
            font-[family-name:var(--font-mulish)]
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
          {/* Google Analytics */}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
