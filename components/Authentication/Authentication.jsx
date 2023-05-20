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

import { app } from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Authentication = ({ navigation, setAuthorized }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [alreadyMember, setAlreadyMember] = useState(true);

  const auth = getAuth(app);

  const toggle = ()=>{
    setAlreadyMember(!alreadyMember)
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // const email = userCredentials.user.email;
        // alert("Login success");
        navigation.navigate('Home')
        setAuthorized(true)
      })
      .catch((error) => {
        alert(error.message);
        // console.log(error.code, error.message);
      });
    };
    const handleSingUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // alert("Sign Up Success");
        setAuthorized(true)
      })
      .catch((error) => {
        alert(error.message);
        // console.log(error.code, error.message);
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
          <TouchableOpacity style={styles.checkboxContainer}>
            <CheckBox
              value={rememberMe}
              onChange={setRememberMe}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Remember Me</Text>
          </TouchableOpacity>
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
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
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
