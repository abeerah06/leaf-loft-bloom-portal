
import { z } from 'zod';

export const quizSchema = z.object({
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

export type QuizFormData = z.infer<typeof quizSchema>;
