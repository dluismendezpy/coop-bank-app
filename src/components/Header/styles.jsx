import { Dimensions, StyleSheet } from "react-native";
import { BACK_COLOR_PRINCIPAL } from "../../constants/Colors";
import { DEFAULT_APP_FONT } from "../../constants/GobalValues";

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACK_COLOR_PRINCIPAL,
    height: height * 0.19,
    width: width,
  },
  textName: {
    fontSize: 20,
    fontFamily: DEFAULT_APP_FONT,
    fontStyle: "normal",
  },
});
