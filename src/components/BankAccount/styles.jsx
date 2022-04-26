import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  loaderStyle: {
    flex: 1,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBalance: {
    flex: 1,
    flexDirection: "row",
  },
});