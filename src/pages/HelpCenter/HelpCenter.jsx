import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { strings } from "./strings";

export default class HelpCenter extends React.Component {
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
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
          <Text style={styles.helpCenterText}>{strings.helpCenter}</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{strings.forgotPassword}</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ForgotPasswordScreen")
                }
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>{strings.changePassword}</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.text}>{strings.doNotHavePassword}</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignupScreen")}
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>{strings.signUp}</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.text}>{strings.stillHavingProblems}</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("LoginScreen")}
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>{strings.requestHelp}</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}
