import { Image, StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DoctorDetails = () => {
  const doctors = [
    {
      'uri': 'https://www.doctorbangladesh.com/wp-content/uploads/Dr.-Md.-Fahad-Bin-Alauddin.jpg',
      'name': 'Dr. Md. Fahad-Bin-Alauddin',
      'degree': 'MBBS (DU), MD (Psychiatry-BSMMU)',
      'specialist': 'Psychiatry (Mental Diseases, Brain Disorder, Drug Addiction) Specialist',
      'chamber': 'International Medical College & Hospital, Gazipur'
    },
  ]

  return (
    <ScrollView>
      {
        doctors.map((doctor, index) => (

          <View style={styles.item} key={index}>
            <View style={styles.img}>

              <Image source={{ uri: doctor.uri }}
                style={styles.img}
                resizeMode='contain'
              />
              <View >
                <Text style={styles.details}>{doctor.name}</Text>
              </View>
              <View>
                <Text style={styles.details1}>{doctor.degree}</Text>
              </View>
              <View>
                <Text style={styles.details1 && { fontWeight: 'bold' }}>{doctor.specialist}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.details1}>{doctor.chamber}</Text>
                <TouchableOpacity>
                  <Text style={{ color: 'red', fontWeight: 'bold' }}>...more</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        ))
      }
    </ScrollView >

  )
}

export default DoctorDetails

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    height: 300,
    overflow: "hidden",
    borderColor: "transparent",
    // marginBottom: 5,
  },
  img: {
    height: 150,
    margin: 10,
  },
  details: {
    fontWeight: '500',
    fontSize: 18,
    color: '#7370D7',
  },
  details1: {
    fontSize: 13,
  }
})