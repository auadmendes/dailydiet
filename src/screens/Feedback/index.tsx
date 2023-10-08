import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  SubTitle,
  Title,
  Logo,
  Highlight
} from "./styles";

import { ButtonWithIcon } from "../../components/ButtonWithIcon";

type RouteParams = {
  diet: string;
}

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute();
  const { diet } = route.params as RouteParams;

  function handleGoBackToHome() {
    navigation.navigate('home')
  }


  return (
    <Container>
      {diet === 'Sim' ? (
        <>
          <Title diet={diet}>Continue assim!</Title>
          <SubTitle>Você está dentro da dieta, muito bem!</SubTitle>
          <Logo asset={require('../../assets/happy.svg')} />
          <ButtonWithIcon
            title="Ir para a página inicial"
            onPress={handleGoBackToHome}
          />
        </>
      ) : (
        <>
          <Title diet={diet}>Que pena!</Title>
          <SubTitle>Você
            <Highlight>saiu da dieta </Highlight>
            dessa vez,
            mas continue se esforçando e não desista
          </SubTitle>
          <Logo asset={require('../../assets/unhappy.svg')} />
          <ButtonWithIcon
            title="Ir para a página inicial"
            onPress={handleGoBackToHome}
          />
        </>
      )}
    </Container>
  )
}