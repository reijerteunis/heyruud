import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";

/**
 * Renders the home page with a hero section.
 * @returns {import('react').ReactElement} The main content of the home page.
 */
export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-col items-start justify-start gap-20">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
