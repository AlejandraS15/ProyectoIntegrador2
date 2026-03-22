export interface SeoMetadata {
  description: string;
  imageUrl?: string;
  title: string;
}

export interface ViewModel {
  seo: SeoMetadata;
}
