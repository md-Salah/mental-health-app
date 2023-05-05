import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View>
        <Image source={{ uri:'https://cdn.pixabay.com/photo/2018/03/18/10/49/result-3236285__340.jpg'}} 
          style = {styles.banner}
          resizeMode ='contain'
        />
      </View>
      <View>
         <TouchableOpacity>
           <Text>Home</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner:{
    height: 300,
    height: 300,
  },
})