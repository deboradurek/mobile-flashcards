import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CardDeck, Container } from '../../../styles/shared';
import { Card, QAHeaderView, QAHeader, QAText, QAButtonView, ProgressBar } from '../styles/styles';

class QuizQuestion extends Component {
  render() {
    return (
      <View>
        <ProgressBar>
          <Text>1 / 7</Text>
        </ProgressBar>
        <CardDeck>
          <QAHeaderView>
            <QAHeader>Question</QAHeader>
          </QAHeaderView>
          <QAText>Is "Canada Day" celebrated on the 1st of July?</QAText>
          <TouchableOpacity>
            <Text>Check Answer</Text>
          </TouchableOpacity>
        </CardDeck>
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
