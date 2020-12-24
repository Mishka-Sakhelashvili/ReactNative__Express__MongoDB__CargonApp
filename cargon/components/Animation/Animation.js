import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { AnimatedSVGPath } from "react-native-svg-animations";
import Fade from "../FadeAnimation/FadeAnimation";

//  animationTime, fadeTime, animationLoop, animationRewind

const s =
  "M12,194 H80 C 100, 194, 90, 170, 100, 170 H120 C 130, 170, 125, 150, 130, 145 C 130, 145, 130, 140, 150, 140 H240 C 260, 140, 260, 120, 260, 110 C 265, 95, 290, 100, 290, 100 C 310, 100, 310, 90, 310, 60  ";
const d =
  "M130,70 C 130, 90, 140, 90, 190, 90 C 200, 95, 200, 100, 200, 155 C 200, 170, 220, 165, 220, 165 C 230, 165, 230, 165, 230, 200 ";

const Animation = ({ animationTime, fadeTime, animationLoop, animationRewind }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../assets/images/animationBG.png")}
      />

      <Fade fade={fadeTime} style={{ ...styles.dot, left: 11, top: 140 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade fade={fadeTime} style={{ ...styles.dot, left: 50, top: 140 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade fade={fadeTime} style={{ ...styles.dot, left: 105, top: 100 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade fade={fadeTime} style={{ ...styles.dot, left: 98, top: 48 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade fade={fadeTime} style={{ ...styles.dot, left: 151, top: 99 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade fade={fadeTime} style={{ ...styles.dot, left: 173, top: 142 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade fade={fadeTime} style={{ ...styles.dot, left: 233, top: 41 }}>
        <View style={styles.center}></View>
      </Fade>
      <Fade style={styles.svgContainer}>
        <AnimatedSVGPath
          strokeColor={"white"}
          duration={animationTime}
          strokeWidth={2}
          strokeDashArray={0}
          scale={0.75}
          delay={100}
          d={s}
          loop={animationLoop}
          rewind={animationRewind}
        />
      </Fade>
      <Fade style={styles.svgContainer}>
        <AnimatedSVGPath
          strokeColor={"white"}
          duration={animationTime}
          strokeWidth={2}
          strokeDashArray={0}
          scale={0.75}
          delay={100}
          d={d}
          loop={animationLoop}
          rewind={animationRewind}
        />
      </Fade>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 250,
    alignItems: "center",
    overflow: "hidden",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  dot: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "rgba(245,245,245, 0.2)",
    borderRadius: 10,
    justifyContent: "center",
  },
  center: {
    backgroundColor: "white",
    width: 4,
    height: 4,
    borderRadius: 10,
    alignSelf: "center",
  },
  svgContainer: {
    position: "absolute",
  },
});
