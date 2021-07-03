import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import DeckList from './screens/DeckList/DeckList';
import AddDeck from './screens/AddDeck/AddDeck';
import AddQuestion from './screens/AddQuestion/AddQuestion';
import Quiz from './screens/Quiz/Quiz';

export default function App() {
  return (
    <View>
      <DeckList />
      {/* <AddDeck /> */}
      {/* <AddQuestion /> */}
      {/* <Quiz /> */}
      <StatusBar style="auto" />
    </View>
  );
}
