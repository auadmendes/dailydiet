import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  flex: 1;
  
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  
  padding: 20px; //check that later
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  //margin-top: 30px;
  margin-bottom: 10px; //rever isso
  
`;

export const CountMeals = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  margin-bottom: 10px; //rever isso
`;

export const MealsText = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;