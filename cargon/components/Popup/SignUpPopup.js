import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Colors from "../../constants/colors";

const SignUpPopup = ({ navigation, closeModalAuto }) => {
  const [selectCountry, setSelectCountry] = useState();


  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          marginTop: 15,
          fontSize: 18,
          color: "#303030",
        }}
      >
        Countries
      </Text>
      <Text
        style={{
          marginTop: 15,
          fontSize: 13,
          color: "#303030",
          marginBottom: 40,
        }}
      >
        Choose country
      </Text>
      <TouchableHighlight
        underlayColor="#F0F0F0"
        onPress={() => {
          setSelectCountry("Georgia");
          closeModalAuto();
          navigation.navigate("TermsConditions");
        }}
        // onPress={closeModalAuto}
      >
        <View
          style={{
            borderBottomColor: "#F0F0F0",
            borderBottomWidth: 2,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 10,
              fontSize: 16,
              color: "#303030",
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Georgia
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#F0F0F0"
        onPress={() => {
          setSelectCountry("Russia");
          closeModalAuto();
          navigation.navigate("TermsConditions");
        }}
      >
        <View
          style={{
            borderBottomColor: "#F0F0F0",
            borderBottomWidth: 2,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 10,
              fontSize: 16,
              color: "#303030",
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Russia
          </Text>
        </View>
      </TouchableHighlight>
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
  bg: {
    backgroundColor: "#F0F0F0",
  },
});

export default SignUpPopup;
