import React, { Component } from 'react';
import { FilledButton, OutlinedButton } from '../../components/StyledButtons';
import DeckCard from '../../components/DeckCard';
import {
  Container,
  DeckContainer,
  FilledButtonContainer,
  LargeButtonContainer,
} from '../../styles/shared';

class Deck extends Component {
  render() {
    return (
      <Container>
        <DeckContainer>
          <DeckCard />
        </DeckContainer>
        <LargeButtonContainer>
          <OutlinedButton onPress={() => this.props.navigation.navigate('AddCard')}>
            Add Card
          </OutlinedButton>
          <FilledButton onPress={() => this.props.navigation.navigate('Quiz')}>
            Start Quiz
          </FilledButton>
        </LargeButtonContainer>
      </Container>
    );
  }
}

export default Deck;
