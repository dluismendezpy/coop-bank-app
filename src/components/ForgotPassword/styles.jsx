import { Dimensions, Platform, StyleSheet } from "react-native";
import { backColorPrincipal } from "../../Colors";
import {defaultAppFont} from "../../constValues";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  bigCircle: {
    width: height * 0.7,
    height: height * 0.7,
    backgroundColor: backColorPrincipal,
    borderRadius: 100,
    position: "absolute",
    right: width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: height * 0.4,
    height: height * 0.4,
    backgroundColor: backColorPrincipal,
    borderRadius: 100,
    position: "absolute",
    bottom: width * -0.2,
    right: width * -0.3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 90
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
    fontFamily: defaultAppFont
  },
  inputBox: {
    marginTop: 10,
  },
  forgotMail: {
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: defaultAppFont
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    paddingTop: 20,
    fontFamily: defaultAppFont
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
    fontFamily: defaultAppFont
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
    width: 185,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontFamily: defaultAppFont
  },
});
