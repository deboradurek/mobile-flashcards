import React, { Component } from 'react';
import Title from '../../components/Title';
import { FilledButton } from '../../components/StyledButtons';
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
            <FilledButton>Submit</FilledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default AddCard;
