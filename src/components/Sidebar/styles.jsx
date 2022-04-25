import { StyleSheet } from "react-native";
import { backColorPrincipal } from "../../Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backColorPrincipal,
    padding: 16,
    paddingTop: 48,
  },
  containerWithoutLogin: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
    marginVertical: 8,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
  image: {
    width: 170,
    height: 170,
  },
});
