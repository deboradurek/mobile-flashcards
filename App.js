import React, { Component } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import reducer from './reducers';
import middleware from './middleware';
import { setNotification } from './utils/helpers';
import CustomStatusBar from './components/CustomStatusBar';
import { darkestGray } from './utils/colors';
import DeckList from './screens/DeckList/DeckList';
import Deck from './screens/Deck/Deck';
import AddDeck from './screens/AddDeck/AddDeck';
import AddCard from './screens/AddCard/AddCard';
import Quiz from './screens/Quiz/Quiz';
import QuizScore from './screens/Quiz/components/QuizScore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#393E46',
  },
};

// Create TabNavigator
const Tab = createBottomTabNavigator();

const createTabBarOptions = () => ({
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
});

function TabNav() {
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
      tabBarOptions={createTabBarOptions()}
    >
      <Tab.Screen name="DeckList" component={DeckList} options={{ title: 'Deck List' }} />
      <Tab.Screen name="AddDeck" component={AddDeck} options={{ title: 'Add Deck' }} />
    </Tab.Navigator>
  );
}

// Create StackNavigator
const Stack = createStackNavigator();

const createStackOptions = (headerBackTitleVisible = true, title = '', headerLeft) => ({
  headerTintColor: '#E8E8E8',
  headerStyle: {
    backgroundColor: '#222831',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  headerBackTitleVisible,
  title,
  headerLeft,
});

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen
        name="DeckList"
        component={TabNav}
        options={{ headerShown: false, title: '' }}
      />
      <Stack.Screen name="Deck" component={Deck} options={() => createStackOptions(true, 'Deck')} />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={createStackOptions(true, 'Add Card')}
      />
      <Stack.Screen name="Quiz" component={Quiz} options={() => createStackOptions(true, 'Quiz')} />
      <Stack.Screen
        name="QuizScore"
        component={QuizScore}
        options={createStackOptions(false, 'Score', null)}
      />
    </Stack.Navigator>
  );
}

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
        <NavigationContainer theme={MyTheme}>
          <CustomStatusBar backgroundColor={darkestGray} barStyle="light-content" />
          <StackNav />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
