import { TouchableOpacityProps } from "react-native";

import {
  Container,
  CardStyleProps,
  Title,
  SubTitle,
  IconButtonView,
  ArrowIcon,
  Content
} from "./styles";



type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  type?: CardStyleProps;
  box?: boolean;
  showIconButton?: boolean;
  onViewDetails?: () => void;
}

export function Card({
  onViewDetails,
  title,
  subtitle,
  showIconButton,
  box = false,
  type = 'PRIMARY'
}: Props) {
  return (
    <Container
      type={type}
    >
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
      <IconButtonView
        onPress={onViewDetails}
      >
        {showIconButton &&
          <ArrowIcon />
        }
      </IconButtonView>
    </Container>
  )
}