import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. Imagine this is a really cool question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cool option 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  buttom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#3C1101',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 20,
  },
  option: {
    backgroundColor: 'black',
    paddingVertical: 12,
    marginVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  }

})