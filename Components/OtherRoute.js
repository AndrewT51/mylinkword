// import AnimalData from '../Data/Animals'
import { Button } from './Button';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export class OtherRoute extends Component{
  constructor(props){
    super(props)
    this.revision = [];
    this.counter = 0;
    this.state = {
      word:'',
      stuff:[]
    }
  }

  componentDidMount(){
   
    this.setState({
      stuff: this.splitData()
    })  

  }

  attachAnswer(evt,word){
    console.log(evt)
    console.log('word',word)
    this.answer = word.toUpperCase()
  }

  showAnswer(evt, word){
    console.log('evt',evt)
    console.log('word',word)
    // this.reveal = evt.sp
    this.setState({word: evt.en}, function(){
      console.log('State',this.state)
      
    })
    console.log('this.reveal',this.reveal)
    console.log('word.sp',evt.sp)
  }

  composeForRevision(){
      console.log('State',this.state)
      console.log('Revision',this.revision)
      var spanishToEnglish = this.revision.map((word, index) => (
        <View style={styles.slide}
          key={this.counter++}
        >
          <Text style={styles.text}> {word.sp} </Text>
          <TextInput 
            style={styles.input}  
            value={word.answer} 
            onChangeText={this.attachAnswer.bind(this, word)}
            autoFocus={true}
            autoCorrect={false}
            onSubmitEditing={this.showAnswer.bind(this, word)}
          />
          <Text style={styles.text}> {this.state.word} </Text>

        </View>
      )).reverse()
      var englishToSpanish = this.revision.map((word, index) => (
        <View style={styles.slide}
          key={this.counter ++}
        >
          <Text style={styles.text}> {word.en} </Text>
          <TextInput 
            style={styles.input} 
            value={word.answer} 
            onChangeText={this.attachAnswer.bind(this, word)}
            autoFocus={true}
            autoCorrect={false}
            onSubmitEditing={this.showAnswer.bind(this, word)}
          />
          <Text style={styles.text}> {this.state.word} </Text>
        </View>
      )).reverse()
      this.revision = []
      return spanishToEnglish.concat(englishToSpanish)
    }
    splitData(){
      var data = this.props.route.data
      console.log('Data',data)
      var arrayOfArrays = [[]];
      data.forEach((datum) => {
        arrayOfArrays[ arrayOfArrays.length - 1 ].push(datum)
        if ( datum.initiateRevision ){
          arrayOfArrays.push([])
        }
      })
      return arrayOfArrays.reduce((acc,arr)=>{

        return acc.concat(this.slides(arr))
      },[])
    }
    slides(arr){
      var componentisedData = arr.map((word, index) => {
        return <View style={styles.slide}
          key={this.counter++}
        >
          {
            (function(){
              if(word.hasOwnProperty('grammar')){
                return <View>
                  <Text style={styles.heading}>{word.heading}</Text>
                  <Text style={styles.grammarText}>{word.text}</Text>
                  </View>
              } 
              this.revision.push(word)
              return <Text style={styles.text}>The Spanish word for {word.en} is {'\n' + word.sp} {'\n' + word.desc}</Text>
            }.bind(this)())
          }   
        </View>
      })
      return componentisedData.concat(this.composeForRevision())
    }
  render(){

    return (
      <Swiper style={styles.wrapper}
        showsPagination={false}
        loop={false}
        bounces={true}
        index={0}
        // horizontal={true}
        // showsButtons={true}
      > 
          {this.state.stuff} 
      </Swiper>
    )
  }
}


const styles = StyleSheet.create({

  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  grammarText: {
    color: '#ffe',
    fontSize: 16,
    marginLeft: 4,
    marginRight:4,
    textAlign: 'left'
  },
  heading: {
    marginTop: 30,
    marginBottom: 10,
    color: '#fff',
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

