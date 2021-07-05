import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizQuestion from './components/QuizQuestion';
import QuizAnswer from './components/QuizAnswer';
import QuizScore from './components/QuizScore';
import { Container } from '../../styles/shared';

class Quiz extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          {/* <QuizQuestion /> */}
          <QuizAnswer />
          {/* <QuizScore /> */}
        </SafeAreaView>
      </Container>
    );
  }
}

export default Quiz;
