import { Header } from "./components/header";
import { LandingHero } from "./components/landing-hero";
import { CategoriesSection } from "./components/categories-section";
import { AboutSection } from "./components/about-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LandingHero />
        <CategoriesSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
