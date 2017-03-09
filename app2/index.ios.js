/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
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
    // principalfull:{
    //     flex:1,
    //     backgroundColor:'cornflowerblue'
    // },
    // conteudo1:{
    //     flex:1,
    //     backgroundColor:'brown'
    // },
    // conteudo2:{
    //     flex:1,
    //     backgroundColor:'yellowgreen'
    // },
    // conteudo3:{
    //     flex:1,
    //     backgroundColor:'orangered'
    // },
    // estiloView:{
    //     backgroundColor: 'skyblue',
    //     height:300,
    //     justifyContent:'center',
    //     alignItems:'flex-end'
    // },
    // estiloTexto:{
    //     fontSize:20,
    //     backgroundColor: '#08509b'
    // },
    // estiloTextoShadow:{
    //     fontSize:20,
    //     backgroundColor: '#08509b',
    //     margin:30,
    //     shadowColor:'#000000',
    //     shadowOffset:{
    //         width:0,
    //         height:5
    //     },
    //     shadowOpacity:1,
    //
    // },
    // estiloTextoFonte:{
    //     fontSize:20,
    //     backgroundColor: '#08509b',
    //     margin:30,
    //     color:'#fff',
    //     //fontSize: 'italic',
    //   //  fontWeight:'bold',
    //     fontWeight:'300',//100 a 900
    //     textAlign:'right'
    // }
    //https://facebook.github.io/react-native/docs/view.html#style
};

const App =  ()=> {
    const {principal,botao,textoBotao} = Estilos;
    return (
        <View style={principal}>
            <Image  source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{ width:200, height:200}}/>
            <Image source={require('./imgs/uvas.png')}/>
            <TouchableOpacity style={botao}>
                <Text style={textoBotao}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    )
};

// const App =  ()=> {
//     const {principal,conteudo1,conteudo2,conteudo3} = Estilos;
//     return (
//         <View style={principal}>
//             <Text style={conteudo1}>Topo</Text>
//             <Text style={conteudo2}>Conteudo</Text>
//             <Text style={conteudo3}>Rodape</Text>
//         </View>
//     )
// };

AppRegistry.registerComponent('app2', () => App);
