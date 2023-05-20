import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Authentication from "../components/Authentication";

const LoginRegistration = ({ navigation }) => {
  const [authorized, setAuthorized] = useState(false);

  return (
    <View>
      {authorized ? (
        <Text>Logged In</Text>
      ) : (
        <Authentication navigation={navigation} setAuthorized={setAuthorized} />
      )}
    </View>
  );
};

export default LoginRegistration;

const styles = StyleSheet.create({});
