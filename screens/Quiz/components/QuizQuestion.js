import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card, QAHeaderView, QAHeader, QAText, QAButtonView } from '../styles/styles';

class QuizQuestion extends Component {
  render() {
    return (
      <View>
        <ProgressBar>
          <Text>1 / 7</Text>
        </ProgressBar>
        <Card>
          <QAHeaderView>
            <QAHeader>Question</QAHeader>
          </QAHeaderView>
          <QAText>Is "Canada Day" celebrated on the 1st of July?</QAText>
          <TouchableOpacity>
            <Text>Check Answer</Text>
          </TouchableOpacity>
        </Card>
        <QAButtonView>
          <TouchableOpacity>
            <Text>V</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </QAButtonView>
      </View>
    );
  }
}

export default QuizQuestion;
