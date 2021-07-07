import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from '../../components/Title';
import StyledButton from '../../components/StyledButton';
import { Container, FullWidthContainer, StyledTextInput } from '../../styles/shared';

class AddDeck extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <Title>What's your new deck's name?</Title>
          <View>
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter deck's name"
              maxLength={30}
            />
            <StyledButton>Submit</StyledButton>
          </View>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default AddDeck;
