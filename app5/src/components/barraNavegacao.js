/**
 * Created by DevMaker on 3/10/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    BackAndroid
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', function() {
            this.props.navigator.pop();
            return true;
        }.bind(this));
    }

    render() {
        if (this.props.voltar) {
            return (
                <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
                    <TouchableHighlight
                        underlayColor={this.props.corDeFundo}
                        activeOpacity={0.3}
                        onPress={() => {
							this.props.navigator.pop();
						}}
                    >
                        <Image source={btnVoltar} />
                    </TouchableHighlight>
                    <Text style={styles.titulo}>ATM Consultoria</Text>
                </View>
            );
        }

        return (
            <View style={styles.barraTitulo}>
                <Text style={styles.titulo}>ATM Consultoria</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
