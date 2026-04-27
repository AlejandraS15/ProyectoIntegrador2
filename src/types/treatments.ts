export interface TreatmentFaq {
  answer: string;
  question: string;
}

export interface TreatmentProcessStep {
  description: string;
  title: string;
}

export interface TreatmentDetail {
  benefits: string[];
  duration: string;
  expectedResults: string[];
  eyebrow: string;
  faqs: TreatmentFaq[];
  heroImage: string;
  icon: string;
  process: TreatmentProcessStep[];
  seoDescription: string;
  seoKeywords: string;
  slug: string;
  summary: string;
  title: string;
  whatsappText: string;
}
