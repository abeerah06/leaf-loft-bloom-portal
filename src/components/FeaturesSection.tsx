
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Book, Search, Leaf } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Plant Catalogue",
      description: "Browse through our extensive collection of houseplants with detailed care instructions and growing tips.",
      gradient: "from-green-400 to-emerald-500",
      href: "/catalogue"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Disease Diagnosis",
      description: "Identify common plant diseases and learn how to treat them effectively to keep your plants healthy.",
      gradient: "from-emerald-400 to-teal-500",
      href: "/diseases"
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Care Guide",
      description: "Comprehensive guides on watering, lighting, fertilizing, and seasonal care for different plant types.",
      gradient: "from-teal-400 to-cyan-500",
      href: "/care-guide"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Plant Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From finding the perfect plant to keeping it thriving, we've got you covered with expert advice and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <Button 
                variant="outline" 
                className="group-hover:bg-green-50 group-hover:border-green-600 group-hover:text-green-600 transition-all duration-300 rounded-full"
              >
                Explore
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
