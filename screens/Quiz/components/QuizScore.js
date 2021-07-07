import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FilledButton } from '../../../components/StyledButtons';
import Title from '../../../components/Title';
import { CenterContainer, Container, FullWidthContainer } from '../../../styles/shared';
import { CardScore, ProgressBar } from '../styles/styles';

class QuizScore extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <Title>Your Score</Title>
          <CardScore>
            <Text>86%</Text>
          </CardScore>
          <ProgressBar>
            <Text>You got 6 out of 7 questions!</Text>
          </ProgressBar>

          <View>
            <FilledButton>
              <Text>Restart</Text>
            </FilledButton>
            <FilledButton>
              <Text>Back to Decks</Text>
            </FilledButton>
          </View>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default QuizScore;
