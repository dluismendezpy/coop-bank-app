import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Alert } from "react-native";
import React from "react";
import {
  storageTokenKey,
  firstNameUserKey,
  lastNameUserKey,
} from "../constValues";

export default class ClearData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { running: true };
  }

  logout = () => {
    AsyncStorage.removeItem(firstNameUserKey)
      .then((firstName) => {
        if (firstName) {
          console.log("First Name deleted successfully!");
        }
      })
      .catch((err) => console.log(err.message));
    AsyncStorage.removeItem(lastNameUserKey)
      .then((lastName) => {
        if (lastName) {
          console.log("Last Name deleted successfully!");
        }
      })
      .catch((err) => console.log(err.message));
    AsyncStorage.removeItem(storageTokenKey)
      .then((token) => {
        if (token) {
          console.log("Token deleted successfully!");
        }
      })
      .catch((err) => console.log(err.message));
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    return (
      <View>
        {this.state.running
          ? Alert.alert("Logout", "¿Estas seguro que quieres salir?", [
              { text: "No", style: "cancel" },
              { text: "Si", onPress: () => this.logout() },
            ])
          : console.log("Running is disabled!")}
      </View>
    );
  }
}
