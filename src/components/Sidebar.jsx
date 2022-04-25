import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
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
      <>
        <View
          style={
            this.state.firstName.length > 0 || this.state.lastName.length > 0
              ? styles.container
              : styles.containerWithoutLogin
          }
        >
          {this.state.firstName.length > 0 || this.state.lastName.length > 0 ? (
            <Image
              source={require("../../assets/Sidebar/defaultImageUser.jpg")}
              style={styles.profile}
            />
          ) : (
            <Image
              source={require("../../assets/principalLogo.png")}
              style={styles.image}
            />
          )}

          <Text
            style={styles.text}
          >{`${this.state.firstName} ${this.state.lastName}`}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <DrawerNavigatorItems {...this.props} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backColorPrincipal,
    padding: 16,
    paddingTop: 48,
  },
  containerWithoutLogin: {
    flex: .5,
    alignItems: "center",
    justifyContent: "center"
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
    borderWidth: 0.5,
    borderColor: "#fff",
  },
  image: {
    width: 170,
    height: 170,
  },
});
