import About from "./About";
import Hero from "./Hero";

/**
 * Renders the home page with a hero section.
 * @returns {import('react').ReactElement} The main content of the home page.
 */
export default function Home(): React.ReactNode {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
