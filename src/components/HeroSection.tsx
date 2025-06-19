
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <p className="text-green-600 font-medium mb-4 animate-fade-in delay-200">Go green.</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in delay-300">
              The world
              <br />
              <span className="text-green-600">of plants</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md animate-fade-in delay-500">
              Discover everything you need to know about your plants, treat them with kindness and they will take care of you.
            </p>
            
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in delay-700 hover:scale-105"
            >
              Take Plant Quiz
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right content - Featured plant */}
          <div className="relative animate-fade-in delay-1000">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Plant image placeholder */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <div className="text-white text-8xl">🌿</div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dracaena Trifasciata</h3>
                <p className="text-gray-600 mb-4">
                  One of the most effective houseplant air purification
                </p>
                <Button variant="outline" className="rounded-full border-green-600 text-green-600 hover:bg-green-50">
                  Know more
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating plant cards */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-4 animate-fade-in delay-1500">
        {[
          { name: "Dracaena Oxalis", emoji: "🌱" },
          { name: "Haworthiopsis Attenuata", emoji: "🌵" },
          { name: "Bromeligia Fasciculata", emoji: "🪴" },
          { name: "Chlorophytum Comosum", emoji: "🌿" }
        ].map((plant, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-2 text-center">{plant.emoji}</div>
            <p className="text-sm font-medium text-gray-800 text-center whitespace-nowrap">{plant.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
