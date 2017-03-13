/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import  firebase from 'firebase';



export default class app7 extends Component {


    componentWillMount(){
        //Initialize Firebase
        var config = {
            apiKey: "AIzaSyBLeHoukOL2lVMZwGHM3VL1ZTRho4JcLJw",
            authDomain: "fir-react-ba886.firebaseapp.com",
            databaseURL: "https://fir-react-ba886.firebaseio.com",
            storageBucket: "fir-react-ba886.appspot.com",
            messagingSenderId: "613681428871"
        };
        firebase.initializeApp(config);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
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

AppRegistry.registerComponent('app7', () => app7);
