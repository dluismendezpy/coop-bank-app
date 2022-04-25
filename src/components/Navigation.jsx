import React from "react";
import Home from "../pages/Home";
import News from "../pages/News/News";
import Login from "../pages/Login";
import signup from "../pages/Signup/Signup";
import Feed from "../pages/Feed";
import ClearData from "../Helpers/ClearData";
import HelpCenter from "../pages/HelpCenter";
import ForgotPassword from "./ForgotPassword";
import Signup from "../pages/Signup/Signup";

export const HomeScreen = ({ navigation }) => <Home navigation={navigation} />;
export const NewsScreen = ({ navigation }) => <News navigation={navigation} />;
export const LoginScreen = ({ navigation }) => (
  <Login navigation={navigation} />
);
export const FeedScreen = ({ navigation }) => <Feed navigation={navigation} />;
export const ClearScreen = ({ navigation }) => (
  <ClearData navigation={navigation} />
);
export const HelpCenterScreen = ({ navigation }) => (
  <HelpCenter navigation={navigation} />
);
export const ForgotPasswordScreen = ({ navigation }) => (
  <ForgotPassword navigation={navigation} />
);
export const SignupScreen = ({ navigation }) => (
  <Signup navigation={navigation} />
);
