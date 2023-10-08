import styled from "styled-components/native";
import { ArrowUpRight,  } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type CardStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type?: CardStyleProps;
  box?: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY'
  ? theme.COLORS.GREEN_LIGHT : type === 'TERTIARY' ? theme.COLORS.GRAY_5 : theme.COLORS.RED_LIGHT};

  //width: ${({ box }) => box === true ? '157px' : '100%'};
  max-height: 107px;
  min-height: 107px;

  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
`;

export const IconButtonView = styled(TouchableOpacity)`  
  align-items: flex-end;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};

  text-align: center;
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
  
`;

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))`
`;