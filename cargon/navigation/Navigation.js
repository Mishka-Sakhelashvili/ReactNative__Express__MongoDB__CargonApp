import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartAnimationScreen from "../screens/StartAnimationScreen";
import SelectLanScreen from "../screens/SelectLanScreen";
import StartAppScreen from "../screens/StartAppScreen";
import TermsConditions from "../screens/TermsConditions";
import AuthoriseScreen from "../screens/Authorise";

const RootStack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="StartAppScreen" component={StartAppScreen} />
        {/* <RootStack.Screen name="SelectLanScreen" component={SelectLanScreen} /> */}
        {/* <RootStack.Screen name="StartAppScreen" component={StartAppScreen} /> */}
        {/* <RootStack.Screen name="TermsConditions" component={TermsConditions} /> */}
        {/* <RootStack.Screen name="MyModal" component={ModalScreen} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
