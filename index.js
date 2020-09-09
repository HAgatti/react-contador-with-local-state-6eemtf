import React from 'react';
import { render } from 'react-dom';
import CounterContainer from './containers/Counter'

import {counterApp} from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const Store = createSto(counterApp)

render(
  <Provider store={Store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
)