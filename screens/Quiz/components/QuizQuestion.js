import React, { Component } from 'react';
import { View } from 'react-native';
import ProgressBar from './ProgressBar';
import TextButton from '../../../components/TextButton';
import {
  Container,
  FullWidthContainer,
  LargeCardContainer,
  LightText,
} from '../../../styles/shared';
import {
  QAHeaderContainer,
  QAHeader,
  QAText,
  QAButtonContainer,
  TouchableOpacityRed,
  TouchableOpacityGreen,
} from '../styles/styles';

class QuizQuestion extends Component {
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
              Check Answer
            </TextButton>
          </LargeCardContainer>
          <QAButtonContainer>
            <TouchableOpacityGreen>
              <LightText>V</LightText>
            </TouchableOpacityGreen>
            <TouchableOpacityRed>
              <LightText>X</LightText>
            </TouchableOpacityRed>
          </QAButtonContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default QuizQuestion;
