import styled from 'styled-components';

export const TouchableOpacityGreen = styled.TouchableOpacity`
  padding: 20px 70px;
  margin: 40px 0;
  background-color: #209f21;
  border-radius: 12px;
`;

export const TouchableOpacityRed = styled.TouchableOpacity`
  padding: 20px 70px;
  margin: 40px 0;
  background-color: #e82222;
  border-radius: 12px;
`;

export const TextTouchableOpacity = styled.TouchableOpacity`
  padding: 15px;
`;

export const FilledTouchableOpacity = styled.TouchableOpacity`
  background-color: #f96d00;
  align-items: stretch;
  padding: 15px;
  margin-top: 18px;
  border-radius: 8px;
  align-items: center;
`;

export const OutlinedTouchableOpacity = styled(FilledTouchableOpacity)`
  background-color: #393e46;
  border: 2px solid #f96d00;
`;
