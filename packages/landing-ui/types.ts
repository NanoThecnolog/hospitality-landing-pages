export type LinkItem = { label: string; href: string };
export type Feature = { number: string; title: string; text: string };
export type Stay = { name: string; location: string; description: string; image: string; price?: string };

export type SiteConfig = {
  layout?: 'classic' | 'editorial';
  brand: string;
  shortBrand: string;
  eyebrow: string;
  description: string;
  colors: { primary: string; primaryDark: string; accent: string; paper: string; ink: string; muted: string };
  logo?: string;
  hero: { title: string; highlight: string; text: string; image: string; note: string };
  nav: LinkItem[];
  contact: { phone: string; phoneDisplay: string; whatsapp: string; whatsappDisplay: string; hours: string; address: string; cnpj?: string };
  about: { title: string; intro: string; paragraphs: string[]; image: string; facts: { value: string; label: string }[] };
  features: Feature[];
  stays: Stay[];
  gallery: string[];
  videoId?: string;
  notice: { title: string; paragraphs: string[]; important: string };
};
