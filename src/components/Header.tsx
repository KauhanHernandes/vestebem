import React, { useState, useEffect } from 'react';
import { Search, Menu, X, MapPin, Phone, Instagram, ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'Bermudas',
    subcategories: ['Bermuda Cargo', 'Bermudas Brim/Sarja', 'Bermudas Jeans']
  },
  {
    name: 'Shorts',
    subcategories: ['Short Linho', 'Short Pier', 'Short Praia']
  },
  {
    name: 'Calças',
    subcategories: ['Calças Jeans', 'Calças Cargo', 'Calças Sociais']
  },
  {
    name: 'Camisas',
    subcategories: ['Camisas Sociais', 'Camisas Oversized', 'Camisa Tricô']
  },
  {
    name: 'Infantil/Juvenil',
    subcategories: ['10 anos', '12 anos', '14 anos']
  },
  {
    name: 'Regatas & Moletons',
    subcategories: ['Regatas', 'Moletom', 'Casaco Moletom']
  },
  {
    name: 'Calçados',
    subcategories: ['Sapatos', 'Sandálias']
  },
  {
    name: 'Acessórios',
    subcategories: ['Bolsas de mão', 'Bonés', 'Cuecas']
  },
  {
    name: 'Outros',
    subcategories: ['Conjuntos', 'Linha Feminina', 'Vest Company']
  }
];

// Size options for different categories
const sizeOptions = {
  'Bermudas': ['P', 'M', 'G', 'GG', 'XG'],
  'Shorts': ['P', 'M', 'G', 'GG', 'XG'],
  'Calças': ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'],
  'Camisas': ['PP', 'P', 'M', 'G', 'GG', 'XG'],
  'Infantil/Juvenil': ['10', '12', '14'],
  'Regatas & Moletons': ['P', 'M', 'G', 'GG', 'XG'],
  'Calçados': ['37', '38', '39', '40', '41', '42', '43'],
  'Acessórios': ['Único', 'P', 'M', 'G', 'GG'],
  'Outros': ['PP', 'P', 'M', 'G', 'GG', 'XG']
};

interface HeaderProps {
  onCategorySelect: (category: string, subcategory?: string, size?: string) => void;
  onSearch: (term: string) => void;
  currentSearchTerm?: string;
}

export default function Header({ onCategorySelect, onSearch, currentSearchTerm = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(currentSearchTerm);

  // Update search term when currentSearchTerm changes
  useEffect(() => {
    setSearchTerm(currentSearchTerm);
  }, [currentSearchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleCategoryClick = (category: string, subcategory?: string, size?: string) => {
    console.log('Header: Category clicked:', category, subcategory, size); // Debug log
    onCategorySelect(category, subcategory, size);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubcategory(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    
    // Only trigger search if user clears the field completely
    if (newValue === '') {
      onSearch('');
    }
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black shadow-2xl sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => onCategorySelect('home')}
          >
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">VESTE</span>
              <span className="text-yellow-500 ml-1 md:ml-2">BEM</span>
            </h1>
            <p className="text-yellow-500 text-xs md:text-sm tracking-wider">MODA MASCULINA</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubcategory(null);
                }}
              >
                <button className="text-white hover:text-yellow-500 transition-colors duration-300 py-2 font-medium text-sm xl:text-base">
                  {category.name}
                </button>
                
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 bg-white text-black shadow-2xl rounded-lg py-4 px-6 min-w-48 border-t-4 border-yellow-500 z-50">
                    {category.subcategories.map((sub) => (
                      <div
                        key={sub}
                        className="relative"
                        onMouseEnter={() => setActiveSubcategory(sub)}
                      >
                        <button
                          onClick={() => handleCategoryClick(category.name, sub)}
                          className="flex items-center justify-between w-full text-left py-2 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100 last:border-none text-sm"
                        >
                          <span>{sub}</span>
                          <ChevronRight size={14} className="text-gray-400" />
                        </button>
                        
                        {/* Size submenu */}
                        {activeSubcategory === sub && (
                          <div className="absolute left-full top-0 ml-2 bg-white text-black shadow-2xl rounded-lg py-4 px-4 min-w-32 border-l-4 border-yellow-500 z-50">
                            <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Tamanhos</div>
                            {sizeOptions[category.name as keyof typeof sizeOptions]?.map((size) => (
                              <button
                                key={size}
                                onClick={() => handleCategoryClick(category.name, sub, size)}
                                className="block w-full text-left py-1 px-2 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200 rounded text-sm"
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-gray-800 text-white px-3 md:px-4 py-2 pr-8 md:pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-sm md:text-base w-48 lg:w-64"
              />
              <button type="submit" className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2">
                <Search size={16} className="text-yellow-500" />
              </button>
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-500 transition-colors duration-300 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-gray-800 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search size={16} className="text-yellow-500" />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700 max-h-96 overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            {/* Contact Info for Mobile */}
            <div className="mb-4 pb-4 border-b border-gray-700">
              <div className="flex items-center space-x-2 text-yellow-500 text-sm mb-2">
                <Phone size={14} />
                <span>(81) 986399005</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500 text-sm">
                <Instagram size={14} />
                <span>@vestebem_vb</span>
              </div>
            </div>

            {categories.map((category) => (
              <div key={category.name} className="mb-3">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === category.name ? null : category.name)}
                  className="w-full text-left text-white font-medium py-2 border-b border-gray-700 text-sm flex items-center justify-between"
                >
                  <span>{category.name}</span>
                  <ChevronRight 
                    size={16} 
                    className={`transform transition-transform duration-200 ${
                      activeDropdown === category.name ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {activeDropdown === category.name && (
                  <div className="ml-4 mt-2 space-y-1">
                    {category.subcategories.map((sub) => (
                      <div key={sub}>
                        <button
                          onClick={() => setActiveSubcategory(activeSubcategory === sub ? null : sub)}
                          className="flex items-center justify-between w-full text-gray-300 hover:text-yellow-500 transition-colors duration-200 py-1 text-sm"
                        >
                          <span>{sub}</span>
                          <ChevronRight 
                            size={14} 
                            className={`transform transition-transform duration-200 ${
                              activeSubcategory === sub ? 'rotate-90' : ''
                            }`} 
                          />
                        </button>
                        {activeSubcategory === sub && (
                          <div className="ml-4 mt-1 space-y-1">
                            <button
                              onClick={() => handleCategoryClick(category.name, sub)}
                              className="block text-gray-400 hover:text-yellow-500 transition-colors duration-200 py-1 text-xs"
                            >
                              Ver Todos
                            </button>
                            {sizeOptions[category.name as keyof typeof sizeOptions]?.map((size) => (
                              <button
                                key={size}
                                onClick={() => handleCategoryClick(category.name, sub, size)}
                                className="block text-gray-400 hover:text-yellow-500 transition-colors duration-200 py-1 text-xs"
                              >
                                Tamanho {size}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}