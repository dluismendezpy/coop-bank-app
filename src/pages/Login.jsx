import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { urlEndPoint, storageTokenKey } from "../constValues";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    token: "",
    mensaje: "",
    success: false,
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  React.useEffect(() => {
    const interval = setInterval(async () => {
      await AsyncStorage.setItem(storageTokenKey, data.token);
    }, 10);
    return () => clearInterval(interval);
  });

  const { colors } = useTheme();

  const textInputChange = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  async function makeLogin(url, data) {
    return fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.success) {
          setData({
            success: resJson.success,
            token: resJson.data.token,
          });
          navigation.navigate("FeedScreen")
        } else {
          Alert.alert("Error!", "Usuario o contraseña incorrecto", [
            { text: "Reintentar" },
          ]);
        }
      })
  }

  const getUser = async function (username, password) {
    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert("Error!", "Usuario o contraseña no pueden estar en blanco", [
        { text: "Reintentar" },
      ]);
      return;
    }
    await makeLogin(
      `${urlEndPoint}/login`,
      `usuario=${username}&clave=${password}`
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: "flex-start",
          marginTop: 30,
          marginBottom: 15,
          marginLeft: 25,
        }}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome5 name={"bars"} size={30} color="#000000" />
      </TouchableOpacity>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>¡Inicia Sesion!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Usuario
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Tu Usuario"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              El usuario debe tener 3 caracteres.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Contraseña
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Tu Contraseña"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              La contraseña debe tener 3 caracteres.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity
          onPress={() =>
            Alert.alert("Centro de ayuda", "Problemas para iniciar sesion")
          }
        >
          <Text style={{ color: "#009387", marginTop: 15 }}>
            ¿Problemas para acceder?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => getUser(data.username, data.password)}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Acceder
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () =>
              Alert.alert("Token", await AsyncStorage.getItem(storageTokenKey))
            }
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 40,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
