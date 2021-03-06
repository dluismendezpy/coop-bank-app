import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
	FeedScreen,
	HomeScreen,
	LoginScreen,
	NewsScreen,
	ClearScreen,
	HelpCenterScreen,
	ForgotPasswordScreen,
	SignupScreen,
	ContactScreen,
	MapScreen,
} from "./src/components/Navigation";
import Sidebar from "./src/components/Sidebar/Sidebar";
import { Entypo, Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { IS_LOGGED_IN } from "./src/constants/GobalValues";

const DrawerNavigator = createDrawerNavigator(
	!IS_LOGGED_IN
		// eslint-disable-next-line multiline-ternary
		? {
			HomeScreen: {
				screen: HomeScreen,
				navigationOptions: {
					title: "Inicio",
					drawerIcon: ({ tintColor }) => (
						<Feather name="home" size={16} color={tintColor} />
					),
				},
			},
			NewsScreen: {
				screen: NewsScreen,
				navigationOptions: {
					title: "Notícias",
					drawerIcon: ({ tintColor }) => (
						<Entypo name="news" size={16} color={tintColor} />
					),
				},
			},
			LoginScreen: {
				screen: LoginScreen,
				navigationOptions: {
					drawerLabel: () => null, // Remove to show Login tab in drawer navigation sidebar
					title: "Login",
					// Uncomment to show Login user in drawer navigation sidebar
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="user" size={16} color={tintColor} />
					// ),
				},
			},
			FeedScreen: {
				screen: FeedScreen,
				navigationOptions: {
					title: "Productos",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			HelpCenterScreen: {
				screen: HelpCenterScreen,
				navigationOptions: {
					title: "Help Center",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			ForgotPasswordScreen: {
				screen: ForgotPasswordScreen,
				navigationOptions: {
					title: "Forgot Password",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			SignupScreen: {
				screen: SignupScreen,
				navigationOptions: {
					title: "Register",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			MapScreen: {
				screen: MapScreen,
				navigationOptions: {
					title: "Map",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			ContactScreen: {
				screen: ContactScreen,
				navigationOptions: {
					title: "Contacto",
					drawerIcon: ({ tintColor }) => (
						<Feather name="phone" size={16} color={tintColor} />
					),
				},
			},
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		: {
			HomeScreen: {
				screen: HomeScreen,
				navigationOptions: {
					title: "Inicio",
					drawerIcon: ({ tintColor }) => (
						<Feather name="home" size={16} color={tintColor} />
					),
				},
			},
			NewsScreen: {
				screen: NewsScreen,
				navigationOptions: {
					title: "Notícias",
					drawerIcon: ({ tintColor }) => (
						<Entypo name="news" size={16} color={tintColor} />
					),
				},
			},
			LoginScreen: {
				screen: LoginScreen,
				navigationOptions: {
					drawerLabel: () => null, // Remove to show Login tab in drawer navigation sidebar
					title: "Login",
					// Uncomment to show Login user in drawer navigation sidebar
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="user" size={16} color={tintColor} />
					// ),
				},
			},
			FeedScreen: {
				screen: FeedScreen,
				navigationOptions: {
					title: "Productos",
					drawerIcon: ({ tintColor }) => (
						<Entypo name="menu" size={16} color={tintColor} />
					),
				},
			},
			HelpCenterScreen: {
				screen: HelpCenterScreen,
				navigationOptions: {
					title: "Help Center",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			ForgotPasswordScreen: {
				screen: ForgotPasswordScreen,
				navigationOptions: {
					title: "Forgot Password",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			SignupScreen: {
				screen: SignupScreen,
				navigationOptions: {
					title: "Register",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			MapScreen: {
				screen: MapScreen,
				navigationOptions: {
					title: "Map",
					drawerLabel: () => null,
					// drawerIcon: ({ tintColor }) => (
					//   <Entypo name="menu" size={16} color={tintColor} />
					// ),
				},
			},
			ContactScreen: {
				screen: ContactScreen,
				navigationOptions: {
					title: "Contacto",
					drawerIcon: ({ tintColor }) => (
						<Feather name="phone" size={16} color={tintColor} />
					),
				},
			},
			ClearScreen: {
				screen: ClearScreen,
				navigationOptions: {
					title: "Logout",
					drawerIcon: ({ tintColor }) => (
						<Entypo name="arrow-bold-left" size={16} color={tintColor} />
					),
				},
			},
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		  },
	{
		contentComponent: (props) => <Sidebar {...props} />,
		drawerWidth: Dimensions.get("window").width * 0.7,
		hideStatusBar: true,
		contentOptions: {
			activeBackgroundColor: "#acc5c3",
			activeTintColor: "#53115B",
			itemsContainerStyle: {
				marginTop: 16,
				marginHorizontal: 8,
			},
			itemStyle: {
				borderRadius: 4,
			},
		},
	},
);

export default createAppContainer(DrawerNavigator);
