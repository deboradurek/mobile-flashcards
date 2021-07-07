import React, { Component } from 'react';
import StyledButton from '../../components/StyledButton';
import DeckCard from '../../components/DeckCard';
import { Container, DeckContainer } from '../../styles/shared';

class Deck extends Component {
  render() {
    return (
      <Container>
        <DeckCard />
        <DeckContainer>
          <StyledButton onPress={() => this.props.navigation.navigate('AddCard')}>
            Add Card
          </StyledButton>
          <StyledButton onPress={() => this.props.navigation.navigate('Quiz')}>
            Start Quiz
          </StyledButton>
        </DeckContainer>
      </Container>
    );
  }
}

export default Deck;
