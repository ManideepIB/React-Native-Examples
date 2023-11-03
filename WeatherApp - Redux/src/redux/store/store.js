// import AsyncStorage from '@react-native-async-storage/async-storage';

import RootReducer from '../reducer/RootReducer';

const {configureStore} = require('@reduxjs/toolkit');

const {default: thunk} = require('redux-thunk');

// import persistReducer from 'redux-persist/es/persistReducer';
// import persistStore from 'redux-persist/es/persistStore';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   // whitelist: ['tasks'],
// };

// const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: RootReducer,
  middleware: [thunk],
});

export default store;
