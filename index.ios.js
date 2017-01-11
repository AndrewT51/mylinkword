import React, { Component } from 'react';
import logic from './Logic'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Dimensions,
  // Orientation
} from 'react-native';
import { 
  Button, 
  App, 
  ButtonGroup 
} from './Components'
import Orientation from 'react-native-orientation'

export default class LinkWord extends Component {
  constructor(props){
    super(props)
    this.state = { 
      logic: logic, 
      height: Dimensions.get('window').height, 
      width: Dimensions.get('window').width 
    }
  }

  componentDidMount(){
    Orientation.addOrientationListener(this._orientationDidChange.bind(this));
    // Orientation.unlockAllOrientations()
    Orientation.lockToPortrait();
  }

  _orientationDidChange(orientation){
    console.log('PROPS',this.props)
    var temp = this.state.height
    this.setState({
      height: this.state.width,
      width: temp
    })

    console.log('Width: ' + this.state.width)
    console.log('Height: ' + this.state.height)
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: 'Main Menu',
          passProps: {
            width: this.state.width,
            height: this.state.height,
            logic: this.state.logic
          }
        }} 
        style={{flex: 1}}  
      />
    );
  }
}

AppRegistry.registerComponent('myLinkword', () => myLinkword);
