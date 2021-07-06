import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from '../../components/Title';
import FilledTouchableOpacity from '../../components/FilledTouchableOpacity';
import { Container, StyledSafeAreaView, StyledTextInput } from '../../styles/shared';

class AddQuestion extends Component {
  render() {
    return (
      <Container>
        <StyledSafeAreaView>
          <Title>What would you like to memorize?</Title>
          <View>
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
            <FilledTouchableOpacity>Submit</FilledTouchableOpacity>
          </View>
        </StyledSafeAreaView>
      </Container>
    );
  }
}

export default AddQuestion;
