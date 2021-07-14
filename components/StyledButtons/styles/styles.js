import styled from 'styled-components';

export const TouchableOpacityGreen = styled.TouchableOpacity`
  padding: 20px 70px;
  margin: 40px 0;
  background-color: ${(props) => props.theme.okGreen};
  border-radius: 12px;
`;

export const TouchableOpacityRed = styled.TouchableOpacity`
  padding: 20px 70px;
  margin: 40px 0;
  background-color: ${(props) => props.theme.nonOkRed};
  border-radius: 12px;
`;

export const TextTouchableOpacity = styled.TouchableOpacity`
  padding: 15px;
`;

export const FilledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.orange};
  align-items: stretch;
  padding: 15px;
  margin-top: 18px;
  border-radius: 8px;
  align-items: center;
`;

export const OutlinedTouchableOpacity = styled(FilledTouchableOpacity)`
  background-color: ${(props) => props.theme.mediumGray};
  border: 2px solid ${(props) => props.theme.orange};
`;
