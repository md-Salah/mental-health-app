import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import About from './pages/About';
import DoctorDetails from './pages/DoctorDetails';
import Doctors from './pages/Doctors';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    // Home: Home,
    //Quiz: Quiz,
    //Result: Result,
    //About: About,
    DoctorDetails: DoctorDetails,
    // Doctors: Doctors
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