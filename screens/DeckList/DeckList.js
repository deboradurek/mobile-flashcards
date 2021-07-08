import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import DeckCard from '../../components/DeckCard';
import { Container, FullWidthContainer, SmallCardContainer } from '../../styles/shared';
import { getDecks } from '../../actions';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDecks());
  }

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

export default connect()(DeckList);
