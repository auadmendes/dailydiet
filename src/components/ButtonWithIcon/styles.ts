import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;


export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.WHITE

}))``;

