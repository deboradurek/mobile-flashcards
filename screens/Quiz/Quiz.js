import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from './components/ProgressBar';
import { QuizButtonGreen, QuizButtonRed } from '../../components/StyledButtons';
import TextButton from '../../components/TextButton';
import { Container, FullWidthContainer, LargeCardContainer } from '../../styles/shared';
import { QAHeaderContainer, QAHeader, QAText, QAButtonContainer } from './styles/styles';

class Quiz extends Component {
  state = {
    indexCard: 0,
    numCorrect: 0,
  };

  handleAnswer = (answer) => () => {
    const { indexCard, numCorrect } = this.state;
    const { deckQuestions } = this.props;

    const correctAnswer = deckQuestions[indexCard].answer;

    if (answer === correctAnswer) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
      }));
    }

    this.setState((currentState) => ({
      indexCard: currentState.indexCard + 1,
    }));
  };

  render() {
    const { title, numCards, deckQuestions } = this.props;
    const { indexCard, numCorrect } = this.state;

    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar />
          <LargeCardContainer>
            <QAHeaderContainer>
              <QAHeader>Question</QAHeader>
            </QAHeaderContainer>
            <View>
              <QAText>{deckQuestions[indexCard].question}</QAText>
            </View>
            <TextButton onPress={() => this.props.navigation.navigate('QuizAnswer')}>
              Show Answer
            </TextButton>
          </LargeCardContainer>
          <QAButtonContainer>
            <QuizButtonGreen onPress={this.handleAnswer('Yes!')}>V</QuizButtonGreen>
            <QuizButtonRed onPress={this.handleAnswer('No!')}>X</QuizButtonRed>
          </QAButtonContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, props) {
  const { title } = props.route.params;

  return {
    title,
    deckQuestions: decks[title].questions,
    numCards: decks[title].questions.length,
  };
}

export default connect(mapStateToProps)(Quiz);
