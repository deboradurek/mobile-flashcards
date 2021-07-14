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
  background-color: ${(props) => props.theme.lightGray};
  padding: 48px 15px;
  margin-bottom: 60px;
  font-family: 'HelveticaNeue-Medium';
  font-size: 20px;
  color: ${(props) => props.theme.pink};
`;

export const DarkThinText = styled.Text`
  font-family: 'HelveticaNeue-Thin';
  font-size: 16px;
  color: ${(props) => props.theme.darkGray};
`;

export const LightText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 16px;
  color: ${(props) => props.theme.lightGray};
`;
