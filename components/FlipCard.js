import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { QAHeader, QAHeaderContainer, QAText } from '../screens/Quiz/styles/styles';
import TextButton from './TextButton';

function FlipCard({ header, text, buttonText, handlePress, animation }) {
  return (
    <Animated.View style={[styles.flipContainer, animation, { width: '100%', height: '100%' }]}>
      <QAHeaderContainer>
        <QAHeader>{header}</QAHeader>
      </QAHeaderContainer>
      <View>
        <QAText>{text}</QAText>
      </View>
      <TextButton activeOpacity={0} onPress={handlePress}>
        {buttonText}
      </TextButton>
    </Animated.View>
  );
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
  },
});

export default FlipCard;
