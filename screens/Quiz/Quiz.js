import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from './components/ProgressBar';
import FlipCard from '../../components/FlipCard';
import { QuizButtonGreen, QuizButtonRed, QuizButtonEmpty } from '../../components/StyledButtons';
import { Container, FullWidthContainer } from '../../styles/shared';
import { QAButtonContainer, TouchableOpacityEmpty } from './styles/styles';

class Quiz extends Component {
  state = {
    indexCard: 0,
    numCorrect: 0,
    flip: true,
  };

  handleAnswer = (userAnswer) => () => {
    const { indexCard } = this.state;
    const { deckQuestions } = this.props;
    const answer = deckQuestions[indexCard].answer;

    if (userAnswer === answer) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
      }));
    }

    this.setState((currentState) => ({
      indexCard: currentState.indexCard + 1,
    }));
  };

  onFlip = () => {
    this.setState((currentState) => ({
      flip: !currentState.flip,
    }));
  };

  render() {
    const { numCards, deckQuestions } = this.props;
    const { indexCard, flip } = this.state;
    const answeredCards = indexCard + 1;

    const question = deckQuestions[indexCard].question;
    const answer = deckQuestions[indexCard].answer;

    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar answeredCards={answeredCards} totalCards={numCards} />
          <FullWidthContainer>
            <FlipCard
              frontSide={{
                header: 'Question',
                text: question,
                buttonText: 'Show answer',
              }}
              backSide={{
                header: 'Answer',
                text: answer,
                buttonText: 'Back to Question',
              }}
              onFlip={this.onFlip}
              flip={flip}
            />
          </FullWidthContainer>
          {flip === true && (
            <QAButtonContainer>
              <QuizButtonGreen onPress={this.handleAnswer('Yes!')}>V</QuizButtonGreen>
              <QuizButtonRed onPress={this.handleAnswer('No!')}>X</QuizButtonRed>
            </QAButtonContainer>
          )}
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
