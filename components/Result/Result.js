import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import React from 'react';

const Result = ({prediction, resetQuiz}) => {

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground source={require('../../images/result-bg.jpg')} style={styles.boxImage}>
          <Text style={[styles.boxText, styles.category]}>
            {prediction.category}
          </Text>
          <Text style={[styles.boxText, styles.description]}>
            {prediction.description}
          </Text>
        </ImageBackground>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>{resetQuiz()}}>
            <Text style={styles.buttonText}>Test Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  background: {
    borderRadius: 8,
  },
  boxImage: {
    borderRadius: 8,
    width: '100%',
    height: 250,
  },
  boxText: {
    textAlign: 'left',
    marginLeft: 20,
    marginRight: '35%',
    textAlignVertical: 'bottom',
    color: 'black',
    marginVertical: 8,
  },
  category: {
    fontWeight: 'bold',
    marginTop: 26,
    fontSize: 20,
    borderLeftWidth: 4,
    paddingLeft: 8,
  },
  description: {
    fontSize: 16,
  },
  retry_btn: {
    backgroundColor: "#FC734D",
    paddingVertical: 16,
    marginLeft: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  btnContainer: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 32,
    backgroundColor: '#f0f0f0'
  },
  button: {
    backgroundColor: "#FC734D",
    paddingVertical: 12,
    borderRadius: 5,
    minWidth: 150,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Result