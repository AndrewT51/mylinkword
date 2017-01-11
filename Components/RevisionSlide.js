import { Button } from './Button';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
// import Sound from 'react-native-sound';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export class RevisionSlide extends Component{
  render(){
    return (
      <View style= {styles.slide}>
        <Text style={styles.text}>
          The Spanish word for {this.props.word.en} is {'\n' + this.props.word.sp} {'\n' + this.props.word.desc}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
    backgroundColor: 'black'
  },
  text: {
    // color: '#fff',
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});