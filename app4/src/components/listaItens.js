/**
 * Created by DevMaker on 3/9/17.
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import Itens from './itens';

export default class ListaItens extends Component {
    render() {
        return (
            <View>
                <Itens/>
                <Itens/>
                <Itens/>
            </View>
        );
    }
}

