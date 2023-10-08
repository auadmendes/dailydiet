
import { useCallback, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import {
  Container,
  Content,
  CountMeals,
  MealsText,
  SubTitle,
  Title
} from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { getMealsAll } from "../../storage/meal/getMealsAll";

export function Statistics() {
  const [totalOfMeals, setTotalOfMeals] = useState(0);
  const [totalOfDietYes, setTotalOfDietYes] = useState(0);
  const [totalOfDietNo, setTotalOfDietNo] = useState(0);

  const [mealsPercentageYes, setMealsPercentageYes] = useState(0);
  const [mealsPercentageNo, setMealsPercentageNo] = useState(0);

  const [maxConsecutiveYes, setMaxConsecutiveYes] = useState(0)

  async function getAllTheMeals() {
    const {
      totalMeals,
      dietNoCount,
      dietYesCount,
      dietNoPercentage,
      dietYesPercentage,
      maxConsecutiveYesCount
    } = await getMealsAll();

    if (totalMeals === 0) {
      return;
    }

    setTotalOfDietYes(dietYesCount);
    setTotalOfDietNo(dietNoCount);
    setTotalOfMeals(totalMeals);
    setMealsPercentageYes(dietYesPercentage);
    setMealsPercentageNo(dietNoPercentage);
    setMaxConsecutiveYes(maxConsecutiveYesCount)
  }

  useFocusEffect(
    useCallback(() => {
      getAllTheMeals();
    }, [])
  );


  return (
    <Container>
      <Header
        variant={mealsPercentageYes < mealsPercentageNo ? 'RED' :
          mealsPercentageYes + mealsPercentageNo === 0 ? 'GRAY' : 'GREEN'}
        title={mealsPercentageYes < mealsPercentageNo ? `${String(mealsPercentageNo.toFixed(2))}%` : `${mealsPercentageYes.toFixed(2)}%`}
        subTitle="das refeições dentro da dieta"

      />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card
          title={totalOfDietYes === 0 ? '' : String(maxConsecutiveYes)}
          subtitle={maxConsecutiveYes === 0 ? (
            <MealsText>
              <Title>Sequência</Title>
              <SubTitle>Você ainda não tem nenhuma refeição cadastrada</SubTitle>
            </MealsText>) :
            'melhor sequencia de pratos dentro da dieta'}
          type="TERTIARY"

        />
        <Card
          title={String(totalOfMeals)}
          subtitle="total refeições registradas"
          type="TERTIARY"
        />

        <CountMeals>
          <Card
            title={String(totalOfDietYes)}
            subtitle="refeições registradas"
            type={totalOfDietYes === 0 ? 'TERTIARY' : 'PRIMARY'}
            box
          />
          <Card
            title={String(totalOfDietNo)}
            subtitle="refeições registradas"
            type={totalOfDietNo === 0 ? 'TERTIARY' : 'SECONDARY'}
            box={true}
          />
        </CountMeals>

      </Content>
    </Container>
  )
}