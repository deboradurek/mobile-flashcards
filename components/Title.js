import React from 'react';
import { View } from 'react-native';
import { MainTitle } from '../styles/shared';

function Title({ children }) {
  return (
    <View>
      <MainTitle>{children}</MainTitle>
    </View>
  );
}

export default Title;
