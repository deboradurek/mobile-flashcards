import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FilledTouchableOpacity from '../../../components/FilledTouchableOpacity';
import Title from '../../../components/Title';
import { CenterContainer } from '../../../styles/shared';
import { CardScore, ProgressBar } from '../styles/styles';

class QuizScore extends Component {
  render() {
    return (
      <CenterContainer>
        <Title>Your Score</Title>
        <CardScore>
          <Text>86%</Text>
        </CardScore>
        <ProgressBar>
          <Text>You got 6 out of 7 questions!</Text>
        </ProgressBar>

        <View>
          <FilledTouchableOpacity>
            <Text>Restart</Text>
          </FilledTouchableOpacity>
          <FilledTouchableOpacity>
            <Text>Back to Decks</Text>
          </FilledTouchableOpacity>
        </View>
      </CenterContainer>
    );
  }
}

export default QuizScore;
