import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 30px;
`;

export const FullWidthContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const InputContainer = styled(FullWidthContainer)`
  margin-top: 40px;
`;

export const StyledTextInput = styled.TextInput`
  align-items: stretch;
  border-radius: 8px;
  border-width: 1px;
  background-color: #e8e8e8;
  padding: 48px 15px;
  margin-bottom: 60px;
  font-family: 'HelveticaNeue-Medium';
  font-size: 20px;
  color: #da0037;
`;

export const DarkThinText = styled.Text`
  font-family: 'HelveticaNeue-Thin';
  font-size: 16px;
  color: #222831;
`;

export const LightText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 16px;
  color: #e8e8e8;
`;
