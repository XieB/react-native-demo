import React,{Component} from 'react';
import { Slider,StatusBar,View,Switch } from 'react-native';

export default class SliderTest extends Component{
    render(){
        return (
            <View>
                <Slider></Slider>
                <StatusBar></StatusBar>
                <Switch
                    style={{marginRight: 80}}
                ></Switch>
            </View>
        );
    }
}