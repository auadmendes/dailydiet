import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsStorageDTO } from "../addMeal/MealsStorageDTO";
import { MEALS_TIME_COLLECTION } from "../storageConfig";

export async function getMealsByTitle(title: string) {
  try {

    const storage = await AsyncStorage.getItem(`${MEALS_TIME_COLLECTION}-${title}`);

    const meals: MealsStorageDTO[] = storage ? JSON.parse(storage) : [];

  
    return meals;

  } catch (error) {
    throw error;
  }
}
