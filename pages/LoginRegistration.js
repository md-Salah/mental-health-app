import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";

import { app } from "../firebaseConfig";
import Authentication from "../components/Authentication";
import LogOut from "../components/LogOut";

const LoginRegistration = ({ navigation }) => {

  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  return (
    <View>
      {user === null ? (
        <Authentication navigation={navigation} setUser={setUser} auth={auth} />
      ) : (
        <LogOut navigation={navigation} user={user} setUser={setUser} auth={auth} />
      )}
    </View>
  );
};

export default LoginRegistration;

const styles = StyleSheet.create({});
