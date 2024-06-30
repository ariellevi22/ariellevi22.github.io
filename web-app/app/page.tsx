import HeroHeader from "@/components/hero-header";
import About from "@/views/about";
import Education from "@/views/education";
import Experience from "@/views/experience";
import Portfolio from "@/views/portfolio";

/** The app's landing page */
const HomePage = () => (
  <main>
    <HeroHeader />
    <About />
    <Experience />
    <Portfolio />
    <Education />
  </main>
);

export default HomePage;
