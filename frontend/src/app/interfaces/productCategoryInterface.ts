export interface SizeData {
  size: string;
  enabled: boolean;
}

export interface FrontendProduct {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: SizeData[];
  images: string[];
  thumbnail: string;
  original_price: number;
  slug: string;
  categories: FrontendCategory[];
}

export interface FrontendCategory {
  id: number;
  name: string;
  slug: string;
  products: FrontendProduct[];
}
