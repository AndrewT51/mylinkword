import { 
  Button, 
  QuestionSlide, 
  GrammarSlide, 
  RevisionSlide 
} from './';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export class Section extends Component{
  constructor(props){
    super(props)
    var props = this.props.route;
    console.log('Props',props)
    this.arr = props.logic.generateFullData(props.data)
    console.log('Total',this.arr)
    this.state = {
      answerSlides: []
    }
    if(this.arr[0].audio){
      this.arr[0].audio.play() 
    }
  }

  determineSlideComponent(test){
    var slideComponents = this.arr.map((word, index)=>{
      if(word.hasOwnProperty('grammar')){
        return <GrammarSlide width={this.props.route.width} height={this.props.route.height} key={index} word={word}></GrammarSlide>  
      } else if (word.hasOwnProperty('answer')){
        return  <QuestionSlide width={this.props.route.width} height={this.props.route.height} word={word} key={index}></QuestionSlide>  
      }
      return <RevisionSlide width={this.props.route.width} height={this.props.route.height} test = {test} word={word} key={index}></RevisionSlide> 
    })
    return slideComponents
  }


  _onMomentumScrollEnd(evt,state, context){ 
    var word = this.children[state.index].props.word;
    if (word.audio && !(word.hasOwnProperty('answer') && word.lang[0] === 'en') ){
      this.children[state.index].props.word.audio.play()   
    }
    
    console.log('Propsies',this)
    console.log('Propsies',evt)
    console.log('Propsies',state)
  }
 
  render(){
    console.log('HEREERERR',this.props.route)
    return (
      <Swiper style={styles.wrapper}
        showsPagination={false}
        width={this.props.route.width}
        // width={667}
        height={this.props.route.height}
        // height={300}
        loop={false}
        bounces={true}
        index={0}
        onMomentumScrollEnd ={this._onMomentumScrollEnd}
        test = 'BOZO'
        // onTouchStartCapture ={this._stopSound}
        showsVerticalScrollIndicator={true}
        // horizontal={true}
        // showsButtons={true}
      > 
        {this.determineSlideComponent()}  
      </Swiper> 
    )
  }

}

const styles = StyleSheet.create({

  wrapper: {
    backgroundColor: 'black'

  },
  slide: {
    // flex: 1,
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
  grammarText: {
    // color: '#ffe',
    color: 'yellow',
    fontSize: 16,
    marginLeft: 4,
    marginRight:4,
    textAlign: 'left'
  },
  heading: {
    marginTop: 30,
    marginBottom: 10,
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

  }
});


