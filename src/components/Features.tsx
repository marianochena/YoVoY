import React from 'react';
import { Shield, Users, MapPin } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Viajes seguros",
      description: "Conductores verificados y sistema de calificaciones para tu tranquilidad"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Comunidad confiable",
      description: "Perfiles verificados y reseñas de usuarios reales"
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Rutas principales",
      description: "Conectamos las ciudades más importantes de Argentina"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Por qué elegir YoVoY?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            La forma más segura y económica de viajar por Argentina
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}