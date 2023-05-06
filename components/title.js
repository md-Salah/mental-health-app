import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Title = () => {
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity style={{ marginLeft: 10 }}>
    //     <FontAwesome.Button name="bars" backgroundColor="none" style={styles.menubutton} />
    //   </TouchableOpacity>
    //   <Text style={styles.text}>Home</Text>
    // </View>
    <></>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f0ffff",
    paddingVertical: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  menubutton: {
    backgroundColor: "black",
    paddingStart: 15,
    paddingVertical: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    paddingHorizontal: 10
  }
})