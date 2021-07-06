import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card, QAHeaderView, QAHeader, QAText } from '../styles/styles';

class QuizAnswer extends Component {
  render() {
    return (
      <View>
        <ProgressBar>
          <Text>1 / 7</Text>
        </ProgressBar>
        <Card>
          <QAHeaderView>
            <QAHeader>Answer</QAHeader>
          </QAHeaderView>
          <QAText>Yes!</QAText>
          <TouchableOpacity>
            <Text>Back to Question</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

export default QuizAnswer;
