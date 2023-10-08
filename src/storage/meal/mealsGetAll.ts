import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_DATE_COLLECTION } from "../storageConfig";
//import { MealProps } from "../addMeal/MealsStorageDTO";

type MealProps = {
  title: string;
  data: {
    name: string,
    description?: string,
    date: string,
    time: string,
    diet: string,
  }
}

export async function mealsGetAll() {
  try {
    
    const storage = await AsyncStorage.getItem(MEAL_DATE_COLLECTION);

    const dateMeals : MealProps[] = storage ? JSON.parse(storage) : []

    // console.log('Mostrando datas na função GETALLMEALS_DATE: ' + dateMeals)

     console.log('dentro da função de listar todos os Meals')

    return dateMeals;

  } catch (error) {
    throw error;
  }
}