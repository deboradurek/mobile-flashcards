import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Deck extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Deck One</Text>
          <Text>2 cards</Text>
        </View>
        <View>
          <Text>Deck Two</Text>
          <Text>6 cards</Text>
        </View>
      </View>
    );
  }
}

export default Deck;
