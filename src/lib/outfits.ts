import { products, Product } from '@/lib/products';

export interface Outfit {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  items: Product[];
}

export const outfits: Outfit[] = [
    {
        id: 1,
        name: "Casual Weekend",
        description: "A relaxed and stylish look for your weekend outings.",
        imageUrl: "https://picsum.photos/seed/outfit-1/600/800",
        items: products.filter(p => [104, 101, 105].includes(p.id)),
    },
    {
        id: 2,
        name: "Office Chic",
        description: "A polished and professional outfit for the modern workplace.",
        imageUrl: "https://picsum.photos/seed/outfit-2/600/800",
        items: products.filter(p => [103, 102, 107].includes(p.id)),
    }
]
