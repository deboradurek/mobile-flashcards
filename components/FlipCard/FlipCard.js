import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { QAHeader, QAHeaderContainer, QAText } from './styles/styles';
import { TextButton } from '../StyledButtons/StyledButtons';

class FlipCard extends Component {
  state = {
    isFlipping: false,
    rotate: new Animated.Value(Number(this.props.flip)),
  };

  flipAnimated = (isFlipped) => {
    setTimeout(() => {
      this.props.onFlip();
    }, 120);

    Animated.spring(this.state.rotate, {
      toValue: Number(isFlipped),
      friction: 10,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ isFlipping: false });
    });
  };

  handlePress = () => {
    const { isFlipping } = this.state;
    const { flip } = this.props;
    if (isFlipping === true) {
      return;
    }

    this.setState({
      isFlipping: true,
    });

    this.flipAnimated(!flip);
  };

  render() {
    const { flip } = this.props;
    const { frontSide, backSide } = this.props;

    const animation = {
      transform: [
        { perspective: 1000 },
        {
          rotateY: this.state.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          }),
        },
      ],
    };

    if (flip) {
      animation.transform.push({ scaleX: -1 });
    }

    const { header, text, buttonText } = flip ? backSide : frontSide;

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
