import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import FilledTouchableOpacity from '../../components/FilledTouchableOpacity';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeckCard from '../../components/DeckCard';

class Deck extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <DeckCard />
          <View>
            <FilledTouchableOpacity>
              <Text>Add Card</Text>
            </FilledTouchableOpacity>
            <FilledTouchableOpacity>
              <Text>Start Quiz</Text>
            </FilledTouchableOpacity>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Deck;
