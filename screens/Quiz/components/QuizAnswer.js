import React, { Component } from 'react';
import { View } from 'react-native';
import ProgressBar from './ProgressBar';
import TextButton from '../../../components/TextButton';
import { Container, FullWidthContainer, LargeCardContainer } from '../../../styles/shared';
import { QAHeaderContainer, QAHeader, QAText } from '../styles/styles';

class QuizAnswer extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar />
          <LargeCardContainer>
            <QAHeaderContainer>
              <QAHeader>Answer</QAHeader>
            </QAHeaderContainer>
            <View>
              <QAText>Yes!</QAText>
            </View>
            <TextButton onPress={() => this.props.navigation.navigate('Quiz')}>
              Back to Question
            </TextButton>
          </LargeCardContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default QuizAnswer;
