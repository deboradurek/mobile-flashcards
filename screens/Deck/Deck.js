import React, { Component } from 'react';
import StyledButton from '../../components/StyledButton';
import DeckCard from '../../components/DeckCard';
import {
  Container,
  DeckContainer,
  LargeCardContainer,
  StyledButtonContainer,
} from '../../styles/shared';

class Deck extends Component {
  render() {
    return (
      <Container>
        <DeckContainer>
          <DeckCard />
        </DeckContainer>
        <StyledButtonContainer>
          <StyledButton onPress={() => this.props.navigation.navigate('AddCard')}>
            Add Card
          </StyledButton>
          <StyledButton onPress={() => this.props.navigation.navigate('QuizQuestion')}>
            Start Quiz
          </StyledButton>
        </StyledButtonContainer>
      </Container>
    );
  }
}

export default Deck;
