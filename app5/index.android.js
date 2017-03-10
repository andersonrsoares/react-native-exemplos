/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet
} from 'react-native';


import CenaPrincipal from './src/components/cenaPrincipal'
import CenaClientes from './src/components/cenaClientes';

import CenaContatos from './src/components/cenaContatos';
import CenaEmpresa from './src/components/cenaEmpresa';
import CenaServicos from './src/components/cenaServicos';


export default class app5 extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ id: 'principal' }}
            renderScene={(route, navigator) => {
                  //definir a cena com base na rota
					switch (route.id) {
						case 'principal':
							return (<CenaPrincipal navigator={navigator} />);

						case 'cliente':
							return (<CenaClientes navigator={navigator} />);

						case 'contato':
							return (<CenaContatos navigator={navigator} />);

						case 'empresa':
							return (<CenaEmpresa navigator={navigator} />);

						case 'servico':
							return (<CenaServicos navigator={navigator} />);
						default:
							return false;
					}
				}}
        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app5', () => app5);
