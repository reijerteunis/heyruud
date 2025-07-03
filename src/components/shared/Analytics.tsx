import Script from "next/script";

/**
 * Google Analytics tracking for the site.
 * Usage: Place <Analytics /> in your layout or _app file.
 * @returns {import('react').JSX.Element} Analytics script tags
 */
export default function Analytics() {
  return (
    <>
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
    </>
  );
}
