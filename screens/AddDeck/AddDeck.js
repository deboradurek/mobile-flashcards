import React, { Component } from 'react';
import Title from '../../components/Title';
import { FilledButton } from '../../components/StyledButtons';
import {
  Container,
  FullWidthContainer,
  InputContainer,
  StyledTextInput,
} from '../../styles/shared';

class AddDeck extends Component {
  state = {
    deckName: '',
  };

  handleChange = (e) => {
    const deckName = e.nativeEvent.text;

    this.setState({
      deckName,
    });
  };

  render() {
    const { deckName } = this.state;

    return (
      <Container>
        <FullWidthContainer>
          <Title>What's your new deck's name?</Title>
          <InputContainer>
            <StyledTextInput
              onChange={this.handleChange}
              value={deckName}
              placeholder="Enter deck's name"
              maxLength={30}
            />
            <FilledButton>Create Deck</FilledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default AddDeck;
