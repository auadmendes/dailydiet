import { TouchableOpacityProps } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import {
  Container,
  FilterStyleProps,
  IconDot,
  IconStyleProps,
  Title
} from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  type: IconStyleProps;
  typo: IconStyleProps;
}


export function Filter({
  title,
  isActive = false,
  icon,
  typo,
  type = 'SECONDARY',
  ...rest
}: Props) {
  return (
    <Container
      isActive={isActive}
      activeOpacity={0.6}
      typo={typo}
      {...rest}
    >
      <IconDot name={icon} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}