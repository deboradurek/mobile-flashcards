import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';

class AddDeck extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <Title>What's your new deck's name?</Title>
          <View>
            <StyledTextInput
              onChangeText={() => {}}
              value={() => {}}
              placeholder="Enter deck's name"
              maxLength={30}
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

export default AddDeck;
