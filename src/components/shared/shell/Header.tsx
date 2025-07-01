import Image from "next/image";
import Link from "next/link";

/**
 * Site header component for Hey Ruud personal website.
 *
 * Renders the site logo as a link to the homepage, with structured data for SEO and accessibility best practices.
 *
 * - Uses semantic <header> element for site-wide header landmark.
 * - Includes Schema.org Person microdata for generative engine optimization.
 * - Logo is linked to the homepage and includes descriptive alt text for accessibility.
 * @returns {import('react').ReactElement} React element representing the site header.
 */
export default function Header() {
  return (
    <header
      itemScope
      itemType="https://schema.org/Person"
      className={`inline-flex w-full items-center justify-start gap-4 py-3`}
    >
      <Link href="/" itemProp="url">
        <Image
          src="/logo.svg"
          alt="Hey Ruud homepage"
          width={135}
          height={30}
          itemProp="image"
        />
      </Link>
    </header>
  );
}
