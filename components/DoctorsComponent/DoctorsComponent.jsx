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
import DoctorDetails from "./DoctorDetails";

const DoctorsComponent = () => {
  const [viewDoctor, setViewDoctor] = useState(null);

  return (
    <View>

      {viewDoctor ?
        (<DoctorDetails doctor={viewDoctor} setViewDoctor={setViewDoctor} />) :
        (<ScrollView style={styles.container}>
          {doctors.map((doctor, index) => (
            <Doctor key={index} doctor={doctor} setViewDoctor={setViewDoctor} />
          ))}
        </ScrollView>)
      }
    </View>
  );
};

export default DoctorsComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#f1f3f7',
  },
});
