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
    portrait: ImageContent | null;
    portraitPlaceholder: {
      eyebrow: string;
      note: string;
    };
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
    title: "Christopher Myers — Personal Profile",
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
    eyebrow: "Personal profile · Los Angeles",
    background: {
      src: "/images/backgroundimage.jpg",
      alt: "Coastal hills descending toward the ocean under an open sky",
      position: "center 62%",
    },
    summary:
      "Software engineer interested in technology, design, cities, and building thoughtful products.",
    scrollLabel: "Scroll to explore",
  },
  about: {
    sectionNumber: "01",
    sectionLabel: "About",
    heading: "Hi, I’m Christopher.",
    paragraphs: [
      "I’m a software engineer who enjoys turning complex ideas into useful, considered products. My work sits at the intersection of technology, design, and the way people experience the world around them.",
      "I’m especially drawn to thoughtful details, clear systems, and work that feels quietly human. Outside of software, I spend my time exploring cities, architecture, languages, and the landscapes between them.",
    ],
    contactLabel: "Get in touch",
    portrait: null,
    portraitPlaceholder: {
      eyebrow: "Portrait",
      note: "Add your photograph in public/images/portrait.jpg",
    },
    details: [
      { label: "Location", value: "Los Angeles, CA", icon: "location" },
      { label: "Education", value: "UC San Diego", icon: "education" },
      {
        label: "Focus",
        value: "Software, AI & product development",
        icon: "focus",
      },
      {
        label: "Email",
        value: "hello@example.com",
        icon: "email",
        href: "mailto:hello@example.com",
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
    heading: "Let’s make something thoughtful.",
    invitation:
      "Have a question, an idea, or simply want to say hello? I’d be glad to hear from you.",
    email: "hello@example.com",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/example" },
    { label: "GitHub", href: "https://github.com/example" },
  ],
  footer: {
    note: "Designed with care in Los Angeles.",
  },
};
