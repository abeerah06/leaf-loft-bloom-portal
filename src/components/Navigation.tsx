
import React from 'react';
import { Leaf } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">The Leaf Loft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Plant Finder</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About us</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">My plants</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
