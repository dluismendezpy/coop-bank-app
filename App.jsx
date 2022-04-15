import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  HomeScreen,
  NewsScreen,
  LoginScreen,
} from "./src/components/Navigation";
import Sidebar from "./src/components/Sidebar";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const DrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      },
    },
    NewsScreen: {
      screen: NewsScreen,
      navigationOptions: {
        title: "News",
        drawerIcon: ({ tintColor }) => (
          <Entypo name="news" size={16} color={tintColor} />
        ),
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login",
        drawerIcon: ({ tintColor }) => (
          <Entypo name="user" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <Sidebar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.75,
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
