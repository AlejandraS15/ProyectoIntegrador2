export interface SeoMetadata {
  description: string;
  imageUrl?: string;
  keywords?: string;
  title: string;
}

export interface ViewModel {
  seo: SeoMetadata;
}
