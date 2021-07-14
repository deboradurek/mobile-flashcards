import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck } from '../../actions';
import Title from '../../components/Title/Title';
import { FilledButton } from '../../components/StyledButtons/StyledButtons';
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

  handleCreateDeck = () => {
    const { dispatch } = this.props;
    const { deckName } = this.state;

    dispatch(addNewDeck(deckName));

    this.setState({
      deckName: '',
    });

    this.props.navigation.navigate('DeckList');
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
            <FilledButton onPress={this.handleCreateDeck} disabled={deckName === ''}>
              Create Deck
            </FilledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default connect()(AddDeck);
