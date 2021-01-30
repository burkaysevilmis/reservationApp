import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Root from './src/Root';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import globalReducers from './store/reducers/globalReducers';
const rootReducer = combineReducers({
  global: globalReducers,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}


