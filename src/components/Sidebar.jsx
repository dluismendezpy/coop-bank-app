import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

export default class Sidebar extends React.Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require("../../assets/Sidebar/background.jpg")}
          style={styles.backgroundImage}
        >
          <Image
            source={require("../../assets/Sidebar/profile.png")}
            style={styles.profile}
          />
          <Text style={styles.text}>Luis Mendez</Text>
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <DrawerNavigatorItems {...this.props} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
    marginVertical: 8,
  },
  backgroundImage: {
    width: undefined,
    padding: 16,
    paddingTop: 48,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
});
