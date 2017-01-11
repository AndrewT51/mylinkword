import { ButtonGroup } from './'
import logic from '../Logic/index'
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class App extends Component {
  // static propTypes = {
  //     // title: PropTypes.string.isRequired,
  //     navigator: PropTypes.object.isRequired
  //   }

  render() {
    console.log('W',this.props.width)
    console.log('H',this.props.height)
    return (   
      <View style={styles.container} >
        <ButtonGroup 
          navigator={this.props.navigator}
          logic = {this.props.logic}
          width = {this.props.width}
          height = {this.props.height}
        ></ButtonGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor: '#F5FCFF',
    backgroundColor: 'black',
  }
});