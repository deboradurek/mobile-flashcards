import React, { Component } from 'react';
import Title from '../../components/Title';
import DeckCard from '../../components/DeckCard';
import { Container, StyledSafeAreaView } from '../../styles/shared';

class DeckList extends Component {
  render() {
    return (
      <Container>
        <StyledSafeAreaView>
          <Title>Your Decks</Title>
          <DeckCard />
        </StyledSafeAreaView>
      </Container>
    );
  }
}

export default DeckList;
