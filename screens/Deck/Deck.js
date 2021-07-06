import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FilledTouchableOpacity from '../../components/FilledTouchableOpacity';
import DeckCard from '../../components/DeckCard';
import { Container, StyledSafeAreaView } from '../../styles/shared';

class Deck extends Component {
  render() {
    return (
      <Container>
        <StyledSafeAreaView>
          <DeckCard />
          <View>
            <FilledTouchableOpacity>
              <Text>Add Card</Text>
            </FilledTouchableOpacity>
            <FilledTouchableOpacity>
              <Text>Start Quiz</Text>
            </FilledTouchableOpacity>
          </View>
        </StyledSafeAreaView>
      </Container>
    );
  }
}

export default Deck;
