import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import i18n from "i18n-js";
///////////////////////
import Colors from "../constants/colors";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
/////////////////////////
import en from "../translations/en.json";
import ka from "../translations/ka.json";
import ru from "../translations/ru.json";

const SelectLanScreen = ({ navigation }) => {
  const [language, setLanguage] = useState("en");

  i18n.locale = language;
  i18n.fallbacks = true;
  i18n.translations = { ka, en, ru };

  return (
    <View style={styles.screen}>
      <View style={{ marginBottom: 30 }}>
        <Logo color="green" size="medium" />
      </View>
      <View>
        <Text style={styles.languageText}>Choose your language </Text>
      </View>
      <View style={styles.horizontanLine}></View>

      <View style={styles.buttonContainer}>
        <Button
          borderColor="green"
          backgroundColor="green"
          width={200}
          color="white"
          onPress={() => {
            navigation.navigate("StartAppScreen"), setLanguage("ka");
          }}
        >
          {" "}
          ქართული{" "}
        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          borderColor="green"
          backgroundColor="white"
          width={200}
          color="black"
          onPress={() => {
            navigation.navigate("StartAppScreen"), setLanguage("en");
          }}
        >
          {" "}
          English{" "}
        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          borderColor="green"
          backgroundColor="white"
          width={200}
          color="black"
          onPress={() => {
            navigation.navigate("StartAppScreen"), setLanguage("ru");
          }}
        >
          {" "}
          Rусский{" "}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  horizontanLine: {
    width: "80%",
    height: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 20,
    marginBottom: 20,
  },
  languageText: {
    fontSize: 16,
    color: "#707070",
    fontWeight: "500",
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default SelectLanScreen;
