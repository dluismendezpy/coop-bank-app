import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageTokenKey } from "../constValues";

export default class BankAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Feed page</Text>
        <Button
          title="Get Token"
          onPress={async () =>
            Alert.alert("Token", await AsyncStorage.getItem(storageTokenKey))
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
