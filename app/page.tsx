import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NowSection } from "@/components/now-section";
import { siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content">
        <Hero />
        <About />
        {siteContent.visibility.showNow ? <NowSection /> : null}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
