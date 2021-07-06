import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from '../../components/Title';
import FilledTouchableOpacity from '../../components/FilledTouchableOpacity';
import { Container, StyledSafeAreaView, StyledTextInput } from '../../styles/shared';

class AddDeck extends Component {
  render() {
    return (
      <Container>
        <StyledSafeAreaView>
          <Title>What's your new deck's name?</Title>
          <View>
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter deck's name"
              maxLength={30}
            />
            <FilledTouchableOpacity>Submit</FilledTouchableOpacity>
          </View>
        </StyledSafeAreaView>
      </Container>
    );
  }
}

export default AddDeck;
