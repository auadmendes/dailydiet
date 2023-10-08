import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const ItemFood = styled(TouchableOpacity)`
  width: 100%;
  min-height: 50px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  margin-bottom: 7px;

  //background-color: pink; // **********
`;

export const ItemTime = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const BarItem = styled.View`
  width: 1px;
  height: 70%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};

  margin: 0 5px 0 5px;
`;

export const ItemName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  flex: 1;
  flex-wrap: wrap;
`;

export type IconStyleProps = 'HEALTH' | 'JUNK';

type Props = {
  type: string;
}

export const IconItem = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'Não' ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT
}))`
  margin-left: auto;
`;