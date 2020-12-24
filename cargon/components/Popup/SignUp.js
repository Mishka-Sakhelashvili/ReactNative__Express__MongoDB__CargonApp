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

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const sendCred = async (props) => {
    fetch("http://192.168.49.108/:5000/signup", {
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
        }
      });
    // console.log(email, password)
  };


  return (
    <View>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Text style={styles.text}>Registration</Text>
          <TextInput
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            placeholderTextColor="#F0F0F0"
            style={styles.input}
          />
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor="#F0F0F0"
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {sendCred(props)}}
          >
            <Text style={styles.buttonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

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

export default SignUp;
