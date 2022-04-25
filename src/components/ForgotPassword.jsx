import React from "react";
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Text,
  TextInput,
  Dimensions,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { backColorPrincipal } from "../Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

export default class ForgotPassword extends React.Component {
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

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <View style={styles.bigCircle}></View>
            <View style={styles.smallCircle}></View>
            <View style={styles.centeredView}>
              <View style={styles.authBox}>
                <View style={styles.logoBox}>
                  <Image
                    source={require("../../assets/ForgotPassword.png")}
                    style={{ width: 100, height: 100, borderRadius: 90 }}
                  />
                </View>
                <Text style={styles.troubleLoginTitle}>
                  ¿Olvidaste tu contraseña?
                </Text>

                <View style={styles.inputBox}>
                  <Text style={styles.forgotMail}>
                    Te enviaremos un correo electrónico. Sigue los pasos para
                    restablecer tu contraseña
                  </Text>
                  <Text style={styles.inputLabel}>Correo Electrónico</Text>

                  <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput
                      placeholder="info@luismendezdev.com"
                      placeholderTextColor="#666666"
                      style={styles.textInput}
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert(
                        "Restablecimiento",
                        "Correo electrónico enviado."
                      )
                    }
                  >
                    <LinearGradient
                      colors={["#08d4c4", "#01ab9d"]}
                      style={styles.signIn}
                    >
                      <Text style={styles.textSign}>Restablecer</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  bigCircle: {
    width: Dimensions.get("window").height * 0.7,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: backColorPrincipal,
    borderRadius: 100,
    position: "absolute",
    right: Dimensions.get("window").width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.4,
    height: Dimensions.get("window").height * 0.4,
    backgroundColor: backColorPrincipal,
    borderRadius: 100,
    position: "absolute",
    bottom: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.3,
  },
  centeredView: {
    width: "100%",
    height: "15%",
  },
  authBox: {
    width: "90%",
    backgroundColor: "#fafafa",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
      shadowOpacity: 0.25,
      shadowRadius: 3.34,
      elevation: 5,
    },
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 1000,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: -50,
    marginBottom: -50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
  },
  troubleLoginTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    marginTop: 10,
  },
  forgotMail: {
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    paddingTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#dfe4ea",
    borderRadius: 4,
    paddingHorizontal: 10,
    borderColor: "black",
  },
  loginButton: {
    backgroundColor: backColorPrincipal,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 155,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
