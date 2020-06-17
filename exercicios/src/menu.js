import React from 'react';
import { CreateDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, { MegaSena } from './componentes/Multi';
import Contador from './componentes/contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/Validarprops';
import Evento from './componentes/evento';
import { Avo } from './componentes/ComunicacaoDireta';

export default CreateDrawerNavigator({
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano ={20}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Native' />
    },
    ParImpar: {
        screen: () => <ParImpar  numero={30} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto ='Flexível!!!' />
    }
}, {drawerWidth: 300})

