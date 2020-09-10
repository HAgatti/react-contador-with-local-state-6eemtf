import React from 'react';
import { render } from 'react-dom';
import PepeCounterContainer from './containers/Counter'

import {counterApp} from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const Store = createStore(counterApp)

render(
  <Provider store={Store}>
    <PepeCounterContainer />
  </Provider>,
  document.getElementById('root')
)