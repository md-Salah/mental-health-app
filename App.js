import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
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
import ReadArticle from "./pages/ReadArticle";
import AppointmentPendingList from "./pages/AppointmentPendingList";
import Exercise from "./pages/Exercise";
import SmartHealth from "./pages/SmartHealth";


const MyTheme = {
  dark: false,
  colors: {
    background: "white",
    card: "#F5FFFA",
    primary: "black",
    text: "black",
    border: "black",
    notification: "rgb(255, 69, 58)",
  },
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom header component */}
      <View style={styles.header}>
        <Image source={require('./images/logo.jpg')} style={styles.logo} />
        <Text style={styles.appName}>Mental Health App</Text>
      </View>
      {/* Render the rest of the drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Logout" drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Anger & Anxiety Assessment" component={SelfTest} />
        <Drawer.Screen name="Doctors" component={Doctors} />
        <Drawer.Screen name="Hospital List" component={HospitalList} />
        <Drawer.Screen name="Doctor Details" component={DoctorDetails} />
        <Drawer.Screen name="Readings" component={ReadArticle} />
        <Drawer.Screen name="SmartHealth" component={SmartHealth} />
        <Drawer.Screen
          name="Emergency Contact"
          component={EmergencyContactPage}
        />
        <Drawer.Screen
          name="AppointmentPendingList"
          component={AppointmentPendingList}
        />
        <Drawer.Screen name="Physical Exercise" component={Exercise} />
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
  header: {
    padding: 16,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 80,
  },
  logo: {
    width: 50,
    aspectRatio: 1,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlignVertical: 'center',
    marginLeft: 10,
  },
});
