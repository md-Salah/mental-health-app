import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';

const Home = (props) => {
  const items = [{ title: "Enjoy reading articles about anxiety", uri: 'https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg' },
  { title: "Read books to understand what psychiatrist says", uri: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
  { title: "Take a self test", uri: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
  { title: "Difference Between Anxiety And Anger", uri: 'https://cdn-fldea.nitrocdn.com/MxvBLpTIkWFQHkPDzlLThkPHGfFafmSe/assets/images/optimized/rev-64ddc46/wp-content/uploads/2022/09/difference-between-anxiety-and-anger.png' },
  { title: "Clinical Depression", uri: 'https://www.bing.com/th?id=OCII.8D5C9E3A4AAA9E6608CA8098AD0013D1E9CC893B9DC33CF83851C9D34D2717FD&pid=3.1&w=490&h=340&p=0' },

  ]

  return (
    <View style={styles.container}>
      {
        items.map((item, index) =>
          <TouchableOpacity key={index}>
            <View style={styles.item} >
              <Image source={{ uri: item.uri }}
                style={styles.img}
                resizeMode='contain'
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )
      }

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-around",
    margin: 10,
    marginTop: 25,
  },
  item: {
    width: 140,
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    overflow: "hidden",
    borderColor: "#a9a9a9",
    marginBottom: 30
  },
  img: {
    height: 100,
    margin: 10,
  },
  title: {
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 600,
  }
})