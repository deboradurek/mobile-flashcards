import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from './components/ProgressBar';
import FlipCard from '../../components/FlipCard/FlipCard';
import { QuizButtonGreen, QuizButtonRed } from '../../components/StyledButtons/StyledButtons';
import { Container, FullWidthContainer } from '../../styles/shared';
import { QAButtonContainer } from './styles/styles';

class Quiz extends Component {
  state = {
    indexCard: 0,
    numCorrect: 0,
    flip: false,
  };

  handleAnswer = (userAnswer) => () => {
    const { indexCard, numCorrect } = this.state;
    const { deckQuestions, numCards } = this.props;
    const answer = deckQuestions[indexCard].answer;
    const indexPlusOne = indexCard + 1;
    let nextNumCorrect = numCorrect;

    // Save quantity of correct answers
    if (userAnswer === answer) {
      nextNumCorrect++;
      this.setState({
        numCorrect: nextNumCorrect,
      });
    }

    // Go to next card OR go to score page
    if (indexPlusOne < numCards) {
      this.setState((currentState) => ({
        indexCard: currentState.indexCard + 1,
      }));
    } else {
      this.props.navigation.navigate('QuizScore', {
        numCorrect: nextNumCorrect,
        numCards,
      });
      this.reset();
    }
  };

  onFlip = () => {
    this.setState((currentState) => ({
      flip: !currentState.flip,
    }));
  };

  reset = () => {
    setTimeout(() => {
      this.setState({
        indexCard: 0,
        numCorrect: 0,
      });
    }, 500);
  };

  render() {
    const { numCards, deckQuestions } = this.props;
    const { indexCard, flip } = this.state;
    const answeredCards = indexCard + 1;

    const question = deckQuestions[indexCard].question;
    const answer = deckQuestions[indexCard].answer;

    const message = `${answeredCards} / ${numCards}`;

    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar message={message} />
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
          {!flip && (
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
