import React, { Component } from 'react';
import DeckCard from './components/DeckCard';
import styled from 'styled-components';
import Title from '../../components/Title';
import { SafeAreaView } from 'react-native-safe-area-context';

class DeckList extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <Title>Your Decks</Title>
          <DeckCard />
        </SafeAreaView>
      </Container>
    );
  }
}

export default DeckList;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
