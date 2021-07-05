import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';

class AddQuestion extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <Title>What would you like to memorize?</Title>
          <View>
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter the question"
              enablesReturnKeyAutomatically
            />
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter the answer"
              enablesReturnKeyAutomatically
            />
            <CustomTouchableOpacity>Submit</CustomTouchableOpacity>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
`;

export default AddQuestion;
