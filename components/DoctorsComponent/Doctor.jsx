import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import DatePicker from "../DatePicker";

const Doctor = ({ doctor }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <View style={styles.doctorContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image source={{ uri: doctor.uri }} style={styles.img} />

        <View style={styles.doctorInfo}>
          <Text style={{ fontWeight: "600", fontSize: 19, color: "black" }}>
            {doctor.name}
          </Text>
          <Text style={{ fontWeight: "500", color: "#800000" }}>
            {doctor.specialist}
          </Text>
          <Text style={{ fontWeight: "400", color: "gray" }}>
            {doctor.epxperience}
          </Text>
          <Text style={{ fontWeight: "400", color: "gray" }}>
            {doctor.location}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button
          title="Book Video Consult"
          color="#800000"
          style={styles.btn}
          onPress={(e) => setDatePickerVisibility(true)}
        />
        <Button
          title="Book Appointment"
          color="#7463e0"
          style={styles.btn}
          onPress={(e) => setDatePickerVisibility(true)}
        />
      </View>
      <DatePicker
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
      />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  doctorContainer: {
    marginTop: 10,
    width: "100%",
    borderRadius: 5,
    border: "black",
    overflow: "hidden",
    backgroundColor: "aliceblue",
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },

  doctorInfo: {
    width: "100%",
    marginLeft: 20,
    paddingVertical: 5,
    justifyContent: "space-evenly",
    overflow: "hidden",
  },
  btn: {
    borderRadius: 5,
  },
});
