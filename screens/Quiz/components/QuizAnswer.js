import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import TextButton from '../../../components/TextButton';
import { Container, FullWidthContainer, LargeCardContainer } from '../../../styles/shared';
import { QAHeaderContainer, QAHeader, QAText } from '../styles/styles';

class QuizAnswer extends Component {
  render() {
    const { indexCard, deckQuestions } = this.props;

    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar />
          <LargeCardContainer>
            <QAHeaderContainer>
              <QAHeader>Answer</QAHeader>
            </QAHeaderContainer>
            <View>
              <QAText>{deckQuestions[indexCard].answer}</QAText>
            </View>
            <TextButton onPress={() => this.props.navigation.navigate('Quiz')}>
              Back to Question
            </TextButton>
          </LargeCardContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, props) {
  const { title, indexCard } = props.route.params;
  return {
    title,
    indexCard,
    deckQuestions: decks[title].questions,
  };
}

export default connect(mapStateToProps)(QuizAnswer);
