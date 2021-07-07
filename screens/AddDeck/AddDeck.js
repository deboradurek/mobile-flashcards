import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from '../../components/Title';
import StyledButton from '../../components/StyledButton';
import {
  Container,
  FullWidthContainer,
  InputContainer,
  StyledTextInput,
} from '../../styles/shared';

class AddDeck extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <Title>What's your new deck's name?</Title>
          <InputContainer>
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter deck's name"
              maxLength={30}
            />
            <StyledButton>Submit</StyledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default AddDeck;
