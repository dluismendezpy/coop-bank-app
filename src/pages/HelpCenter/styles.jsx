import { StyleSheet } from "react-native";
import { DEFAULT_APP_FONT } from "../../constants/GobalValues";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	helpCenterText: {
		fontSize: 28,
		fontWeight: "bold",
		fontFamily: DEFAULT_APP_FONT,
		marginTop: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: DEFAULT_APP_FONT,
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
		fontFamily: DEFAULT_APP_FONT,
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
