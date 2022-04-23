import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { headerBackColor } from "../Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Header Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: headerBackColor,
    height: height * 0.3,
    width: width,
  },
});
