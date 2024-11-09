import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularRoutes from './components/PopularRoutes';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <PopularRoutes />
        <Testimonials />
        <Footer />
      </div>
    </AuthProvider>
  );
}