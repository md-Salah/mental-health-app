import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Header } from "react-native-elements";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import About from "./pages/About";
import DoctorDetails from "./pages/DoctorDetails";
import Doctors from "./pages/Doctors";


// const AppNavigator = createStackNavigator(
//   {
//     Home: Home,
//     Quiz: Quiz,
//     Result: Result,
//     About: About,
//     DoctorDetails: DoctorDetails,
//     Doctors: Doctors
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#800000",
//       },
//       headerTintColor: "#fffff0",
//       headerLeft: () => (
//         <MenuButton />
//       ),
//     },
//   }
// );

// const Navigator = createAppContainer(AppNavigator);

// rgb(242, 242, 242)

const MyTheme = {
  dark: false,
  colors: {
    background: "white",
    card: "white",
    primary: "black",
    text: "black",
    border: "black",
    notification: "rgb(255, 69, 58)",
  },
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Quiz" component={Quiz} />
        <Drawer.Screen name="Result" component={Result} />
        <Drawer.Screen name="Doctors" component={Doctors} />
        <Drawer.Screen name="DoctorDetails" component={DoctorDetails} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
