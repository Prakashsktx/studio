export interface Product {
  id: number | string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  description: string;
}

export const products: Product[] = [];
