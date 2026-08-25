import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { siteContent } from "@/content/site-content";

export function NowSection() {
  const { now } = siteContent;

  return (
    <section id="now" className="section section--now">
      <div className="page-shell">
        <Reveal>
          <SectionLabel number={now.sectionNumber} label={now.sectionLabel} />
        </Reveal>

        <div className="now-layout">
          <Reveal className="now-intro" delay={60}>
            <h2 className="display-heading">{now.heading}</h2>
            <p>{now.introduction}</p>
          </Reveal>

          <div className="now-grid">
            {now.items.map((item, index) => {
              const inner = (
                <>
                  <span className="now-item__number">0{index + 1}</span>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                  {item.href ? <ArrowUpRight aria-hidden="true" /> : null}
                </>
              );

              return (
                <Reveal className="now-item" delay={90 + index * 55} key={item.label}>
                  {item.href ? <a href={item.href}>{inner}</a> : inner}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
