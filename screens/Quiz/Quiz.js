import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizQuestion from './components/QuizQuestion';
import QuizAnswer from './components/QuizAnswer';
import QuizScore from './components/QuizScore';
import { Container } from '../../styles/shared';
import styled from 'styled-components';
import { ProgressBar } from './styles/styles';

class Quiz extends Component {
  render() {
    return (
      <Container>
        <Container>
          {/* <QuizQuestion /> */}
          {/* <QuizAnswer /> */}
          <QuizScore />
        </Container>
      </Container>
    );
  }
}

export default Quiz;
