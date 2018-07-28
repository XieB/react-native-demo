import React from "react";
import {Button,View,StyleSheet} from "react-native";

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.button}>
                    <Button
                        title="Go to Loading"
                        onPress={() =>
                            navigate('Loading', { name: 'Jane' })
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Jokes"
                        onPress={() =>
                            navigate('Joke')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Animate"
                        onPress={() =>
                            navigate('Animate')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Keyboard"
                        onPress={() =>
                            navigate('Keyboard')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Modal"
                        onPress={() =>
                            navigate('Modal')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Picker"
                        onPress={() =>
                            navigate('Picker')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Progress"
                        onPress={() =>
                            navigate('Progress')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Refresh"
                        onPress={() =>
                            navigate('Refresh')
                        }
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go to Slider"
                        onPress={() =>
                            navigate('Slider')
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    },
});