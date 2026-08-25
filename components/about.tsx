import {
  Compass,
  GraduationCap,
  Mail,
  MapPin,
  MoveUpRight,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { siteContent, type DetailIcon } from "@/content/site-content";

const detailIcons: Record<DetailIcon, LucideIcon> = {
  location: MapPin,
  education: GraduationCap,
  focus: Compass,
  email: Mail,
};

export function About() {
  const { about, initials } = siteContent;

  return (
    <section id="about" className="section section--about scroll-mt-0">
      <div className="page-shell">
        <Reveal>
          <SectionLabel number={about.sectionNumber} label={about.sectionLabel} />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={70}>
            <h2 className="display-heading">{about.heading}</h2>
            <div className="body-copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a className="outline-link" href="#contact">
              <span>{about.contactLabel}</span>
              <MoveUpRight aria-hidden="true" size={16} />
            </a>
          </Reveal>

          <Reveal className="portrait-frame" delay={140}>
            {about.portrait ? (
              <Image
                className="portrait-image"
                src={about.portrait.src}
                alt={about.portrait.alt}
                fill
                sizes="(max-width: 767px) 100vw, 46vw"
                style={{ objectPosition: about.portrait.position }}
              />
            ) : (
              <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder">
                <span className="portrait-placeholder__eyebrow">
                  {about.portraitPlaceholder.eyebrow}
                </span>
                <span className="portrait-placeholder__initials">{initials}</span>
                <span className="portrait-placeholder__line" aria-hidden="true" />
                <span className="portrait-placeholder__note">
                  {about.portraitPlaceholder.note}
                </span>
              </div>
            )}
          </Reveal>
        </div>

        <div className="details-grid">
          {about.details.map((detail, index) => {
            const Icon = detailIcons[detail.icon];
            const content = (
              <>
                <Icon className="detail-item__icon" aria-hidden="true" strokeWidth={1.4} />
                <span className="detail-item__label">{detail.label}</span>
                <span className="detail-item__value">{detail.value}</span>
              </>
            );

            return (
              <Reveal className="detail-item" delay={index * 55} key={detail.label}>
                {detail.href ? (
                  <a href={detail.href} aria-label={`${detail.label}: ${detail.value}`}>
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
