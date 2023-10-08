import { LocalSvg } from "react-native-svg";
import styled from "styled-components/native";

export const Container = styled.View`
  

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};

  margin-bottom: 1px;
`;

export const Logo = styled(LocalSvg)`
  margin-top: 40px;
`;