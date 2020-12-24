import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const sendCred = async (props) => {
    fetch("http://178.134.255.96:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem("token", data.token);
          props.navigation.replace("home");
        } catch (e) {
          console.log("error hai", e);
          Alert(e);
        }
      });
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Text style={styles.text}>Sign In</Text>
          <TextInput
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#F0F0F0"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor="#F0F0F0"
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => sendCred(props)}
          >
            <Text style={styles.buttonText}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 18,
    color: "#303030",
    marginBottom: 20,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 140,
    height: 44,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  input: {
    width: "100%",
    fontSize: 16,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 20,
  },
});
