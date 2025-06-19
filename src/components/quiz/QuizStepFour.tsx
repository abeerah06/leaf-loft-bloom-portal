
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Control } from 'react-hook-form';
import { QuizFormData } from '@/types/quiz';

interface QuizStepFourProps {
  control: Control<QuizFormData>;
}

const QuizStepFour: React.FC<QuizStepFourProps> = ({ control }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
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
  );
};

export default QuizStepFour;
