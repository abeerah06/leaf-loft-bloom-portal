
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Leaf, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlantRecommendations from '@/components/PlantRecommendations';

const quizSchema = z.object({
  lightLevel: z.enum(['Low', 'Medium', 'High']),
  space: z.enum(['Indoor', 'Balcony', 'Outdoor']),
  careLevel: z.enum(['Easy', 'Moderate', 'Hard']),
  petSafe: z.enum(['Yes', 'No', 'No Preference']),
  wateringFrequency: z.enum(['1', '2', '3', '4', '5']),
  humidity: z.enum(['30-40', '40-50', '50-60', '60-70', '70-80']),
  temperature: z.enum(['15-18', '18-21', '21-24', '24-27', '27-30']),
  soilType: z.enum(['Sandy', 'Loamy', 'Peaty', 'No Preference']),
  fertilizerNeed: z.enum(['Low', 'Medium', 'High', 'No Preference'])
});

type QuizFormData = z.infer<typeof quizSchema>;

const PlantQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizFormData | null>(null);
  const totalSteps = 4;

  const form = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      petSafe: 'No Preference',
      soilType: 'No Preference',
      fertilizerNeed: 'No Preference'
    }
  });

  const onSubmit = (data: QuizFormData) => {
    console.log('Quiz results:', data);
    setQuizResults(data);
    setShowResults(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResults && quizResults) {
    return <PlantRecommendations quizData={quizResults} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Plant Finder Quiz</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's find the perfect plants for your space and lifestyle!
          </p>
          
          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">
              {currentStep === 1 && "Your Environment"}
              {currentStep === 2 && "Care Preferences"}
              {currentStep === 3 && "Plant Requirements"}
              {currentStep === 4 && "Final Details"}
            </CardTitle>
            <CardDescription className="text-green-100">
              {currentStep === 1 && "Tell us about your space and lighting conditions"}
              {currentStep === 2 && "How much time can you dedicate to plant care?"}
              {currentStep === 3 && "Let's match you with the right plant characteristics"}
              {currentStep === 4 && "Just a few more details to perfect your matches"}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Step 1: Environment */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="lightLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">How much natural light does your space get?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Low" id="low-light" />
                                <label htmlFor="low-light" className="cursor-pointer">
                                  <div className="font-medium">Low Light</div>
                                  <div className="text-sm text-gray-500">North-facing windows, offices</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Medium" id="medium-light" />
                                <label htmlFor="medium-light" className="cursor-pointer">
                                  <div className="font-medium">Medium Light</div>
                                  <div className="text-sm text-gray-500">East/West windows</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="High" id="high-light" />
                                <label htmlFor="high-light" className="cursor-pointer">
                                  <div className="font-medium">Bright Light</div>
                                  <div className="text-sm text-gray-500">South-facing windows</div>
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="space"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">Where will you keep your plants?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Indoor" id="indoor" />
                                <label htmlFor="indoor" className="cursor-pointer">
                                  <div className="font-medium">Indoor</div>
                                  <div className="text-sm text-gray-500">Inside your home</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Balcony" id="balcony" />
                                <label htmlFor="balcony" className="cursor-pointer">
                                  <div className="font-medium">Balcony</div>
                                  <div className="text-sm text-gray-500">Covered outdoor space</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Outdoor" id="outdoor" />
                                <label htmlFor="outdoor" className="cursor-pointer">
                                  <div className="font-medium">Outdoor</div>
                                  <div className="text-sm text-gray-500">Garden or patio</div>
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="temperature"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">What's the typical temperature range? (°C)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select temperature range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="15-18">15-18°C (Cool)</SelectItem>
                              <SelectItem value="18-21">18-21°C (Mild)</SelectItem>
                              <SelectItem value="21-24">21-24°C (Comfortable)</SelectItem>
                              <SelectItem value="24-27">24-27°C (Warm)</SelectItem>
                              <SelectItem value="27-30">27-30°C (Hot)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 2: Care Preferences */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="careLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">How much plant care experience do you have?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Easy" id="easy" />
                                <label htmlFor="easy" className="cursor-pointer">
                                  <div className="font-medium">Beginner</div>
                                  <div className="text-sm text-gray-500">Low maintenance plants</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Moderate" id="moderate" />
                                <label htmlFor="moderate" className="cursor-pointer">
                                  <div className="font-medium">Intermediate</div>
                                  <div className="text-sm text-gray-500">Some care required</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Hard" id="hard" />
                                <label htmlFor="hard" className="cursor-pointer">
                                  <div className="font-medium">Expert</div>
                                  <div className="text-sm text-gray-500">High maintenance OK</div>
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="wateringFrequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">How often would you like to water? (times per week)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select watering frequency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">Once a week or less</SelectItem>
                              <SelectItem value="2">1-2 times per week</SelectItem>
                              <SelectItem value="3">2-3 times per week</SelectItem>
                              <SelectItem value="4">3-4 times per week</SelectItem>
                              <SelectItem value="5">Daily or more</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="petSafe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">Do you have pets?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="Yes" id="pet-safe-yes" />
                                <label htmlFor="pet-safe-yes" className="cursor-pointer">
                                  <div className="font-medium">Yes, pet-safe only</div>
                                  <div className="text-sm text-gray-500">Non-toxic plants</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="No" id="pet-safe-no" />
                                <label htmlFor="pet-safe-no" className="cursor-pointer">
                                  <div className="font-medium">No pets</div>
                                  <div className="text-sm text-gray-500">All plants OK</div>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-green-50">
                                <RadioGroupItem value="No Preference" id="pet-safe-no-pref" />
                                <label htmlFor="pet-safe-no-pref" className="cursor-pointer">
                                  <div className="font-medium">No preference</div>
                                  <div className="text-sm text-gray-500">I'll be careful</div>
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 3: Plant Requirements */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="humidity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">What's your space's humidity level?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select humidity range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="30-40">30-40% (Very dry - heating/AC)</SelectItem>
                              <SelectItem value="40-50">40-50% (Dry - typical indoor)</SelectItem>
                              <SelectItem value="50-60">50-60% (Comfortable)</SelectItem>
                              <SelectItem value="60-70">60-70% (Humid - bathroom/kitchen)</SelectItem>
                              <SelectItem value="70-80">70-80% (Very humid)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="soilType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">Any soil preference?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select soil type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Sandy">Sandy (well-draining)</SelectItem>
                              <SelectItem value="Loamy">Loamy (balanced)</SelectItem>
                              <SelectItem value="Peaty">Peaty (moisture-retaining)</SelectItem>
                              <SelectItem value="No Preference">No preference</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 4: Final Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fertilizerNeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">How do you feel about fertilizing?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select fertilizer preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Low">Low need (minimal fertilizing)</SelectItem>
                              <SelectItem value="Medium">Medium need (occasional fertilizing)</SelectItem>
                              <SelectItem value="High">High need (regular fertilizing OK)</SelectItem>
                              <SelectItem value="No Preference">No preference</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Almost done!</h3>
                      <p className="text-green-700">
                        We'll analyze your preferences and recommend the perfect plants for your space and lifestyle.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center bg-green-600 hover:bg-green-700"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Get My Plant Recommendations
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlantQuiz;
