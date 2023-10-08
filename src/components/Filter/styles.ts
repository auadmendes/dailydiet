import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";

export type IconStyleProps = 'PRIMARY' | 'SECONDARY';

export type FilterStyleProps = {
  isActive?: boolean;
  typo: IconStyleProps;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};

  ${({ theme, isActive, typo }) => isActive && css`
    border: 1px solid ${isActive && typo === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    background: ${typo === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};

  border-radius: 6px;
  margin-right: 2px;
  margin-left: 2px;

  max-height: 56px;
  min-height: 56px;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;

  
`;

export const Title = styled.Text`
text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;



type Props = {
  type: IconStyleProps;
}

export const IconDot = styled(FontAwesome).attrs<Props>(({theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK

}))`
   margin-right: 10px;
`;