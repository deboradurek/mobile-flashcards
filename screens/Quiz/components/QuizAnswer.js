import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../../styles/shared';
import styled from 'styled-components';
import { pink, mediumGray } from '../../../utils/colors';

class QuizAnswer extends Component {
  render() {
    return (
      <Container>
        <Card>
          <HeaderView>
            <Header>Answer</Header>
          </HeaderView>
          <QAText>Yes!</QAText>
          <TouchableOpacity>
            <Text>Back to Question</Text>
          </TouchableOpacity>
        </Card>
      </Container>
    );
  }
}

const Card = styled.View`
  border: 1px solid green;
  padding: 30px;
  border-radius: 12px;
  height: 450px;
  align-items: center;
  width: 350px;
`;

const HeaderView = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${mediumGray};
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
`;

const Header = styled.Text`
  color: ${pink};
  font-weight: bold;
`;

const QAText = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export default QuizAnswer;
