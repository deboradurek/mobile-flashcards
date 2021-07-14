import styled from 'styled-components';

export const QAHeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.pink};
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
`;

export const QAHeader = styled.Text`
  color: ${(props) => props.theme.pink};
  font-weight: bold;
`;

export const QAText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 30px;
  text-align: center;
`;
