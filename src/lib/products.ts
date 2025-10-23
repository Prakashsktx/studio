export interface Product {
  id: number | string;
  name: string;
  price: number;
  category: string;
  image: string;
  imageHint: string;
  description: string;
  affiliateLink?: string;
}

export const products: Product[] = [];
