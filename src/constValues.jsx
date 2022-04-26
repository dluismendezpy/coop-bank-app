import {Platform} from "react-native";

export const urlEndPoint = "https://coopdgii.com/coopvirtual/App";
export const storageTokenKey = "@token:value";
export const firstNameUserKey = "@key:valueFirstName";
export const lastNameUserKey = "@key:valueLastName";
export let isLoggedIn = true;
console.disableYellowBox = true;
export const defaultAppFont = Platform.OS === "ios" ? "Helvetica" : "Sans-serif";
