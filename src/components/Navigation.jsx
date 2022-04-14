import React from "react";
import Home from "../pages/Home";
import News from "../pages/News";

export const HomeScreen = ({ navigation }) => <Home navigation={navigation} />;
export const NewsScreen = ({ navigation }) => <News navigation={navigation} />;
