import React from "react";
import { View, Image } from "react-native";

const Logo = ({ size, color }) => {
  let widthLogo;
  let heightLogo;
  let widthCargon;
  let heightCargon;
  if (size === "small") {
    widthLogo = 40;
    heightLogo = 40;
    widthCargon = 90;
    heightCargon = 15;
  } else if (size === "medium") {
    widthLogo = 65;
    heightLogo = 65;
    widthCargon = 140;
    heightCargon = 25;
  } else if (size === "large") {
    widthLogo = 40;
    heightLogo = 40;
    widthCargon = 90;
    heightCargon = 15;
  }

  let src1;
  let src2;
  if (color === "white") {
    src1 = require("../../assets/images/logoWhite.png");
    src2 = require("../../assets/images/cargonWhite.png");
  } else if (color === "green") {
    src1 = require("../../assets/images/logo.png");
    src2 = require("../../assets/images/cargon.png");
  }

  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Image
          style={{ width: widthLogo, height: heightLogo, marginBottom: 5 }}
          source={src1}
        />
      </View>
      <View>
        <Image
          style={{ width: widthCargon, height: heightCargon }}
          source={src2}
        />
      </View>
    </View>
  );
};

export default Logo;
