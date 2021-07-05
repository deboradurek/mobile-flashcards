import React from 'react';
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar {...props} />
    </View>
  );
}

export default CustomStatusBar;
