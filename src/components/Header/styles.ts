import { LocalSvg } from "react-native-svg";
import styled from "styled-components/native";

export type HeaderStyleProps = 'NEUTRAL' | 'GREEN' | 'RED' | 'GRAY';

type HeaderProps = {
  variant: HeaderStyleProps;
}

export const Container = styled.View<HeaderProps>`
  width: 100%;
  height: ${({ variant }) => variant === 'GRAY' ? '162px' : '200px'};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme, variant }) => variant === 'NEUTRAL'
  ? theme.COLORS.WHITE : variant === 'GREEN' ? theme.COLORS.GREEN_LIGHT
  : variant === 'GRAY' ?
  theme.COLORS.GRAY_5
  : theme.COLORS.RED_LIGHT};

  margin-bottom: -30px;
  padding: 20px;
`;

export const Logo = styled(LocalSvg)`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-radius: 20px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_3};
`;