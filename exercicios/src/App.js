import React from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter } from './componentes/Multi';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Simples texto="Flexível"/>
        <ParImpar numero={31}></ParImpar>
        <Inverter texto="React Nativo!" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    }
  })