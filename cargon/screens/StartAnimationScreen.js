import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Button } from "react-native";
import Colors from "../constants/colors";
import Logo from "../components/Logo/Logo";
import Animation from "../components/Animation/Animation";


const StartAnimationScreen = ({ navigation }) => {
  const [timer, setTimer] = useState(null);

  setTimeout(() => {
    setTimer(navigation.navigate("SelectLanScreen"));
  }, 700);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }} onPress={timer}>
        <Logo color="white" size="small" />
      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Animation
          animationTime={500}
          animationLoop={false}
          animationRewind={false}
          fadeTime={200}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default StartAnimationScreen;
