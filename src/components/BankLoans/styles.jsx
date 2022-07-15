import { StyleSheet } from "react-native";
import { DEFAULT_APP_FONT } from "../../constants/GobalValues";

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#53115B",
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  accountTypeText: {
    fontSize: 14,
    fontFamily: DEFAULT_APP_FONT,
  },
  loaderStyle: {
    flex: 1,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBalance: {
    flexDirection: "row",
  },
  balanceTextStyle: {
    fontFamily: DEFAULT_APP_FONT,
    fontSize: 14,
    marginTop: 5,
  },
});
