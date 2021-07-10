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

    this.setState((currentState) => ({
      indexCard: currentState.indexCard + 1,
    }));
  };

  render() {
    const { title, numCards, deckQuestions } = this.props;
    const { indexCard, numCorrect } = this.state;

    console.log(deckQuestions[indexCard]);

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
            <QuizButtonGreen onPress={this.handleAnswer('true')}>V</QuizButtonGreen>
            <QuizButtonRed onPress={this.handleAnswer('false')}>X</QuizButtonRed>
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
