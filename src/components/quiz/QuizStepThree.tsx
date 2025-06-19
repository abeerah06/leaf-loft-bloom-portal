
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Control } from 'react-hook-form';
import { QuizFormData } from '@/types/quiz';

interface QuizStepThreeProps {
  control: Control<QuizFormData>;
}

const QuizStepThree: React.FC<QuizStepThreeProps> = ({ control }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
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
        control={control}
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
  );
};

export default QuizStepThree;
