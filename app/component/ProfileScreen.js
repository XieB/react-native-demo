import React from "react";
import {Button} from "react-native";

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'ProfileScreen',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's Home"
                onPress={() =>
                    navigate('Home', { name: 'Jane' })
                }
            />
        );
    }
}