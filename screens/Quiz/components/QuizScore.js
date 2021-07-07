import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StyledButton from '../../../components/StyledButton';
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
          <StyledButton>
            <Text>Restart</Text>
          </StyledButton>
          <StyledButton>
            <Text>Back to Decks</Text>
          </StyledButton>
        </View>
      </CenterContainer>
    );
  }
}

export default QuizScore;
