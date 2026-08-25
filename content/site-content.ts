export type DetailIcon = "location" | "education" | "focus" | "email";

export type ImageContent = {
  src: string;
  alt: string;
  position?: string;
};

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  name: string;
  initials: string;
  navigation: Array<{
    label: string;
    href: `#${string}`;
  }>;
  hero: {
    eyebrow: string;
    background: ImageContent;
    summary: string;
    scrollLabel: string;
  };
  about: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    paragraphs: string[];
    contactLabel: string;
    portrait: ImageContent;
    details: Array<{
      label: string;
      value: string;
      icon: DetailIcon;
      href?: string;
    }>;
  };
  now: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    introduction: string;
    items: Array<{
      label: string;
      text: string;
      href?: string;
    }>;
  };
  contact: {
    sectionNumber: string;
    sectionLabel: string;
    heading: string;
    invitation: string;
    email: string;
  };
  socials: Array<{
    label: "LinkedIn" | "GitHub";
    href: string;
  }>;
  footer: {
    note: string;
  };
};

// Edit this object to update every piece of personal content on the site.
export const siteContent: SiteContent = {
  metadata: {
    title: "Christopher Myers",
    description:
      "Christopher Myers is a software engineer interested in technology, design, cities, and thoughtful products.",
  },
  name: "Christopher Myers",
  initials: "CM",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Now", href: "#now" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Hello, I'm",
    background: {
      src: "/images/backgroundimage.webp",
      alt: "Coastal hills descending toward the ocean under an open sky",
      position: "center 62%",
    },
    summary:
      "Software engineer interested in technology, language, urban design, and building thoughtful products.",
    scrollLabel: "Scroll to explore",
  },
  about: {
    sectionNumber: "01",
    sectionLabel: "About",
    heading: "Hi, I’m Chris.",
    paragraphs: [
      "I’m a software engineer who enjoys building useful products and solving interesting problems. I care about making software that works well, feels intuitive, and is thoughtfully designed.",
      "Outside of product development, I spend my time exploring cities, architecture, languages, and the landscapes between them.",
    ],
    contactLabel: "Get in touch",
    portrait: {
      src: "/images/portrait.webp",
      alt: "A descriptive portrait alt text",
      position: "center 35%",
    },
    details: [
      { label: "Location", value: "California, USA", icon: "location" },
      { label: "Education", value: "UC San Diego", icon: "education" },
      {
        label: "Focus",
        value: "Software, AI & product development",
        icon: "focus",
      },
      {
        label: "Email",
        value: "hello@christophermyers.info",
        icon: "email",
        href: "mailto:hello@christophermyers.info",
      },
    ],
  },
  now: {
    sectionNumber: "02",
    sectionLabel: "Now",
    heading: "A few things shaping my days.",
    introduction:
      "A brief, evolving snapshot of what I’m thinking about, learning, and making room for right now.",
    items: [
      {
        label: "Currently",
        text: "Building useful products and exploring how AI can make everyday tools more intuitive.",
      },
      {
        label: "Interested in",
        text: "Technology, architecture, urbanism, travel, languages, and enduring design.",
      },
      {
        label: "Based in",
        text: "Los Angeles, with an enduring curiosity for cities and coastlines elsewhere.",
      },
      {
        label: "Elsewhere",
        text: "Find occasional notes and work in progress on GitHub and LinkedIn.",
        href: "#contact",
      },
    ],
  },
  contact: {
    sectionNumber: "03",
    sectionLabel: "Contact",
    heading: "Let’s make something useful.",
    invitation:
      "I’m always happy to talk about interesting ideas, projects, or opportunities.",
    email: "hello@christophermyers.info",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/c-t-myers" },
    { label: "GitHub", href: "https://github.com/chessmyers" },
  ],
  footer: {
    note: "Designed with care in California.",
  },
};
