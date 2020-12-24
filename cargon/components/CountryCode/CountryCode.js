import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  Switch,
  Option,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const CountryCode = (props) => {
  const [countryCode, setCountryCode] = useState("FR");
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  return (
    <View style={styles.container}>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible
      />
      <Text style={styles.instructions}>Press on the flag to open modal</Text>
      {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
      )}
    </View>
  );
};

export default CountryCode;

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
});
