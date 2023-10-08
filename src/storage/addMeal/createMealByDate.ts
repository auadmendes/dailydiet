import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { MEALS_TIME_COLLECTION } from "../storageConfig";
import { MealsStorageDTO } from "./MealsStorageDTO";
import { getMealsByTitle } from "../meal/getMealsByTitle";
import { getMealsAll } from "../meal/getMealsAll";
import { mealsGetAll } from "../meal/mealsGetAll";

type NewMealProps = {
  title: string;
  id: string,
  data: {
    id: string;
    name: string,
    description?: string,
    date: string,
    time: string,
    diet: string,
  }
}

export async function createMealByDate(newMeal: NewMealProps) {

  try {
    // Get existing meals from AsyncStorage
    const existingMealsJSON = await AsyncStorage.getItem(`${MEALS_TIME_COLLECTION}`);
    const existingMeals: { title: string; data: typeof newMeal.data[] }[] = existingMealsJSON
      ? JSON.parse(existingMealsJSON)
      : [];

    // Check if a meal with the same title already exists
    const existingMealIndex = existingMeals.findIndex((meal) => meal.title === newMeal.title);

    if (existingMealIndex !== -1) {

      // Add the new data to the existing meal's data array
      existingMeals[existingMealIndex].data.push(newMeal.data);

      const storage = JSON.stringify(existingMeals);
      console.log('storage -->> ' + storage);

      // Save the updated meals to AsyncStorage
      await AsyncStorage.setItem(`${MEALS_TIME_COLLECTION}`, storage);
    } else {
      console.log('Non - Exists');
      // Create a new entry for the title with the data as an array containing the new meal's data
      existingMeals.push({ title: newMeal.title, data: [newMeal.data] });

      // Save the updated meals to AsyncStorage
      await AsyncStorage.setItem(`${MEALS_TIME_COLLECTION}`, JSON.stringify(existingMeals));
    }

    const savedMeal = await getMealsAll();
    return;
  } catch (error) {
    console.error('Error creating meal:', error);
    throw error; // You might want to handle the error appropriately based on your use case
  }

}




