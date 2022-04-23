import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BankAccount from "../components/BankAccount";
import { headerBackColor } from "../Colors";
import { View, StyleSheet } from "react-native";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              alignItems: "flex-start",
              marginTop: 30,
              marginBottom: 15,
              marginLeft: 25,
            }}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <FontAwesome5 name={"bars"} size={30} color="#000000" />
          </TouchableOpacity>
        </View>
        <View>
          <BankAccount />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBackColor,
  },
});
