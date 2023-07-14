import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  Linking,
} from "react-native";

const Exercise = (props) => {
  const exercises = [
    {
      text: "Running",
      image:
        "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      url: 'https://www.webmd.com/fitness-exercise/how-running-affects-mental-health',
    },
    {
      text: "Meditation",
      image:
        "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      url: 'https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858',
    },
    {
      text: "Swimming",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      url: 'https://www.swimmingworldmagazine.com/news/feeling-blue-go-for-a-swim-for-these-6-mental-health-benefits/',
    },
    {
      text: "Cycling",
      image:
        "https://images.unsplash.com/photo-1523815378073-a43ae3fbf36a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN5Y2xpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      url: 'https://mensline.org.au/mens-mental-health/cycling-the-exercise-for-positive-mental-health/',
    },
    {
      text: "Yoga",
      image:
        "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: 'https://www.health.harvard.edu/staying-healthy/yoga-for-better-mental-health',
    },
    {
      text: "Workout",
      image:
        "https://plus.unsplash.com/premium_photo-1670505059783-806c0708bb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      url: 'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm',
    },
  ];

  const handleOpenLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  const renderBoxes = () => {
    return exercises.map((box) => (
      <TouchableOpacity key={box.text} style={styles.boxContainer} onPress={() => { handleOpenLink(box.url) }}>
        <ImageBackground source={{ uri: box.image }} style={styles.boxImage}>
          <Text style={styles.boxText}>{box.text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.exerciseContainer}>
      <View style={styles.container}>{renderBoxes()}</View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Weekly Summary</Text>
        <Text style={{ color: "white", fontSize: 11 }}>
          #You're doing good, keep it up
        </Text>
        <View style={styles.footerBottom}>
          <View style={styles.infoContainer}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Calories</Text>
            <Text style={{ fontWeight: "bold", color: "white" }}>20.2K</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={{ fontWeight: 'bold', color: "white", fontSize: 16 }}>Training</Text>
            <Text style={{ fontWeight: "bold", color: "white" }}>3h24m</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: 'white'
  },
  boxContainer: {
    width: "45%",
    aspectRatio: 1,
    margin: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  boxImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    opacity: 0.9,
  },
  boxText: {
    width: "100%",
    height: "100%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "bottom",
    color: "white",
    paddingVertical: 16,
    paddingHorizontal: 3,
    opacity: 0.8
  },

  // Exercise container style

  exerciseContainer: {
  },
  footer: {
    backgroundColor: "#FC734D",
    padding: 20,
    marginHorizontal: 22,
    borderRadius: 10,
    marginBottom: 20,
  },
  footerBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  infoContainer: {
    marginTop: 25,
    alignItems: "center",
  },
});

export default Exercise;
