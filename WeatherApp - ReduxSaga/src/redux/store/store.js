// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducer/RootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
