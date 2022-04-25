import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HelpCenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Olvidé mi contraseña</Text>
        <Text style={styles.text}>No tengo una cuenta</Text>
        <Text style={styles.text}>Continuas teniendo problemas</Text>
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
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
