import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

const Home = (props) => {
  const boxesData = [
    { text: "Take a self Test", image: 'https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg' },
    { text: "Explore daily exercise", image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
    { text: "Read Articles About Anxiety, Anger and Symptomps", image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
    { text: "Find Hospital List", image: 'https://cdn-fldea.nitrocdn.com/MxvBLpTIkWFQHkPDzlLThkPHGfFafmSe/assets/images/optimized/rev-64ddc46/wp-content/uploads/2022/09/difference-between-anxiety-and-anger.png' },
    { text: "Find Doctor List", image: 'https://cdn-fldea.nitrocdn.com/MxvBLpTIkWFQHkPDzlLThkPHGfFafmSe/assets/images/optimized/rev-64ddc46/wp-content/uploads/2022/09/difference-between-anxiety-and-anger.png' },
    { text: "Emergency Contacts", image: 'https://www.bing.com/th?id=OCII.8D5C9E3A4AAA9E6608CA8098AD0013D1E9CC893B9DC33CF83851C9D34D2717FD&pid=3.1&w=490&h=340&p=0' }
  ]

  const renderBoxes = () => {
    return boxesData.map((box) => (
      <TouchableOpacity key={box.text} style={styles.boxContainer}>
        <ImageBackground source={{ uri: box.image }} style={styles.boxImage}>
          <Text style={styles.boxText}>{box.text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    ));
  };

  return <View style={styles.container}>{renderBoxes()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  boxContainer: {
    width: '45%',
    aspectRatio: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    // backgroundColor: '#800000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  boxText: {
    borderRadius: 8, 
    width: '100%',
    height: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
    backgroundColor: '#1A2421',
    opacity: 0.8,
    paddingVertical: 16,
    paddingHorizontal: 3,
  },
});

export default Home;
