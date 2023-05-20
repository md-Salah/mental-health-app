import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { doctors } from "./doctorsData";
import Doctor from "./Doctor";

const DoctorsComponent = () => {

  return (
    <ScrollView style={styles.container}>
      {doctors.map((doctor, index) => (
        <Doctor doctor={doctor} key={index} />
      ))}
    </ScrollView>
  );
};

export default DoctorsComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
