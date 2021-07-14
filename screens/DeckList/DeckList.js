import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../../actions';
import Title from '../../components/Title/Title';
import DeckCard from '../../components/DeckCard/DeckCard';
import { Container, FullWidthContainer } from '../../styles/shared';
import { SmallCardContainer } from './styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getDecks());

    // Uncomment to reset local data:
    // AsyncStorage.clear();
  }

  render() {
    const { decks } = this.props;

    return (
      <Container>
        <FullWidthContainer>
          <Title>Your Decks</Title>
          {decks.map((deck) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Deck', { title: deck.title })}
              key={deck.title}
            >
              <SmallCardContainer>
                <DeckCard title={deck.title} numCards={deck.numCards} />
              </SmallCardContainer>
            </TouchableOpacity>
          ))}
        </FullWidthContainer>
      </Container>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.values(decks).map((deck) => ({
      title: deck.title,
      numCards: deck.questions ? deck.questions.length : 0,
    })),
  };
}

export default connect(mapStateToProps)(DeckList);
