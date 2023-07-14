import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, ImageBackground, Image } from 'react-native';
import RatingStar from '../components/RatingStar/RatingStar';

const HospitalList = () => {

  const hospitalData = [
    {
      id: 4,
      name: "Niramoy Mental Health Hospital",
      image: 'https://lh5.googleusercontent.com/p/AF1QipMuBlsn8J2FHSqxzU5VE9vvpPg0Xbo1X1cTAPJ4=w408-h306-k-no',
      address: '13, 18 Babar Rd, Dhaka 1207',
      contactNumber: '+8801758338888',
      rating: '5.0',
      review: [
        {
          name: 'MD Abutalib',
          comment: 'Good people, good place, good service'
        }
      ]
    },
    {
      id: 3,
      image: 'https://lh5.googleusercontent.com/p/AF1QipPsDp6y_KjqNeY3VjamQpzFXbjABVh-pNRJQASy=w408-h544-k-no',
      name: "Prottoy Medical Clinic Ltd",
      address: 'Baridhara J Block, Plot 13, Road No. 5, 13 Road No. 20, Dhaka 1212',
      contactNumber: '+88017343385348',
      rating: '3.8',
      review: [{
        name: 'Sajib Dey',
        comment: 'I will be forever grateful to Dr Sat, Saudha bhai and Dr Sanim. Prottoy’s life management program works!'
      }]
    },
    {
      id: 2,
      image: 'https://lh5.googleusercontent.com/p/AF1QipP_lLzeayuWD5wXg2_43791UdnGsT3MOgJUEIqd=w408-h306-k-no',
      name: "Bangladesh Manoshik Hospital (Pvt.)",
      address: 'দোলা মার্কেট, 2 Sonapotti Rd 1, Pabna 6600',
      contactNumber: '+8801748752753',
      rating: '4.9',
      review: [{
        name: 'MD RAJIB',
        comment: 'Best Mental Health Care and Drug Addiction Treatment Center Private Hospital. Net and Clean also Service is too much good. Stuff behavior is First class.'
      },
      {
        name: 'Exchange Zone',
        comment: 'Wonderful Hospital For Mental Health and Drug Addiction Treatment. Thank You So Much Bangladesh Manoshik Hospital (Pvt.)'
      }]
    },
    {
      id: 1,
      image: 'https://lh5.googleusercontent.com/p/AF1QipOVQzCnwgMzRKpaIxuVXSMnvf28llDCO_60dCF0=w408-h306-k-no',
      name: "মানসিক প্রতিবন্ধী শিশুদের প্রতিষ্ঠান",
      address: 'Roufabad Government Baby Home, Chattogram 4000',
      contactNumber: '+8801711329135',
      rating: '4.0',
      review: [{
        name: 'Sh Tajbir',
        comment: 'Very good'
      }]
    }
  ]

  const [hospitals, setHospitals] = useState(hospitalData);

  const RenderReview = ({ reviewee }) => (
    <View style={styles.reviewSection}>
      <Text style={styles.reviewer}>{reviewee.name}</Text>
      <Text style={styles.review}>{'"' + reviewee.comment + '"'}</Text>
    </View>
  )

  const renderHospitalItem = ({ item }) => (
    <ImageBackground source={require('../images/hospital-bg.jpg')} style={styles.hospitalItem}>
      <ImageBackground source={{ uri: item.image }} style={styles.img}>
        <View style={styles.shadowBox}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.contactNumber}`)}>
        <Text style={styles.contactNumber}>{item.contactNumber}</Text>
      </TouchableOpacity>
      <View>
        {item.review.map((reviewee) => <RenderReview key={reviewee.name} reviewee={reviewee} />)}
      </View>
      <RatingStar rating={item.rating} />
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        renderItem={renderHospitalItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f3f7',
  },
  hospitalItem: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  img: {
    width: "100%",
    height: 180,
  },
  shadowBox: {
    backgroundColor: '#1A2421',
    opacity: 0.7,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  address: {
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  contactNumber: {
    marginTop: 10,
    marginBottom: 5,
    textDecorationLine: 'underline',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  reviewSection: {
    opacity: 0.8,
    borderWidth: 0.3,
    marginTop: 10,
    marginBottom: 5,
    paddingVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  reviewer: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },
  review: {
    marginBottom: 5,
    fontStyle: 'italic',
  },
});

export default HospitalList;
