import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { siteContent } from "@/content/site-content";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
};

export function Contact() {
  const { contact, socials } = siteContent;

  return (
    <section id="contact" className="section section--contact">
      <div className="page-shell">
        <Reveal>
          <SectionLabel number={contact.sectionNumber} label={contact.sectionLabel} />
        </Reveal>

        <Reveal className="contact-content" delay={80}>
          <h2 className="display-heading">{contact.heading}</h2>
          <p>{contact.invitation}</p>

          <a className="email-link" href={`mailto:${contact.email}`}>
            <span>{contact.email}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>

          <div className="social-links" aria-label="Social profiles">
            {socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  key={social.label}
                >
                  <Icon aria-hidden="true" size={17} strokeWidth={1.5} />
                  <span>{social.label}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
