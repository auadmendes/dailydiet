import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_TIME_COLLECTION } from "../storageConfig";

import { getMealsAll } from "../meal/getMealsAll";
import { mealsGetAll } from "../meal/mealsGetAll";

type MealProps = {
  title: string;
  id: string,
  data: {
    id: string;
    name: string,
    description?: string,
    date: string,
    time: string,
    diet: string,
  }[]
}

export async function removeMealById(mealIdToRemove: string) {
  try {
    // Get existing meals from AsyncStorage
    const existingMealsJSON = await AsyncStorage.getItem(`${MEALS_TIME_COLLECTION}`);
    const existingMeals: MealProps[] = existingMealsJSON ? JSON.parse(existingMealsJSON) : [];

    // Iterate over existingMeals to find the meal with the specified ID
    const mealIndex = existingMeals.findIndex((meal: MealProps) => meal.data.some(dataItem => dataItem.id === mealIdToRemove));

    

    if (mealIndex !== -1) {
      // Remove the meal with the specified ID from the data array
      existingMeals[mealIndex].data = existingMeals[mealIndex].data.filter(dataItem => dataItem.id !== mealIdToRemove);



      // Save the updated meals to AsyncStorage
      await AsyncStorage.setItem(`${MEALS_TIME_COLLECTION}`, JSON.stringify(existingMeals));
      
      console.log('Meal removed successfully.');
    } else {
      console.log('Meal with the specified ID not found.');
    }
  } catch (error) {
    console.error('Error removing meal:', error);
    throw error; // Handle the error as needed
  }
}




