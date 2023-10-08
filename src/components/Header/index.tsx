import { InfoTextCard } from "../InfoTextCard";
import { Avatar, Container, HeaderStyleProps, Logo } from "./styles";

type Props = {
  variant: HeaderStyleProps;
  title?: string;
  subTitle?: string;
}

export function Header({
  variant,
  title,
  subTitle
}: Props) {
  return (
    <Container
      variant={variant}
    >
      {!title ? (
        <>
          <Logo asset={require('../../assets/Logo.svg')} />
          <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/5294488?v=4' }} />
        </>
      ) : (
        <InfoTextCard
          showIconButton
          title={title}
          subTitle={subTitle}
        />
      )}
    </Container>
  )
}