import React from "react";
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Text,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { strings } from "./strings";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  validateEmail = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{5,8})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: text });
      return false;
    }
  };

  sendMainMessage = (text) => {
    this.setState({ email: text });
    this.props.navigation.navigate("HomeScreen");
  };

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

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <View style={styles.bigCircle}></View>
            <View style={styles.smallCircle}></View>
            <View style={styles.centeredView}>
              <View style={styles.authBox}>
                <View style={styles.logoBox}>
                  <Image
                    source={require("../../../assets/principalLogo.png")}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.troubleLoginTitle}>
                  {strings.forgotPassword}
                </Text>

                <View style={styles.inputBox}>
                  <Text style={styles.forgotMail}>{strings.bodyMessage}</Text>
                  <Text style={styles.inputLabel}>{strings.email}</Text>

                  <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput
                      placeholder="info@luismendezdev.com"
                      placeholderTextColor="#666666"
                      style={styles.textInput}
                      onChangeText={(text) => this.validateEmail(text)}
                      autoCapitalize="none"
                      value={this.state.email}
                    />
                  </View>
                </View>

                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert(
                        strings.restorePassword,
                        `¿${this.state.email} ${strings.isCorrect}`,
                        [
                          { text: strings.tryAgain, style: "cancel" },
                          {
                            text: strings.yesSend,
                            onPress: (text) => this.sendMainMessage(text),
                          },
                        ]
                      )
                    }
                  >
                    <LinearGradient
                      colors={["#08d4c4", "#01ab9d"]}
                      style={styles.signIn}
                    >
                      <Text style={styles.textSign}>
                        {strings.restorePassword}
                      </Text>
                      <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
