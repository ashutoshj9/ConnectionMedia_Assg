import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "./src/layout/Screen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Product from "./src/layout/Product";
import Constants from "expo-constants";

const Nav = createStackNavigator(
  {
    Screen: Screen,
    Product: Product,
  },
  { defaultNavigationOptions: { headerShown: false } }
);

const App = createAppContainer(Nav);

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <App />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "2%",
    paddingTop: Constants.statusBarHeight,
  },
});
