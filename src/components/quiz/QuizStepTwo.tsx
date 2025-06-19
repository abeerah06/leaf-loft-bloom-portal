
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Control } from 'react-hook-form';
import { QuizFormData } from '@/types/quiz';

interface QuizStepTwoProps {
  control: Control<QuizFormData>;
}

const QuizStepTwo: React.FC<QuizStepTwoProps> = ({ control }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
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
        control={control}
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
        control={control}
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
  );
};

export default QuizStepTwo;
