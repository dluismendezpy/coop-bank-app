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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firstNameUserKey, lastNameUserKey } from "../constValues";

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
        <ImageBackground
          source={require("../../assets/Sidebar/background.jpg")}
          style={styles.backgroundImage}
        >
          <Image
            source={require("../../assets/Sidebar/profile.png")}
            style={styles.profile}
          />
          <Text
            style={styles.text}
          >{`${this.state.firstName} ${this.state.lastName}`}</Text>
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
