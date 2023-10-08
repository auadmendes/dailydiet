import { Container, Logo, Title } from "./styles";

export function Empty() {
  return (
    <Container>
      <Title>Você ainda não cadastrou nenhuma refeição.</Title>
      <Logo
        asset={require('../../assets/donut2.svg')}
        width={170}
        height={170}
      />
    </Container>
  )
}