import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const userData = []
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <TextInput placeholder='heda' style={styles.input} />
      <Button title='Submit' style={styles.submit_btn} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#000', 
    alignItems: 'center',
    width: '100%',
  },
  submit_btn: {
    flex: 1,
    alignItems: 'left',
  }
  
});
