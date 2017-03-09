/**
 * Created by DevMaker on 3/9/17.
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import axios from 'axios';
import Itens from './itens';

export default class ListaItens extends Component {


    constructor(props){
        super(props);
        this.state = {listaItens:[]};
    }

    componentWillMount(){
        //
        axios.get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
            .then(response => {
                console.log(response);
                this.setState( {listaItens:response.data});
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                    {this.state.listaItens.map(item=> { return(<Text key={item.titulo}>{item.titulo}</Text>);})
                }
            </View>
        );
    }
}

