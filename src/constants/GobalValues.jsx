import { Platform } from "react-native";

const URL_ENDPOINT = "https://coopdgii.com/coopvirtual/App";
const STORAGE_TOKEN_KEY = "@token:value";
const FIRST_NAME_USER_KEY = "@key:valueFirstName";
const LAST_NAME_USER_KEY = "@key:valueLastName";
const IS_LOGGED_IN = true;
console.disableYellowBox = true;
const DEFAULT_APP_FONT = Platform.OS === "ios" ? "Helvetica" : "Sans-serif";

export {
	URL_ENDPOINT,
	STORAGE_TOKEN_KEY,
	FIRST_NAME_USER_KEY,
	LAST_NAME_USER_KEY,
	IS_LOGGED_IN,
	DEFAULT_APP_FONT,
};
