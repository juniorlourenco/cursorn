import React from 'react';
import { Text } from 'react-native';

import padrao from '../estilo/padrao';

export default (props) => 
     <Text style={padrao.ex}>Arrow: {props.texto}</Text>
