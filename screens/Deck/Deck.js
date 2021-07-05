import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import DeckCard from '../DeckList/components/DeckCard';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import { SafeAreaView } from 'react-native-safe-area-context';

class Deck extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <DeckCard />
          <View>
            <CustomTouchableOpacity>
              <Text>Add Card</Text>
            </CustomTouchableOpacity>
            <CustomTouchableOpacity>
              <Text>Start Quiz</Text>
            </CustomTouchableOpacity>
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
