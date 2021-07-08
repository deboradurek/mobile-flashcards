import React from 'react';
import { DeckHeader, TextCardDeck, DarkThinText } from '../styles/shared';

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
