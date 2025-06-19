
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Heart, Droplets, Sun, Thermometer, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';

// Plant profiles from your dataset
const plantProfiles = [
  {
    "Plant Name": "Snake Plant", "Light Level": "Low", "Humidity Range": [30, 50],
    "Temperature Range": [15, 30], "Watering Range": [1, 2], "Care Level": "Easy",
    "Pet Safe": "No", "Soil Type": "Sandy", "Fertilizer Need": "Low",
    "image": "/placeholder.svg", "description": "Perfect for beginners! Tolerates neglect and low light conditions."
  },
  {
    "Plant Name": "Peace Lily", "Light Level": "Medium", "Humidity Range": [50, 70],
    "Temperature Range": [18, 27], "Watering Range": [2, 3], "Care Level": "Moderate",
    "Pet Safe": "No", "Soil Type": "Loamy", "Fertilizer Need": "Medium",
    "image": "/placeholder.svg", "description": "Beautiful white blooms and excellent air purification qualities."
  },
  {
    "Plant Name": "Spider Plant", "Light Level": "Medium", "Humidity Range": [40, 60],
    "Temperature Range": [18, 27], "Watering Range": [2, 3], "Care Level": "Easy",
    "Pet Safe": "Yes", "Soil Type": "Loamy", "Fertilizer Need": "Low",
    "image": "/placeholder.svg", "description": "Fast-growing and pet-safe! Produces cute plantlets."
  },
  {
    "Plant Name": "Aloe Vera", "Light Level": "High", "Humidity Range": [30, 50],
    "Temperature Range": [18, 26], "Watering Range": [1, 2], "Care Level": "Easy",
    "Pet Safe": "No", "Soil Type": "Sandy", "Fertilizer Need": "Low",
    "image": "/placeholder.svg", "description": "Medicinal properties and extremely drought-tolerant."
  },
  {
    "Plant Name": "Areca Palm", "Light Level": "Medium", "Humidity Range": [50, 70],
    "Temperature Range": [18, 27], "Watering Range": [2, 3], "Care Level": "Moderate",
    "Pet Safe": "Yes", "Soil Type": "Loamy", "Fertilizer Need": "Medium",
    "image": "/placeholder.svg", "description": "Elegant tropical look with excellent air purification."
  },
  {
    "Plant Name": "ZZ Plant", "Light Level": "Low", "Humidity Range": [30, 50],
    "Temperature Range": [15, 25], "Watering Range": [1, 2], "Care Level": "Easy",
    "Pet Safe": "No", "Soil Type": "Sandy", "Fertilizer Need": "Low",
    "image": "/placeholder.svg", "description": "Glossy leaves and nearly indestructible nature."
  },
  {
    "Plant Name": "Rubber Plant", "Light Level": "Medium", "Humidity Range": [40, 60],
    "Temperature Range": [18, 27], "Watering Range": [1, 2], "Care Level": "Moderate",
    "Pet Safe": "No", "Soil Type": "Loamy", "Fertilizer Need": "Medium",
    "image": "/placeholder.svg", "description": "Bold, glossy leaves make a striking statement."
  },
  {
    "Plant Name": "Boston Fern", "Light Level": "Low", "Humidity Range": [50, 80],
    "Temperature Range": [16, 24], "Watering Range": [3, 5], "Care Level": "Hard",
    "Pet Safe": "Yes", "Soil Type": "Peaty", "Fertilizer Need": "High",
    "image": "/placeholder.svg", "description": "Classic hanging plant with delicate, feathery fronds."
  },
  {
    "Plant Name": "Jade Plant", "Light Level": "High", "Humidity Range": [30, 50],
    "Temperature Range": [18, 24], "Watering Range": [1, 2], "Care Level": "Easy",
    "Pet Safe": "No", "Soil Type": "Sandy", "Fertilizer Need": "Low",
    "image": "/placeholder.svg", "description": "Succulent with thick, jade-colored leaves. Symbol of prosperity."
  },
  {
    "Plant Name": "Calathea", "Light Level": "Low", "Humidity Range": [60, 80],
    "Temperature Range": [18, 27], "Watering Range": [2, 4], "Care Level": "Hard",
    "Pet Safe": "Yes", "Soil Type": "Peaty", "Fertilizer Need": "High",
    "image": "/placeholder.svg", "description": "Stunning patterned leaves that fold up at night."
  }
];

