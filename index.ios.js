import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


export default class App extends Component {
  render() {
    return (
      <Header headerText={'Albums'} />
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('albums', () => App);