import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from '../../components/Title';
import StyledButton from '../../components/StyledButton';
import { Container, StyledTextInput } from '../../styles/shared';

class AddQuestion extends Component {
  render() {
    return (
      <Container>
        <Container>
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
            <StyledButton>Submit</StyledButton>
          </View>
        </Container>
      </Container>
    );
  }
}

export default AddQuestion;
