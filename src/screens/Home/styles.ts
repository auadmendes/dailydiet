import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;

  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
`;

export const ListTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.lg}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  margin-bottom: 10px;
  margin-left: 5px;
`;
export const List = styled.View`
  padding: 10px;
`;

export const ScrollList = styled.ScrollView`
  flex: 1;
  margin-bottom: 50px;
`;
