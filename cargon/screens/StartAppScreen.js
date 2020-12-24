import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import i18n from "i18n-js";
import Modal from "react-native-modal";
import Colors from "../constants/colors";
import HelpPopur from "../components/Popup/HelpPopup";
import Logo from "../components/Logo/Logo";
import Animation from "../components/Animation/Animation";
import Button from "../components/Button/Button";
import SignUpPopup from "../components/Popup/SignUpPopup";
import SignUp from "../components/Popup/SignUp";
import LogIn from "../components/Popup/LogIn";

const StartAnimationScreen = ({ navigation }) => {
  const [helpVisible, setHelpVisible] = useState(false);
  const toggleHelpModal = () => {
    setHelpVisible(!helpVisible);
  };

  // const [signUpVisible, setSignUpVisible] = useState(false);
  // const toggleSignUpModal = () => {
  //   setSignUpVisible(!helpVisible);
  // };

  const close = () => {
    setSignUpVisible(false);
  };

  const [signUpShow, setSignUpShow] = useState(false);
  const closeSignUp = () => {
    setSignUpShow(false);
  };

  const [logInShow, setLogInShow] = useState(false);
  const closeLogin = () => {
    setLogInShow(false);
  };

  const signupData = (email, password) => {
    console.log(email, password, "signup");
  };

  const loginData = (email, password) => {
    console.log(email, password, "login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: "5%" }}>
        <Logo size="small" color="white" />
      </View>
      <View style={{ marginTop: "10%" }}>
        <Animation
          animationTime={3000}
          fadeTime={1000}
          animationLoop={false}
          animationRewind={false}
          deviceHeight={2000}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          width={130}
          borderColor="white"
          backgroundColor="green"
          color="white"
          // onPress={toggleSignUpModal}
          onPress={() => {
            setSignUpShow(true);
          }}
        >
          რეგისტრაცია
        </Button>
        <Button
          width={130}
          borderColor="white"
          backgroundColor="white"
          color="black"
          onPress={() => {
            setLogInShow(true);
          }}
        >
          შესვლა
        </Button>
      </View>
      <View style={styles.popup}>
        <TouchableOpacity activeOpacity={0.6} onPress={toggleHelpModal}>
          <Text style={styles.poputText}> გჭირდებათ დახმარება? </Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={signUpShow}
        animationInTiming={400}
        animationOutTiming={400}
        avoidKeyboard={true}
        onBackdropPress={() => {
          setSignUpShow(false);
        }}
      >
        <SignUp closeModal={closeSignUp} signupData={signupData} />
      </Modal>

      <Modal
        isVisible={logInShow}
        animationInTiming={400}
        animationOutTiming={400}
        avoidKeyboard={true}
        onBackdropPress={() => {
          setLogInShow(false);
        }}
      >
        <LogIn closeModal={closeLogin} loginData={loginData} />
      </Modal>

      {/* <Modal
        isVisible={signUpVisible}
        animationInTiming={400}
        animationOutTiming={400}
        onBackdropPress={() => {
          setSignUpVisible(false);
        }}
      >
        <SignUpPopup navigation={navigation} closeModalAuto={close} />
      </Modal> */}
      <Modal
        isVisible={helpVisible}
        animationInTiming={400}
        animationOutTiming={400}
        onBackdropPress={() => {
          setHelpVisible(false);
        }}
      >
        <HelpPopur closeModal={toggleHelpModal} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: "7%",
  },

  popup: {
    position: "absolute",
    bottom: 20,
  },
  poputText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default StartAnimationScreen;
