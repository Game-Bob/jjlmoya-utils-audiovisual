import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep } from '../../types';

interface SchemaInput {
  title: string;
  description: string;
  faq: FAQItem[];
  howTo: HowToStep[];
  language: string;
}

export function createSchemas({ title, description, faq, howTo, language }: SchemaInput) {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage: language,
  };
  return [faqSchema, howToSchema, appSchema];
}
