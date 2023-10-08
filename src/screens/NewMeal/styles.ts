import { ScrollView, TextInput, TouchableWithoutFeedback } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;


export const Content = styled.View`
  flex: 1;
  
  align-items: center;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  
  padding: 25px; //check that later
  margin-top: -30px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};

  margin-bottom: 5px;
`;

export const InputText = styled(TextInput)`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.COLORS.GRAY_4};

    color: ${theme.COLORS.GRAY_2};

    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  flex: 1;
  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;

  margin-bottom: 10px;
`;

export const InputTextArea = styled(TextInput)`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;

  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.COLORS.GRAY_4};

    color: ${theme.COLORS.GRAY_2};

    font-family: ${theme.FONT_FAMILY.REGULAR};
   
  `}

  flex: 1;
  min-height: 156px;
  max-height: 156px;

  border-radius: 6px;
  padding: 16px;

  margin-bottom: 10px;
`;

export const FieldDate = styled.View`
  flex-direction: column;
  width: 100%;
  flex: 1;
  
`;

export const FieldTime = styled.View`
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin-left: 5px;
`;

export const DateAndTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
  margin-bottom: 10px;
`;

export const FilterContainer = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
`;
