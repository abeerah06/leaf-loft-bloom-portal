
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const PlantRecommendationSection = () => {
  const plants = [
    { name: "Snake Plant", difficulty: "Beginner", emoji: "🐍", light: "Low light", water: "Monthly" },
    { name: "Pothos", difficulty: "Beginner", emoji: "🌿", light: "Medium light", water: "Weekly" },
    { name: "Monstera", difficulty: "Intermediate", emoji: "🍃", light: "Bright indirect", water: "Bi-weekly" },
    { name: "Fiddle Leaf Fig", difficulty: "Advanced", emoji: "🌳", light: "Bright light", water: "Weekly" },
    { name: "Peace Lily", difficulty: "Intermediate", emoji: "🕊️", light: "Low to medium", water: "Weekly" },
    { name: "Rubber Plant", difficulty: "Beginner", emoji: "🌱", light: "Bright indirect", water: "Bi-weekly" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Our Top Selling
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Plant Picks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most recommended plants, perfect for every skill level and living space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plants.map((plant, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {plant.emoji}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{plant.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
                    {plant.difficulty}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Light:</span>
                    <span className="font-medium">{plant.light}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Watering:</span>
                    <span className="font-medium">{plant.water}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 rounded-full border-green-600 text-green-600 hover:bg-green-50 group-hover:bg-green-600 group-hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Plants
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlantRecommendationSection;
