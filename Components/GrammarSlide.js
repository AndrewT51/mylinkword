import { Button } from './Button';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ScrollView
} from 'react-native';

export class GrammarSlide extends Component{
  render(){
    return (
      <View style={{flex:1}} >
        <ScrollView 
        contentContainerStyle= {styles.scrollSlide} 
        showsVerticalScrollIndicator={true}
        >
          <Text style={styles.heading}>{this.props.word.heading}</Text>
          <Text style={styles.grammarText}>{this.props.word.text}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 
  scrollSlide: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
    backgroundColor: 'black'
  },
  grammarText: {
    flex:1,
    // color: '#ffe',
    color: 'yellow',
    fontSize: 16,
    marginLeft: 8,
    marginRight:8,
    textAlign: 'left',
    marginBottom: 50
  },
  heading: {
    marginTop: 100,
    marginBottom: 10,
    // color: '#fff',
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});