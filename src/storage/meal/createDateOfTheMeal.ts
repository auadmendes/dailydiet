import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '../../utils/AppError';
import { MEAL_DATE_COLLECTION } from '../storageConfig';
import { mealsGetAll } from './mealsGetAll';

export async function createDateOfTheMeal(newMealDate: string) {
  try {
    
    console.log('Dentro da função para criar data')

    const storageMealsDate = await mealsGetAll();

    const mealsDateAlreadyExists = storageMealsDate.includes(newMealDate)

    if(mealsDateAlreadyExists) {
      // AsyncStorage.removeItem(MEAL_DATE_COLLECTION);
      // AsyncStorage.removeItem(MEALS_TIME_COLLECTION);
      return console.log('Date Already exists');

    }


    const storage = JSON.stringify([...storageMealsDate, newMealDate])

    await AsyncStorage.setItem(MEAL_DATE_COLLECTION, storage)

    console.log('Finalizando a função de criar data! ' + storage)


  } catch (error) {
    throw error;
  }
}