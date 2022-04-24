import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { backColorPrincipal } from "../Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firstNameUserKey, lastNameUserKey } from "../constValues";

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      AsyncStorage.getItem(firstNameUserKey)
        .then((firstName) => {
          if (firstName) {
            this.setState({ firstName: firstName });
          }
        })
        .catch((err) => console.log(err.message));
      AsyncStorage.getItem(lastNameUserKey)
        .then((lastName) => {
          if (lastName) {
            this.setState({ lastName: lastName });
          }
        })
        .catch((err) => console.log(err.message));
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ fontSize: 30 }}
        >{`${this.state.firstName} ${this.state.lastName}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backColorPrincipal,
    height: height * 0.2,
    width: width,
  },
});
