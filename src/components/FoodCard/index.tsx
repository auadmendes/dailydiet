import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  HeaderItem,
  HeaderItemTitle,

} from "./styles";
import { IconStyleProps } from '../FoodCardItem/styles';
import { FoodCardItem } from '../FoodCardItem';
import { MealsStorageDTO } from '../../storage/addMeal/MealsStorageDTO';
import { Alert } from 'react-native';
import { MealProps } from '../../screens/Home';

// type FoodProps = {
//   type: boolean;
//   date: string;
//   time: string;
//   name: string;
// };

export type FoodCardProps = {
  //title: string;
  data: MealsStorageDTO[];
}


export function FoodCard({ data }: FoodCardProps) {

  return (
    <Container>
      <HeaderItem>
        {/* <HeaderItemTitle>{title}</HeaderItemTitle> */}
      </HeaderItem>
      {/* {data?.map((item) => (
        <FoodCardItem
          key={item.data.date}
          date={item.data.date}
          time={item.data.time}
          name={item.data.name}
          diet={item.data.diet}

        />
      ))} */}
    </Container>
  )
}