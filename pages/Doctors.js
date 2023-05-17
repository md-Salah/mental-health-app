import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-web'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const Doctors = () => {
  const doctors = [
    {
      'uri': 'https://www.doctorbangladesh.com/wp-content/uploads/Dr.-Md.-Fahad-Bin-Alauddin.jpg',
      'name': 'Dr. Md. Fahad-Bin-Alauddin',
      'specialist': 'Psychiatrist',
      'epxperience': '4 Years Expreience'
    },

  ]

  return (
    <ScrollView>
      {
        doctors.map((doctor, index) => (
          <View style={styles.item} key={index}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={{ uri: doctor.uri }}
                style={styles.img}
              />

              <View style={styles.Initem}>
                <Text style={{ fontWeigh: '100%', fontSize: 19, color: 'black' }}>{doctor.name}</Text>
                <Text style={{ fontWeigh: '100%', color: 'orange' }}>{doctor.specialist}</Text>
                <Text style={{ fontWeigh: '100%', color: 'gray' }}>{doctor.epxperience}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
              <Button
                title="Book Video Consult"
                color="#ef6e65"
              />
              <Button
                title="Book appointment"
                color="#7463e0"
              />
            </View>
          </View>
        ))
      }
    </ScrollView >
  )
}

export default Doctors

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    width: '100%',
    borderRadius: 15,
    height: 165,
    overflow: "hidden",
    borderColor: "black",
    backgroundColor: '#f8f8ff'
  },
  img: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: .5,
    borderColor: "blue"
  },
  Initem: {
    width: '100%',
    margin: 15,
    marginLeft: 5,
    overflow: 'hidden'
  },
})
