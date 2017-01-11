import details from '../Data'


import { Button } from './Button';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export class ButtonGroup extends Component{
  // constructor(props){
  //   super(props)
    
  // }
  render(){
    console.log(details)
    this.buttons = details.map((element,index)=> {
      console.log('El',this.props.width)
      return (
        <Button   
          navigator={this.props.navigator}
          key={index}
          name={element.title}
          data={element.dataFile}
          logic={this.props.logic}
          width={this.props.width}
          height={this.props.height}
        ></Button>
      )
    })
    return (
      <View style={styles.button}>
        {this.buttons}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flexDirection:'column',
    flex:1,
    height: 35,
    borderColor: 'red',
    borderStyle: 'dotted',
    borderWidth: 1,
  
  },
  buttonText: {
    // flex:1,
    fontSize: 25
  }
});

