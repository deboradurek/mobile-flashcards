import React, { Component } from 'react';
import StyledButton from '../../components/StyledButton';
import DeckCard from '../../components/DeckCard';
import { Container, DeckContainer, LightText } from '../../styles/shared';

class Deck extends Component {
  render() {
    return (
      <Container>
        <DeckCard />
        <DeckContainer>
          <StyledButton>
            <LightText>Add Card</LightText>
          </StyledButton>
          <StyledButton>
            <LightText>Start Quiz</LightText>
          </StyledButton>
        </DeckContainer>
      </Container>
    );
  }
}

export default Deck;
