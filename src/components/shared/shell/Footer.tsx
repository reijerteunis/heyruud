import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Footer component for heyruud.com
 *
 * Displays contact information, social links, and copyright.
 * Uses Tabler icons for social media and provides accessible links.
 * @returns {import('react').ReactElement} The rendered footer section.
 */
export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col gap-16">
      <div
        className={`
          flex flex-col justify-between gap-16
          md:flex-row
        `}
      >
        <div className="flex max-w-md flex-col gap-4">
          <Image
            src="/logo.svg"
            alt="Hey Ruud homepage"
            width={108}
            height={30}
            itemProp="image"
          />
          <p className="text-neutral-400">
            Seasoned CTO and product-focused builder with 20+ years of
            experience leading engineering teams and launching digital products.
            Currently open to new opportunities and collaborations.
          </p>
          <Link
            href="https://www.linkedin.com/in/ruudvanengelenhoven/"
            className={`
              inline-flex w-fit items-center justify-center gap-1.5
              overflow-hidden rounded-lg bg-zinc-950 px-4 py-2.5
              shadow-[0px_1px_2px_0px_rgba(255,255,255,0.00),inset_0px_-2px_0px_0px_rgba(12,14,18,0.05),inset_0px_0px_0px_1px_rgba(12,14,18,0.18)]
              outline-1 outline-offset-[-1px] outline-zinc-700 transition-colors
              duration-200
              hover:bg-zinc-900
            `}
          >
            Let's connect
            <IconArrowRight size={24} />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <strong className="text-sm uppercase">Email me at</strong>
            <Link href="mailto:ruud@heyruud.com">ruud@heyruud.com</Link>
          </div>
          <div className="flex flex-col gap-2">
            <strong className="text-sm uppercase">Call me at</strong>
            <Link href="tel:+4915155616564">+49 151 5561 6564</Link>
          </div>
          <div className="flex flex-col gap-2">
            <strong className="text-sm uppercase">Where I live</strong>
            <Link href="https://www.google.com/maps/place/Berlin,+Germany">
              Berlin, Germany
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`
          flex flex-col justify-between gap-4 border-t border-zinc-800 pt-8
          md:flex-row
        `}
      >
        <span className="text-neutral-400">
          © {new Date().getFullYear()} Ruud van Engelenhoven. All rights
          reserved.
        </span>
        <nav className="flex flex-row gap-4 text-neutral-500">
          <Link href="https://www.linkedin.com/in/ruudvanengelenhoven/">
            <IconBrandLinkedin size={24} />
          </Link>
          <Link href="https://github.com/reijerteunis">
            <IconBrandGithub size={24} />
          </Link>
          <Link href="https://bsky.app/profile/ruudvane.bsky.social">
            <IconBrandBluesky size={24} />
          </Link>
          <Link href="https://wa.me/4915155616564">
            <IconBrandWhatsapp size={24} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
