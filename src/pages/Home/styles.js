import styled, {  css } from 'styled-components/native';

const Background = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  padding: 10px;
`;

const StyledViewSelected = styled.View`
  width: 100%;
  background-color: #125689;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`;

const StyledTypeSelectedText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export { Background, StyledViewSelected, StyledTypeSelectedText };
