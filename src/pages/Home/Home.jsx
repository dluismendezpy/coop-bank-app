import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { backColorPrincipal } from "../../Colors";
import { styles } from "./styles";
import { strings } from "./strings";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
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
        <StatusBar
          backgroundColor={backColorPrincipal}
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <ImageBackground
            source={require("../../../assets/Login/image.jpg")}
            resizeMode="cover"
            style={styles.imageBackground}
            imageStyle={{ opacity: 0.1 }}
          >
            <Text style={styles.title}>¡{strings.welcome}!</Text>
            <Text style={styles.text}>{strings.subTitle}</Text>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("LoginScreen")}
              >
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>{strings.access}</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animatable.View>
      </View>
    );
  }
}
