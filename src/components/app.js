import React, { Component } from 'react';
import {Rating} from 'semantic-ui-react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import getIcon from 'utils/getIcon';
/*
//import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)
*/
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Head</h1>
        <div>
          <h2>head</h2>
          <Rating 
          rating={1}
          //onRate={bookmark}
          icon={star}
          size={huge}
          />          
          <p>toes</p>
        </div>
      </div>
    );
  }
}
