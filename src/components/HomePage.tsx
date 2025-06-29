import React, { useState, useEffect } from 'react';
import { Star, Truck, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

interface HomePageProps {
  recentProducts: Product[];
  onProductSelect: (product: Product) => void;
  onViewCatalog: () => void;
  onLocationClick: () => void;
}

export default function HomePage({ recentProducts, onProductSelect, onViewCatalog, onLocationClick }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet: 2 items
      } else if (window.innerWidth < 1280) {
        setItemsPerSlide(3); // Desktop small: 3 items
      } else {
        setItemsPerSlide(4); // Desktop large: 4 items
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(recentProducts.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 md:py-20 rounded-2xl mb-8 md:mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-white">VESTE</span>
            <span className="text-yellow-500 ml-2 md:ml-4">BEM</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Moda masculina de qualidade com estilo e sofisticação. 
            Encontre as melhores peças para o seu guarda-roupa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button 
              onClick={onViewCatalog}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Catálogo
            </button>
            <button 
              onClick={onLocationClick}
              className="border-2 border-yellow-500 text-yellow-500 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Nossa Localização
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white rounded-2xl mb-8 md:mb-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="bg-gray-50 p-4 md:p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Star className="text-black" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Qualidade Premium</h3>
                <p className="text-sm md:text-base text-gray-600">Produtos selecionados com o melhor custo-benefício do mercado</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-50 p-4 md:p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Truck className="text-black" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Entrega Rápida</h3>
                <p className="text-sm md:text-base text-gray-600">Entregamos em toda região metropolitana do Recife</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-50 p-4 md:p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Shield className="text-black" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Compra Segura</h3>
                <p className="text-sm md:text-base text-gray-600">Atendimento personalizado via WhatsApp e Instagram</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-50 p-4 md:p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Award className="text-black" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Atendimento VIP</h3>
                <p className="text-sm md:text-base text-gray-600">Consultoria de estilo personalizada para cada cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Products Carousel Section */}
      <section className="py-12 md:py-16 bg-white rounded-2xl shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Últimos Lançamentos</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Confira as novidades que acabaram de chegar em nosso estoque
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-300 -ml-2 md:-ml-6 border border-gray-200"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-300 -mr-2 md:-mr-6 border border-gray-200"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </>
            )}

            {/* Products Grid */}
            <div className="overflow-hidden px-2 md:px-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid gap-4 md:gap-6 ${
                      itemsPerSlide === 1 ? 'grid-cols-1' :
                      itemsPerSlide === 2 ? 'grid-cols-2' :
                      itemsPerSlide === 3 ? 'grid-cols-3' :
                      'grid-cols-4'
                    }`}>
                      {recentProducts
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={onProductSelect}
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-yellow-500 w-6 md:w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <button 
              onClick={onViewCatalog}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Todos os Produtos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}