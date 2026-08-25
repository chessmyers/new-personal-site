import { ArrowDown } from "lucide-react";
import Image from "next/image";

import { siteContent } from "@/content/site-content";
import { Header } from "@/components/header";

export function Hero() {
  const { hero, name } = siteContent;

  return (
    <section id="top" className="hero relative isolate min-h-[100svh] overflow-hidden">
      <Image
        className="hero__image"
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: hero.background.position }}
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <Header />

      <div className="hero__content">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1>{name}</h1>
        <span className="hero__rule" aria-hidden="true" />
        <p className="hero__summary">{hero.summary}</p>
      </div>

      <a className="scroll-cue" href="#about">
        <span>{hero.scrollLabel}</span>
        <ArrowDown aria-hidden="true" strokeWidth={1.25} />
      </a>
    </section>
  );
}
