import React, { Component } from 'react';
import { View } from 'react-native';
import ProgressBar from './components/ProgressBar';
import TextButton from '../../components/TextButton';
import { Container, FullWidthContainer, LargeCardContainer } from '../../styles/shared';
import { QAHeaderContainer, QAHeader, QAText, QAButtonContainer } from './styles/styles';
import { QuizButtonGreen, QuizButtonRed } from '../../components/StyledButtons';

class Quiz extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar />
          <LargeCardContainer>
            <QAHeaderContainer>
              <QAHeader>Question</QAHeader>
            </QAHeaderContainer>
            <View>
              <QAText>Is "Canada Day" celebrated on the 1st of July?</QAText>
            </View>
            <TextButton onPress={() => this.props.navigation.navigate('QuizAnswer')}>
              Show Answer
            </TextButton>
          </LargeCardContainer>
          <QAButtonContainer>
            <QuizButtonGreen>V</QuizButtonGreen>
            <QuizButtonRed>X</QuizButtonRed>
          </QAButtonContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default Quiz;
