import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9},
    { id: 2, nome: 'Ana', nota: 9.1},
    { id: 4, nome: 'Bia', nota: 5.4},
    { id: 5, nome: 'Claudia', nota: 5.4},
    { id: 6, nome: 'Roberto', nota: 5.4},
    { id: 7, nome: 'Rafael', nota: 5.4},
    { id: 8, nome: 'Guilherme', nota: 5.4},
    { id: 9, nome: 'Rebeca', nota: 5.4},
    { id: 10, nome: 'Tobias', nota: 5.4},
    { id: 11, nome: 'Marcos', nota: 5.4},
    { id: 12, nome: 'Mateus', nota: 5.4},
    { id: 13, nome: 'Rodrigo', nota: 5.4},
    { id: 14, nome: 'Gustavo', nota: 5.4},
    { id: 15, nome: 'Pedro', nota: 5.4},
    { id: 16, nome: 'Gabriel', nota: 5.4},
    { id: 17, nome: 'Maria', nota: 5.4},
    { id: 18, nome: 'Ingrid', nota: 5.4},
    { id: 19, nome: 'Yasmin', nota: 5.4},
]

const itemEstilo = {
    paddingHorizontal: 15,
    heigh: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    //Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({item}) => {
        return <Aluno {...item} />
    }
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem ={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}