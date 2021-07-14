import React from 'react';
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';
import { withTheme } from 'styled-components';

function CustomStatusBar({ theme, ...props }) {
  return (
    <View style={{ backgroundColor: theme.darkGray, height: Constants.statusBarHeight }}>
      <StatusBar {...props} />
    </View>
  );
}

export default withTheme(CustomStatusBar);
