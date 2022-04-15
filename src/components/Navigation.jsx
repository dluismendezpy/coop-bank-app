import React from "react";
import Home from "../pages/Home";
import News from "../pages/News";
import Login from "../pages/Login";

export const HomeScreen = ({ navigation }) => <Home navigation={navigation} />;
export const NewsScreen = ({ navigation }) => <News navigation={navigation} />;
export const LoginScreen = ({ navigation }) => <Login navigation={navigation} />;
