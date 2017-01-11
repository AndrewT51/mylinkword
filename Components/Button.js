
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
// import {OtherRoute} from './OtherRoute'
import {Section} from './Section'


export class Button extends Component{
  _handleNextPress(){
    this.props.navigator.push(this.nextRoute)
  }
  render(){
    console.log('Data',this.props.logic)
    this.nextRoute = {
      component: Section,
      title: this.props.name,
      data: this.props.data,
      logic: this.props.logic,
      width: this.props.width,
      height: this.props.height
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

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection:'row',
    height: 45,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    margin: 3
  },
  buttonText: {
    fontSize: 25
  }
});