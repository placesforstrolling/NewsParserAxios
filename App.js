import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import NewsScreen from './screens/NewsScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  News: {
    screen: NewsScreen,
    // navigationOptions: {
    //   headerShown: false,
    // },
  },
})


const App = createSwitchNavigator({
  App: {
    screen: HomeStack
  }
});

export default createAppContainer(App);