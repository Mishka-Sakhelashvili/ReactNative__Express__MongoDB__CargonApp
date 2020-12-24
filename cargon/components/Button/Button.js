import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";


// width, borderColor, backgroundColor, color, onPress,

const Button = (props) => {
  let borderColor;
  let backgroundColor;
  let color;
  if (props.borderColor === "green") {
    borderColor = Colors.primary;
  } else if (props.borderColor === "white") {
    borderColor = Colors.backgroundColor;
  }

  if (props.backgroundColor === "green") {
    backgroundColor = Colors.primary;
  } else if (props.backgroundColor === "white") {
    backgroundColor = Colors.backgroundColor;
  }

  if (props.color === "black") {
    color = "black";
  } else if (props.color === "white") {
    color = "white";
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View
        style={{
          width: props.width,
          alignItems: "center",
          borderRadius: 25,
          borderWidth: 1,
          paddingVertical: 12,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: color,
          }}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
