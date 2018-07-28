import React from "react";
import {Button, KeyboardAvoidingView, View,TextInput} from 'react-native';
export default class Keyboard extends React.Component{
    render() {
        return (
            <KeyboardAvoidingView>
                <TextInput></TextInput>
            </KeyboardAvoidingView>
        );
    }
}
