import Home from "@/components/home";

export const metadata = {
  title: "Hey Ruud – CTO. Builder. Product-led Tech Leader.",
  description:
    "Ruud is a seasoned CTO with 20+ years of experience building engineering teams and digital products. Now building in public and exploring what's next in AI and technology.",
  metadataBase: new URL("https://heyruud.com"),
  openGraph: {
    title: "Hey Ruud – CTO. Builder. Product-led Tech Leader.",
    description:
      "Seasoned CTO with 20+ years of experience leading teams and launching products. Building in public and exploring the future of tech and AI.",
    url: "https://heyruud.com",
    siteName: "Hey Ruud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://heyruud.com/og-image.png", // Replace with your OG image path
        width: 1200,
        height: 630,
        alt: "Hey Ruud – CTO. Builder. Product-led Tech Leader.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Ruud – CTO. Builder. Product-led Tech Leader.",
    description:
      "20+ years of engineering leadership. Exploring what's next in tech, product, and AI.",
    creator: "@yourhandle", // optional
    images: ["https://heyruud.com/og-image.png"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://heyruud.com/",
  },
};
/**
 * Home page of heyruud.com
 * Displays the main introduction and tagline for Ruud van Engelenhoven.
 */
/**
 * Renders the home page with a headline and a tagline.
 * @returns {import('react').ReactElement} The main content of the home page.
 */
export default function HomePage() {
  return <Home />;
}
