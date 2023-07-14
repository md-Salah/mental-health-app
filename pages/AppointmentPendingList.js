import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { FlatList, ImageBackground } from 'react-native-web'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const AppointmentPendingList = () => {
  const patients = [
    {
      'imageAdd': 'https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-3.jpeg',
      'name': 'Dr. Md. Fahad-Bin-Alauddin',
      'age': '20',
      'appointmentDate': '20-09-23'
    },
    {
      'imageAdd': 'https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-3.jpeg',
      'name': 'Dr. Md. Fahad-Bin-Alauddin',
      'age': '20',
      'appointmentDate': '20-09-23'
    },
    {
      'imageAdd': 'https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-3.jpeg',
      'name': 'Dr. Md. Fahad-Bin-Alauddin',
      'age': '20',
      'appointmentDate': '20-09-23'
    },

  ]

  return (
    <ScrollView>
    {
       patients.map((patient, index) => (
        <View style={styles.container} key={index}>
        <View style={styles.image}>
          <Image source={{ uri: patient.imageAdd} }style={{ height:200, width: 200, borderRadius:100}}/>
        </View>
          <Text style={{ fontWeigh: '100%', fontSize: 16, color: '#F3AA60' }}>Name: {patient.name}</Text>
          <Text style={{ fontWeigh: '100%', fontSize: 16, color: '#F3AA60' }}>Age    : {patient.age}</Text>
          <Text style={{ fontWeigh: '100%', fontSize: 16, color: '#F3AA60' }}>Appointment-Date: {patient.appointmentDate}</Text>
          <Text style={{ fontWeigh: '100%', fontSize: 16, color: '#F3AA60' }}>Mental-Health-Situation:</Text>
          <View>
            <Text style={{ fontWeigh: '100%', fontSize: 13, marginLeft: 20,  color: '#EF6262' }}>Bipolar disorder:- 10%</Text>
            <Text style={{ fontWeigh: '100%', fontSize: 13, marginLeft: 20,  color: '#EF6262' }}>Depration            :- 10%</Text>
            <Text style={{ fontWeigh: '100%', fontSize: 13, marginLeft: 20,  color: '#EF6262' }}>Anxity                   :- 10%</Text>
            <Text style={{ fontWeigh: '100%', fontSize: 13, marginLeft: 20,  color: '#EF6262' }}>Psychosis            :- 10%</Text>
            <Text style={{ fontWeigh: '100%', fontSize: 13, marginLeft: 20,  color: '#EF6262' }}>Other                     :- 10%</Text>
          </View>
         <View style={styles.buttons}>
          <TouchableOpacity><Text style={styles.button}>Aprove appointment</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>Decline</Text></TouchableOpacity>

         </View>
        </View>
       ))
    }
    </ScrollView>
  )
}

export default AppointmentPendingList

const styles = StyleSheet.create({
 container: {
        backgroundColor: "#0B666A",
        margin: 5,
        borderRadius: 4,
        padding: 10
  },
  image: {
    marginLeft: 60,
    marginBottom: 10
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    backgroundColor:'#331D2C',
    textAlign:'center',
    color:'white',
    padding: 8,
    borderRadius: 5,
    marginTop: 10
  }
})