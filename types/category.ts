export type AboutIconKey = "shieldCheck" | "layers" | "team";

export type ServiceIconKey =
  | "shieldCheck"
  | "layers"
  | "lock"
  | "cloudLock"
  | "users"
  | "monitor"
  | "shieldStar"
  | "headset";

export type ReasonIconKey =
  | "shieldCheck"
  | "layers"
  | "laptopGear"
  | "handshake";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface CategoryData {
  common: {
    site: {
      name: string;
      logo: string;
      tagline: string;
      description: string;
      addressLine1: string;
      addressLine2: string;
      phone: string;
      phoneHref: string;
      email: string;
      emailHref: string;
      contactHref: string;
      contactButtonLabel: string;
    };
    navigation: NavigationItem[];
    navigationLabels: {
      main: string;
      mobile: string;
    };
    accessibility: {
      openMenu: string;
      closeMenu: string;
      previousTestimonials: string;
      nextTestimonials: string;
      testimonialPageLabel: string;
    };
  };
  hero: {
    titleBefore: string;
    titleAccent: string;
    titleAfter: string[];
    description: string;
    image: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    image: string;
    imageAlt: string;
    accentImage: string;
    accentImageAlt: string;
    features: {
      titleLines: string[];
      icon: AboutIconKey;
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    items: {
      label: string;
      titleLines: string[];
      description: string;
      icon: ServiceIconKey;
    }[];
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    image: string;
    imageAlt: string;
    features: {
      number: string;
      title: string;
      description: string;
      icon: ReasonIconKey;
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    ratingLabel: string;
    items: {
      name: string;
      role: string;
      quote: string;
    }[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    titlePrefix: string;
    titleAccent: string;
    calloutTitle: string;
    calloutDescription: string;
    contactButtonLabel: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    information: {
      locationTitle: string;
      emailTitle: string;
      responseTime: string;
      phoneTitle: string;
      workingHoursTitle: string;
      days: string;
      hours: string;
      schedule: string;
    };
    form: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      servicePlaceholder: string;
      messagePlaceholder: string;
      submitLabel: string;
      phonePattern: string;
      phoneValidationMessage: string;
      successMessage: string;
      emailActionLabel: string;
      emailSubjectPrefix: string;
    };
  };
  footer: {
    quickLinksTitle: string;
    contactTitle: string;
    quickLinks: NavigationItem[];
    copyright: string;
  };
}