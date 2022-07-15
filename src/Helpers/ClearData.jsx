import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Alert } from "react-native";
import React from "react";
import {
  STORAGE_TOKEN_KEY,
  FIRST_NAME_USER_KEY,
  LAST_NAME_USER_KEY,
} from "../constants/GobalValues";

export default class ClearData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { running: true };
  }

  logout = () => {
    AsyncStorage.removeItem(FIRST_NAME_USER_KEY)
      .then((firstName) => {
        if (firstName) {
          console.log("First Name deleted successfully!");
        }
      })
      .catch((err) => console.log(err.message));
    AsyncStorage.removeItem(LAST_NAME_USER_KEY)
      .then((lastName) => {
        if (lastName) {
          console.log("Last Name deleted successfully!");
        }
      })
      .catch((err) => console.log(err.message));
    AsyncStorage.removeItem(STORAGE_TOKEN_KEY)
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
          ? Alert.alert("Cerrar sesión", "¿Estas seguro que quieres salir?", [
              { text: "Cancelar", style: "cancel" },
              {
                text: "Si",
                onPress: () => this.logout(),
              },
            ])
          : console.log("Running is disabled!")}
      </View>
    );
  }
}
