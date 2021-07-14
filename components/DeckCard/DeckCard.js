import React from 'react';
import { DarkThinText } from '../../styles/shared';
import { DeckHeader, TextCardDeck } from './styles/styles';

function DeckCard(props) {
  const { title, numCards } = props;

  return (
    <TextCardDeck>
      <DeckHeader>{title}</DeckHeader>
      <DarkThinText>{numCards} cards</DarkThinText>
    </TextCardDeck>
  );
}

export default DeckCard;
