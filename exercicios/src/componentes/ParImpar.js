import React from 'react';
import { View, Text, ViewPagerAndroidBase } from 'react-native';

import padrao from '../estilo/padrao';
import If from './If';

function parOuImpar (num) {

const v = num % 2 == 0 ? 'Par' : 'Impar'
return <Text style={padrao.ex}>{v}</Text>
}
export default props =>
<View>
    {parOuImpar(props.numero)}
    {/*
    */}
</View>
