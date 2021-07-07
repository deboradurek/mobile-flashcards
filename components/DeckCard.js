import React, { Component } from 'react';
import { DeckHeader, TextCardDeck, DarkThinText } from '../styles/shared';

class DeckCard extends Component {
  render() {
    return (
      <TextCardDeck>
        <DeckHeader>Geography</DeckHeader>
        <DarkThinText>10 cards</DarkThinText>
      </TextCardDeck>
    );
  }
}

export default DeckCard;
