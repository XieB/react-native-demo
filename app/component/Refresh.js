import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    RefreshControl,
    FlatList
} from 'react-native'
import {getJokes} from "../service";

export default class Root extends Component{
    _keyExtractor = (item,key) => item.id;
    constructor(props){
        super(props)
        this.state={
            data:[],
            isRefreshing:false,
        }
    }
    
    getMoreList = () => {
        console.log('getMoreList');
        getJokes().then(res=>{
            if (res.status){
                this.setState({data: this.state.data.concat(res.data)});
            }else{
                alert('没数据啦');
            }
        });
    }

    getList = () => {
        this.setState({
            isRefreshing:true,
        })
        getJokes().then(res=>{
            if (res.status){
                this.setState({data: res.data,isRefreshing: false,});
            }else{
                alert('没数据');
            }
        });
    }
    render(){
        return (
            <FlatList
                style={styles.scrollStyle}
                data={this.state.data}
                renderItem={({item}) => <Text style={styles.item}>{item.content}</Text>}
                keyExtractor={this._keyExtractor}
                onEndReachedThreshold={0.1}
                onEndReached={this.getMoreList}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#bbb"
                        colors={['#ddd', '#0398ff']}
                        progressBackgroundColor='#333'
                    >
                    </RefreshControl>
                }>
            </FlatList>
        )
    }
    componentDidMount(){
        this.getList();
    }
    _onRefresh = () => {
        this.getList();
    }

}
class Item extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{this.props.data.content}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    scrollStyle:{
        backgroundColor:'#f3f3f3',
    },
    item:{
        flex:1,
        // height:40,
        padding: 10,
        // justifyContent:'center',
        // alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        marginHorizontal:1,
    },
    text:{
        fontSize:14,
    },
})