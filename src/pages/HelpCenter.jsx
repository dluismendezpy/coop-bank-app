import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

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
            source={require("../../assets/principalLogo.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Centro de ayuda
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Olvidé mi contraseña</Text>
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
                  <Text style={styles.textSign}>Cambiar contraseña</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.text}>No tengo una cuenta</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignupScreen")}
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Regístrate</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.text}>¿Continuas teniendo problemas?</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("LoginScreen")}
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Solicitar ayuda</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  signIn: {
    width: 200,
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
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
