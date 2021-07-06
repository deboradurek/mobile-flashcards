import React, { Component } from 'react';
import { CardDeck, DeckHeader, ThinText } from '../styles/shared';

class DeckCard extends Component {
  render() {
    return (
      <CardDeck>
        <DeckHeader>Geography</DeckHeader>
        <ThinText>10 cards</ThinText>
      </CardDeck>
    );
  }
}

export default DeckCard;
