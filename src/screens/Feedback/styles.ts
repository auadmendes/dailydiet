import styled from "styled-components/native";
import { LocalSvg } from "react-native-svg";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

type Diet = 'Sim' | 'Nao' | string;

type DietProps = {
  diet?: Diet;
}

export const Title = styled.Text<DietProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, diet }) => diet === 'Sim' ? theme.COLORS.GREEN_DARK :  theme.COLORS.RED_DARK};
`;
export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_3};

  text-align: center;
  margin-bottom: 50px;
`;

export const Highlight = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_3};
`;

export const Logo = styled(LocalSvg)`
  /* width: 82px;
  height: 37px; */
  margin-bottom: 50px;
`;