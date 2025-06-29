import React from 'react';
import { MapPin, Phone, Instagram, Clock, Mail, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact and Location Section */}
      <section id="contato" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nossa Loja Física
            </h3>
            <p className="text-gray-400">
              Visite nossa loja e confira pessoalmente nossas peças
            </p>
          </div>
          
          {/* Sobre a Loja */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 md:p-8 mb-8 md:mb-12 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Sobre a Veste Bem</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                  Especializada em moda masculina de qualidade, oferecemos uma ampla variedade de roupas 
                  e acessórios para todos os estilos e ocasiões. Nossa missão é vestir bem o homem moderno 
                  com peças que combinam conforto, estilo e preço justo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>Seg - Sex: 8h às 18h | Sáb: 8h às 17h</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>Av. Agamenon Magalhães, 1374 - Santo Amaro, Recife - PE</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm md:text-base">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>WhatsApp: (81) 986399005</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-600">
                  <h4 className="text-yellow-500 font-bold mb-2 text-base md:text-lg">🚚 Entrega Rápida</h4>
                  <p className="text-gray-300 text-sm md:text-base">Entregamos em toda a região metropolitana do Recife</p>
                </div>
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-600">
                  <h4 className="text-yellow-500 font-bold mb-2 text-base md:text-lg">🔄 Troca Garantida</h4>
                  <p className="text-gray-300 text-sm md:text-base">7 dias para trocar se não ficar satisfeito</p>
                </div>
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-600">
                  <h4 className="text-yellow-500 font-bold mb-2 text-base md:text-lg">💳 Facilidade de Pagamento</h4>
                  <p className="text-gray-300 text-sm md:text-base">Parcelamos no cartão ou aceite no PIX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg md:text-xl font-bold text-yellow-500 mb-4">Informações de Contato</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base">Endereço</p>
                      <p className="text-gray-400 text-sm">Avenida Agamenon Magalhães, 1374</p>
                      <p className="text-gray-400 text-sm">Santo Amaro, Recife - PE</p>
                      <p className="text-gray-400 text-sm">CEP: 50110-010</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base">Instagram</p>
                      <a 
                        href="https://www.instagram.com/vestebem_vb/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-200"
                      >
                        @vestebem_vb
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base">WhatsApp</p>
                      <a 
                        href="https://wa.me/5581986399005" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-200"
                      >
                        (81) 986399005
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base">Horário de Funcionamento</p>
                      <p className="text-gray-400 text-sm">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-400 text-sm">Sábado: 8h às 16h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg md:text-xl font-bold text-yellow-500 mb-4">Por que escolher a Veste Bem?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">Qualidade garantida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">Preços justos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">Atendimento personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">Variedade de tamanhos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg md:text-xl font-bold text-yellow-500 mb-4">Localização</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.123456789!2d-34.8712345!3d-8.0543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f0c9d5555%3A0x123456789abcdef!2sAv.%20Agamenon%20Magalh%C3%A3es%2C%201374%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050110-010!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-6 md:py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">
                <span className="text-white">VESTE</span>
                <span className="text-yellow-500 ml-2">BEM</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Sua referência em moda masculina no Recife. 
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Qualidade, estilo e atendimento personalizado.
              </p>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 text-yellow-500">Categorias</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Bermudas</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Camisas</a></li>
                {/* <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Calças</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Acessórios</a></li> */}
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4 text-yellow-500">Contato</h4>
              <div className="space-y-2 text-gray-400 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="flex-shrink-0" />
                  <a 
                    href="https://wa.me/5581986399005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors duration-200"
                  >
                    (81) 986399005
                  </a>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Mail size={14} className="flex-shrink-0" />
                  <span>contato@vestebem.com.br</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Instagram size={14} className="flex-shrink-0" />
                  <a 
                    href="https://www.instagram.com/vestebem_vb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors duration-200"
                  >
                    @vestebem_vb
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 Veste Bem - Moda Masculina.
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              © Desenvolvido por KauhanHernandes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}