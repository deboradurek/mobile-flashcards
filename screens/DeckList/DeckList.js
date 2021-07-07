import React, { Component } from 'react';
import Title from '../../components/Title';
import { Container, FullWidthContainer, SmallCardContainer } from '../../styles/shared';
import { TouchableOpacity } from 'react-native';
import DeckCard from '../../components/DeckCard';

class DeckList extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <Title>Your Decks</Title>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck')}>
            <SmallCardContainer>
              <DeckCard />
            </SmallCardContainer>
          </TouchableOpacity>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default DeckList;
