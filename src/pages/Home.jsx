import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ alignItems: "flex-start", margin: 10, marginLeft: 20 }}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <FontAwesome5 name={"bars"} size={30} color="#000000" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text>Home side</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
