import React,{Component} from 'react'
import { WebView, View, Text,StyleSheet } from 'react-native'

export default class Web extends Component{
    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{height: '50%'}}>
                    <WebView
                        mixedContentMode='compatibility'
                        source={{uri: 'http://www.baidu.com'}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                    />
                </View>
                <Text>这是文字</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    webView: {
        height: 10,
        // backgroundColor: '#333'
    },
})