'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OutfitGrid } from '@/components/OutfitGrid';
import { ProductDetail } from '@/components/ProductDetail';
import type { Product } from '@/lib/products';
import { Newsletter } from '@/components/Newsletter';
import { useDatabase } from '@/firebase';
import { ref, onValue } from 'firebase/database';
import { Outfit } from '@/lib/outfits';
import { useRouter } from 'next/navigation';

export default function OutfitsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const db = useDatabase();
  const router = useRouter();

  useEffect(() => {
    if (db) {
      const productsRef = ref(db, 'products');
      const unsubscribeProducts = onValue(productsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const productsArray: Product[] = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setProducts(productsArray);
        } else {
          setProducts([]);
        }
      });

      const outfitsRef = ref(db, 'outfits');
      const unsubscribeOutfits = onValue(outfitsRef, (snapshot) => {
          const data = snapshot.val();
          const outfitsArray: Outfit[] = data ? Object.keys(data).map(key => {
            const outfitData = data[key];
            
            const itemsArray = outfitData.items && typeof outfitData.items === 'object' 
              ? Object.keys(outfitData.items).map(itemKey => ({
                  id: itemKey,
                  ...(outfitData.items[itemKey] as Omit<Product, 'id'>)
                }))
              : [];

            return {
              id: key,
              ...outfitData,
              items: itemsArray as Product[]
            };
          }) : [];
          setOutfits(outfitsArray);
      });

      return () => {
        unsubscribeProducts();
        unsubscribeOutfits();
      };
    }
  }, [db]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  }

  const handleBackToOutfits = () => {
    setSelectedProduct(null);
  }

  const handleSelectOutfit = (outfit: Outfit) => {
    // For now, we'll just log this. In the future you could navigate to an outfit detail page.
    console.log('Selected outfit:', outfit);
  }
  
  const handleHomeNavigation = () => {
    router.push('/');
  }

  const renderContent = () => {
    if (selectedProduct) {
        return <ProductDetail product={selectedProduct} onBack={handleBackToOutfits} />;
    }
    return <OutfitGrid outfits={outfits} onOutfitClick={handleSelectOutfit} onBack={handleHomeNavigation}/>;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header onNavigate={handleHomeNavigation} onProductSelect={handleSelectProduct} products={products} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
