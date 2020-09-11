import React from 'react';
import { render } from 'react-dom';
import PepeCounterContainer from './containers/Counter'

import {counterApp} from './reducers'
import {createStore} from 'redux'
//El provider es lo que permite que la store este disponible en TODO el arbol de elementos
import {Provider} from 'react-redux'

const Store = createStore(counterApp)

render(
  //envolvemos toda la aplicacion. sin esto redux no puede acceder aunque uses la funcion connect
  <Provider store={Store}>
    <PepeCounterContainer />
  </Provider>,
  document.getElementById('root')
)