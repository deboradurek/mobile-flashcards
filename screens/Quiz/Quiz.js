import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from './components/ProgressBar';
import FlipCard from '../../components/FlipCard';
import { QuizButtonGreen, QuizButtonRed } from '../../components/StyledButtons';
import { Container, FullWidthContainer } from '../../styles/shared';
import { QAButtonContainer } from './styles/styles';

class Quiz extends Component {
  state = {
    indexCard: 0,
    numCorrect: 0,
    isAnimatedShowing: false,
    flip: true,
    flipSideOne: new Animated.Value(1),
    flipSideTwo: new Animated.Value(0),
  };

  shouldComponentUpdate(__, nextState) {
    if (nextState.flip === this.state.flip) {
      return false;
    }

    if (nextState.flip === true) {
      this.flipAnimated({ flipOpen: true, flipSideTwoValue: 0, flipSideOneValue: 1 });
    }

    if (nextState.flip === false) {
      this.flipAnimated({ flipOpen: false, flipSideTwoValue: 1, flipSideOneValue: 0 });
    }

    return true;
  }

  handleFlip = () => {
    if (this.state.isAnimatedShowing === true) {
      return;
    }
    this.setState((currentState) => ({
      flip: !currentState.flip,
      isAnimatedShowing: true,
    }));
  };

  flipAnimated = ({ flipOpen, flipSideTwoValue, flipSideOneValue }) => {
    Animated.sequence([
      Animated.timing(flipOpen ? this.state.flipSideTwo : this.state.flipSideOne, {
        toValue: flipOpen ? flipSideTwoValue : flipSideOneValue,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.bezier(0.445, 0.05, 0.55, 0.95),
      }),
      Animated.timing(flipOpen ? this.state.flipSideOne : this.state.flipSideTwo, {
        toValue: flipOpen ? flipSideOneValue : flipSideTwoValue,
        duration: 75,
        useNativeDriver: true,
        easing: Easing.bezier(0.445, 0.05, 0.55, 0.95),
      }),
    ]).start(() =>
      this.setState({
        isAnimatedShowing: false,
      })
    );
  };

  handleAnswer = (answer) => () => {
    const { indexCard } = this.state;
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
    const { numCards, deckQuestions } = this.props;
    const { indexCard } = this.state;
    const answeredCards = indexCard + 1;

    // const { frontComponent, backComponent } = this.props;

    const flipSideTwo = {
      transform: [
        {
          rotateY: this.state.flipSideOne.interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '0deg'],
          }),
        },
      ],
    };

    const flipSideOne = {
      transform: [
        {
          rotateY: this.state.flipSideTwo.interpolate({
            inputRange: [0, 1],
            outputRange: ['-90deg', '0deg'],
          }),
        },
      ],
    };

    return (
      <Container>
        <FullWidthContainer>
          <ProgressBar answeredCards={answeredCards} totalCards={numCards} />
          <FullWidthContainer>
            <FlipCard handlePress={this.handleFlip} animation={flipSideTwo} />
            <FlipCard handlePress={this.handleFlip} animation={flipSideOne} />
          </FullWidthContainer>
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
