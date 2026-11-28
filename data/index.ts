import cyvantaData from "./cyvanta.json";

export type RawCyvantaData = typeof cyvantaData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

/* ------------------------------- ICON KEYS -------------------------------- */

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

/** Replace the JSON-inferred `icon: string` of each list item with a strict icon key. */
type WithIcons<T, K extends keyof T, Icon extends string> = Omit<T, K> & {
  [P in K]: T[P] extends (infer Item)[]
    ? (Omit<Item, "icon"> & { icon: Icon })[]
    : T[P];
};

/* ------------------------------ SECTION TYPES ----------------------------- */

const sec = cyvantaData.CyvantaCyberSecurity.sections;

export type CyvantaBrandData = typeof sec.Brand.variants.CyvantaBrand1;
export type CyvantaTopBarData = typeof sec.TopBar.variants.CyvantaTopBar1;
export type CyvantaHeaderData = typeof sec.Header.variants.CyvantaHeader1;
export type CyvantaBannerData = typeof sec.Banner.variants.CyvantaBanner1;
export type CyvantaAboutData = WithIcons<
  typeof sec.AboutSection.variants.CyvantaAbout1,
  "features",
  AboutIconKey
>;
export type CyvantaServicesData = WithIcons<
  typeof sec.Services.variants.CyvantaServices1,
  "services",
  ServiceIconKey
>;
export type CyvantaWhyChooseUsData = WithIcons<
  typeof sec.WhyChooseUs.variants.CyvantaWhyChooseUs1,
  "features",
  ReasonIconKey
>;
export type CyvantaTestimonialData = typeof sec.Testimonial.variants.CyvantaTestimonial1;
export type CyvantaFaqsData = typeof sec.Faqs.variants.CyvantaFaqs1;
export type CyvantaContactData = typeof sec.ContactSection.variants.CyvantaContact1;
export type CyvantaFooterData = typeof sec.Footer.variants.CyvantaFooter1;

export type CyvantaServiceItem = CyvantaServicesData["services"][number];

/* ---------------------------------- SITE ---------------------------------- */

export const site: {
  brand: CyvantaBrandData;
  topBar: CyvantaTopBarData;
  navbar: CyvantaHeaderData;
  banner: CyvantaBannerData;
  about: CyvantaAboutData;
  services: CyvantaServicesData;
  whyChooseUs: CyvantaWhyChooseUsData;
  testimonial: CyvantaTestimonialData;
  faqs: CyvantaFaqsData;
  contact: CyvantaContactData;
  footer: CyvantaFooterData;
} = {
  brand: sec.Brand.variants.CyvantaBrand1,
  topBar: sec.TopBar.variants.CyvantaTopBar1,
  navbar: sec.Header.variants.CyvantaHeader1,
  banner: sec.Banner.variants.CyvantaBanner1,
  about: sec.AboutSection.variants.CyvantaAbout1 as CyvantaAboutData,
  services: sec.Services.variants.CyvantaServices1 as CyvantaServicesData,
  whyChooseUs: sec.WhyChooseUs.variants.CyvantaWhyChooseUs1 as CyvantaWhyChooseUsData,
  testimonial: sec.Testimonial.variants.CyvantaTestimonial1,
  faqs: sec.Faqs.variants.CyvantaFaqs1,
  contact: sec.ContactSection.variants.CyvantaContact1,
  footer: sec.Footer.variants.CyvantaFooter1,
};

export default cyvantaData;
