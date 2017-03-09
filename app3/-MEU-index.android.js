/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,Button,TouchableOpacity,Image} from 'react-native';

//Fomaracao de layout
const  Estilos = {
    principal:{
        paddingTop:40
    },
    botao:{
        backgroundColor:'#48BBEC',
        borderColor:'#1d8eb8',
        borderWidth:1,
        borderRadius:4,
        marginLeft:10,
        marginRight:10,
        marginTop:20
    },
    textoBotao:{
        fontSize:20,
        color:'#fff',
        fontWeight: 'bold',
        alignSelf:'center',
        padding:10
    }
};

//conceito de props e state
class MeuComponente extends Component{
    render(){
        return (
            <View>
              <Text>{this.props.propriedade1} Primeiro</Text>
              <Text>{this.props.teste}</Text>
            </View>
        );
    }
}

class app3_1 extends Component {
    constructor(props){
        super(props)
        this.state = { texto:'texto teste state'};
    }

    alteraTexto(){
        this.setState({ texto:'texto outro valor'})
    }

    render() {
        return (
            <View>
              <MeuComponente propriedade1='Banana' teste={this.state.texto}> </MeuComponente>
              <Button title='BOTAO' onPress={()=>{this.alteraTexto()}}></Button>
            </View>
        );
    }
}

class app3 extends Component {
    constructor(props){
        super(props)
        this.state = { escolhaUsuario:'',escolhaComputador:'',resultado:''};
    }

    jokenpo(escolhaUsuario){
        // alert(escolhaUsuario);
        //gera numero aleatorio 0,1,2
        var numAleatorio = Math.floor(Math.random()*3);
        var escolhaComputador = '';

        switch(numAleatorio){
            case 0:escolhaComputador='pedra'; break;
            case 1:escolhaComputador='papel'; break;
            case 2:escolhaComputador='tesoura'; break;
        };
        this.setState({escolhaUsuario:escolhaUsuario,escolhaComputador:escolhaComputador})
    }

    render() {
        return (
            <View>
              <Text>Escolha do computador {this.state.escolhaComputador}</Text>
              <Text>Escolha do usuario {this.state.escolhaUsuario}</Text>
              <Text>Resultado {this.state.resultado}</Text>

              <Button title='PEDRA' onPress={()=>{this.jokenpo('pedra')}}></Button>
              <Button title='PAPEL' onPress={()=>{this.jokenpo('papel')}}></Button>
              <Button title='TESOURA' onPress={()=>{this.jokenpo('tesoura')}}></Button>
            </View>
        );
    }
}

AppRegistry.registerComponent('app3', () => app3);