import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CategoryGrid from './components/CategoryGrid';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { Product } from './components/ProductCard';
import { sampleProducts, getProductsByCategory, getRecentProducts, searchProducts, getProductsBySize } from './data/products';

type ViewState = {
  type: 'home' | 'category' | 'search' | 'catalog';
  category?: string;
  subcategory?: string;
  size?: string;
  searchTerm?: string;
};

function App() {
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category: string, subcategory?: string, size?: string) => {
    console.log('Category clicked:', category, subcategory, size); // Debug log
    
    if (category === 'home') {
      setCurrentView({ type: 'home' });
    } else {
      const newView = { type: 'category' as const, category, subcategory, size };
      setCurrentView(newView);
      console.log('Setting view to:', newView); // Debug log
    }
  };

  const handleSearch = (term: string) => {
    console.log('Search called with term:', term); // Debug log
    
    // Only change view if there's actually a search term
    if (term && term.trim()) {
      setCurrentView({ type: 'search', searchTerm: term.trim() });
    } else if (currentView.type === 'search') {
      // Only reset to home if we're currently in search view and search is cleared
      setCurrentView({ type: 'home' });
    }
    // Don't change view if we're not in search and term is empty
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleViewCatalog = () => {
    setCurrentView({ type: 'catalog' });
  };

  const handleLocationClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top when view changes (except for home and location click)
  useEffect(() => {
    console.log('View changed to:', currentView); // Debug log
    
    if (currentView.type !== 'home') {
      // Use setTimeout to ensure the content is rendered before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [currentView]);

  const getCurrentProducts = (): Product[] => {
    switch (currentView.type) {
      case 'category':
        if (currentView.size) {
          return getProductsBySize(currentView.category!, currentView.subcategory, currentView.size);
        }
        return getProductsByCategory(currentView.category!, currentView.subcategory);
      case 'search':
        return searchProducts(currentView.searchTerm!);
      case 'catalog':
        return sampleProducts;
      default:
        return sampleProducts;
    }
  };

  const getCurrentTitle = (): string => {
    switch (currentView.type) {
      case 'category':
        let title = currentView.category!;
        if (currentView.subcategory) {
          title += ` - ${currentView.subcategory}`;
        }
        if (currentView.size) {
          title += ` - Tamanho ${currentView.size}`;
        }
        return title;
      case 'search':
        return `Resultados para "${currentView.searchTerm}"`;
      case 'catalog':
        return 'Catálogo Completo';
      default:
        return 'Todos os Produtos';
    }
  };

  const recentProducts = getRecentProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
        currentSearchTerm={currentView.type === 'search' ? currentView.searchTerm || '' : ''}
      />
      
      <main className="container mx-auto px-4 py-6 md:py-8">
        {currentView.type === 'home' ? (
          <HomePage 
            recentProducts={recentProducts}
            onProductSelect={handleProductSelect}
            onViewCatalog={handleViewCatalog}
            onLocationClick={handleLocationClick}
          />
        ) : (
          <CategoryGrid
            products={getCurrentProducts()}
            title={getCurrentTitle()}
            onProductSelect={handleProductSelect}
            currentView={currentView}
            onCategorySelect={handleCategorySelect}
          />
        )}
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;