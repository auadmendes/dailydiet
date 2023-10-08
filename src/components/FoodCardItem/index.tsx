
import {
  ItemFood,
  BarItem,
  ItemTime,
  ItemName,
  IconItem,
} from "./styles";

type Props = {
  id: string;
  time: string;
  name: string;
  diet: string;
  onRemove: () => void;
}



export function FoodCardItem({
  id,
  time,
  name,
  diet,
  onRemove,
}: Props) {
  return (
    <ItemFood
      onLongPress={onRemove}
    >
      <ItemTime>{time}</ItemTime>
      <BarItem />
      <ItemName>{name}</ItemName>
      <IconItem
        name='circle'
        type={diet}
      />
    </ItemFood>
  )
}