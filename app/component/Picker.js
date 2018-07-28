import React, { Component } from "react";
import { Picker,View,Button } from "react-native";

export default class PickerScreen extends Component{
    state = {
        language: '',
    }
    render(){
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="javascript" />
                </Picker>
                <Button
                    onPress={()=>console.log(this.state)}
                    title="点击"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}