import { Product } from '@/lib/products';

export interface Outfit {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  items: Product[];
}

export const outfits: Outfit[] = []
