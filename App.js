import React from 'react';
import DeckList from './screens/DeckList/DeckList';
import AddDeck from './screens/AddDeck/AddDeck';
import AddQuestion from './screens/AddQuestion/AddQuestion';
import Quiz from './screens/Quiz/Quiz';
import CustomStatusBar from './components/CustomStatusBar';
import styled from 'styled-components';
import { darkGray, darkestGray } from './utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomStatusBar backgroundColor={darkestGray} barStyle="light-content" />
        {/* <DeckList /> */}
        {/* <AddDeck /> */}
        {/* <AddQuestion /> */}
        {/* <Quiz /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
