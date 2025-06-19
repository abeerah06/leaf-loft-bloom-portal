
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Leaf, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlantRecommendations from '@/components/PlantRecommendations';
import { quizSchema, QuizFormData } from '@/types/quiz';
import { getFieldsForStep } from '@/utils/quizValidation';
import QuizProgressBar from '@/components/quiz/QuizProgressBar';
import QuizStepOne from '@/components/quiz/QuizStepOne';
import QuizStepTwo from '@/components/quiz/QuizStepTwo';
import QuizStepThree from '@/components/quiz/QuizStepThree';
import QuizStepFour from '@/components/quiz/QuizStepFour';

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

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid && currentStep < totalSteps) {
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

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Your Environment";
      case 2: return "Care Preferences";
      case 3: return "Plant Requirements";
      case 4: return "Final Details";
      default: return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return "Tell us about your space and lighting conditions";
      case 2: return "How much time can you dedicate to plant care?";
      case 3: return "Let's match you with the right plant characteristics";
      case 4: return "Just a few more details to perfect your matches";
      default: return "";
    }
  };

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
          
          <QuizProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">{getStepTitle()}</CardTitle>
            <CardDescription className="text-green-100">{getStepDescription()}</CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {currentStep === 1 && <QuizStepOne control={form.control} />}
                {currentStep === 2 && <QuizStepTwo control={form.control} />}
                {currentStep === 3 && <QuizStepThree control={form.control} />}
                {currentStep === 4 && <QuizStepFour control={form.control} />}

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
