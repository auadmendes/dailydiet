import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  Icon,
  Title,

} from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
}

export function ButtonWithIcon({ title, icon, ...rest }: Props) {
  return (
    <Container
      {...rest}
    >
      <Icon
        name={icon}
      />
      <Title>{title}</Title>
    </Container>
  )
}