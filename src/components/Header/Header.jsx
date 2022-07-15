import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	FIRST_NAME_USER_KEY,
	LAST_NAME_USER_KEY,
} from "../../constants/GobalValues";
import { styles } from "./styles";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { firstName: "", lastName: "" };
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			AsyncStorage.getItem(FIRST_NAME_USER_KEY)
				.then((firstName) => {
					if (firstName) {
						this.setState({ firstName: firstName });
					}
				})
				.catch((err) => console.log(err.message));
			AsyncStorage.getItem(LAST_NAME_USER_KEY)
				.then((lastName) => {
					if (lastName) {
						this.setState({ lastName: lastName });
					}
				})
				.catch((err) => console.log(err.message));
		}, 10);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textName}>
					Hola, {`${this.state.firstName} ${this.state.lastName}`}!
				</Text>
			</View>
		);
	}
}
