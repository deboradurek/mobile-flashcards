import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { QAHeader, QAHeaderContainer, QAText } from './styles/styles';
import { TextButton } from '../StyledButtons/StyledButtons';

class FlipCard extends Component {
  state = {
    isAnimatedShowing: false,
    flipSideOne: new Animated.Value(1),
    flipSideTwo: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
    const { flip } = this.props;

    if (flip !== prevProps.flip) {
      if (flip === true) {
        this.flipAnimated({ flipOpen: true, flipSideTwoValue: 0, flipSideOneValue: 1 });
      }

      if (flip === false) {
        this.flipAnimated({ flipOpen: false, flipSideTwoValue: 1, flipSideOneValue: 0 });
      }
    }
  }

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

  handlePress = () => {
    const { onFlip } = this.props;

    if (this.state.isAnimatedShowing === true) {
      return;
    }
    this.setState({
      isAnimatedShowing: true,
    });

    onFlip();
  };

  render() {
    const { frontSide, backSide, flip } = this.props;

    const flipFront = {
      transform: [
        {
          rotateY: this.state.flipSideOne.interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '0deg'],
          }),
        },
      ],
    };

    const flipBack = {
      transform: [
        {
          rotateY: this.state.flipSideTwo.interpolate({
            inputRange: [0, 1],
            outputRange: ['-90deg', '0deg'],
          }),
        },
      ],
    };

    const animation = flip ? flipFront : flipBack;
    const { header, text, buttonText } = flip ? frontSide : backSide;

    return (
      <Animated.View style={[styles.flipContainer, animation, { width: '100%', height: '100%' }]}>
        <QAHeaderContainer>
          <QAHeader>{header}</QAHeader>
        </QAHeaderContainer>
        <View>
          <QAText>{text}</QAText>
        </View>
        <TextButton activeOpacity={0} onPress={this.handlePress}>
          {buttonText}
        </TextButton>
      </Animated.View>
    );
  }
}

// Styles for Animated component

const styles = StyleSheet.create({
  flipContainer: {
    flex: 1,
    position: 'absolute', //<= important
    borderRadius: 12,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 20,
    maxHeight: 512,
  },
});

export default FlipCard;
