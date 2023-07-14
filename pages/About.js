import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const AboutPage = () => {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../images/logo.jpg")} style={styles.logo} />
      </View>
      <Text style={styles.title}>About US</Text>
      <Text style={styles.description}>
        The APP is developed as part of a thesis titled "Development of an Anger and Anxiety Disorder Prediction Scheme using Machine Learning and Mobile Application for Mental Healthcare," our app aims to provide mental health support to those in need. It offers comprehensive guidelines, including exercises and emergency support, to assist individuals with managing their mental health effectively.
      </Text>
      <Text style={{fontSize: 16, marginTop: 30, marginBottom: -10, fontWeight: 'bold'}}>Designed And Developed By:{"\n"}</Text>
      <Text style={styles.description}>
        <Text>
          MOHAMMAD SALAH UDDIN{"\n"}
          CSE 2017, CUET{"\n"}
          Contact:{"\n"}
          <TouchableOpacity onPress={() => { Linking.openURL(`mailto:${'mdsalah.connect@gmail.com'}`) }}>
            <Text style={{ fontSize: 16, textDecorationLine: 'underline', color: 'green' }}>
              mdsalah.connect@gmail.com
            </Text>
          </TouchableOpacity>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 110,
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 5,
    textAlign: 'justify',
  },
});

export default AboutPage;
