import {skillCard, skillCardTitle, skillCardList} from "./styles";

import type {SkillCardProps} from "./types";

/**
 * SkillCard component displays a titled list of skills or strengths.
 * @param {SkillCardProps} props - The props for the SkillCard component.
 * @param {string} props.title - The title of the skill card.
 * @param {string[]} props.items - The list of items/skills to display.
 * @param {string} [props.className] - Optional additional class names for the card.
 * @param {string} [props.itemProp] - Optional itemProp for microdata support.
 * @returns {import("react").ReactNode} The rendered SkillCard component.
 */
export default function SkillCard({
  title,
  items,
  className,
  itemProp,
}: SkillCardProps) {
  return (
    <article
      className={skillCard({className})}
      aria-label={title}
      {...(itemProp ? {itemProp} : {})}
    >
      <h3 className={skillCardTitle()}>{title}</h3>
      <ul className={skillCardList()}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
