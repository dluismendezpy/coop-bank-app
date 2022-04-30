import { Dimensions, StyleSheet } from "react-native";
import { backColorPrincipal } from "../../Colors";
import { defaultAppFont } from "../../constValues";

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backColorPrincipal,
    height: height * 0.19,
    width: width,
  },
  textName: {
    fontSize: 20,
    fontFamily: defaultAppFont,
    fontStyle: "normal",
  },
});
