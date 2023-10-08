import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_TIME_COLLECTION } from "../storageConfig";

type MealData = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  diet: string;
};

type MealEntry = {
  title: string;
  id: string;
  data: MealData[];
};

type MealsData = MealEntry[];

export async function getMealsAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_TIME_COLLECTION);
    const meals: MealEntry[] = storage ? JSON.parse(storage) : [];

    //Percent
    let totalMeals = meals.reduce((total, mealEntry) => total + mealEntry.data.length, 0);
    let dietYesCount = 0;
    let dietNoCount = 0;
    let consecutiveYesCount = 0;
    let maxConsecutiveYesCount = 0;
  
    for (const mealEntry of meals) {
      for (const meal of mealEntry.data) {
        if (meal.diet === 'Sim') {
          dietYesCount++;
          consecutiveYesCount++;
          maxConsecutiveYesCount = Math.max(maxConsecutiveYesCount, consecutiveYesCount);

        } else if (meal.diet === 'Não') {
          dietNoCount++;
          consecutiveYesCount = 0;
        }
      }
    }
  
    const dietYesPercentage = (dietYesCount / totalMeals) * 100;
    const dietNoPercentage = (dietNoCount / totalMeals) * 100;

    console.log(`Sim  -- ${dietYesCount} ----  Não -- ${dietNoCount}`)

    return {
      meals,
      totalMeals,
      dietYesCount,
      dietNoCount,
      dietYesPercentage,
      dietNoPercentage,
      maxConsecutiveYesCount
    };
    
  } catch (error) {
    console.log('Error retrieving meals:', error);
    throw error; // Rethrow the error to handle it in the fetchMeals function
  }
}