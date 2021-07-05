import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeckCard from '../../components/DeckCard';
import { Container } from '../../styles/shared';

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
