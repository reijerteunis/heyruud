import {IconArrowRight} from "@tabler/icons-react";

import {Button} from "@/components/shared/Button";

/**
 * Renders the hero section of the home page.
 * @returns {import('react').ReactElement} The hero section of the home page.
 */
export default function Hero(): React.ReactNode {
  return (
    <div className="flex flex-col items-start justify-center gap-6 py-40">
      <div className="flex flex-col items-start justify-start gap-2">
        <h1
          className={`
            order-2 text-5xl leading-15 font-medium
            md:max-w-lg
          `}
        >
          CTO, Builder, Product-led Tech Leader
        </h1>
        <p className="order-1 text-xl font-normal text-yellow-500 uppercase">
          Build. Lead. Explore
        </p>
      </div>
      <Button
        href="https://www.linkedin.com/in/ruudvanengelenhoven/"
        trailingIcon={<IconArrowRight />}
        ariaLabel="Connect with Ruud van Engelenhoven on LinkedIn"
      >
        Let&apos;s connect
      </Button>
    </div>
  );
}
