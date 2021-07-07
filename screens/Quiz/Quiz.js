import React, { Component } from 'react';
import QuizQuestion from './components/QuizQuestion';
import QuizAnswer from './components/QuizAnswer';
import QuizScore from './components/QuizScore';
import { Container, FullWidthContainer } from '../../styles/shared';

class Quiz extends Component {
  render() {
    return (
      <Container>
        <FullWidthContainer>
          <QuizQuestion />
          {/* <QuizAnswer /> */}
          {/* <QuizScore /> */}
        </FullWidthContainer>
      </Container>
    );
  }
}

export default Quiz;
