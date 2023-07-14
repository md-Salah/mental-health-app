import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "./pages/Home";
import SelfTest from "./pages/SelfTest";
import About from "./pages/About";
import DoctorDetails from "./pages/DoctorDetails";
import Doctors from "./pages/Doctors";
import LoginRegistration from "./pages/LoginRegistration";
import EmergencyContactPage from "./pages/Emergency";
import HospitalList from "./pages/HospitalList";

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
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Logout">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Anger & Anxiety Assessment" component={SelfTest} />
        <Drawer.Screen name="Doctors" component={Doctors} />
        <Drawer.Screen name="Hospital List" component={HospitalList} />
        <Drawer.Screen name="Doctor Details" component={DoctorDetails} />
        <Drawer.Screen name="Emergency Contact" component={EmergencyContactPage} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen
          name="Logout"
          component={LoginRegistration}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
