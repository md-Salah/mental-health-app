import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";

const LogOut = ({ navigation, setUser, user, auth }) => {
  const backHome = () => {
    navigation.navigate("Home");
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../images/logo.jpg")} style={styles.image} />
      <Text style={{ marginTop: 20, fontWeight: "600", fontSize: 18 }}>
        {'Hi ' + user.displayName + ','}
      </Text>
      <Text style={{ marginTop: 5, marginBottom: 20, fontWeight: "600", fontSize: 18 }}>
        Thanks for using Metal Health App. Rate the app on google play store.
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={backHome}>
        <Text style={styles.buttonText}>Back Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleLogOut}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOut;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 90,
  },
  image: {
    marginTop: 50,
    width: "100%",
    height: 270,
  },
  button: {
    backgroundColor: "#FC734D",
    paddingVertical: 12,
    borderRadius: 5,
    minWidth: 150,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    borderRadius: 5,
    minWidth: 150,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
