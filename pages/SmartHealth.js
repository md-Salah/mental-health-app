import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

const SmartHealth = (props) => {
  const boxesData = [
    {
      text: "Start Tarcking",
      image:
        "https://img.freepik.com/free-vector/sightseeing-tour-landmark-visit-milestone-accomplishment-moving-forward-roadmap-progress-decorative-design-element-gps-navigation-location-pin_335657-18.jpg?w=740&t=st=1689340798~exp=1689341398~hmac=4ab9a050642fb57ded43b9244de38697c4fac39ee89ae43ee2906791b811234c",
    },
    {
      text: "Health Progress",
      image:
        "https://img.freepik.com/free-vector/people-world-health-day_24908-56250.jpg?w=740&t=st=1689341104~exp=1689341704~hmac=3f09a0c85ab0fdef2422c4bd33553749592e6812484e8c85a6f4c58dc0004182",
    },
    {
      text: "Stop Tracking",
      image:
        "https://img.freepik.com/premium-vector/location-based-advertisement-gps-app-navigation-system-geographic-searching-address-with-magnifier_566886-2308.jpg?w=996",
    },
    {
      text: "My Reports",
      image:
        "https://img.freepik.com/free-vector/business-intelligence-department-teamwork-data-mining-visualisation-analysis-insights-decision-making-digital-symbolic-isometric-background-composition-vector-illustration_1284-69747.jpg?w=740&t=st=1689341054~exp=1689341654~hmac=43966cb78d7efe3779004da27cc2600b1c4c177f6985ee7721027b215025260f",
    },
  ];

  const renderBoxes = () => {
    return boxesData.map((box) => (
      <TouchableOpacity key={box.text} style={styles.boxContainer}>
        <ImageBackground source={{ uri: box.image }} style={styles.boxImage}>
          <Text style={styles.boxText}>{box.text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
          style={{ height: 200, width: 350 }}
        >
          <Text style={styles.headerText}>
            #get stronger by exercise everyday
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.main}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Ready To Start</Text>
        <Text style={{ fontSize: 14, color: "gray" }}>
          #its never too late to change your life
        </Text>
        <View style={styles.container}>{renderBoxes()}</View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Today's Progress
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>
          #step by step you can feel the progress
        </Text>
      </View>

      <View style={styles.footer}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/self-care-concept-with-man-activities_23-2148530061.jpg?w=740&t=st=1689340144~exp=1689340744~hmac=0cebb12685ff1e6d14c247134a4428efc87dc10623fbaee86f9340368a183daa",
          }}
          style={{ height: 200, width: 350 }}
        >
          <Text style={styles.footerText}>
            <Text style={{ fontSize: 50, fontWeight: "900", color: "red" }}>
              4200/
            </Text>
            <Text style={{ fontSize: 18 }}>6000 steps{"\n"}</Text>
            <Text style={{ fontSize: 12, color: "brown" }}>
              Great, keep it up
            </Text>
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // body
  body: {
    backgroundColor: "#F5EEDC",
  },

  //  Header section style
  header: {
    padding: 5,
    marginBottom: 10,
  },
  headerText: {
    width: "100%",
    height: "100%",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    opacity: 0.8,
    paddingVertical: 16,
    paddingHorizontal: 3,
  },

  //  Main section style
  main: {
    padding: 3,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },
  boxContainer: {
    width: "45%",
    aspectRatio: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  boxImage: {
    width: "100%",
    height: "100%",
  },
  boxText: {
    width: "100%",
    height: "100%",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#313552",
    opacity: 0.9,
    paddingVertical: 16,
    paddingHorizontal: 3,
  },

  // footer section style
  footer: {
    width: "100%",
    marginTop: 10,
    padding: 5,
  },
  footerText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    opacity: 0.9,
    paddingVertical: 16,
    paddingHorizontal: 3,
  },
});

export default SmartHealth;
