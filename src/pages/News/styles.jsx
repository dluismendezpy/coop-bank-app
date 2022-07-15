import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
	isLoadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	activityIndicator: {
		height: deviceHeight,
		width: deviceWidth,
		alignItems: "center",
		justifyContent: "center",
	},
	newsContainer: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 10,
		elevation: 4,
		width: deviceWidth - 30,
		marginVertical: 7,
	},
	newsImage: {
		height: 100,
		width: 100,
		borderRadius: 10,
	},
	newsTitle: {
		width: deviceWidth - 130,
		paddingLeft: 10,
		paddingTop: 5,
		fontWeight: "bold",
	},
	newsContent: {
		width: deviceWidth - 130,
		paddingLeft: 10,
		paddingTop: 5,
	},
	newsDate: {
		width: deviceWidth - 130,
		paddingLeft: 10,
		paddingTop: 5,
		fontStyle: "italic",
		fontWeight: "normal",
		fontSize: 10,
		alignItems: "flex-end",
		textAlign: "right",
	},
	textError: {
		color: "#c21a1a",
		fontWeight: "bold",
		fontSize: 15,
		marginTop: 50,
	},
});
