import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckCard from '../../components/DeckCard/DeckCard';
import { OutlinedButton, FilledButton } from '../../components/StyledButtons/StyledButtons';
import { Container } from '../../styles/shared';
import { DeckButtonContainer, DeckContainer } from './styles/styles';

class Deck extends Component {
  render() {
    const { title, numCards } = this.props;
    return (
      <Container>
        <DeckContainer>
          <DeckCard title={title} numCards={numCards} />
        </DeckContainer>
        <DeckButtonContainer>
          <OutlinedButton onPress={() => this.props.navigation.navigate('AddCard', { title })}>
            Add Card
          </OutlinedButton>
          {numCards > 0 && (
            <FilledButton onPress={() => this.props.navigation.navigate('Quiz', { title })}>
              Start Quiz
            </FilledButton>
          )}
        </DeckButtonContainer>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, props) {
  const { title } = props.route.params;

  return {
    title,
    numCards: decks[title].questions.length,
  };
}

export default connect(mapStateToProps)(Deck);
