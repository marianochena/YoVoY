import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PopularRoutes() {
  const routes = [
    {
      from: "Buenos Aires",
      to: "Mar del Plata",
      price: "4500",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=400"
    },
    {
      from: "Córdoba",
      to: "Mendoza",
      price: "6000",
      image: "https://images.unsplash.com/photo-1601000785686-c45240e25f25?auto=format&fit=crop&q=80&w=400"
    },
    {
      from: "Rosario",
      to: "Buenos Aires",
      price: "3500",
      image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Rutas más populares
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={route.image} alt={`${route.from} - ${route.to}`} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{route.from}</h3>
                    <div className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 mx-2" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">${route.price}</span>
                    <p className="text-sm text-gray-600">por persona</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Ver viajes disponibles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}