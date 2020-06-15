import React from 'react';
import { Text } from 'react-native';

import padrao from '../estilo/padrao';

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <Text style ={padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1,60]
    const numeros = Array(props.numeros || 6)
}