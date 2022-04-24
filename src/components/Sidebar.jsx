import React from "react";
import {View, ScrollView, StyleSheet, Text, Image, Dimensions} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firstNameUserKey, lastNameUserKey } from "../constValues";
import { backColorPrincipal } from "../Colors";


export default class Sidebar extends React.Component {
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
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/Sidebar/defaultImageUser.jpg")}
            style={styles.profile}
          />
          <Text
            style={styles.text}
          >{`${this.state.firstName} ${this.state.lastName}`}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <DrawerNavigatorItems {...this.props} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backColorPrincipal,
    padding: 16,
    paddingTop: 48,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
    marginVertical: 8,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: .5,
    borderColor: "#fff",
  },
});
