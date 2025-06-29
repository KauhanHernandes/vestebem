import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  sizes: string[];
  availableSizes: string[];
  description?: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isNew && (
          <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold">
            NOVO
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetails(product)}
            className="opacity-0 group-hover:opacity-100 bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center space-x-2 text-sm md:text-base"
          >
            <Eye size={14} />
            <span>Ver Detalhes</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {product.category} • {product.subcategory}
          </span>
        </div>
        
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Sizes */}
        <div className="mb-4">
          <p className="text-xs text-gray-600 mb-2">Tamanhos disponíveis:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className={`px-2 py-1 text-xs rounded border ${
                  product.availableSizes.includes(size)
                    ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                    : 'bg-gray-100 text-gray-500 border-gray-300 line-through'
                }`}
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="px-2 py-1 text-xs rounded border bg-gray-100 text-gray-500 border-gray-300">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg md:text-2xl font-bold text-black">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onViewDetails(product)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 md:px-4 py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg text-sm md:text-base"
          >
            <ShoppingBag size={14} />
            <span>Detalhes</span>
          </button>
        </div>
      </div>
    </div>
  );
}