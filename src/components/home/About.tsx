import Image from "next/image";

import {Metrics} from "../shared";

/**
 * About section component for the homepage.
 * Displays a brief introduction, leadership philosophy, and key career metrics.
 *
 * Uses the Metrics component to render experience highlights.
 * @returns {import('react').ReactElement} The rendered About section.
 */
export default function About(): React.ReactNode {
  return (
    <div
      className={`
        flex flex-col items-start justify-start gap-10 rounded-3xl bg-black-800
        p-10
        md:flex-row md:items-center md:gap-20 md:p-20
      `}
    >
      <Image
        src="/ruud.png"
        width={209}
        height={313}
        alt="Ruud Photo Sketch"
        className="md:w-[100rem]"
      />
      <div className="inline-flex flex-col items-start justify-start gap-14">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-lg font-medium text-yellow-500 uppercase">
            Leading with Intent
          </h2>
          <p
            className={`
              text-base leading-[1.666] font-normal text-black-100
              md:text-lg
            `}
          >
            With over two decades in tech, my work has always been rooted in
            building the right things the right way. I've led engineering and
            product teams through scale, transformation, and uncertainty —
            always balancing systems thinking with real-world delivery. From
            hands-on architecture to org-wide leadership, I focus on clarity,
            calm, and creating the space for teams to do their best work. After
            years of staying behind the scenes, I'm now showing up more visibly
            — to collaborate, share, and build what's next.
          </p>
        </div>
        <div
          className={`
            flex flex-row items-start justify-start gap-8
            md:gap-14
          `}
        >
          <Metrics value={20} valueSuffix="+" label="Years of Experience" />
          <Metrics value={50} valueSuffix="+" label="Engineering Team Led" />
          <Metrics value={8} valueSuffix="+" label="Industries Served" />
        </div>
      </div>
    </div>
  );
}
