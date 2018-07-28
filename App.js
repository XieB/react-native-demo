import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Root from './app/root';

export default class Joke extends Component {
    render() {
        return <Root></Root>;
    }
}
AppRegistry.registerComponent('Joke', () => Joke);