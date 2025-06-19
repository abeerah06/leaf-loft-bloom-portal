
import { QuizFormData } from '@/types/quiz';

export const getFieldsForStep = (step: number): (keyof QuizFormData)[] => {
  switch (step) {
    case 1:
      return ['lightLevel', 'space', 'temperature'];
    case 2:
      return ['careLevel', 'wateringFrequency', 'petSafe'];
    case 3:
      return ['humidity', 'soilType'];
    case 4:
      return ['fertilizerNeed'];
    default:
      return [];
  }
};
