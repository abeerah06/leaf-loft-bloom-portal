
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Control } from 'react-hook-form';
import { QuizFormData } from '@/types/quiz';

interface QuizStepOneProps {
  control: Control<QuizFormData>;
}

const QuizStepOne: React.FC<QuizStepOneProps> = ({ control }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
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
        control={control}
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
        control={control}
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
  );
};

export default QuizStepOne;
