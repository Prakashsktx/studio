'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductDetail } from '@/components/ProductDetail';
import type { Product } from '@/lib/products';
import { products } from '@/lib/products';
import { useToast } from "@/hooks/use-toast"
import { CategoryNav } from '@/components/CategoryNav';

type View = 'home' | 'product';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleShowAdmin = () => {
      toast({
        title: "Admin Access",
        description: "Admin panel access triggered. This would open a CMS in a real application.",
      });
    };

    const handleNavigateOutfit = (event: Event) => {
      const customEvent = event as CustomEvent;
      const productId = customEvent.detail;
      const product = products.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        setView('product');
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('show-admin', handleShowAdmin);
    window.addEventListener('navigate-outfit', handleNavigateOutfit);

    return () => {
      window.removeEventListener('show-admin', handleShowAdmin);
      window.removeEventListener('navigate-outfit', handleNavigateOutfit);
    };
  }, [toast]);
  
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setView('product');
    window.scrollTo(0, 0);
  }

  const handleBackToHome = () => {
    setSelectedProduct(null);
    setView('home');
  }

  const categories = [...new Set(products.map(p => p.category))];

  const renderContent = () => {
    if (view === 'product' && selectedProduct) {
        return <ProductDetail product={selectedProduct} onBack={handleBackToHome} />;
    }
    return (
        <>
            <HeroSection />
            <CategoryNav 
                categories={categories}
                selectedCategory={currentCategory}
                onSelectCategory={setCurrentCategory}
            />
            <ProductGrid 
                category={currentCategory}
                onProductClick={handleSelectProduct} 
            />
        </>
    )
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header onNavigate={handleBackToHome} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
