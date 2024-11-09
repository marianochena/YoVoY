import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Viajá más por menos en Argentina
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Compartí viajes con conductores verificados en las principales rutas del país
          </p>
          
          <div className="mt-10 max-w-xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="¿Desde dónde salís?"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="¿A dónde vas?"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0">
        <svg className="w-full text-white" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </div>
  );
}