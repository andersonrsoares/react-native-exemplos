/**
 * Created by DevMaker on 3/9/17.
 */
import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={imagem} />
            </View>
        );
    }
}

export default Topo;