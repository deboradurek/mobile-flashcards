import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QuizQuestion from './components/QuizQuestion';
import QuizAnswer from './components/QuizAnswer';
import QuizScore from './components/QuizScore';

class Quiz extends Component {
  render() {
    return (
      <View>
        <QuizQuestion />
        {/* <QuizAnswer /> */}
        {/* <QuizScore /> */}
      </View>
    );
  }
}

export default Quiz;
