export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 101,
    name: "Classic Linen Shirt",
    price: 85.00,
    category: "Tops",
    imageUrl: "https://picsum.photos/seed/product-101/600/800",
    imageHint: "linen shirt",
    description: "A timeless linen shirt that combines comfort and style. Made from 100% organic linen, it's perfect for warm days and can be dressed up or down. Features a classic collar, button-front closure, and a relaxed fit."
  },
  {
    id: 102,
    name: "Tailored Trousers",
    price: 120.00,
    category: "Bottoms",
    imageUrl: "https://picsum.photos/seed/product-102/600/800",
    imageHint: "tailored trousers",
    description: "Expertly tailored for a flattering fit, these trousers are a wardrobe essential. The high-waisted design and wide-leg silhouette create a modern look, while the lightweight fabric ensures all-day comfort."
  },
  {
    id: 103,
    name: "Elegant Puff Sleeve Blouse",
    price: 95.00,
    category: "Tops",
    imageUrl: "https://picsum.photos/seed/product-103/600/800",
    imageHint: "white blouse",
    description: "Make a statement with this elegant blouse, featuring dramatic puff sleeves and a delicate neckline. Crafted from soft, breathable cotton, it's the perfect piece for special occasions or elevating your everyday look."
  },
  {
    id: 104,
    name: "Everyday Denim Jeans",
    price: 110.00,
    category: "Bottoms",
    imageUrl: "https://picsum.photos/seed/product-104/600/800",
    imageHint: "denim jeans",
    description: "Our signature denim jeans, designed for a perfect fit and ultimate comfort. With a classic straight-leg cut and a hint of stretch, they are versatile enough for any occasion. Made with sustainable materials."
  },
  {
    id: 105,
    name: "Cozy Cashmere Sweater",
    price: 250.00,
    category: "Outerwear",
    imageUrl: "https://picsum.photos/seed/product-105/600/800",
    imageHint: "cashmere sweater",
    description: "Indulge in the luxury of 100% pure cashmere. This sweater is incredibly soft, warm, and lightweight. Featuring a relaxed fit and ribbed trim, it's a timeless piece you'll treasure for years to come."
  },
  {
    id: 106,
    name: "Leather Tote Bag",
    price: 180.00,
    category: "Accessories",
    imageUrl: "https://picsum.photos/seed/product-106/600/800",
    imageHint: "leather tote",
    description: "A versatile and chic leather tote bag that's perfect for any occasion. Crafted from high-quality leather, it features a spacious interior, multiple pockets, and a timeless design that will complement any outfit."
  },
  {
    id: 107,
    name: "Classic Trench Coat",
    price: 350.00,
    category: "Outerwear",
    imageUrl: "https://picsum.photos/seed/product-107/600/800",
    imageHint: "trench coat",
    description: "A timeless trench coat that will never go out of style. Made from a water-resistant cotton blend, it's perfect for transitional weather. Features a double-breasted front, a belted waist, and a classic collar."
  }
];
