import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

interface CategoryGridProps {
  products: Product[];
  title: string;
  onProductSelect: (product: Product) => void;
  currentView: {
    type: 'home' | 'category' | 'search' | 'catalog';
    category?: string;
    subcategory?: string;
    size?: string;
    searchTerm?: string;
  };
  onCategorySelect: (category: string, subcategory?: string, size?: string) => void;
}

export default function CategoryGrid({ products, title, onProductSelect, currentView, onCategorySelect }: CategoryGridProps) {
  // Generate breadcrumb navigation
  const generateBreadcrumbs = () => {
    const breadcrumbs = [];
    
    // Home
    breadcrumbs.push({
      label: 'Início',
      onClick: () => onCategorySelect('home'),
      icon: <Home size={16} />
    });

    if (currentView.type === 'category' && currentView.category) {
      // Category
      breadcrumbs.push({
        label: currentView.category,
        onClick: () => onCategorySelect(currentView.category!)
      });

      // Subcategory
      if (currentView.subcategory) {
        breadcrumbs.push({
          label: currentView.subcategory,
          onClick: () => onCategorySelect(currentView.category!, currentView.subcategory!)
        });

        // Size
        if (currentView.size) {
          breadcrumbs.push({
            label: `Tamanho ${currentView.size}`,
            onClick: () => onCategorySelect(currentView.category!, currentView.subcategory!, currentView.size!)
          });
        }
      }
    } else if (currentView.type === 'search') {
      breadcrumbs.push({
        label: `Busca: "${currentView.searchTerm}"`,
        onClick: () => {}
      });
    } else if (currentView.type === 'catalog') {
      breadcrumbs.push({
        label: 'Catálogo Completo',
        onClick: () => {}
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (products.length === 0) {
    return (
      <div className="py-6 md:py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 md:mb-8">
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
            <div className="flex items-center space-x-2 text-sm md:text-base">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={crumb.onClick}
                    className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                  >
                    {crumb.icon}
                    <span>{crumb.label}</span>
                  </button>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </nav>

        <div className="text-center py-12 md:py-16 bg-white rounded-2xl shadow-lg">
          <div className="text-4xl md:text-6xl mb-4">🔍</div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-2">Nenhum produto encontrado</h3>
          <p className="text-gray-500 text-sm md:text-base">Tente buscar por outros termos ou categorias</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 md:py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="flex items-center space-x-2 text-sm md:text-base flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={crumb.onClick}
                  className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors duration-200 py-1"
                >
                  {crumb.icon}
                  <span>{crumb.label}</span>
                </button>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          {title}
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-2 rounded-full"></div>
        </h2>
        <p className="text-gray-600 text-center mt-4 text-sm md:text-base">
          {products.length} produto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onProductSelect}
          />
        ))}
      </div>
    </div>
  );
}