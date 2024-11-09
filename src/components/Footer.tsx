import React from 'react';
import { Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white">YoVoY</span>
            </div>
            <p className="mt-4 text-gray-400">
              Conectando viajeros en toda Argentina de manera segura y económica.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cómo funciona</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Prensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trabajá con nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Seguridad</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">soporte@yovoy.com.ar</li>
              <li className="text-gray-400">0800-999-YOVOY</li>
              <li className="text-gray-400">CABA, Argentina</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YoVoY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}