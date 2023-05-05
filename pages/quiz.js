import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Imagine this is a really cool question</Text>
      </View>
      <View style={styles.option}> 
          <TouchableOpacity> 
            <Text>Cool option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <Text>Cool option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <Text>Cool option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <Text>Cool option 1</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    padding: 12,
  },
  top:{
     marginVertical:16,
  },
  option:{
    marginVertical: 16,
    marginBottom: 100,
  },
  buttom:{
    marginBottom:12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})