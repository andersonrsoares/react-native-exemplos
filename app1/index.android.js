/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//common js
//var React = require('react');
//destruct assingment exemplo(atribuicoes)
//var {Text,View,Button,AppRegistry} =require('react-native');

//import ecmascript

import React from 'react';
import {Text,View,Button,AppRegistry} from 'react-native';


//arrow function
const geraNumero = ()=> {
     var num_aleatorio = Math.random();
    num_aleatorio = Math.floor(num_aleatorio * 10);
     alert(num_aleatorio);
};

const App =  ()=> {
     return (
          <View>
               <Text>Gerador de NUmero APP</Text>
               <Button
                    title="Gerar numero randomico"
                    onPress={geraNumero}
               />
          </View>
     )
};

AppRegistry.registerComponent('app1',()=> {
     return App;
});

/*
 import React, { Component } from 'react';
 import {
 AppRegistry,
 StyleSheet,
 Text,
 View
 } from 'react-native';

export default class app1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app1', () => app1);
*/