interface QuizData {
  lightLevel: string;
  space: string;
  careLevel: string;
  petSafe: string;
  wateringFrequency: string;
  humidity: string;
  temperature: string;
  soilType: string;
  fertilizerNeed: string;
}

interface PlantRecommendationsProps {
  quizData: QuizData;
}

const PlantRecommendations: React.FC<PlantRecommendationsProps> = ({ quizData }) => {
  // Simple matching algorithm based on quiz responses
  const getRecommendations = () => {
    const humidityRange = quizData.humidity.split('-').map(Number);
    const tempRange = quizData.temperature.split('-').map(Number);
    const wateringFreq = parseInt(quizData.wateringFrequency);

    return plantProfiles
      .map(plant => {
        let score = 0;
        
        // Match light level (high priority)
        if (plant["Light Level"] === quizData.lightLevel) score += 30;
        
        // Match care level (high priority)
        if (plant["Care Level"] === quizData.careLevel) score += 25;
        
        // Match pet safety (high priority if specified)
        if (quizData.petSafe !== 'No Preference' && plant["Pet Safe"] === quizData.petSafe) score += 25;
        
        // Match humidity range
        const plantHumidityMin = plant["Humidity Range"][0];
        const plantHumidityMax = plant["Humidity Range"][1];
        if (humidityRange[0] <= plantHumidityMax && humidityRange[1] >= plantHumidityMin) score += 10;
        
        // Match temperature range
        const plantTempMin = plant["Temperature Range"][0];
        const plantTempMax = plant["Temperature Range"][1];
        if (tempRange[0] <= plantTempMax && tempRange[1] >= plantTempMin) score += 10;
        
        // Match watering frequency
        const plantWateringMin = plant["Watering Range"][0];
        const plantWateringMax = plant["Watering Range"][1];
        if (wateringFreq >= plantWateringMin && wateringFreq <= plantWateringMax) score += 15;
        
        // Match soil type (if specified)
        if (quizData.soilType !== 'No Preference' && plant["Soil Type"] === quizData.soilType) score += 5;
        
        // Match fertilizer need (if specified)
        if (quizData.fertilizerNeed !== 'No Preference' && plant["Fertilizer Need"] === quizData.fertilizerNeed) score += 5;
        
        return { ...plant, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 6); // Top 6 recommendations
  };

  const recommendations = getRecommendations();

  const getMatchPercentage = (score: number) => {
    return Math.min(Math.round((score / 100) * 100), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Your Perfect Plant Matches!</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on your preferences, we've found the ideal plants for your space and lifestyle.
          </p>
        </div>

        {/* Quiz Summary */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle>Your Preferences Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div><strong>Light:</strong> {quizData.lightLevel}</div>
              <div><strong>Space:</strong> {quizData.space}</div>
              <div><strong>Experience:</strong> {quizData.careLevel}</div>
              <div><strong>Pet Safe:</strong> {quizData.petSafe}</div>
              <div><strong>Watering:</strong> {quizData.wateringFrequency}x/week</div>
              <div><strong>Humidity:</strong> {quizData.humidity}%</div>
              <div><strong>Temperature:</strong> {quizData.temperature}°C</div>
              <div><strong>Soil:</strong> {quizData.soilType}</div>
            </div>
          </CardContent>
        </Card>

        {/* Plant Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recommendations.map((plant, index) => (
            <Card key={plant["Plant Name"]} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={plant.image} 
                  alt={plant["Plant Name"]}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    {getMatchPercentage(plant.score)}% Match
                  </Badge>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-white">Best Match!</Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  {plant["Plant Name"]}
                </CardTitle>
                <CardDescription>{plant.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center">
                    <Sun className="h-3 w-3 mr-1" />
                    {plant["Light Level"]} Light
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Droplets className="h-3 w-3 mr-1" />
                    {plant["Watering Range"][0]}-{plant["Watering Range"][1]}x/week
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Thermometer className="h-3 w-3 mr-1" />
                    {plant["Temperature Range"][0]}-{plant["Temperature Range"][1]}°C
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><strong>Care Level:</strong> {plant["Care Level"]}</div>
                  <div><strong>Pet Safe:</strong> {plant["Pet Safe"]}</div>
                  <div><strong>Soil:</strong> {plant["Soil Type"]}</div>
                  <div><strong>Fertilizer:</strong> {plant["Fertilizer Need"]}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/plant-catalog">View Full Plant Catalog</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/quiz">Retake Quiz</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
          
          <p className="text-gray-600">
            Want to learn more? Check out our care guides and plant disease resources!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantRecommendations;
