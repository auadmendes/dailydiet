import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Container,
  Content,
  Title,
  ScrollList,
  List,
  ListTitle
} from "./styles";


import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import { getMealsAll } from "../../storage/meal/getMealsAll";
import { FoodCardItem } from "../../components/FoodCardItem";
import { removeMealById } from "../../storage/addMeal/removeMealById";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_TIME_COLLECTION } from "../../storage/storageConfig";
import { Empty } from "../../components/Empty";


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

export function Home() {
  const [meals, setMeals] = useState<MealsData>([]);
  const [mealsPercentageYes, setMealsPercentageYes] = useState(0);
  const [mealsPercentageNo, setMealsPercentageNo] = useState(0);

  const navigation = useNavigation();

  function handleShowDetails() {
    navigation.navigate('statistics')
  }

  function handleGotoNewMeal() {
    // AsyncStorage.clear();
    // AsyncStorage.removeItem(MEALS_TIME_COLLECTION);

    navigation.navigate('newMeal')
  }

  async function fetchMeals() {
    try {
      const { meals, dietYesPercentage, dietNoPercentage } = await getMealsAll();

      if (meals.length === 0) {
        return;
      }

      const sortedMeals = meals.slice().sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;

      });

      setMeals(sortedMeals);
      setMealsPercentageYes(dietYesPercentage);
      setMealsPercentageNo(dietNoPercentage);

    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveMeal(mealId: string) {
    Alert.alert(
      'Remover Refeição',
      `Você realmente quer remover esta refeição?`,
      [
        { text: 'NO', style: 'cancel' },
        { text: 'YES', onPress: () => removeMealById(mealId) }
      ]
    )
    fetchMeals();
  }


  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header variant='NEUTRAL' />
      <Card
        title={mealsPercentageYes < mealsPercentageNo ? `${String(mealsPercentageNo.toFixed(2))}%` : mealsPercentageYes + mealsPercentageNo === 0 ? '0%' : `${mealsPercentageYes.toFixed(2)}%`}
        subtitle={mealsPercentageYes < mealsPercentageNo ? 'das refeições fora da dieta' : mealsPercentageYes + mealsPercentageNo === 0 ? 'nehuma refeição cadastrada' : 'das refeições dentro da dieta ainda.'}
        type={mealsPercentageYes < mealsPercentageNo ? 'SECONDARY' : mealsPercentageYes + mealsPercentageNo === 0 ? 'TERTIARY' : 'PRIMARY'}
        showIconButton
        onViewDetails={handleShowDetails}

      />
      <Content>
        <Title>Refeições</Title>
        <ButtonWithIcon
          icon="add"
          title="Nova refeição"
          onPress={handleGotoNewMeal}
        />
      </Content>
      {meals.length === 0 && <Empty />}
      <ScrollList
        showsVerticalScrollIndicator={false}>
        {meals.map((item) => (
          <List key={item.title}>
            <ListTitle>{item.title}</ListTitle>
            {item.data.map((meal) => (
              <FoodCardItem
                key={meal.id}
                onRemove={() => handleRemoveMeal(meal.id)}
                id={meal.id}
                diet={meal.diet}
                name={meal.name}
                time={meal.time}
              />
            ))}
          </List>
        ))}
      </ScrollList>
    </Container>
  )
}