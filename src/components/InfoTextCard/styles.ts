// import styled from "styled-components/native";

// export const Container = styled.View`
//   flex: 1;
//   width: 100%;
//   height: 100%;
//   flex-direction: row;
//   background-color: red;

  
// `;

// export const Title = styled.Text`
//   font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
//   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
//   color: ${({ theme }) => theme.COLORS.GRAY_1};
// `;

// export const SubTitle = styled.Text`
//   font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
//   font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
//   color: ${({ theme }) => theme.COLORS.GRAY_2};
// `;

import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type CardStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type?: CardStyleProps;
  box?: boolean;
}

export const Container = styled.View<Props>`

  /* background-color: ${({ theme, type }) => type === 'PRIMARY'
  ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}; */

  width: ${({box }) => box ? '157.5px' : '327px'};
  height: 107px;

  border-radius: 6px;
  flex-direction: row;
  

  padding: 15px;
`;

export const IconButtonView = styled(TouchableOpacity)`  
  align-items: flex-start;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
`;

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))`
`;