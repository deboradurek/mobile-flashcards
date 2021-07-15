import styled from 'styled-components';

export const TextCardDeck = styled.View`
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const DeckHeader = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 28px;
  color: ${(props) => props.theme.pink};
  margin-bottom: 20px;
  text-align: center;
`;
