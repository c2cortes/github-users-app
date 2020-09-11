import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text} from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';

import SearchComponent from './src/containers/github/SearchComponent'

const store = configureStore();
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}>
          <View>
            <SearchComponent/>
          </View>
      </PersistGate>
    </Provider>
  );
}

