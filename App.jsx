import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  FeedScreen,
  HomeScreen,
  LoginScreen,
  NewsScreen,
} from "./src/components/Navigation";
import Sidebar from "./src/components/Sidebar";
import { Entypo, Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageTokenKey } from "./src/constValues";

let isLoggedIn = true;

const getToken = () => {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      AsyncStorage.getItem(storageTokenKey).then((tok) => setToken(tok));
    }, 20);
    return () => clearInterval(interval);
  });

  if (token.length > 0) {
    isLoggedIn = true;
  }
};

// 1. Test if isLoggedIn change after Login
const DrawerNavigator = createDrawerNavigator(
  !isLoggedIn
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
            title: "Feed",
            drawerLabel: () => null,
            // drawerIcon: ({ tintColor }) => (
            //   <Entypo name="menu" size={16} color={tintColor} />
            // ),
          },
        },
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
            title: "Feed",
            drawerIcon: ({ tintColor }) => (
              <Entypo name="menu" size={16} color={tintColor} />
            ),
          },
        },
      },
  {
    contentComponent: (props) => <Sidebar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.7,
    hideStatusBar: true,
    contentOptions: {
      activeBackgroundColor: "rgba(121,118,212,0.2)",
      activeTintColor: "#53115B",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 4,
      },
    },
  }
);

export default createAppContainer(DrawerNavigator);
