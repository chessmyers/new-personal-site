import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NowSection } from "@/components/now-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content">
        <Hero />
        <About />
        <NowSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
