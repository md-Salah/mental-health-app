import { Image, StyleSheet, Text, ScrollView, View, BackHandler, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import DatePicker from "../DatePicker";

const DoctorDetails = ({ doctor, setViewDoctor }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const backBtnHandler = () => { setViewDoctor(null); return true }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backBtnHandler);

    // Clean up the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <Image source={{ uri: doctor.uri }} style={styles.img} />
      <View style={styles.description}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={[styles.details, { fontWeight: 'bold', color: 'green' }]}>{doctor.specialist}</Text>
        <Text style={styles.details}>{doctor.epxperience}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="location" size={24} color="black" style={styles.icon} />
          <Text style={[styles.details, { fontSize: 16, marginLeft: 5 }]}>{doctor.location}</Text>
        </View>
      </View>

      {/* Appointment Notification */}
      {appointment &&
        <View style={{ marginHorizontal: 30, marginTop: 20 }}>
          <Text style={{ fontSize: 16, textAlign: 'justify', fontStyle: 'italic' }}>{'"' + appointment + '"'}</Text>
        </View>
      }

      {/* Appointment Button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
          marginHorizontal: 30,
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
          color="green"
          style={styles.btn}
          onPress={(e) => setDatePickerVisibility(true)}
        />
      </View>
      <DatePicker
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
        setAppointment={setAppointment}
      />
    </ScrollView >
  )
}

export default DoctorDetails

const styles = StyleSheet.create({
  description: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  img: {
    height: 250,
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  name: {
    fontWeight: '500',
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
  },
  details: {
    fontSize: 13,
    textAlign: 'center',
  },
  btn: {
    borderRadius: 5,
  },
})