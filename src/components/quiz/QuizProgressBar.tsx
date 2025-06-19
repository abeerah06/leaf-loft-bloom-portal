
import React from 'react';

interface QuizProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
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
  );
};

export default QuizProgressBar;
