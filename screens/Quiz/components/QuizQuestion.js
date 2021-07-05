import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../../styles/shared';
import styled from 'styled-components';
import { pink, mediumGray } from '../../../utils/colors';

class QuizQuestion extends Component {
  render() {
    return (
      <Container>
        <Card>
          <HeaderView>
            <Header>Question</Header>
          </HeaderView>
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

const QAButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default QuizQuestion;
