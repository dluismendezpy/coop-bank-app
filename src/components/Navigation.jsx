import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Login from "../pages/Login/Login";
import Feed from "../pages/Feed";
import ClearData from "../helpers/ClearData";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Signup from "../pages/Signup/Signup";
import Contact from "../pages/Contact/Contact";
import Map from "../pages/Contact/Map";

const HomeScreen = ({ navigation }) => <Home navigation={navigation} />;
const NewsScreen = ({ navigation }) => <News navigation={navigation} />;
const LoginScreen = ({ navigation }) => <Login navigation={navigation} />;
const FeedScreen = ({ navigation }) => <Feed navigation={navigation} />;
const ClearScreen = ({ navigation }) => <ClearData navigation={navigation} />;
const HelpCenterScreen = ({ navigation }) => (
	<HelpCenter navigation={navigation} />
);
const ForgotPasswordScreen = ({ navigation }) => (
	<ForgotPassword navigation={navigation} />
);
const SignupScreen = ({ navigation }) => <Signup navigation={navigation} />;
const ContactScreen = ({ navigation }) => <Contact navigation={navigation} />;
const MapScreen = ({ navigation }) => <Map navigation={navigation} />;

export {
	HomeScreen,
	NewsScreen,
	LoginScreen,
	FeedScreen,
	ClearScreen,
	HelpCenterScreen,
	ForgotPasswordScreen,
	SignupScreen,
	ContactScreen,
	MapScreen,
};
