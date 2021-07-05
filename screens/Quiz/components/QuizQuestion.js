import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../../styles/shared';
import { Card, QAHeaderView, QAHeader, QAText, QAButtonView } from '../styles/styles';
import styled from 'styled-components';

class QuizQuestion extends Component {
  render() {
    return (
      <View>
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
