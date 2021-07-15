import React, { Component } from 'react';
import { TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../../actions';
import Title from '../../components/Title/Title';
import DeckCard from '../../components/DeckCard/DeckCard';
import { FullWidthContainer, LightText } from '../../styles/shared';
import {
  CenteredContainer,
  ContainerFlatlist,
  DeckListTitle,
  SmallCardContainer,
} from './styles/styles';
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
      <ContainerFlatlist>
        {decks.length > 0 ? <Title>Your Decks</Title> : <DeckListTitle>Your Decks</DeckListTitle>}
        <FullWidthContainer>
          {decks.length > 0 ? (
            <FlatList
              data={decks}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Deck', { title: item.title })}
                >
                  <SmallCardContainer>
                    <DeckCard title={item.title} numCards={item.numCards} />
                  </SmallCardContainer>
                </TouchableOpacity>
              )}
            />
          ) : (
            <CenteredContainer>
              <Image source={require('../../images/box.png')} style={{ marginBottom: 20 }}></Image>
              <LightText>Your deck list is empty!</LightText>
              <LightText>Add a new deck to start playing.</LightText>
            </CenteredContainer>
          )}
        </FullWidthContainer>
      </ContainerFlatlist>
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
