import SkillCard from "@/components/shared/SkillCard";

/**
 * Skills section component for the homepage.
 *
 * Displays a set of core strengths and skill categories using SkillCard components.
 *
 * Accessibility:
 * - Uses a <section> with aria-labelledby referencing the heading for screen readers.
 * - Heading is descriptive and unique for navigation.
 *
 * Microdata:
 * - The section uses schema.org Person microdata.
 * - Each SkillCard is marked as a hasSkill property of the Person.
 * @returns {import('react').ReactNode} The rendered Skills section.
 */
export default function Skills(): React.ReactNode {
  return (
    <section
      className="flex w-full flex-col items-start justify-start gap-10"
      aria-labelledby="skills-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h2
        id="skills-heading"
        className="text-4xl font-medium text-black-200"
        itemProp="description"
      >
        <span className="text-white">Core Strengths,</span> applied with purpose
      </h2>
      <div
        className={`
          grid w-full grid-cols-1 gap-10
          md:grid-cols-3
        `}
      >
        <SkillCard
          title="Technical Architecture & Engineering"
          items={[
            "Scalable systems design",
            "API and integration strategy",
            "Modular architecture patterns",
            "CI/CD implementation",
            "Code quality and review practices",
          ]}
          itemProp="hasSkill"
        />
        <SkillCard
          title="AI & Intelligent Workflows"
          items={[
            "Prompt engineering",
            "AI agent orchestration",
            "Context + memory design",
            "OpenAI / Claude API integration",
            "AI-enhanced product flows",
          ]}
          itemProp="hasSkill"
        />
        <SkillCard
          title="Product & Technical Strategy"
          items={[
            "Roadmap shaping",
            "MVP definition",
            "Product-architecture alignment",
            "Speed vs sustainability tradeoffs",
            "Tooling and stack evaluation",
          ]}
          itemProp="hasSkill"
        />
        <SkillCard
          title="Engineering Leadership & Management"
          items={[
            "Team structure & org design",
            "Technical hiring",
            "Mentorship and coaching",
            "Performance frameworks",
            "Cross-functional alignment",
          ]}
          itemProp="hasSkill"
        />
        <SkillCard
          title="Collaboration & Communication"
          items={[
            "Stakeholder management",
            "Technical storytelling",
            "Remote team facilitation",
            "Conflict resolution",
            "Asynchronous communication",
          ]}
          itemProp="hasSkill"
        />
        <SkillCard
          title="Execution & Delivery"
          items={[
            "Outcome-driven delivery",
            "Iterative planning",
            "Risk-based prioritization",
            "Delivery ops optimization",
            "Progress visibility & reporting",
          ]}
          itemProp="hasSkill"
        />
      </div>
    </section>
  );
}
