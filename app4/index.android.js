/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/listaItens'



export default class app4 extends Component {

    constructor(props){
      super(props);
      console.log('construindo aplicacao');
    }

    componentWillMount(){
        console.log('fazer alguma coisa antes de renderizar');
    }

    componentDidMount(){
      console.log('fazer alguma coisa depois de renderizar');
    }


    render() {
        console.log('objeto é renderizado');
      return (
        <ListaItens/>
      );
  }
}


AppRegistry.registerComponent('app4', () => app4);
