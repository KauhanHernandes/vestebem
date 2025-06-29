import React from 'react';
import { X, ShoppingBag, Check, MessageCircle, Instagram } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name} - R$ ${product.price.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/5581986399005?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/vestebem_vb/', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">{product.name}</h2>
            <span className="text-sm text-gray-500">
              {product.category} • {product.subcategory}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Image */}
            <div className="space-y-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
              {product.isNew && (
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold">
                  <span>✨ Produto Novo</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-4 md:space-y-6">
              {/* Price */}
              <div className="text-3xl md:text-4xl font-bold text-black">
                R$ {product.price.toFixed(2)}
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{product.description}</p>
                </div>
              )}

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Tamanhos</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isAvailable = product.availableSizes.includes(size);
                    return (
                      <div
                        key={size}
                        className={`p-2 md:p-3 rounded-lg border-2 text-center font-medium transition-all duration-200 ${
                          isAvailable
                            ? 'border-yellow-500 bg-yellow-50 text-yellow-800 hover:bg-yellow-100'
                            : 'border-gray-300 bg-gray-100 text-gray-500'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-sm md:text-base">{size}</span>
                          {isAvailable ? (
                            <Check size={12} className="text-green-600" />
                          ) : (
                            <X size={12} className="text-red-500" />
                          )}
                        </div>
                        <div className="text-xs mt-1">
                          {isAvailable ? 'Disponível' : 'Indisponível'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 px-6 rounded-xl font-bold text-base md:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag size={20} />
                  <span>Entrar em Contato</span>
                </button> */}
                
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </button>
                  <button 
                    onClick={handleInstagramClick}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </button>
                </div>
              </div>

              {/* Store Info */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Informações da Loja</h4>
                <div className="text-xs md:text-sm text-gray-600 space-y-1">
                  <p>📍 Av. Agamenon Magalhães, 1374</p>
                  <p>📱 (81) 986399005</p>
                  <p>📸 @vestebem_vb</p>
                  <p>🕒 Seg-Sex: 8h-18h | Sáb: 8h-17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}