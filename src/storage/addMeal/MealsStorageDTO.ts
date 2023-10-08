
export type MealProps = {
  date: string;
  data: MealsStorageDTO[];
}

export type MealsStorageDTO = {
  title: string;
  data: [{
    name: string;
    description?: string;
    date: string;
    time: string;
    diet: string;
  }]
}
