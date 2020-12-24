import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import {
  AntDesign,
  SimpleLineIcons,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";

const BottomPopup = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={styles.iconLeft}>
          <TouchableOpacity onPress={props.closeModal}>
            <AntDesign name="left" size={26} color="black" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 19,
            marginTop: 10,
            fontWeight: "500",
            color: "#303030",
            marginBottom: 10,
          }}
        >
          გჭირდება დახმარება?
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#A8A8A8",
          }}
        >
          ნებისმიერი კითხვის შემთხვევაში დაგვიკავშირდით ელფოსტაზე ან მობილურის
          ნომერზე
        </Text>
      </View>

      <View style={styles.containerCenter}>
        <SimpleLineIcons
          name="earphones-alt"
          size={80}
          color="#0763e5"
          style={{ marginVertical: 20 }}
        />
        <Text style={{ fontSize: 16, color: "#303030", marginBottom: 10 }}>
          Cargon-ის დახმარება
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#A8A8A8",
            marginBottom: 20,
          }}
        >
          გთხოვთ დაგვიკავშირდით მითითებულ ელ-ფოსტაზე ან საკონტაქტო ნომერზე
        </Text>

        <View style={styles.card}>
          <EvilIcons
            name="envelope"
            size={36}
            color={Colors.primary}
            style={{ marginRight: 15 }}
          />
          <Text style={styles.contactText}>join@cargon.com</Text>
        </View>
        <View style={styles.card}>
          <Feather
            name="phone-call"
            size={26}
            color={Colors.primary}
            style={{ marginRight: 24 }}
          />
          <View>
            <Text style={styles.contactText}>Russia: +952 22 222 222;</Text>
            <Text style={styles.contactText}>Georgia: +952 22 222 222;</Text>
            <Text style={styles.contactText}>Russia: +952 22 222 222;</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "112%",
    left: "-6%",
    backgroundColor: Colors.backgroundColor,
    padding: 15,
    position: "absolute",
    bottom: "-6%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  containerLeft: {
    alignSelf: "flex-start",
  },
  containerCenter: {
    alignItems: "center",
  },
  card: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.6,
    elevation: 4,
  },
  contactText: {
    fontSize: 12,
    color: "#303030",
  },
});

export default BottomPopup;
