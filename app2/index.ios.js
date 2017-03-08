/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry, StyleSheet, Text, View,Button} from 'react-native';

//Fomaracao de layout
const  Estilos = {
    estiloTexto:{
        fontSize:20,
        backgroundColor: '#08509b'
    }
};

const App =  ()=> {
    return (
        <View>
          <Text style={Estilos.estiloTexto}>Gerador de NUmero APP</Text>
        </View>
    )
};

AppRegistry.registerComponent('app2', () => App);
