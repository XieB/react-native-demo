import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {getJokes} from "../service";

export default class FlatListBasics extends Component {
    _keyExtractor = (item,key) => item.id;
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            page: 1,
        };
        this.getJokes = this.getJokes.bind(this);
    }
    componentDidMount(){
        this.getJokes();
    }

    getJokes(){
        getJokes(this.state.page).then(res=>{
            this.setState({dataSource: res.data});
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={styles.item}>{item.content}</Text>}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth:1,
        borderColor:'#eee',
        borderStyle:'dashed',
    },
})