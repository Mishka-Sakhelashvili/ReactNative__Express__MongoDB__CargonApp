import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  PixelRatio,
  Switch,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CountryCode from "../CountryCode/CountryCode";
import Colors from "../../constants/colors";

const SignUpInput = ({ navigation, closeModal }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Sign Up</Text>
      <Text style={styles.enterPhone}>Enter Phone number and Password</Text>

      <View style={styles.phoneInputContainer}>
        <View>
          <Text style={{ fontWeight: "600", marginRight: 20 }}>+995</Text>
        </View>
        {/* <CountryCode /> */}
        <TextInput
          style={[styles.input, styles.number]}
          underlineColorAndroid="transparent"
          placeholder="Phone Number"
          placeholderTextColor="#A8A8A8"
          autoCapitalize="none"
          autoCompleteType="cc-number"
          keyboardType="numeric"
          returnKeyLabel="done"
          maxLength={6}
        />
      </View>

      <View style={styles.phoneInputContainer}>
        <TextInput
          style={[styles.input, styles.number]}
          underlineColorAndroid="transparent"
          placeholder="Your Password"
          placeholderTextColor="#A8A8A8"
          autoCapitalize="none"
          autoCompleteType="cc-number"
          returnKeyLabel="done"
          maxLength={6}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.backContainer} onPress={closeModal}>
          <AntDesign name="left" size={14} color="#1E90FF" />
          <Text style={{ color: "#1E90FF", fontWeight: "600", marginLeft: 5 }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupContainer}>
          <Text style={{ color: "white", marginRight: 5, fontWeight: "600" }}>
            Sign Up
          </Text>
          <AntDesign name="right" size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "112%",
    left: "-6%",
    backgroundColor: Colors.backgroundColor,
    padding: 15,
    position: "absolute",
    bottom: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  enterPhone: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 50,
    color: "#303030",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 150,
    paddingVertical: 14,
    borderRadius: 25,
    justifyContent: "center",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    paddingVertical: 12,
    borderRadius: 25,
  },
  phoneInputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
    marginBottom: 10,
    height: 50,
    // backgroundColor: "red",
    alignItems: "center",
    padding: 10,
  },
  input: {
    height: 40,
    // backgroundColor: "red",
    width: "80%",
    color: "black",
  },
});

export default SignUpInput;
