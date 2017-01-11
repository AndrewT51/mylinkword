import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export class Button extends Component{
  _handleNextPress(){
    this.props.navigator.push(this.nextRoute)
    console.log(this.props.info)
  }
  render(){
    this.nextRoute = {
      component: OtherRoute,
      title: this.props.name,
      data: this.props.data
    }
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this._handleNextPress.bind(this)}
        underlayColor='blue'
      >
        <Text style={styles.buttonText}>{this.props.name}</Text>
      </TouchableHighlight>
    )
  }
}