import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import reducer from './reducers';
import middleware from './middleware';
import { setNotification } from './utils/helpers';
import CustomStatusBar from './components/CustomStatusBar';
import DeckList from './screens/DeckList/DeckList';
import Deck from './screens/Deck/Deck';
import AddDeck from './screens/AddDeck/AddDeck';
import AddCard from './screens/AddCard/AddCard';
import Quiz from './screens/Quiz/Quiz';
import QuizScore from './screens/Quiz/components/QuizScore';
import { ThemeProvider, withTheme } from 'styled-components';
import { styledTheme, navTheme } from './styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create TabNavigator
const Tab = createBottomTabNavigator();

const createTabBarOptions = (theme) => ({
  activeTintColor: theme.lightGray,
  inactiveTintColor: theme.inactiveTintColorTab,
  style: {
    backgroundColor: theme.darkGray,
    shadowColor: theme.shadowColorWhite,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderTopWidth: 0,
    paddingTop: 8,
  },
});

const TabNav = withTheme(({ theme }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'DeckList':
              return <MaterialCommunityIcons name="cards" size={size} color={color} />;
            case 'AddDeck':
              return <MaterialIcons name="library-add" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={createTabBarOptions(theme)}
    >
      <Tab.Screen name="DeckList" component={DeckList} options={{ title: 'Deck List' }} />
      <Tab.Screen name="AddDeck" component={AddDeck} options={{ title: 'Add Deck' }} />
    </Tab.Navigator>
  );
});

// Create StackNavigator
const Stack = createStackNavigator();

const createStackOptions =
  (theme) =>
  (headerBackTitleVisible = true, title = '', headerLeft) => ({
    headerTintColor: theme.lightGray,
    headerStyle: {
      backgroundColor: theme.darkGray,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    headerBackTitleVisible,
    title,
    headerLeft,
  });

const StackNav = withTheme(({ theme }) => {
  const getOptions = createStackOptions(theme);

  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen
        name="DeckList"
        component={TabNav}
        options={{ headerShown: false, title: '' }}
      />
      <Stack.Screen name="Deck" component={Deck} options={getOptions(true, 'Deck')} />
      <Stack.Screen name="AddCard" component={AddCard} options={getOptions(true, 'Add Card')} />
      <Stack.Screen name="Quiz" component={Quiz} options={getOptions(true, 'Quiz')} />
      <Stack.Screen
        name="QuizScore"
        component={QuizScore}
        options={getOptions(false, 'Score', null)}
      />
    </Stack.Navigator>
  );
});

// Redux Store
const store = createStore(reducer, middleware);

class App extends Component {
  componentDidMount() {
    setNotification();
    // Uncomment to reset local data:
    // AsyncStorage.clear();
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={styledTheme}>
          <NavigationContainer theme={navTheme}>
            <CustomStatusBar barStyle="light-content" />
            <StackNav />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
