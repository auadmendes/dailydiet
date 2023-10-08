import styled from "styled-components/native";


export const Container = styled.View`
  min-width: 100% ;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;
  margin-bottom: 5px;

`;

export const HeaderItem = styled.View`
  flex-direction: column;
`;

export const HeaderItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  margin-bottom: 10px;
`;


