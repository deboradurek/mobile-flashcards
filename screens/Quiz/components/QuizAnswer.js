import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../../styles/shared';
import { Card, QAHeaderView, QAHeader, QAText } from '../styles/styles';
import styled from 'styled-components';

class QuizAnswer extends Component {
  render() {
    return (
      <View>
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
