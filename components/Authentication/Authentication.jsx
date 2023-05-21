import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Authentication = ({ navigation, setUser, auth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [alreadyMember, setAlreadyMember] = useState(true);

  const toggle = () => {
    setAlreadyMember(!alreadyMember);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleSingUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setUser(auth.currentUser);
            navigation.navigate("Home");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../images/logo.jpg")} style={styles.logo} />
      </View>
      <View style={styles.bodyContainer}>
        {/* Welcome text */}
        <Text style={styles.welcome}>Welcome to Mental Health App</Text>
        <Text style={styles.subtitle}>
          Please enter your address below to start using app
        </Text>

        {/* Input Email & Password */}
        <View style={{ marginTop: 40 }}>
          {!alreadyMember && (
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Name"
              style={styles.input}
            />
          )}
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            style={styles.input}
          />
        </View>

        {/* Remember me & forgot password */}
        <View style={styles.helpContainer}>
          <BouncyCheckbox
            size={20}
            fillColor="#FC734D"
            unfillColor="#FFFFFF"
            text="Remember Me"
            iconStyle={{ borderColor: "#FC734D", borderRadius: 5 }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 5 }}
            textStyle={{
              textDecorationLine: "none",
              fontSize: 14,
            }}
            onPress={(isChecked) => {
              setRememberMe(isChecked);
            }}
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up & Sign In Button */}
        <View style={styles.btnContainer}>
          {alreadyMember ? (
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSingUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Aready a member */}
        <View style={{ marginTop: 18 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "500",
                marginRight: 5,
              }}
            >
              {alreadyMember ? "Not a Member?" : "Already have an account?"}
            </Text>
            <TouchableOpacity onPress={toggle}>
              <Text style={{ color: "#FC734D", fontWeight: "600" }}>
                {alreadyMember ? "Sign Up" : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    height: "92%",
    flexDirection: "column",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 110,
  },
  bodyContainer: {
    marginTop: 30,
    width: "100%",
  },

  welcome: {
    fontSize: 24,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#EFF1F5",
    color: "gray",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
    fontWeight: "500",
  },

  helpContainer: {
    // Remember me & forgot password container
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginLeft: -20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    color: "gray",
    marginLeft: -15,
  },
  forgotPassword: {
    textDecorationLine: "underline",
    color: "gray",
  },

  btnContainer: {
    width: "100%",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#FC734D",
    paddingVertical: 12,
    borderRadius: 5,
    minWidth: 150,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
