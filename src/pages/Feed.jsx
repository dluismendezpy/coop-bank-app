import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageTokenKey } from "../constValues";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
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
        <View style={styles.container}>
          <Text>Feed page</Text>
          <Button
            title="Get Token"
            onPress={async () =>
              Alert.alert("Token", await AsyncStorage.getItem(storageTokenKey))
            }
          />
        </View>
      </>
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
