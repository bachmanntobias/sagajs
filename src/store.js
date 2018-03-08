import {createSotre} from 'redux';

import createMiddle from 'redux-saga';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'


import reducer from '.reducers'
import mySaga from './sagas'