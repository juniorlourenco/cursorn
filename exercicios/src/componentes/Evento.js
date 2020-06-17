import React, { Component } from 'react';
import { View , Text, TextInput } from 'react-native';
import padrao from '../estilo/padrao';

export default class Evento extends Component {
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({texto})
    }

    render() {
        return (
          <View>
              <Text style={padrao.fonte40}>{this.state.texto}</Text>
              <TextInput value={this.state.texto}
                         style={padrao.input}
                         onChangeText={this.alterarTexto} />
            </View>             
        )
    }
}
