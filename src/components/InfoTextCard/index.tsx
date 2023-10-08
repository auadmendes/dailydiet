import { useNavigation } from "@react-navigation/native";
//import { Title, Container } from "../Card/styles";
import { Container, Title, ArrowIcon, Content, IconButtonView, SubTitle } from "./styles";

type Props = {
  title: string;
  subTitle?: string;
  showIconButton: boolean
}

export function InfoTextCard({ title, subTitle, showIconButton }: Props) {
  const navigation = useNavigation();

  function handleButtonBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Content>
        <IconButtonView
          onPress={handleButtonBack}
        >
          {showIconButton &&
            <ArrowIcon />
          }
        </IconButtonView>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Content>

    </Container>
  )
}