import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckCard from '../../components/DeckCard';
import { FilledButton, OutlinedButton } from '../../components/StyledButtons';
import { Container, DeckContainer, LargeButtonContainer } from '../../styles/shared';

class Deck extends Component {
  render() {
    const { title, numCards } = this.props;
    return (
      <Container>
        <DeckContainer>
          <DeckCard title={title} numCards={numCards} />
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

function mapStateToProps({ decks }, props) {
  const { title } = props.route.params;

  return {
    title,
    numCards: decks[title].questions.length,
  };
}

export default connect(mapStateToProps)(Deck);
