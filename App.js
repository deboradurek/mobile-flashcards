import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CustomStatusBar from './components/CustomStatusBar';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { darkestGray } from './utils/colors';
import DeckList from './screens/DeckList/DeckList';
import Deck from './screens/Deck/Deck';
import AddDeck from './screens/AddDeck/AddDeck';
import AddQuestion from './screens/AddQuestion/AddQuestion';
import Quiz from './screens/Quiz/Quiz';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#393E46',
  },
};

// Create TabNavigator
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Deck List':
              return <MaterialCommunityIcons name="cards" size={size} color={color} />;
            case 'Add Deck':
              return <MaterialIcons name="library-add" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E8E8E8',
        inactiveTintColor: '#6b6b6b',
        style: {
          backgroundColor: '#222831',
          shadowColor: 'rgba(255,255,255,0.34)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
          borderTopWidth: 0,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen name="Deck List" component={DeckList} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  );
}

// Create StackNavigator
const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Deck List">
      <Stack.Screen name="Deck List" component={TabNav} options={{ headerShown: false }} />
      <Stack.Screen
        name="Add Deck"
        component={AddDeck}
        options={{ title: 'Add Deck', headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <CustomStatusBar backgroundColor={darkestGray} barStyle="light-content" />
        <StackNav />
        {/* <TabNav /> */}
        {/* <DeckList /> */}
        {/* <Deck /> */}
        {/* <AddDeck /> */}
        {/* <AddQuestion /> */}
        {/* <Quiz /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
