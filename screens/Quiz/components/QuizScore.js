import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Title from '../../../components/Title/Title';
import { OutlinedButton, FilledButton } from '../../../components/StyledButtons/StyledButtons';
import { clearAllNotifications, setNotification } from '../../../utils/helpers';
import { Container, FullWidthContainer } from '../../../styles/shared';
import { CardScore, ScoreButtonContainer, TextScore } from '../styles/styles';

class QuizScore extends Component {
  componentDidMount() {
    clearAllNotifications().then(setNotification);
  }

  render() {
    const { numCards, numCorrect } = this.props.route.params;
    const score = (numCorrect / numCards) * 100;

    const message =
      numCards !== 1
        ? `You got ${numCorrect} out of ${numCards} questions!`
        : `You got ${numCorrect} out of ${numCards} question!`;

    return (
      <Container>
        <FullWidthContainer>
          <Title>Your Score</Title>
          <CardScore>
            <TextScore>{score}%</TextScore>
          </CardScore>
          <ProgressBar message={message} />
          <ScoreButtonContainer>
            <OutlinedButton onPress={() => this.props.navigation.navigate('Quiz')}>
              Restart
            </OutlinedButton>
            <FilledButton onPress={() => this.props.navigation.navigate('Deck')}>
              Back to Deck
            </FilledButton>
          </ScoreButtonContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

export default QuizScore;
