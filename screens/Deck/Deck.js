import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import DeckCard from '../DeckList/components/DeckCard';
import CustomButton from '../../components/CustomButton';

class Deck extends Component {
  render() {
    return (
      <Container>
        <DeckCard />
        <View>
          <CustomButton>
            <Text>Add Card</Text>
          </CustomButton>
          <CustomButton>
            <Text>Start Quiz</Text>
          </CustomButton>
        </View>
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
