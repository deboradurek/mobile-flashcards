import React, { Component } from 'react';
import styled from 'styled-components';
import { lightGray } from '../utils/colors';

class DeckCard extends Component {
  render() {
    return (
      <Container>
        <Txt>Deck One</Txt>
        <Txt>10 cards</Txt>
      </Container>
    );
  }
}

export default DeckCard;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Txt = styled.Text`
  /* color: ${lightGray}; */
`;
