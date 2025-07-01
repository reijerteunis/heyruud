/**
 * Props for the SkillCard component.
 *
 * Accessibility: The SkillCard component includes an aria-label for the article element for improved screen reader support.
 * Microdata: The component uses schema.org microdata (DefinedTerm, name, termCode) for SEO and structured data.
 */
export interface SkillCardProps {
  /**
   * The title of the skill card.
   */
  title: string;
  /**
   * The list of items/skills to display.
   */
  items: string[];
  /**
   * Optional additional class names for the card.
   */
  className?: string;
  /**
   * Optional microdata itemProp for the root element.
   */
  itemProp?: string;
}
