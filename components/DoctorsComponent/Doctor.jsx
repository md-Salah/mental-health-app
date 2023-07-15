import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
  BackHandler
} from "react-native";
import React from "react";


const Doctor = ({ doctor, setViewDoctor }) => {

  return (
    <TouchableOpacity style={styles.doctorContainer} onPress={() => { setViewDoctor(doctor) }}>
      <ImageBackground source={require('../../images/hospital-bg.jpg')} style={styles.doctorItem}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10, marginLeft: 10 }}>
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
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  doctorContainer: {
    marginTop: 5,
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
  doctorItem: {
    marginTop: 5,
    paddingVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
    shadowOpacity: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },

  doctorInfo: {
    width: "100%",
    marginLeft: 20,
    justifyContent: "space-evenly",
    overflow: "hidden",
  },

});
