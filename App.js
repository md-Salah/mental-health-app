import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Result from './pages/result';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Quiz: Quiz,
    Result: Result,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#800000",
      },
      headerTintColor: "#fffff0",
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Navigator />
  )
}

export default App

const styles = StyleSheet.create({
  container: {
  }
})