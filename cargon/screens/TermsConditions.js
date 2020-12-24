import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Color from "../constants/colors";
import SignUpInput from "../components/Popup/SignUpInput"

const TermsConditions = ({ navigation }) => {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const toggleSignUpModal = () => {
    setSignUpVisible(!signUpVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => navigation.navigate("StartAppScreen")}
          >
            <AntDesign name="left" size={26} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>
      <ScrollView style={styles.main}>
        <Text style={{ textAlign: "justify", marginBottom: 100 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
          also reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("StartAppScreen")}>
          <Text style={[styles.footerText, styles.no]}>no vetan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnYes} onPress={toggleSignUpModal}>
          <Text style={[styles.footerText, styles.yes]}>vetanxmebi</Text>
          <AntDesign name="right" size={14} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={signUpVisible}
        animationInTiming={400}
        animationOutTiming={400}
        onBackdropPress={() => {
          setSignUpVisible(false);
        }}
      >
        <SignUpInput closeModal={toggleSignUpModal} />
      </Modal>
    </SafeAreaView>
  );
};

export default TermsConditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  header: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
  },
  headerText: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "600",
  },
  main: {
    padding: 20,
    textAlign: "justify",
  },
  footer: {
    alignItems: "center",
    height: 60,
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    backgroundColor: Color.backgroundColor,
  },
  footerTextNo: {
    fontWeight: "600",
    fontSize: 16,
  },
  no: {
    color: "#1E90FF",
  },
  btnNo: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnYes: {
    backgroundColor: Color.primary,
    borderRadius: 25,
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  yes: {
    color: "white",
    marginRight: 5,
  },
});
