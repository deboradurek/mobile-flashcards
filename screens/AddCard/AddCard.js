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

class AddCard extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <Title>What would you like to memorize?</Title>
          <InputContainer>
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter the question"
            />
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter the answer"
            />
            <StyledButton>Submit</StyledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default AddCard;
