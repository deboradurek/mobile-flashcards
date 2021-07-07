import React, { Component } from 'react';
import { View } from 'react-native';
import { CardDeck, DeckHeader, ThinText } from '../styles/shared';

class DeckCard extends Component {
  render() {
    return (
      <View>
        <CardDeck>
          <DeckHeader>Geography</DeckHeader>
          <ThinText>10 cards</ThinText>
        </CardDeck>
        <CardDeck>
          <DeckHeader>History</DeckHeader>
          <ThinText>4 cards</ThinText>
        </CardDeck>
        <CardDeck>
          <DeckHeader>JavaScript</DeckHeader>
          <ThinText>350 cards</ThinText>
        </CardDeck>
      </View>
    );
  }
}

export default DeckCard;
