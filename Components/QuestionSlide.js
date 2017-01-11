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

export class QuestionSlide extends Component{
  constructor(props){
    super(props)
    this.state = { answer: '', showAnswer: false, answerStatus: 0 }
  }

  attachAnswer(evt,word){
    this.setState({answer: word.toUpperCase()})
  }

  submitAnswer(evt, word){ 
    if (evt.lang[0] === 'en'){
      evt.audio.play()
    }
    this.setState({
      showAnswer : true,
      answerStatus: evt[evt.lang[1]].toUpperCase() === this.state.answer ? 1 : 2
    })
  }

  inputBoxStyle(){
    switch(this.state.answerStatus){
      case 1:
        return styles.correct
        break;
      case 2:
        return styles.incorrect
        break;
      default:
        return styles.input
    }
  }
 

  render(){
    var word = this.props.word;
    return  (
      <View style= {styles.slide}>
        <Text style={styles.text}> {word[word.lang[0]]} </Text>
        <TextInput 
          style={this.inputBoxStyle()} 
          autoCapitalize = 'characters'
          value={this.state.answer} 
          editable = {!this.state.answerStatus}
          onChangeText={this.attachAnswer.bind(this, word)}
          autoCorrect={false}
          onSubmitEditing={this.submitAnswer.bind(this, word)}
        />
        <Text style={styles.text}> {this.state.showAnswer && word[word.lang[1]]} </Text>
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
  },

  input: {
    textAlign: 'center',
    backgroundColor:'white',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100,
    height:40, 
    borderWidth: 1, 
    borderColor: 'grey'
  },
  correct: {
    textAlign: 'center',
    backgroundColor:'#d0fcba',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100,
    height:40, 
    borderWidth: 1, 
    borderColor: 'grey'
  },
  incorrect: {
    textAlign: 'center',
    backgroundColor:'#fcd4d4',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
    marginRight: 100,
    height:40, 
    borderWidth: 1, 
    borderColor: 'grey'
  }
});
